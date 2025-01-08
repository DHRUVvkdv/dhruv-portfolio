// src/data/achievementsData.js

export const achievementsData = [
    {
        id: 1,
        title: "First Place - University Hackathon",
        category: "hackathon",
        date: "March 2024",
        description: "Led a team of 4 to develop an innovative solution for sustainable urban mobility, creating a real-time public transportation tracking system.",
        images: [
            "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711284211/hntg7xcxdyuj3w9w1pmk.jpg",
            "https://res.cloudinary.com/dru4ekf2q/image/upload/v1711283880/wgpnkcaeffwagtetpfkd.jpg"
        ],
        impact: [
            "Won $5000 prize money",
            "Featured in university newsletter",
            "Project deployed to production"
        ],
        links: {
            certificate: "url-to-certificate",
            project: "url-to-github",
            presentation: "url-to-slides"
        }
    },
    {
        id: 2,
        title: "Research Presentation - AI Conference",
        category: "research",
        date: "January 2024",
        description: "Presented research findings on 'Machine Learning Applications in Healthcare' at the International AI Conference.",
        images: [
            "https://res.cloudinary.com/dru4ekf2q/image/upload/v1711283880/wgpnkcaeffwagtetpfkd.jpg",
            "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711284211/hntg7xcxdyuj3w9w1pmk.jpg"
        ],
        impact: [
            "Selected among top 10 presentations",
            "Published in conference proceedings",
            "Collaboration opportunities with 2 universities"
        ],
        links: {
            paper: "url-to-paper",
            presentation: "url-to-presentation"
        }
    },
    {
        id: 3,
        title: "AWS Certified Solutions Architect",
        category: "certificate",
        date: "December 2023",
        description: "Achieved AWS Solutions Architect Professional certification, demonstrating expertise in designing distributed systems.",
        images: [
            "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711284211/hntg7xcxdyuj3w9w1pmk.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
        ],
        impact: [
            "Scored in the top 95 percentile",
            "Completed 5 real-world projects",
            "Led cloud architecture workshop for juniors"
        ],
        links: {
            certificate: "url-to-certificate",
            badge: "url-to-linkedin-badge"
        }
    },
    {
        id: 4,
        title: "Dean's Innovation Award",
        category: "award",
        date: "November 2023",
        description: "Received the Dean's Innovation Award for developing a novel approach to campus sustainability tracking.",
        images: [
            "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711284211/hntg7xcxdyuj3w9w1pmk.jpg",
            "https://res.cloudinary.com/dru4ekf2q/image/upload/v1711283880/wgpnkcaeffwagtetpfkd.jpg"
        ],
        impact: [
            "Implemented across 3 university campuses",
            "Reduced energy consumption by 25%",
            "Featured in local tech magazine"
        ],
        links: {
            article: "url-to-article",
            project: "url-to-project"
        }
    }
];

// Optional: Export category configurations
export const achievementCategories = {
    hackathon: {
        color: "#3B82F6", // blue
        icon: "FaCode"
    },
    research: {
        color: "#10B981", // green
        icon: "FaFlask"
    },
    certificate: {
        color: "#F59E0B", // yellow
        icon: "FaCertificate"
    },
    award: {
        color: "#EF4444", // red
        icon: "FaTrophy"
    }
};