// src/data/achievementsData.js

export const achievementsData = [
    {
        id: 1,
        title: "🥇 First Place - Marriott Codefest",
        category: "hackathon",
        date: "October 2024",
        description: "Made a full stack web app and mobile app for hotel booking, management and customer service that revolutionizes the hospitality industry in a 48-hour hackathon.",
        images: [
            "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736753198/Portfolio/achievements/marriottcodefest/EBC233EE-B8CA-4242-AB1A-706D362CBF93_loxwjh.jpg",
            "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736753208/Portfolio/achievements/marriottcodefest/1729879374067_hjbdiz.jpg",
            "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736753266/Portfolio/achievements/marriottcodefest/Screenshot_2024-11-04_at_4.03.36_PM_t8zwsy.png",
            "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736661966/Portfolio/videos/projects/thumbnaildeskbychariott.png"
        ],
        impact: [
            "Invited to present at Marriott HQ",
            "Featured in university newsletter",
            "Project deployed to production"
        ],
        links: {
            project: "https://github.com/DHRUVvkdv/chariott",
            website: "https://main.d3lkr48qn04k1o.amplifyapp.com/",
            newsletter: "https://news.vt.edu/articles/2024/11/pamplin-code-the-future.html"
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