import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { FaAward, FaCode, FaFlask, FaCertificate, FaLink, FaChevronLeft, FaChevronRight, FaTrophy } from "react-icons/fa";
import EducationImg from "./EducationImg";
import ProjectsImg from "./ProjectsImg";
import { achievementsData, achievementCategories } from "../../data/achievementsData";
import "./Achievements.css";

const CategoryIcon = ({ category }) => {
    const icons = {
        hackathon: <FaCode />,
        research: <FaFlask />,
        certificate: <FaCertificate />,
        award: <FaTrophy />
    };
    return icons[category] || <FaAward />;
};

const TimelineItem = ({ achievement, side, theme }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        if (achievement.images?.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (achievement.images?.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? achievement.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className={`timeline-item ${side}`}>
            <Fade left={side === 'left'} right={side === 'right'} duration={1000}>
                <div
                    className="timeline-content"
                    style={{ backgroundColor: theme.highlight }}
                >
                    <div className="timeline-date" style={{ color: theme.text }}>
                        {achievement.date}
                    </div>

                    <div className="timeline-category" style={{ color: theme.text }}>
                        <CategoryIcon category={achievement.category} />
                        <span>{achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}</span>
                    </div>

                    {achievement.images && achievement.images.length > 0 && (
                        <div className="timeline-media">
                            <img
                                src={achievement.images[currentImageIndex]}
                                alt={`${achievement.title}`}
                                className="timeline-image"
                            />
                            {achievement.images.length > 1 && (
                                <div className="image-navigation">
                                    <button onClick={prevImage} className="nav-button">
                                        <FaChevronLeft />
                                    </button>
                                    <button onClick={nextImage} className="nav-button">
                                        <FaChevronRight />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <h3 className="timeline-title" style={{ color: theme.text }}>
                        {achievement.title}
                    </h3>

                    <p className="timeline-description" style={{ color: theme.text }}>
                        {achievement.description}
                    </p>

                    {achievement.impact && (
                        <div className="timeline-impact">
                            {achievement.impact.map((point, index) => (
                                <div
                                    key={index}
                                    className="impact-point"
                                    style={{ color: theme.text }}
                                >
                                    • {point}
                                </div>
                            ))}
                        </div>
                    )}

                    {achievement.links && (
                        <div className="timeline-links">
                            {Object.entries(achievement.links).map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="timeline-link"
                                    style={{ backgroundColor: `${theme.text}15`, color: theme.text }}
                                >
                                    <FaLink /> {key.charAt(0).toUpperCase() + key.slice(1)}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </Fade>
            <div className="timeline-dot" style={{ backgroundColor: theme.text }}></div>
        </div>
    );
};

const Achievements = ({ theme }) => {
    const [filter, setFilter] = useState('all');
    const categories = ['all', ...new Set(achievementsData.map(item => item.category))];

    const filteredAchievements = achievementsData.filter(
        a => filter === 'all' || a.category === filter
    );

    const stats = {
        hackathons: achievementsData.filter(a => a.category === 'hackathon').length,
        research: achievementsData.filter(a => a.category === 'research').length,
        certificates: achievementsData.filter(a => a.category === 'certificate').length,
        awards: achievementsData.filter(a => a.category === 'award').length
    };

    return (
        <div className="achievements-main">
            <Header theme={theme} />
            <div className="basic-achievements">
                <Fade bottom duration={2000} distance="40px">
                    <div className="projects-heading-div">
                        <div className="projects-heading-img-div">
                            <ProjectsImg theme={theme} />
                        </div>
                        <div className="projects-heading-text-div">
                            <h1 className="projects-heading-text" style={{ color: theme.text }} >
                                Achievements & Recognition
                            </h1>
                            <p className="projects-header-detail-text" style={{ color: theme.secondaryText }}>
                                A Timeline of Academic and Professional Milestones
                            </p>
                            <div className="achievement-stats">
                                {Object.entries(stats).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="stat-item"
                                        style={{ backgroundColor: theme.highlight, color: theme.text }}
                                    >
                                        <CategoryIcon category={key.replace('s', '')} />
                                        <span className="stat-value">{value}</span>
                                        <span className="stat-label">
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Fade>

                <div className="achievements-content">
                    <div className="filter-container">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`filter-button ${filter === category ? 'active' : ''}`}
                                style={{
                                    backgroundColor: filter === category ? theme.text : `${theme.text}15`,
                                    color: filter === category ? theme.highlight : theme.text
                                }}
                            >
                                <CategoryIcon category={category} />
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="timeline-container">
                        <div className="timeline-line" style={{ backgroundColor: `${theme.text}30` }}></div>
                        {filteredAchievements.map((achievement, index) => (
                            <TimelineItem
                                key={achievement.id}
                                achievement={achievement}
                                side={index % 2 === 0 ? 'left' : 'right'}
                                theme={theme}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer theme={theme} />
            <TopButton theme={theme} />
        </div >
    );
};

export default Achievements;