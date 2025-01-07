import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { academicProjectsHeader } from "../../portfolio.js";
import AcademicProjectCard from "../../components/academicProjectCard/AcademicProjectCard";
import ProjectsImg from "./ProjectsImg";
import "./AcademicProjects.css";

function AcademicProjects({ theme }) {
  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {academicProjectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {academicProjectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="repo-cards-div-main">
        {academicProjectsHeader.projects.map((project, index) => (
          <AcademicProjectCard
            key={`${project.name}-${index}`}
            project={project}
            theme={theme}
          />
        ))}
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default AcademicProjects;