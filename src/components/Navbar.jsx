/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Stack, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { VscCode } from "react-icons/vsc";
import Burger from "./burger-menu/Burger.jsx";
import StyledMenu from "./burger-menu/StyledMenu.js";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <Box className="menu">
      <div className="menu-container">
        <Link to="/" style={{ textDecoration: "none", color: "#164e87" }}>
          <Box
            sx={{
              display: "flex",
              direction: "row",
              alignItems: "center",
              color: "#164e87",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <VscCode size="3rem" /> <span>Raafat HEiba</span>
          </Box>
        </Link>
        <div className="menu-control-container">
          <Burger open={open} setOpen={setOpen} />
        </div>
        {activeMenu ? (
          <Box className="menu-item-container">
            <Box className="portfolio-container">
              <a className="menu-item" href="#projects">
                Projects
              </a>
              <a href="#technologies" className="menu-item">
                Technologies
              </a>
              <a href="#about" className="menu-item">
                About
              </a>
            </Box>

            <Stack direction="row" gap="30px" fontSize="18px">
              <a
                href="https://github.com/Raafat1Heiba"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="social-icon" size="1.8rem" />
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/raafat-heiba-a453a3306/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size="1.8rem" />
              </a>
              <a
                className="social-icon"
                href="https://twitter.com/RAAFATHEIBA3"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle size="1.8rem" />
              </a>
            </Stack>
          </Box>
        ) : (
          <StyledMenu open={open}>
            <Box>
              <Box className="mobile-portfolio-container" marginTop="0.8rem">
                <a
                  className="menu-item"
                  href="#projects"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Projects
                </a>
                <a
                  href="#technologies"
                  className="menu-item"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Technologies
                </a>
                <a
                  href="#about"
                  className="menu-item"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  About
                </a>
              </Box>

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
                  <AiFillGithub size="2rem" />
                </a>
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/in/raafat-heiba-a453a3306/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size="2rem" />
                </a>
                <a
                  className="social-icon"
                  href="https://twitter.com/RAAFATHEIBA3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle size="2rem" />
                </a>
              </Stack>
            </Box>
          </StyledMenu>
        )}
      </div>
    </Box>
  );
};

export default Navbar;
