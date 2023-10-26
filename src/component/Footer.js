import { Box, Typography } from "@mui/material";
import React from "react";
import "../Styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col-1">
          <h3>USEFUL LINKS</h3>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PRODUCTS</a>
          <a href="#">SERVICES</a>
          <a href="#">LOGIN</a>
          <a href="#">SIGNUP</a>
        </div>
        <div className="col-2">
          <h3>FOR MORE DETAILS</h3>
          <form>
            <input type="email" placeholder="Your Email Address" required />{" "}
            <br />
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div>
        <div className="col-3">
          <h3>CONTACT</h3>
          <p>
            123,XYZ ROAD, BSK <br /> Lucknow, Uttar Pradesh, BHARAT
          </p>
          <Box>
            <TwitterIcon
              sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
            />
            <FacebookIcon
              sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
            />
            <InstagramIcon
              sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
            />
            <GitHubIcon
              sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Footer;
