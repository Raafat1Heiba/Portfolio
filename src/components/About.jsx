/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import resume from "../images/raafatheiba.pdf";

const About = () => (
  <Slide direction="up" fraction={0} triggerOnce={true}>
    <Box id="about">
      <Typography variant="h3" mt={4} mb="20px" color="#444f5a">
        About Me
      </Typography>
      <Box
        gap="40px"
        fontSize="24px"
        alignItems="center"
        marginTop="0.2rem"
        className="about-me"
      >
        <Typography
          mb={2}
          color="#444f5a"
          textAlign="justify"
          fontSize="22px"
          sx={{ width: { lg: "80%", xs: "100%" } }}
        >
          I am a solution-oriented Front-End Developer, lifelong learner, and
          adventure with a background in electronics. I enjoy development
          because of the satisfaction I get by overcoming challenges. I am
          motivated by the opportunity that web development provides a positive
          impact on individual life, family, and the world as a whole. I am open
          to new opportunities.
        </Typography>
        <Link
          className="download"
          target="_blank"
          href={resume}
          type="application/octet-stream"
          download="Raafat Heiba resume"
          style={{ textDecoration: "none" }}
        >
          Get my Resume
        </Link>
      </Box>
    </Box>
  </Slide>
);

export default About;
