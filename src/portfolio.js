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
          title: "Solutions Architect Intern",
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
          title: "Software Engineering Intern & Undergraduate Research Assistant",
          company: "Learning Enhanced Watershed Assessment System (LEWAS) Lab, Virginia Tech",
          company_url: "https://vt.edu/",
          logo_path: "lewas.png",
          duration: "March 2024 - Present",
          location: "Blacksburg, USA",
          description:
            "Engineered AI-powered RAG chatbot for LEWAS Lab, processing 500+ documents from Google Drive and handling 500+ queries from 150+ users, boosting retrieval efficiency by 85% using AWS services. Designed a scalable full-stack system supporting 100+ concurrent users, harnessing AWS Bedrock, Claude 3, andLambda to enhance search precision and reduce cloud costs by 55%.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Leadership Experience",
      experiences: [
        {
          title: "Residential Well Being Student Leader",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "August 2023 - May 2024",
          location: "Blacksburg, USA",
          description:
            "Served as an Student Leader for 200+ students in the Innovate Living Learning Community (LLC) in the Creativtiy and Innovation District (CID). Organised and participated in 10+ fully organised events and activities for the LLC. Helped in the transition of the students to the university and helped them in their academic and personal growth.",
          color: "#000000",
        },
        {
          title: "Residential Advisor",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "June 2023 - August 2023",
          location: "Blacksburg, USA",
          description:
            "In my role, I had the privilege of guiding students through the critical transition into college life, particularly through my involvement in two pivotal programs: the Student Transition Engineering Program (STEP) and the Clark Scholars initiative. As a Residential Advisor for both programs, I played a central role in easing the adjustment process for incoming students, facilitating their integration into the Virginia Tech community.",
          color: "#000000",
        },
        {
          title: "President",
          company: "Birla School Pilani",
          company_url: "https://www.birlaschoolpilani.edu.in/",
          logo_path: "bsp.png",
          duration: "August 2021 - June 2022",
          location: "Pilani, India",
          description:
            "Headed residential highscool with 500+ students. Participated in developing opportunities for students for overall devleopment of the students. Developing activites Helped organize various events and activities in the school. Led the student council and helped in organizing various events and activities in the school.",
          color: "#000000",
        },
      ],
    },
    {
      title: "STEM Experience",
      experiences: [
        {
          title: "Undergraduate Teaching Assistant",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "August 2023 - May 2024",
          location: "Blacksburg, USA",
          description:
            "During my time as an undergraduate teaching assistant for the Department of Engineering Education, I had the privilege of assisting two different classes: ENGE 1215 – Foundations of Engineering I in fall 2023, and ENGE 1216 – Foundations of Engineering II in Spring 2024, totaling 72 students. My role extended beyond traditional TA duties as I actively supported students in exploring different majors and determining the right fit for them. I facilitated coding lectures in both courses, tailoring my teaching approach to meet the diverse needs of the students. In ENGE 1215, I led a session on MATLAB to help students grasp the basics of programming by coding a program that solves an engineering problem. For ENGE 1216, I taught two sections on the Scratch programming language, covering fundamental programming concepts and algorithms.",
          color: "#4285F4",
        },
        {
          title: "Mathematics Tutor",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "August 2023 - March 2024",
          location: "Blacksburg, USA",
          description:
            "During my time as a Mathematics Tutor at Virginia Tech, spanning from August 23 to March 24, I had the opportunity to tutor a wide range of subjects, contributing to my growth and proficiency in various mathematical disciplines. Among the courses I tutored were MATH 1025 (Elementary Calculus), MATH 1225 (Calculus of a Single Variable), MATH 2534 (Introduction to Discrete Mathematics), MATH 1524 (Business Calculus), MATH 2114 (Introduction to Linear Algebra), and MATH 1226 (Calculus of a Single Variable II). Teaching these diverse subjects not only strengthened my own understanding of the material but also enhanced my ability to explain complex concepts effectively.",
          color: "#4285F4",
        },
        {
          title: "Mathematics Grader",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "January 2024 - May 2024",
          location: "Blacksburg, USA",
          description:
            "During the spring semester of 2024 at Virginia Tech, I served as a grader for Linear Algebra (MATH 2114), a role that afforded me valuable insights into the learning process and the importance of providing constructive feedback to students. In this capacity, my primary responsibility was to grade homework assignments, a task I approached with a focus on delivering detailed feedback aimed at fostering student comprehension and growth.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Other Experience",
      experiences: [
        {
          title: "Ware Lab Tour Coordinator",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "July 2023 - August 2023",
          location: "Blacksburg, USA",
          description:
            "In my role, I was entrusted with the task of making the Ware Lab known and accessible to students, families, and visitors alike. Through vivid and detailed tours, I offered an immersive experience that not only highlights the state-of-the-art technologies housed within the lab but also underscores the transformative impact of experiential learning on the academic and professional development of engineering students.",
          color: "#000000",
        },
        {
          title: "Program Assistant",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "June 2023 - July 2023",
          location: "Blacksburg, USA",
          description:
            "During my tenure at the Center for the Enhancement of Engineering Diversity, I played a crucial role in supporting various summer camps, with a primary focus on the Black Engineering Excellence at Virginia Tech (BEE VT) program. Serving as a liaison between the program and different departments at Virginia Tech, I facilitated engaging learning sessions to broaden students' understanding of the diverse majors available at the university.",
          color: "#4285F4",
        },
        {
          title: "Student Employee, Dining Services",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "October 2022 - July 2023",
          location: "Blacksburg, USA",
          description:
            "As a student employee in dining services, I've honed my ability to multitask and thrive in a dynamic environment. From serving food and washing dishes to engaging with customers, my role has been diverse, fostering effective communication skills and a customer-centric approach.",
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

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

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
        "https://res.cloudinary.com/dru4ekf2q/video/upload/v1736743441/Portfolio/videos/academicprojects/cs3754vtmarketplace_c0wsrw.mp4",
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736711261/Portfolio/videos/projects/thumbnail_CS_3754_vtmarketplace.png"
      ],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com"
    },
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
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Blacksburg, VA, USA 24060",
    locality: "Blacksburg",
    country: "USA",
    region: "Virginia",
    postalCode: "24060",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/YrpnMPP2wBd1seqL9",
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
  // publications,
  contactPageData,
};
