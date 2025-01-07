import React, { useState } from 'react';
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import { Fade } from "react-reveal";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import "./AcademicProjectCard.css";

const AcademicProjectCard = ({ project, theme }) => {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const isVideo = (url) => {
        return url.toLowerCase().match(/\.(mp4|webm|ogg)$/i);
    };

    const nextMedia = (e) => {
        e.stopPropagation();
        if (project.images && project.images.length > 1) {
            setCurrentMediaIndex((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const previousMedia = (e) => {
        e.stopPropagation();
        if (project.images && project.images.length > 1) {
            setCurrentMediaIndex((prev) =>
                prev === 0 ? project.images.length - 1 : prev - 1
            );
        }
    };

    const currentMedia = project.images ? project.images[currentMediaIndex] : null;

    return (
        <div className="academic-card-div" style={{ backgroundColor: theme.highlight }}>
            <Fade bottom duration={2000} distance="40px">
                {/* Media Section */}
                {currentMedia && (
                    <div className="media-preview">
                        {isVideo(currentMedia) ? (
                            <div className="video-container">
                                <video
                                    width="100%"
                                    height="100%"
                                    controls
                                    className="media-content"
                                >
                                    <source src={currentMedia} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : (
                            <img
                                src={currentMedia}
                                alt={`${project.name} preview`}
                                className="media-content"
                            />
                        )}

                        {project.images && project.images.length > 1 && (
                            <div className="carousel-arrows">
                                <button
                                    className="carousel-arrow"
                                    onClick={previousMedia}
                                    style={{ color: theme.text }}
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    className="carousel-arrow"
                                    onClick={nextMedia}
                                    style={{ color: theme.text }}
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Rest of the card content */}
                <div className="academic-metadata">
                    <div
                        className="repo-tag"
                        style={{
                            backgroundColor: `${theme.text}15`,
                            color: theme.text
                        }}
                    >
                        {project.semester}
                    </div>
                    <div
                        className="repo-tag"
                        style={{
                            backgroundColor: `${theme.text}20`,
                            color: theme.text,
                            fontWeight: 500
                        }}
                    >
                        {project.course}
                    </div>
                </div>

                <div className="repo-name-div">
                    <svg
                        aria-hidden="true"
                        className="octicon repo-svg"
                        height="20"
                        role="img"
                        viewBox="0 0 12 16"
                        width="16"
                        style={{ color: theme.text }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                        ></path>
                    </svg>
                    <p className="repo-name" style={{ color: theme.text }}>
                        {project.name}
                    </p>
                </div>

                <p className="repo-description" style={{ color: theme.text }}>
                    {project.description}
                </p>

                <div className="repo-languages">
                    <ProjectLanguages logos={project.languages} />
                </div>

                <div className="repo-actions">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-button"
                            style={{
                                backgroundColor: `${theme.text}15`,
                                color: theme.text
                            }}
                        >
                            <FaGithub /> GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-button"
                            style={{
                                backgroundColor: `${theme.text}15`,
                                color: theme.text
                            }}
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                </div>
            </Fade>
        </div>
    );
};

export default AcademicProjectCard;