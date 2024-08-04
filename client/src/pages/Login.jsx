import React from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VisuallyHiddenInput } from "../components/styled/VisuallyHiddenInput";
import { usernameValidator } from "../utils/validators";
import { useInputValidation, useStrongPassword, useFileHandler } from "6pp";
import { useState } from "react";


function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword("");
  const email = useInputValidation("");
  const bio = useInputValidation("");

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogin = (e)=>{
    e.preventDefault()
  }
  const handleSignup = (e)=>{
    e.preventDefault()
  }

  const avatar = useFileHandler("single");
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}

              onSubmit={handleLogin}
            >
              <TextField
                sx={{ mt: 2 }}
                id="username-login"
                label="Username"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                sx={{ mt: 2 }}
                id="password-login"
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>

              <Typography textAlign="center" m={"1rem"}>
                {" "}
                OR{" "}
              </Typography>

              <Button
                onClick={toggleLogin}
                variant="text"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}

              onSubmit={handleSignup}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                 {avatar.error && (
                <Typography color="error" variant="caption">
                  {avatar.error}
                </Typography>
              )}

                <IconButton
                  sx={{ position: "absolute", bottom: 0, right: 0 }}
                  component="label"
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput
                    type="file"
                    onChange={avatar.changeHandler}
                  />
                </IconButton>
              </Stack>

              <TextField
                sx={{ mt: 2 }}
                id="username-signup"
                value={username.value}
                onChange={username.changeHandler}
                label="Username"
                variant="outlined"
                required
                fullWidth
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                sx={{ mt: 2 }}
                id="email-signup"
                type="email"
                label="Email"
                variant="outlined"
                required
                fullWidth
                value={email.value}
                onChange={email.changeHandler}
              />
              <TextField
                sx={{ mt: 2 }}
                id="bio-signup"
                type="text"
                label="Bio"
                variant="outlined"
                fullWidth
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                sx={{ mt: 2 }}
                id="password-signup"
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Sign Up
              </Button>

              <Typography textAlign="center" m={"1rem"}>
                {" "}
                OR{" "}
              </Typography>

              <Button
                onClick={toggleLogin}
                variant="text"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
