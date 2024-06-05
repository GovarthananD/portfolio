import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import hero from "../asset/hero.jpg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import git from "../asset/git.png";
import linked from "../asset/linked.png";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "cener",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const navigation = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <div className="container">
                <div className="container-2">
                  <p className="hello">Hello I'm</p>
                  <p className="name">
                    GOVARTHANAN <span className="blue">D</span>
                  </p>
                  <p className="role">
                    <span className="blue">Fullstack</span> Developer
                  </p>
                  <p className="para">
                    I'm a Fullstack developer based in TamilNadu Coimbatore,
                    I'll help you build beautiful websites your users will love.
                  </p>
                  <p className="button-link">
                    <button
                      className="link"
                      onClick={() => navigation("/Contact")}
                    >
                      Get in touch
                    </button>
                    <button
                      className="link2"
                      onClick={() => navigation("/Project")}
                    >
                      Browse Project
                    </button>
                  </p>
                </div>
                <img src={hero} alt="pic" className="images" />
              </div>
              <div>
                <h1 className="skill-session">
                  Skills<span className="blue">.</span>
                </h1>
                <div className="skills">
                  <div className="skill-box">
                    <h3>Web Design</h3>
                    <ul className="list">
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        Responsive Design
                      </li>
                    </ul>
                  </div>
                  <div className="skill-box">
                    <h3>Frontend</h3>
                    <ul className="list">
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        HTML
                      </li>
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        CSS
                      </li>
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        Javascript
                      </li>
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        ReactJs
                      </li>
                    </ul>
                  </div>
                  <div className="skill-box">
                    <h3>Backend</h3>
                    <ul className="list">
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        NodeJs
                      </li>
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        MongoDB
                      </li>
                      <li className="tick">
                        <CheckCircleOutlineIcon />
                        ExpressJs
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
              <h1 className="skill-session">
                Education<span className="blue">.</span>
              </h1>
              <div className="padippu">
                <div className="education">
                  <p>BSc Statistics</p>
                  <p className="edu">2014 - 17</p>
                  <p className="edu1">Coimbatore TamilNadu</p>
                </div>
              </div>
              <div className="end">
                <h3>Links</h3>
                <div className="ending">
                  <a href="https://github.com/GovarthananD" target="_blank">
                    <img src={git} alt="git" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/govarthanan-duraisamy-9185a22a2"
                    target="_blank"
                  >
                    <img src={linked} alt="git" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1cMfUqJLst4KHEsy55SP5G8eBiQSX3JgU/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="resume">View Resume</button>
                  </a>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
