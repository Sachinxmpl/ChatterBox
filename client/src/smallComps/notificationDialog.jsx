import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { sampleNotifications } from "../constants/sampleNotification";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const StyledListItem = styled(ListItem)({
  backgroundColor: "#f9f9f9",
  borderRadius: "8px", // Hardcoded border radius
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)", // Hardcoded shadow
  padding: "16px",
  marginBottom: "16px",
});

const StyledAvatar = styled(Avatar)({
  width: "48px",
  height: "48px",
});

const StyledButton = styled(Button)({
  margin: "4px",
});

const NotificationItem = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    if (accept) {
      console.log(`Accepted ${_id}`);
    } else {
      console.log(`Rejected ${_id}`);
    }
  };

  return sampleNotifications.map((notification, index) => {
    const { sender, _id } = notification;
    return (
      <StyledListItem key={_id + index}>
        <Stack direction="row" alignItems="center" spacing={2} width="100%">
          <StyledAvatar />
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {`${sender.name} sent you a friend request`}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <StyledButton
              variant="text"
              color="primary"
              onClick={() => friendRequestHandler({ _id, accept: true })}
            >
              Accept
            </StyledButton>
            <StyledButton
              variant="text"
              color="error"
              onClick={() => friendRequestHandler({ _id, accept: false })}
            >
              Reject
            </StyledButton>
          </Stack>
        </Stack>
      </StyledListItem>
    );
  });
};

function NotificationDialog({ handleClose }) {
  return (
    <Dialog open onClose={handleClose}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth="35rem" width="100%">
        <DialogActions sx={{ justifyContent: "flex-end", padding: 0 }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "bold", paddingBottom: 2 }}
        >
          Notifications
        </DialogTitle>
        {sampleNotifications.length > 0 ? (
          <NotificationItem />
        ) : (
          <Typography variant="h6" align="center">
            No Notifications
          </Typography>
        )}
      </Stack>
    </Dialog>
  );
}

export default NotificationDialog;
