/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhruv's Portfolio",
  description:
    "A motivated individual who is always looking to learn and grow from every opportunity. I am a passionate learner and always looking to learn new technologies.",
  og: {
    title: "Dhruv Varshney Portfolio",
    type: "website",
    url: "http://dhruvv.dev/",
  },
};

//Home Page
const greeting = {
  title: "Dhruv Varshney",
  logo_name: "DhruvVarshney",
  nickname: "",
  subTitle:
    "A motivated individual who is always looking to learn and grow from every opportunity. I am a passionate learner and always looking to learn new technologies. ",
  resumeLink:
    "https://drive.google.com/file/d/1sxGYxSx9Hgg6p1nYTDelExt_Pv6CGCBU/view?usp=sharing",
  portfolio_repository: "https://github.com/DHRUVvkdv/dhruv-portfolio",
  githubProfile: "https://github.com/DHRUVvkdv",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/DHRUVvkdv",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhruvvarshneyvk/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Devpost",
    link: "https://devpost.com/dhruvvarshneyvk", // Replace with your Devpost username
    fontAwesomeIcon: "fa-dev", // Reference https://fontawesome.com/icons/dev?f=brands
    backgroundColor: "#003E54", // Reference https://simpleicons.org/?q=devpost
  },
  {
    name: "Gmail",
    link: "mailto:dhruvvarshney.job@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Devpost",
  //   link: "mailto:dhruvvarshney.job@gmail.com",
  //   imageSrc: "devpost.svg", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // }
];

const skills = {
  data: [
    {
      title: "Machine Learning & Artificial Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Using Machine Learning and Artificial Intelligence to solve real world problems",
        "⚡ Experience with popular libraries like Tensorflow, Keras, Scikit-learn, Pandas, Numpy",
        "⚡ Experience with CNNs, LSTMs, and time series analysis",
        "⚡ Experience with working with AWS Bedrock, Langchain to make AI projects scalable and fast",
        "⚡ Experience with Vector Databases like Pinecone, MongoDB",
        "⚡ Gained experience from working in the industry and doing research",
      ],
      softwareSkills: [
        {
          skillName: "Langchain",
          imageSrc: "langchain.png",
        },
        {
          skillName: "AWS Bedrock",
          imageSrc: "bedrock.png",
        },
        {
          skillName: "Pinecone Vector Database",
          imageSrc: "pinecone.png",
        },
        {
          skillName: "Chroma Vector Database",
          imageSrc: "chroma.png",
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deep Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "scikit-learn",
          imageSrc: "scikit.png",
        },
        {
          skillName: "Plotly",
          imageSrc: "plotly.png",
        },
        {
          skillName: "Seaborn",
          imageSrc: "seaborn.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building full stack applications and mobile applications using various stacks and technologies",
        "⚡ Proficient in building backend applications using FastAPI, Express. Also, have experience in building RESTful APIs",
        "⚡ Proficient in understand the requirements of the product and building the product from scratch",
        "⚡ Experience with working on projects affecting thousands of users",
        "⚡ Experience in understanding different APIs, GraphQL, and building scalable applications",
        "⚡ Experience gained from industry, research work and hackathons",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          imageSrc: "fastapi.png",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          imageSrc: "typescript.png",
        },
        {
          skillName: "React and React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          imageSrc: "expressjs.png",
        },
        {
          skillName: "Streamlit",
          imageSrc: "streamlit.png",
        },
        {
          skillName: "Kotlin",
          imageSrc: "kotlin.png",
        },
        {
          skillName: "NextJS",
          imageSrc: "nextjs.png",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms, learning new tools and technologies",
        "⚡ Hosting and maintaining websites and databases on different cloud platforms",
        "⚡ Building scalable and highly available cloud infrastructure for fast and reliable services",
        "⚡ Experience with full end to end service, from authentication to database management",
        "⚡ Various projects deployed handling thousands of requests",
        "⚡ Various projects deployed handling capable of handling 100+ users at a time",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          imageSrc: "firebase.webp",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQL",
          imageSrc: "sql.png",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS Cognito",
          imageSrc: "cognito.png",
        },
        {
          skillName: "AWS Lambda",
          imageSrc: "lambda.png",
        },
        {
          skillName: "AWS Amplify",
          imageSrc: "amplify.svg",
        },
        {
          skillName: "AWS DynamoDB",
          imageSrc: "dynamodb.svg",
        },
        {
          skillName: "AWS Simple Storage Service",
          imageSrc: "s3.svg",
        },
        {
          skillName: "Apache HTTP Server",
          imageSrc: "apache.svg",
        },
        {
          skillName: "Auth0",
          imageSrc: "auth0.svg",
        },

      ],
    },
    {
      title: "Hobbies",
      fileName: "DesignImg",
      skills: [
        "⚡ I love to contribute to the community, so I work as a local guide on Google Maps",
        "⚡ I am always up for a game of Ping Pong, games on Xbox and love biking",
        "⚡ I am a F1 nerd, who wakes up at odd hours to watch races and keep up with the latest news",
      ],
      softwareSkills: [
        {
          skillName: "PingPong/Table Tennis",
          imageSrc: "pingpong.png",
        },
        {
          skillName: "Formula 1",
          imageSrc: "f1.png",
        },
        {
          skillName: "Biking",
          imageSrc: "bike.svg",
        },
        {
          skillName: "Xbox",
          imageSrc: "xbox.png",
        },
        {
          skillName: "Google Maps Local Guide",
          imageSrc: "googleguide.png",
        }
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "Virginia Tech (Virginia Polytechnic Institute and State University) ",
      subtitle: "B.S. in Computer Science",
      logo_path: "vt.png",
      alt_name: "Virginia Tech",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I have taken courses in college which correspond to Data Structures, Algorithms, Operating Systems, STEM classes and other soft skill subjects which helped me to develop professionally and personally.",
        "⚡ Apart from this, advanced courses like Machine Learning, Cloud and Mobile Software Development, Theory of Algorithms and Interdisciplinary course which helped me to gain knowledge in various fields.",
        "⚡ I been part of various clubs and organizations such as Google Developer Student Club, Cyber@VT and volunteered to support the community.",
        "⚡ I have also been part of various hackathons and research projects which helped me to gain experience in real world problems and solutions.",
        "⚡ I have received Dean's List and President's List award for my academic performance in the university.",
      ],
      website_link: "https://www.vt.edu/",
    },
    {
      title: "Birla School Pilani",
      subtitle: "High School",
      logo_path: "bsp.png",
      alt_name: "Birla School Pilani",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I took courses in high school which correspond to Mathematics, Physics, Chemistry, Computer Science, English, and Music which helped me to develop a strong hold of these subjects..",
        "⚡ I gained leadership experience by being President of the Student Council organizing various events and activities in the school.",
        "⚡ I was part of the football team of the school and have won various competitions.",
      ],
      website_link: "https://www.birlaschoolpilani.edu.in/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Leadership Experience",
  description:
    "I have worked in the industry and have worked in research lab at my university, among other roles which have helped me develop my Computer Science skills. During my experience I have worked various Leadership and STEM roles which have helped me develop my soft skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Solution Architect Intern",
          company: "Contentstack",
          company_url: "https://www.contentstack.com/",
          logo_path: "contentstack.png",
          duration: "September 2024 - November 2024",
          location: "Remote, USA",
          description:
            "Worked on an internal project aimed to help Solution Architect and Sales Engineers. Engineered embedding pipeline with 40x speedup. Implemented Worker threads for parallel processing reducing the processing time from 135s → 9.3s. Implemented batch processing for 50000+ records ensuring robust performance with error handling and logging.",
          color: "#000000",
        },
        {
          title: "Undergraduate Research Assistant & Software Engineering Intern",
          company: "Learning Enhanced Watershed Assessment System (LEWAS) Lab, Virginia Tech",
          company_url: "https://legatohealthtech.com/",
          logo_path: "lewas.png",
          duration: "June 2020 - Aug 2021",
          location: "Blacksburg, USA",
          description:
            "",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Leadership Experience",
      experiences: [
        {
          title: "Student Leader",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vt.png",
          duration: "August 2023 - May 2024",
          location: "Blacksburg, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
      ],
    },
    {
      title: "STEM Experience",
      experiences: [
        {
          title: "Mathematics Tutor",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vt.png",
          duration: "August 2023 - March 2024",
          location: "Blacksburg, USA",
          description:
            "",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Academic Projects Page
const academicProjectsHeader = {
  title: "Academic Projects",
  description: "My projects showcase my academic journey using various technologies and tools.",
  avatar_image_path: "projects_image.svg",
  projects: [
    {
      name: "E-Commerce Website",
      semester: "Fall 2023",
      course: "Web Development II",
      description: "Built a full-stack e-commerce platform with user authentication, shopping cart, and payment integration.",
      outcomes: [
        "Implemented secure user authentication system",
        "Developed real-time shopping cart functionality",
        "Integrated Stripe payment gateway"
      ],
      "languages": [
        {
          "name": "Dockerfile",
          "iconifyClass": "simple-icons:docker"
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "JavaScript",
          "iconifyClass": "logos-javascript"
        }
      ],
      images: [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711470526/ktyybk4sykenps3omzgf.jpg",
        "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711268052/samples/upscale-face-1.jpg"
      ],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com"
    },
    {
      name: "Customer Segmentation Analysis",
      semester: "Spring 2023",
      course: "Data Mining",
      description: "Analyzed customer behavior data to identify key market segments using machine learning techniques.",
      outcomes: [
        "Applied K-means clustering algorithm",
        "Created interactive data visualizations",
        "Performed statistical analysis of segments"
      ],
      "languages": [
        {
          "name": "Dockerfile",
          "iconifyClass": "simple-icons:docker"
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "JavaScript",
          "iconifyClass": "logos-javascript"
        }
      ],
      images: ["https://res.cloudinary.com/dru4ekf2q/video/upload/v1736185134/Portfolio/30_June_2021_4_e13vwl.mp4", "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711268052/samples/upscale-face-1.jpg"],
      thumbnail: "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711284211/hntg7xcxdyuj3w9w1pmk.jpg",
      github: "https://github.com/yourusername/customer-segmentation"
    },
    {
      name: "Customer Segmentation Analysis",
      semester: "Spring 2023",
      course: "Data Mining",
      description: "Analyzed customer behavior data to identify key market segments using machine learning techniques.",
      outcomes: [
        "Applied K-means clustering algorithm",
        "Created interactive data visualizations",
        "Performed statistical analysis of segments"
      ],
      "languages": [
        {
          "name": "Dockerfile",
          "iconifyClass": "simple-icons:docker"
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "JavaScript",
          "iconifyClass": "logos-javascript"
        }
      ],
      images: ["https://res.cloudinary.com/dru4ekf2q/video/upload/v1736185134/Portfolio/30_June_2021_4_e13vwl.mp4", "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711268052/samples/upscale-face-1.jpg"],
      thumbnail: "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711284211/hntg7xcxdyuj3w9w1pmk.jpg",
      github: "https://github.com/yourusername/customer-segmentation"
    },
    {
      name: "Customer Segmentation Analysis",
      semester: "Spring 2023",
      course: "Data Mining",
      description: "Analyzed customer behavior data to identify key market segments using machine learning techniques.",
      outcomes: [
        "Applied K-means clustering algorithm",
        "Created interactive data visualizations",
        "Performed statistical analysis of segments"
      ],
      "languages": [
        {
          "name": "Dockerfile",
          "iconifyClass": "simple-icons:docker"
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "JavaScript",
          "iconifyClass": "logos-javascript"
        }
      ],
      images: ["https://res.cloudinary.com/dru4ekf2q/video/upload/v1736185134/Portfolio/30_June_2021_4_e13vwl.mp4", "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711268052/samples/upscale-face-1.jpg"],
      thumbnail: "https://res.cloudinary.com/dru4ekf2q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1711284211/hntg7xcxdyuj3w9w1pmk.jpg"
    }
  ]
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dhruv_profile.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  academicProjectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
