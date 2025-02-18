/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhruv's Portfolio",
  description:
    "Software Engineer specializing in AI/ML and Cloud Architecture | 7x Hackathon Winner | Research Assistant at NSF-funded LEWAS Lab | Experienced in developing scalable solutions with AWS, achieving up to 99x cost reduction and 60x performance improvements.",
  og: {
    title: "Dhruv Varshney - Software Engineer & AI Developer",
    type: "website",
    url: "http://dhruvv.dev/",
  },
};

//Home Page
const greeting = {
  title: "Dhruv Varshney",
  logo_name: "DhruvVarshney",
  nickname: "Software Engineer",
  subTitle: "Software Engineer specializing in AI/ML and cloud solutions. Currently senior student at Virginia Tech, developing systems that have achieved up to 60x performance improvements.",
  resumeLink: "https://drive.google.com/file/d/1BZwn0ByvEk4AofMleGyLYVTNL02OwTpq/view?usp=sharing",
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
        "⚡ Engineered RAG chatbots achieving 60x retrieval speedup for 500+ documents and 100+ concurrent users",
        "⚡ Developed multi-agent systems supporting 130+ languages using AWS Bedrock and LangGraph",
        "⚡ Implemented ML pipelines using TensorFlow, Keras, and Scikit-learn for real-world applications",
        "⚡ Optimized vector database queries achieving 7.5x performance boost with PineconeDB",
        "⚡ Built enterprise knowledge engines with 14.5x performance through LangChain parallelization",
        "⚡ Experience with CNNs, LSTMs, and time series analysis from research and industry projects"
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
        "⚡ Architected scalable backends with 25+ API endpoints handling concurrent requests",
        "⚡ Built and deployed 5+ full-stack applications using MERN stack, Next.js, and FastAPI",
        "⚡ Developed mobile applications using React Native and Kotlin with 3+ UI accessibility modes",
        "⚡ Designed robust authentication systems using AWS Cognito and Auth0 for enterprise applications",
        "⚡ Implemented real-time data processing systems with MongoDB and WebSocket integrations",
        "⚡ Created RESTful APIs serving 100+ concurrent users with optimized response times"
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
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Led AWS serverless migration reducing monthly costs by 99x while enhancing security",
        "⚡ Deployed containerized microservices using Docker and AWS Lambda for scalable solutions",
        "⚡ Implemented cloud infrastructure handling 1500+ users across multiple projects",
        "⚡ Managed end-to-end authentication and database systems using AWS Cognito and DynamoDB",
        "⚡ Built real-time monitoring systems for critical sensors with visualization dashboards",
        "⚡ Optimized cloud architecture reducing data collection time from days to seconds"
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Amazon Web Services",
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
      title: "Virginia Tech (Virginia Polytechnic Institute and State University)",
      subtitle: "B.S. in Computer Science",
      logo_path: "vt.png",
      alt_name: "Virginia Tech",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Pursuing advanced coursework in AI/ML, Cloud Software Development (MERN Stack), Mobile Development (Kotlin), Theory of Algorithms, Operating Systems, Data Structures, and Interdisciplinary Capstone Design, building a strong foundation in computer science fundamentals and modern technologies.",
        "⚡ Achieved consistent academic excellence with multiple Dean's List and President's List recognitions while maintaining a strong GPA of 3.80/4.00, demonstrating commitment to academic rigor and continuous learning.",
        "⚡ Won 7 hackathons including Marriott Codefest 2024, receiving recognition from Marriott CTO and Virginia Tech publications, showcasing practical application of technical skills and innovative problem-solving abilities.",
        "⚡ Active member of Google Developer Student Club and Cyber@VT, contributing to technical workshops, community projects, and volunteering initiatives that support technology education and community development.",
        "⚡ Participated in NSF-funded research at LEWAS Lab, developing AI solutions achieving 60x performance improvements and implementing cloud infrastructure optimizations reducing costs by 99x, demonstrating ability to deliver impactful technical solutions.",
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
        "⚡ Excelled in comprehensive STEM curriculum with strong focus on Mathematics, Physics, Chemistry, and Computer Science, while also pursuing English and Music, developing a well-rounded academic foundation and analytical thinking skills.",
        "⚡ Elected as Student Council President, leading 400+ student body and organizing 10+ major school events, while effectively managing student council budget and implementing various student development initiatives.",
        "⚡ Represented school in competitive football tournaments, winning regional championships and developing strong leadership and teamwork skills through sports participation and athletic achievements.",
      ],
      website_link: "https://www.birlaschoolpilani.edu.in/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "CS 4824: Machine Learning",
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
  subtitle: "Professional Journey",
  description:
    "Software Engineer with proven track record in AI/ML development and cloud architecture, demonstrated through impactful industry experience and research. Successfully led cloud infrastructure modernization reducing costs by 99x, while maintaining strong leadership presence through teaching and community roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Technical Experience",
      work: true,
      experiences: [
        {
          title: "Software Engineering Intern & Undergraduate Research Assistant",
          company: "Learning Enhanced Watershed Assessment System (LEWAS) Lab, Virginia Tech",
          company_url: "https://lewas.ictas.vt.edu/",
          logo_path: "lewas.png",
          duration: "March 2024 - Present",
          location: "Blacksburg, USA",
          description:
            "• Led infrastructure modernization migrating to AWS serverless\n" +
            "  ‣ Reduced monthly costs by 99x while enhancing security protocols\n" +
            "  ‣ Deployed containerized services using AWS Lambda, Docker, S3, DynamoDB, and Cognito\n\n" +

            "• Engineered RAG chatbot with PineconeDB\n" +
            "  ‣ Achieved 60x retrieval speedup for 500+ documents\n" +
            "  ‣ Supported 100+ concurrent users with optimized performance\n\n" +

            "• Designed multi-agent platform using LangGraph and AWS Bedrock\n" +
            "  ‣ Implemented 6 specialized agents supporting 130+ languages\n" +
            "  ‣ Integrated comprehensive error handling and monitoring\n\n" +

            "• Built data collection and processing systems\n" +
            "  ‣ Developed Python automation reducing USGS collection from days to seconds\n" +
            "  ‣ Scaled solution to handle 13,500+ stations\n" +
            "  ‣ Achieved 7.5x performance boost through optimized database queries\n\n" +

            "• Maintained real-time monitoring infrastructure\n" +
            "  ‣ Utilized Raspberry Pi for 4 critical creek sensors\n" +
            "  ‣ Implemented visualization dashboard for data analysis",
          color: "#0879bf",
        },
        {
          title: "Solutions Architect Intern",
          company: "Contentstack",
          company_url: "https://www.contentstack.com/",
          logo_path: "contentstack.png",
          duration: "September 2024 - November 2024",
          location: "Remote, USA",
          description:
            "• Engineered parallel worker pipeline\n" +
            "  ‣ Achieved 40x speedup in embedding creation process\n" +
            "  ‣ Reduced processing time from 81s to 2s through optimization\n\n" +
            "• Optimized retrieval mechanisms\n" +
            "  ‣ Implemented promise-based execution for faster processing\n" +
            "  ‣ Achieved 83% speedup in account analysis\n\n" +
            "• Developed knowledge engine with LangChain\n" +
            "  ‣ Achieved 14.5x performance boost through parallelization\n" +
            "  ‣ Implemented comprehensive error handling and logging\n\n" +
            "• Built enterprise-scale ETL pipeline\n" +
            "  ‣ Integrated MongoDB with vector search capabilities\n" +
            "  ‣ Optimized batch processing for 50,000+ records\n" +
            "  ‣ Ensured data integrity through robust error handling",
          color: "#000000",
        },
      ],
    },
    {
      title: "Academic Leadership",
      experiences: [
        {
          title: "Undergraduate Teaching Assistant",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "August 2023 - May 2024",
          location: "Blacksburg, USA",
          description:
            "• Mentored 216 engineering students in foundational courses\n" +
            "  ‣ Led ENGE 1215 (Foundations of Engineering I) sessions\n" +
            "  ‣ Conducted ENGE 1216 (Foundations of Engineering II) tutorials\n\n" +
            "• Developed and delivered specialized programming lectures\n" +
            "  ‣ Created comprehensive MATLAB programming materials\n" +
            "  ‣ Led Scratch programming workshops with hands-on exercises\n\n" +
            "• Provided comprehensive student support\n" +
            "  ‣ Maintained regular office hours for one-on-one assistance\n" +
            "  ‣ Helped students explore various engineering disciplines\n\n" +
            "• Collaborated with faculty for course improvement\n" +
            "  ‣ Contributed to curriculum development\n" +
            "  ‣ Ensured effective content delivery and student understanding",
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
            "• Tutored 200+ students across advanced mathematics courses\n" +
            "  ‣ Covered Calculus I/II, Linear Algebra, and Discrete Mathematics\n" +
            "  ‣ Maintained consistent 6-hour weekly support schedule\n\n" +
            "• Created supplementary learning materials\n" +
            "  ‣ Developed study guides for complex mathematical concepts\n" +
            "  ‣ Designed practice problems for better understanding\n\n" +
            "• Received positive student feedback\n" +
            "  ‣ Recognized for clear explanations and patient approach\n" +
            "  ‣ Helped improve student performance and confidence",
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
            "• Served as primary grader for Linear Algebra (MATH 2114)\n" +
            "  ‣ Evaluated coursework for 40+ students\n" +
            "  ‣ Maintained consistent one-week turnaround time\n\n" +
            "• Provided comprehensive feedback\n" +
            "  ‣ Offered detailed explanations for problem-solving approaches\n" +
            "  ‣ Developed standardized feedback templates\n\n" +
            "• Collaborated with faculty\n" +
            "  ‣ Ensured fair and accurate assessment standards\n" +
            "  ‣ Participated in grading calibration sessions",
          color: "#4285F4",
        },
        {
          title: "Residential Well-Being Student Leader",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "August 2023 - May 2024",
          location: "Blacksburg, USA",
          description:
            "• Led wellness initiatives in Innovate LLC\n" +
            "  ‣ Impacted 200+ students through various programs\n" +
            "  ‣ Created inclusive community environment\n\n" +
            "• Organized community engagement events\n" +
            "  ‣ Planned and executed 10+ major events\n" +
            "  ‣ Facilitated student networking and collaboration\n\n" +
            "• Implemented student support programs\n" +
            "  ‣ Developed peer mentoring initiatives\n" +
            "  ‣ Created resources for student success",
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
            "• Managed STEP and Clark Scholars programs\n" +
            "  ‣ Supported 60+ students during summer session\n" +
            "  ‣ Maintained safe and inclusive living environment\n\n" +
            "• Developed student engagement activities\n" +
            "  ‣ Organized daily workshops and events\n" +
            "  ‣ Promoted academic and personal growth\n\n" +
            "• Provided comprehensive student support\n" +
            "  ‣ Implemented structured support system\n" +
            "  ‣ Facilitated student transition to university life",
          color: "#000000",
        },
      ],
    },
    {
      title: "Community Impact",
      experiences: [
        {
          title: "Ware Lab Tour Coordinator",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "vtsmall.png",
          duration: "July 2023 - August 2023",
          location: "Blacksburg, USA",
          description:
            "• Conducted engineering facility tours\n" +
            "  ‣ Led tours for 100+ prospective students and families\n" +
            "  ‣ Showcased 8+ ongoing engineering projects\n\n" +
            "• Improved tour experience\n" +
            "  ‣ Developed standardized tour routes\n" +
            "  ‣ Created engaging presentation materials\n\n" +
            "• Demonstrated practical engineering applications\n" +
            "  ‣ Provided hands-on examples of concepts\n" +
            "  ‣ Received positive feedback for clear communication",
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
            "• Supported BEE VT program implementation\n" +
            "  ‣ Impacted 50+ prospective engineering students\n" +
            "  ‣ Maintained 100% program schedule adherence\n\n" +
            "• Coordinated with university departments\n" +
            "  ‣ Worked with 5+ departments for learning sessions\n" +
            "  ‣ Organized comprehensive engineering workshops\n\n" +
            "• Enhanced program effectiveness\n" +
            "  ‣ Created engaging presentation materials\n" +
            "  ‣ Facilitated student understanding of engineering pathways",
          color: "#4285F4",
        },
        {
          title: "President",
          company: "Birla School Pilani",
          company_url: "https://www.birlaschoolpilani.edu.in/",
          logo_path: "bsp.png",
          duration: "August 2021 - June 2022",
          location: "Pilani, India",
          description:
            "• Led 400+ student body as elected President\n" +
            "  ‣ Represented students in administrative decisions\n" +
            "  ‣ Managed student council operations\n\n" +
            "• Improved campus life initiatives\n" +
            "  ‣ Implemented new student development programs\n" +
            "  ‣ Enhanced student services and facilities\n\n" +
            "• Managed council responsibilities\n" +
            "  ‣ Coordinated with administration effectively\n" +
            "  ‣ Oversaw budget and resource allocation",
          color: "#000000",
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
      "name": "VT Marketplace",
      "semester": "Fall 2023",
      "course": "CS 3754: Cloud Software Development",
      "description": "Built a full-stack e-commerce platform for Virginia Tech students featuring dual listing types (fixed-price and auction-based), secure authentication, and real-time image uploads.",
      "outcomes": [
        "Built JWT authentication with 24-hour token expiration",
        "Created RESTful API for users, listings, and bidding",
        "Designed React frontend with category-based filtering",
        "Built MongoDB schemas for auction and fixed-price items",
        "Integrated Cloudinary for secure image upload and storage",
        "Implemented real-time bid tracking system with price validation"
      ],
      "languages": [
        {
          "name": "JavaScript",
          "iconifyClass": "logos-javascript"
        },
        {
          "name": "React",
          "iconifyClass": "logos-react"
        },
        {
          "name": "Node.js",
          "iconifyClass": "logos-nodejs"
        },
        {
          "name": "MongoDB",
          "iconifyClass": "logos-mongodb"
        }
      ],
      images: [
        "https://res.cloudinary.com/dru4ekf2q/video/upload/v1736743441/Portfolio/videos/academicprojects/cs3754vtmarketplace_c0wsrw.mp4",
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736982963/Portfolio/videos/academicprojects/thumbnailCS3754.png"
      ],
      github: "https://github.com/yousofalgburi/vt-marketplace",
    },
    {
      name: "Memory-Managed Database System",
      semester: "Fall 2024",
      course: "CS3114/5040: Data Structures & Algorithms",
      description: "Developed a memory-efficient database system implementing custom memory management and hash table data structures for storing and retrieving variable-length records.",
      outcomes: [
        "Memory pool using first-fit allocation for 50% utilization",
        "Created hash table supporting quadratic probing, 2x expansion",
        "Achieved 90%+ mutation coverage in JUnit test suite",
        "Built modular system for memory, data access, commands",
        "Implemented dynamic block merging for memory optimization",
        "Developed serialization system for variable-length records"
      ],
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java"
        },
        {
          name: "JUnit",
          iconifyClass: "simple-icons:junit5"
        }
      ],
      images: [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736984514/Portfolio/videos/academicprojects/imagena_c4qt7w.png"
      ]
    },
    {
      "name": "Water Quality ML Anomaly Detection",
      "semester": "Fall 2024",
      "course": "CS 4824: Machine Learning",
      "description": "Built LSTM-based anomaly detection system analyzing 12 water quality parameters with 92% accuracy in identifying sensor faults and environmental anomalies.",
      "outcomes": [
        "Processed 50,000+ readings across 12 environmental parameters",
        "Achieved 94% accuracy using 2-layer LSTM with 32-64 units",
        "Reduced false positives 65% through adaptive thresholding",
        "Automated pipeline handling 12 different measurement units"
      ],
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "TensorFlow",
          "iconifyClass": "logos-tensorflow"
        },
        {
          "name": "Jupyter",
          "iconifyClass": "logos-jupyter"
        }
      ],
      images: [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736983396/Portfolio/videos/academicprojects/lewasanamoly/mlproject1_xjlkgg.png",
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736983371/Portfolio/videos/academicprojects/lewasanamoly/mlproject4.png",
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736983396/Portfolio/videos/academicprojects/lewasanamoly/mlproject3_m3dshk.png"
      ],
      demo: "https://colab.research.google.com/drive/1hZ-qCVYp-jBrHQMsOQHOOfJJYXW2fxq4?usp=sharing",
    },
    {
      name: "Low-Level Data Struct. Implementation",
      semester: "Fall 2024",
      course: "CS 2506: Computer Organization",
      description: "Implemented a complete linked list system and stack operations in RISC-V assembly, focusing on 32-bit architecture, memory management, and low-level programming concepts.",
      outcomes: [
        "Built 6 core linked list procedures with dynamic memory allocation",
        "Implemented 4-byte aligned memory management system",
        "Developed stack management across multiple procedures",
        "Created system for handling non-contiguous memory allocation"
      ],
      languages: [
        {
          name: "RISC-V",
          iconifyClass: "simple-icons:riscv"
        }
      ],
      images: [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736984514/Portfolio/videos/academicprojects/imagena_c4qt7w.png"
      ]
    },
    {
      "name": "Income Prediction Model",
      "semester": "Fall 2024",
      "course": "CS 4824: Machine Learning",
      "description": "Developed a logistic regression model using census data with 10,000 data points to predict income levels through optimization and feature engineering.",
      "outcomes": [
        "Built gradient descent optimizer with 40-50 epochs",
        "Enhanced model accuracy through 25+ engineered features",
        "Achieved 80.6% prediction accuracy via hyperparameter tuning"
      ],
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Jupyter",
          "iconifyClass": "logos-jupyter"
        }
      ],
      "images": [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736984514/Portfolio/videos/academicprojects/imagena_c4qt7w.png"
      ],
    },
    {
      "name": "Kernelized Perceptron Implementation",
      "semester": "Fall 2024",
      "course": "CS 4824: Machine Learning",
      "description": "Built a Kernelized Perceptron classifier for binary digit recognition, achieving 85%+ accuracy using polynomial and Gaussian kernels.",
      "outcomes": [
        "Implemented linear, polynomial, and Gaussian kernels",
        "Improved accuracy from 64% to 85% with kernel methods",
        "Analyzed performance across 20 training iterations",
        "Created data visualizations for model analysis"
      ],
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Jupyter",
          "iconifyClass": "logos-jupyter"
        },
        {
          "name": "NumPy",
          "iconifyClass": "logos-numpy"
        }
      ],
      "images": [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736984514/Portfolio/videos/academicprojects/imagena_c4qt7w.png"
      ]
    },
    {
      "name": "C4.5 Decision Tree Implementation",
      "semester": "Fall 2024",
      "course": "CS 4824: Machine Learning",
      "description": "Built a C4.5 decision tree classifier from scratch achieving 76.3% accuracy through optimization of tree depth and threshold selection across 32 features.",
      "outcomes": [
        "Optimized tree depth between 5-50 levels for best performance",
        "Processed 20,000+ email samples for spam classification",
        "Achieved 76.3% validation accuracy through threshold tuning",
        "Implemented binary splitting with information gain optimization"
      ],
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Jupyter",
          "iconifyClass": "logos-jupyter"
        }
      ],
      "images": [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736984514/Portfolio/videos/academicprojects/imagena_c4qt7w.png"
      ]
    },
    {
      "name": "CNN Architecture Analysis",
      "semester": "Fall 2024",
      "course": "CS 4824: Machine Learning",
      "description": "Analyzed CNN performance on CIFAR-10 dataset through comparative study of neural architectures, achieving 78.5% accuracy with optimized configurations.",
      "outcomes": [
        "ReLU activation achieved 75.7% vs Sigmoid's 43.5% accuracy",
        "Improved model performance by 25% using dropout layers",
        "3x3 filters achieved 76.3% vs 71.9% with 5x5 filters",
        "Tested RMSprop, Adam, Adagrad over 25 epochs each"
      ],
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "TensorFlow",
          "iconifyClass": "logos-tensorflow"
        },
        {
          "name": "Keras",
          "iconifyClass": "simple-icons:keras"
        }
      ],
      "images": [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736984514/Portfolio/videos/academicprojects/imagena_c4qt7w.png"
      ]
    },
    {
      name: "Graph-Based Music Data Analyzer",
      semester: "Fall 2024",
      course: "CS3114/5040: Data Structures & Algorithms",
      description: "Developed a data analysis system using custom hash tables and graph algorithms to process and analyze relationships between artists and songs from the Million Song database.",
      outcomes: [
        "Built extensible hash tables with quadratic probing",
        "Achieved 90%+ mutation coverage in JUnit tests",
        "Implemented adjacency lists for graph structure",
        "Created connected components using Union/Find"
      ],
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java"
        },
        {
          name: "JUnit",
          iconifyClass: "simple-icons:junit5"
        }
      ],
      images: [
        "https://res.cloudinary.com/dru4ekf2q/image/upload/v1736984514/Portfolio/videos/academicprojects/imagena_c4qt7w.png"
      ]
    },
  ]
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dhruv_profile.jpeg",
    description:
      "Contact me for any queries or collaborations.",
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
