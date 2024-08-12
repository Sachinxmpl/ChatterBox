import { Typography } from "@mui/material";
import React, { memo } from "react";
import moment from "moment";
import { Box } from "@mui/system";
import { fileFormat } from "../lib/feature";
import RenderAttachements from "../shared/renderAttachements";

function MessageComponent({ message, user }) {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender._id === user._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      key={Math.random() * Math.random()}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#f0f0f0" : "#e0e0e0",
        color: "black",
        borderRadius: "16px",
        borderTopRightRadius: sameSender ? "0px" : "16px",
        borderTopLeftRadius: sameSender ? "16px" : "0px",
        padding: "12px 16px",
        maxWidth: "60%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "relative",
        marginBottom: "8px",
      }}
    >
      {!sameSender && (
        <Typography
          color={"#2694ab"}
          fontWeight={"600"}
          variant="caption"
          style={{ marginBottom: "4px", display: "block" }}
        >
          {sender.name}
        </Typography>
      )}

      {content && (
        <Typography
          sx={{
            margin: "4px 0",
            paddingBottom: "8px",
            borderBottom: attachments.length > 0 ? "1px solid #d0d0d0" : "none",
            lineHeight: "1.5",
            wordBreak: "break-word",
          }}
        >
          {content}
        </Typography>
      )}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={index} sx={{ marginTop: "8px" }}>
              <a
                href={url}
                download={false}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <RenderAttachements file={file} url={url} />
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"#8c8c8c"} sx={{ marginTop: "8px", display: "block" }}>
        {timeAgo}
      </Typography>

      <div
        style={{
          content: "''",
          position: "absolute",
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderWidth: sameSender
            ? "8px 0 8px 8px"
            : "8px 8px 8px 0",
          borderColor: sameSender
            ? "transparent transparent transparent #f0f0f0"
            : "transparent #e0e0e0 transparent transparent",
          top: "12px",
          right: sameSender ? "-8px" : "auto",
          left: sameSender ? "auto" : "-8px",
        }}
      />
    </div>
  );
}

export default memo(MessageComponent);
