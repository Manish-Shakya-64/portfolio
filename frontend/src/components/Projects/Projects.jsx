import { AiOutlineProject } from "react-icons/ai";
import { Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
  url,
  projectImage,
  ProjecTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{ProjecTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack : {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </button>
      )}
    </>
  );
};

const Projects = () => {

  const projects = [1, 2, 3];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
          url="https://www.youtube.com"
          projectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NfLqRjG1POoF73OP2hfLCJKSbz5sMo1a5A&usqp=CAU"
          ProjecTitle="Sample project"
          description="This is simple project "
          technologies="Mongodb , React , Node.js , Express.js"
          />
        ))}
      </div>
      <Typography variant="h3" style={{font:"100 1.2rem 'Ubuntu Mono'"}}>
        All The Projects Shown Above Are Made By Me<FaRegSmileWink/>
      </Typography>
    </div>
  );
};

export default Projects;
