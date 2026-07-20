export const initialPortfolioData = {
  profile: {
    name: "Pathuri Sujith Reddy",
    shortName: "Sujith",
    title: "Computer Science Student",
    role: "Full Stack Web Developer",

    description:
      "I build responsive, practical, and user-focused web applications using modern frontend and backend technologies.",

    // Correct path for GitHub Pages
    profileImage: `${import.meta.env.BASE_URL}images/profile/sujith-profile.png`,

    // Correct path for View Resume and Download Resume
    resume: `${import.meta.env.BASE_URL}resume/sujith-reddy-resume.pdf`,

    email: "pathurirajitha2@gmail.com",
    phone: "+91 9347386302",

    location: "Siddipet, Telangana, India",

    github: "https://github.com/vtu26220-boop",

    linkedin:
      "https://www.linkedin.com/in/pathuri-sujith-reddy-30a634285/",
  },

  education: [
    {
      id: 1,
      title: "Bachelor of Engineering - Computer Science",
      subtitle: "Computer Science Engineering",
      institution: "Vel Tech University",
      location: "Chennai, Tamil Nadu",
      year: "2023 - 2027",
      scoreLabel: "CGPA",
      score: "7.54",
    },

    {
      id: 2,
      title: "Intermediate",
      subtitle: "MPC",
      institution: "Gurukrupa Junior College",
      location: "Siddipet, Telangana",
      year: "2022 - 2023",
      scoreLabel: "Score",
      score: "72.6%",
    },

    {
      id: 3,
      title: "SSC",
      subtitle: "Secondary Education",
      institution: "Vikas High School",
      location: "Siddipet, Telangana",
      year: "2012 - 2021",
      scoreLabel: "GPA",
      score: "10.0",
    },
  ],

  skills: {
    Programming: [
      {
        id: 1,
        name: "Java",
        level: 80,
      },
    ],

    "Web Development": [
      {
        id: 2,
        name: "HTML",
        level: 90,
      },
      {
        id: 3,
        name: "CSS",
        level: 85,
      },
      {
        id: 4,
        name: "JavaScript",
        level: 75,
      },
    ],

    Database: [
      {
        id: 5,
        name: "MySQL",
        level: 80,
      },
      {
        id: 6,
        name: "MongoDB",
        level: 75,
      },
    ],

    "Tools & Platforms": [
      {
        id: 7,
        name: "Git",
        level: 80,
      },
      {
        id: 8,
        name: "GitHub",
        level: 80,
      },
      {
        id: 9,
        name: "VS Code",
        level: 90,
      },
      {
        id: 10,
        name: "Microsoft Excel",
        level: 85,
      },
    ],
  },

  projects: [
    {
      id: 1,

      title: "Driverless Seed Sowing Machine Using IoT",

      description:
        "An IoT-enabled autonomous seed-sowing system designed to automate seed dispensing and farm navigation.",

      technologies: [
        "IoT",
        "Automation",
        "Sensors",
      ],

      github: "",
      demo: "",
      featured: true,
    },

    {
      id: 2,

      title: "Recyclable Solid Waste Detection",

      description:
        "A deep learning-based system designed to identify recyclable and non-recyclable solid waste.",

      technologies: [
        "Deep Learning",
        "CNN",
        "Machine Learning",
      ],

      github: "",
      demo: "",
      featured: true,
    },
  ],

  certificates: [],

  messages: [],
};