/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

const Footer = () => (
  <Box className="footer">
    <Stack
      justifyContent="space-between"
      sx={{ flexDirection: { lg: "row" }, gap: { lg: "32px", xs: "22px" } }}
    >
      <Stack direction="row" gap={2}>
        <Stack gap={4}>
          <Typography>Call</Typography>
          <Typography>+201016517066</Typography>
        </Stack>
        <Stack gap={4}>
          <Typography>Email</Typography>
          <Typography>raafatheiba6@gmail.com</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        marginTop="0.2rem"
      >
        <a
          className="social-icon"
          href="https://github.com/Raafat1Heiba"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="social" size={24} />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/raafat-heiba-a453a3306/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="social" size={24} />
        </a>
        <a
          className="social-icon"
          href="https://twitter.com/RAAFATHEIBA3"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="social" size={24} />
        </a>
      </Stack>
    </Stack>
    <Typography textAlign="center" mt="16px">
      @ Raafat Heiba portfolio. All right reserved.
    </Typography>
  </Box>
);

export default Footer;
