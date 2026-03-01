import { escapeHtml, sanitizeUrl } from "./security.js";

const courses = [
  {
    category: "Coding Language Course",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Rapid Lang",
        short_desc: "Basic Language Course of your choice - 3 Months",
        details: [
          "Introduction to programming concepts",
          "Syntax and basic constructs",
          "Variables, data types, and operators",
          "Control structures: loops and conditional statements",
          "Functions and modular programming",
        ],
        duration: "3 Months",
        price: "₹5,999",
        link: "https://topmate.io/seven_oz/1980006",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Rapid Lang: Intensive 3-Month Programming Course",
          short_desc:
            "Master programming fundamentals in your chosen language with hands-on projects and expert mentorship.",
          details: [
            "Learn programming fundamentals in your chosen language",
            "Hands-on projects to reinforce concepts",
            "Expert mentorship and feedback",
            "Structured learning path for beginners",
          ],
          why_choose_this_course:
            "This course is designed for beginners who want to learn programming in a structured and practical way.",
          certification_available: true,
          certification_cost: "₹1,999",
          public_review:
            "Students consistently rate this course highly for its clarity, practical approach, and expert mentorship.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Data Structures and Algorithms (DSA)",
        short_desc:
          "Master core DSA concepts for coding interviews and problem solving.",
        details: [
          "Introduction to data structures (arrays, linked lists, stacks, queues)",
          "Basic algorithms (sorting, searching)",
          "Advanced data structures (trees, graphs)",
          "Algorithm design techniques (greedy, etc.)",
        ],
        duration: "5 Months",
        price: "₹6,499",
        link: "https://topmate.io/seven_oz/1980024",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Data Structures and Algorithms (DSA)",
          short_desc:
            "Master core DSA concepts for coding interviews and problem solving.",
          details: [
            "Introduction to data structures (arrays, linked lists, stacks, queues)",
            "Basic algorithms (sorting, searching)",
            "Advanced data structures (trees, graphs)",
            "Algorithm design techniques (greedy, etc.)",
          ],
          why_choose_this_course:
            "This course is designed for students preparing for coding interviews and those looking to strengthen their problem-solving skills.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students find this course highly effective in building a strong foundation in DSA concepts.",
        },
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Basic - Rookie",
        short_desc:
          "Learn HTML and CSS fundamentals to build responsive static websites.",
        details: [
          "HTML, CSS fundamentals",
          "Introduction to responsive design",
          "Building static web pages",
        ],
        duration: "2 Months",
        price: "₹5,999",
        link: "https://topmate.io/seven_oz/1984758",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Basic Web Development",
          short_desc:
            "Learn HTML and CSS fundamentals to build responsive static websites.",
          details: [
            "HTML, CSS fundamentals",
            "Introduction to responsive design",
            "Building static web pages",
          ],
          why_choose_this_course:
            "This course is designed for beginners who want to learn the basics of web development.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its clear explanations and practical approach.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Advanced Frontend Development",
        short_desc:
          "Build dynamic frontend apps with modern JavaScript and async programming.",
        details: [
          "JavaScript fundamentals",
          "DOM manipulation",
          "Asynchronous programming (Promises, async/await)",
        ],
        duration: "4 Months",
        price: "₹21,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Advanced Frontend Development",
          short_desc:
            "Build dynamic frontend apps with modern JavaScript and async programming.",
          details: [
            "JavaScript fundamentals",
            "DOM manipulation",
            "Asynchronous programming (Promises, async/await)",
          ],
          why_choose_this_course:
            "This course is designed for students who have a basic understanding of frontend development and want to build more complex applications.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its practical approach and deep dive into modern JavaScript concepts.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "React Development",
        short_desc:
          "Create reusable UI components and manage app state with React.",
        details: [
          "Introduction to React framework",
          "JSX syntax and components",
          "State management with Redux",
        ],
        duration: "2 Months",
        price: "₹22,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "React Development",
          short_desc:
            "Create reusable UI components and manage app state with React.",
          details: [
            "Introduction to React framework",
            "JSX syntax and components",
            "State management with Redux",
          ],
          why_choose_this_course:
            "This course is designed for students who want to learn React and build modern web applications.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its clear explanations and practical projects using React.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "MERN Stack Development",
        short_desc:
          "Develop complete web applications using MongoDB, Express, React, and Node.",
        details: [
          "MongoDB fundamentals",
          "Express.js basics",
          "Node.js backend development",
          "Integration with React frontend",
        ],
        duration: "5 Months",
        price: "₹54,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "MERN Stack Development",
          short_desc:
            "Develop complete web applications using MongoDB, Express, React, and Node.",
          details: [
            "MongoDB fundamentals",
            "Express.js basics",
            "Node.js backend development",
            "Integration with React frontend",
          ],
          why_choose_this_course:
            "This course is designed for students who want to build full-stack web applications using the MERN stack.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its comprehensive coverage of the MERN stack and practical projects.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Full Stack Development",
        short_desc:
          "Become a full stack developer with APIs, auth, and deployment workflows.",
        details: [
          "RESTful API design and implementation",
          "Authentication and authorization",
          "Deployment strategies and continuous integration",
        ],
        duration: "8-9 Months",
        price: "₹44,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Full Stack Development",
          short_desc:
            "Become a full stack developer with APIs, auth, and deployment workflows.",
          details: [
            "RESTful API design and implementation",
            "Authentication and authorization",
            "Deployment strategies and continuous integration",
          ],
          why_choose_this_course:
            "This course is designed for students who want to become proficient full stack developers and learn about APIs, authentication, and deployment.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its in-depth coverage of full stack development concepts and practical approach.",
        },
      },
    ],
  },
  {
    category: "Mathematical Aptitude",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Numerical Analysis",
        short_desc:
          "Strengthen problem-solving with practical numerical computation techniques.",
        details: [
          "Numerical methods for solving equations",
          "Interpolation and approximation techniques",
          "Numerical differentiation and integration",
        ],
        duration: "1 Month",
        price: "₹1,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Numerical Analysis",
          short_desc:
            "Strengthen problem-solving with practical numerical computation techniques.",
          details: [
            "Numerical methods for solving equations",
            "Interpolation and approximation techniques",
            "Numerical differentiation and integration",
          ],
          why_choose_this_course:
            "This course is designed for students who want to improve their mathematical problem-solving skills with practical numerical methods.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students find this course highly effective in enhancing their numerical problem-solving abilities.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Statistics",
        short_desc:
          "Understand probability and statistics for analytics and decision making.",
        details: [
          "Descriptive statistics (mean, median, mode)",
          "Probability theory",
          "Inferential statistics (Chi Square Distribution, hypothesis testing)",
        ],
        duration: "per Month",
        price: "₹2,499",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Statistics",
          short_desc:
            "Understand probability and statistics for analytics and decision making.",
          details: [
            "Descriptive statistics (mean, median, mode)",
            "Probability theory",
            "Inferential statistics (Chi Square Distribution, hypothesis testing)",
          ],
          why_choose_this_course:
            "This course is designed for students who want to learn the fundamentals of statistics for data analysis and informed decision making.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its clear explanations and practical approach to learning statistics.",
        },
      },
    ],
  },
  {
    category: "ML/AI",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Machine Learning Basics",
        short_desc:
          "Start your ML journey with supervised models and evaluation basics.",
        details: [
          "Introduction to machine learning",
          "Linear regression, logistic regression",
          "Model evaluation and validation techniques",
        ],
        duration: "3 Months",
        price: "₹12,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Machine Learning Basics",
          short_desc:
            "Start your ML journey with supervised models and evaluation basics.",
          details: [
            "Introduction to machine learning",
            "Linear regression, logistic regression",
            "Model evaluation and validation techniques",
          ],
          why_choose_this_course:
            "This course is designed for beginners who want to start learning machine learning concepts and techniques.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its clear explanations and practical approach to learning machine learning basics.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Advanced Machine Learning",
        short_desc:
          "Go deeper into advanced ML algorithms and model optimization methods.",
        details: [
          "Decision trees and ensemble methods",
          "Support Vector Machines (SVM)",
          "Neural networks and deep learning basics",
        ],
        duration: "5 Months",
        price: "₹26,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Advanced Machine Learning",
          short_desc:
            "Go deeper into advanced ML algorithms and model optimization methods.",
          details: [
            "Decision trees and ensemble methods",
            "Support Vector Machines (SVM)",
            "Neural networks and deep learning basics",
          ],
          why_choose_this_course:
            "This course is designed for students who want to go deeper into advanced machine learning algorithms and model optimization techniques.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its comprehensive coverage of advanced machine learning concepts.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "AI Development",
        short_desc:
          "Build AI-driven solutions with NLP and computer vision foundations.",
        details: [
          "Natural Language Processing (NLP) basics",
          "Computer Vision fundamentals",
        ],
        duration: "5 Months",
        price: "₹27,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "AI Development",
          short_desc:
            "Build AI-driven solutions with NLP and computer vision foundations.",
          details: [
            "Natural Language Processing (NLP) basics",
            "Computer Vision fundamentals",
          ],
          why_choose_this_course:
            "This course is designed for students who want to build AI-driven solutions using NLP and computer vision techniques.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its practical approach to building AI applications.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Machine Learning with R",
        short_desc:
          "Apply ML workflows in R for data analysis and predictive modeling.",
        details: [
          "R programming language basics",
          "Data manipulation with tidyverse",
          "Statistical modeling and machine learning packages",
        ],
        duration: "3 Months",
        price: "₹15,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Machine Learning with R",
          short_desc:
            "Apply ML workflows in R for data analysis and predictive modeling.",
          details: [
            "R programming language basics",
            "Data manipulation with tidyverse",
            "Statistical modeling and machine learning packages",
          ],
          why_choose_this_course:
            "This course is designed for students who want to learn how to apply machine learning workflows using the R programming language.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its clear explanations and practical approach to learning machine learning with R.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Machine Learning with Python",
        short_desc:
          "Use Python tools and frameworks to develop practical ML models.",
        details: [
          "Python libraries for data analysis (NumPy, Pandas)",
          "Scikit-learn for machine learning",
          "Deep learning frameworks (TensorFlow, PyTorch)",
        ],
        duration: "5 Months",
        price: "₹28,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Machine Learning with Python",
          short_desc:
            "Use Python tools and frameworks to develop practical ML models.",
          details: [
            "Python libraries for data analysis (NumPy, Pandas)",
            "Scikit-learn for machine learning",
            "Deep learning frameworks (TensorFlow, PyTorch)",
          ],
          why_choose_this_course:
            "This course is designed for learners who want to build and deploy machine learning solutions using Python.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students rate this course highly for practical coding exercises and real-world machine learning workflows.",
        },
      },
    ],
  },
  {
    category: "Design",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Graphic Design",
        short_desc:
          "Learn design fundamentals and tools to create visual assets.",
        details: ["Design principles and elements", "Adobe Illustrator basics"],
        duration: "2 Months",
        price: "₹11,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Graphic Design",
          short_desc:
            "Learn design fundamentals and tools to create visual assets.",
          details: [
            "Design principles and elements",
            "Adobe Illustrator basics",
          ],
          why_choose_this_course:
            "This course helps learners build strong visual design fundamentals with hands-on creative tasks.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Learners appreciate the structured approach and practical assignments for building a design portfolio.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "UI/UX Design",
        short_desc:
          "Design intuitive user interfaces and improve digital user experiences.",
        details: [
          "User interface design fundamentals",
          "Usability principles",
          "Prototyping tools (Adobe XD, Sketch)",
        ],
        duration: "2 Months",
        price: "₹12,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "UI/UX Design",
          short_desc:
            "Design intuitive user interfaces and improve digital user experiences.",
          details: [
            "User interface design fundamentals",
            "Usability principles",
            "Prototyping tools (Adobe XD, Sketch)",
          ],
          why_choose_this_course:
            "This course is ideal for learners who want to design user-friendly and visually polished digital products.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students highlight the project-based learning and better understanding of user-centered design practices.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "3D Modeling and Animation (using Blender)",
        short_desc:
          "Create 3D models and animations using Blender from scratch.",
        details: [
          "Introduction to Blender interface",
          "Modeling techniques",
          "Animation principles",
        ],
        duration: "3 Months",
        price: "₹17,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "3D Modeling and Animation (using Blender)",
          short_desc:
            "Create 3D models and animations using Blender from scratch.",
          details: [
            "Introduction to Blender interface",
            "Modeling techniques",
            "Animation principles",
          ],
          why_choose_this_course:
            "This course supports beginners in building 3D modeling and animation skills with step-by-step guidance.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Learners enjoy the clear Blender workflow and practical animation exercises throughout the course.",
        },
      },
    ],
  },
  {
    category: "Self Enchancment Zone",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Spoken English",
        short_desc:
          "Improve spoken English fluency, grammar, and confidence for daily use.",
        details: [
          "Speaking and pronunciation basics",
          "Grammar and sentence structure",
          "Confidence building in speaking",
        ],
        duration: "12 Months",
        price: "₹4999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Spoken English",
          short_desc:
            "Improve spoken English fluency, grammar, and confidence for daily use.",
          details: [
            "Speaking and pronunciation basics",
            "Grammar and sentence structure",
            "Confidence building in speaking",
          ],
          why_choose_this_course:
            "This course helps learners build communication confidence for academics, interviews, and daily conversations.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students value the confidence-building activities and practical speaking sessions.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Discord Management and Bot Management",
        short_desc:
          "Manage Discord communities, bots, and moderation effectively.",
        details: [
          "Managing Discord servers",
          "Creating and managing bots",
          "Server moderation and security",
        ],
        duration: "2 Months",
        price: "₹11,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Discord Management and Bot Management",
          short_desc:
            "Manage Discord communities, bots, and moderation effectively.",
          details: [
            "Managing Discord servers",
            "Creating and managing bots",
            "Server moderation and security",
          ],
          why_choose_this_course:
            "This course is great for learners who want to manage online communities with automation and moderation best practices.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Learners report better server management skills and confidence in bot workflows.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Operating Systems",
        short_desc:
          "Understand core OS concepts including processes and memory management.",
        details: [
          "Introduction to operating systems",
          "Process management",
          "Memory management",
          "Operating Systems",
        ],
        duration: "4 Months",
        price: "₹12,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Operating Systems",
          short_desc:
            "Understand core OS concepts including processes and memory management.",
          details: [
            "Introduction to operating systems",
            "Process management",
            "Memory management",
            "Operating Systems",
          ],
          why_choose_this_course:
            "This course builds a strong foundation in OS concepts essential for programming and system design interviews.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students appreciate the simplified explanations of complex operating system concepts.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "GitHub & GitLab",
        short_desc:
          "Learn version control workflows for team collaboration and projects.",
        details: [
          "Introduction to Git and GitHub",
          "Version control basics",
          "Collaboration workflows",
        ],
        duration: "2 Months",
        price: "₹2,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "GitHub & GitLab",
          short_desc:
            "Learn version control workflows for team collaboration and projects.",
          details: [
            "Introduction to Git and GitHub",
            "Version control basics",
            "Collaboration workflows",
          ],
          why_choose_this_course:
            "This course is ideal for learners who want to collaborate efficiently and manage code changes professionally.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Learners mention strong improvement in collaborative workflows and Git confidence.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Canva Design",
        short_desc:
          "Design social posts and presentations quickly using Canva.",
        details: [
          "Introduction to Canva",
          "Design principles and best practices",
          "Creating presentations and social media graphics",
        ],
        duration: "2 Months",
        price: "₹1,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Canva Design",
          short_desc:
            "Design social posts and presentations quickly using Canva.",
          details: [
            "Introduction to Canva",
            "Design principles and best practices",
            "Creating presentations and social media graphics",
          ],
          why_choose_this_course:
            "This course helps learners create polished visual content quickly without advanced design tools.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students like the practical templates and quick design workflow covered in sessions.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Advanced PowerPoint",
        short_desc:
          "Create professional decks with advanced formatting and animations.",
        details: [
          "Advanced formatting techniques",
          "Animations and transitions",
          "Data visualization in PowerPoint",
        ],
        duration: "3 Months",
        price: "₹2,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Advanced PowerPoint",
          short_desc:
            "Create professional decks with advanced formatting and animations.",
          details: [
            "Advanced formatting techniques",
            "Animations and transitions",
            "Data visualization in PowerPoint",
          ],
          why_choose_this_course:
            "This course is designed for learners who want to present ideas clearly with impactful and professional slide decks.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Learners report significant improvement in presentation quality and confidence.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Photoshop : Basic to Advanced",
        short_desc:
          "Master Photoshop from basics to advanced editing and compositing.",
        details: [
          "Introduction to Photoshop",
          "Image editing and retouching",
          "Working with layers and masks",
          "Advanced photo manipulation techniques",
          "Creating digital art and composites",
        ],
        duration: "4 Months",
        price: "₹10,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Photoshop : Basic to Advanced",
          short_desc:
            "Master Photoshop from basics to advanced editing and compositing.",
          details: [
            "Introduction to Photoshop",
            "Image editing and retouching",
            "Working with layers and masks",
            "Advanced photo manipulation techniques",
            "Creating digital art and composites",
          ],
          why_choose_this_course:
            "This course is ideal for creatives who want complete Photoshop proficiency for design and editing projects.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students love the balance of fundamentals and advanced creative editing techniques.",
        },
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        name: "Lightroom : Basic to Advanced",
        short_desc:
          "Edit and organize photos professionally with Lightroom workflows.",
        details: [
          "Introduction to Lightroom",
          "Importing and organizing photos",
          "Basic and advanced editing techniques",
        ],
        duration: "2 Months",
        price: "₹10,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Lightroom : Basic to Advanced",
          short_desc:
            "Edit and organize photos professionally with Lightroom workflows.",
          details: [
            "Introduction to Lightroom",
            "Importing and organizing photos",
            "Basic and advanced editing techniques",
          ],
          why_choose_this_course:
            "This course is for learners who want efficient and professional photo editing workflows with Lightroom.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Learners appreciate the practical editing guidance and workflow-focused lessons.",
        },
      },
    ],
  },
];

const COURSE_FALLBACK_IMAGE = "/public/assets/images/img/thumb.png";

const COURSE_CATEGORY_META = {
  "Coding Language Course": { icon: "ri-code-s-slash-line", label: "Coding" },
  "Web Development": { icon: "ri-layout-4-line", label: "Web" },
  "Mathematical Aptitude": { icon: "ri-function-line", label: "Math" },
  "ML/AI": { icon: "ri-cpu-line", label: "AI" },
  Design: { icon: "ri-palette-line", label: "Design" },
  "Self Enchancment Zone": { icon: "ri-rocket-line", label: "Growth" },
};

function getCourseCoverImage(course) {
  return course.coverImage || COURSE_FALLBACK_IMAGE;
}

function getCourseTitle(course) {
  return course.title || course.name || "Untitled Course";
}

export function createCourseSlug(name) {
  return String(name || "course")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeCourseItem(course) {
  const name = getCourseTitle(course);
  const details =
    Array.isArray(course.details) && course.details.length > 0
      ? course.details
      : ["Structured learning path designed for practical skill growth."];
  const short_desc =
    course.short_desc ||
    course.Short_desc ||
    course.shortDescription ||
    `${name}: ${details[0]}`;
  const certificationAvailabilityRaw =
    course.view_details?.certification_available ??
    course.view_details?.certificationAvailable ??
    course.certificationAvailable ??
    "n";
  const certificationAvailable =
    certificationAvailabilityRaw === true ||
    String(certificationAvailabilityRaw).toLowerCase() === "y";

  const view_details = {
    cover:
      course.view_details?.cover || course.coverImage || COURSE_FALLBACK_IMAGE,
    title: course.view_details?.title || name,
    shortDescription:
      course.view_details?.short_desc ||
      course.view_details?.shortDescription ||
      short_desc,
    details:
      Array.isArray(course.view_details?.details) &&
      course.view_details.details.length > 0
        ? course.view_details.details
        : details,
    whyChooseThisCourse:
      course.view_details?.why_choose_this_course ||
      course.view_details?.whyChooseThisCourse ||
      course.whyChooseThisCourse ||
      "Hands-on sessions, mentor guidance, and practical projects to build job-ready skills.",
    certificationAvailable,
    certificationCost:
      course.view_details?.certification_cost ||
      course.view_details?.certificationCost ||
      course.certificationCost ||
      (certificationAvailable ? "Included" : "N/A"),
    publicReview:
      course.view_details?.public_review ||
      course.view_details?.publicReview ||
      course.publicReview ||
      "Rated highly by learners for clarity, practical content, and mentorship support.",
  };

  return {
    ...course,
    name,
    short_desc,
    Short_desc: short_desc,
    details,
    duration: course.duration || "TBD",
    price: course.price || "TBD",
    link: course.link || "#",
    view_details,
  };
}

export const normalizedCourses = courses.map((group) => ({
  ...group,
  items: Array.isArray(group.items) ? group.items.map(normalizeCourseItem) : [],
}));

function hashSeed(seedText) {
  return seedText.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function createCourseThumbnail(seedText, title, categoryLabel) {
  const seed = hashSeed(seedText);
  const hueA = seed % 360;
  const hueB = (seed * 1.7) % 360;
  const initials =
    title
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() || "")
      .join("") || "C";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${hueA}, 85%, 55%)"/>
          <stop offset="100%" stop-color="hsl(${hueB}, 85%, 45%)"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#bg)"/>
      <rect x="36" y="36" width="1128" height="603" rx="24" fill="rgba(0,0,0,0.16)"/>
      <text x="70" y="150" font-size="46" font-family="Arial, sans-serif" fill="white" opacity="0.9">${categoryLabel}</text>
      <text x="70" y="325" font-size="170" font-family="Arial, sans-serif" font-weight="700" fill="white">${initials}</text>
      <text x="70" y="530" font-size="58" font-family="Arial, sans-serif" font-weight="600" fill="white">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getUniqueCourseCoverImage(course, category, index) {
  if (course.coverImage) {
    return course.coverImage;
  }

  const title = getCourseTitle(course);
  const seedText = `${category}-${index}-${title}`;
  return createCourseThumbnail(seedText, title, category);
}

function getCourseShortDescription(course, courseTitle) {
  if (course.view_details?.shortDescription) {
    return course.view_details.shortDescription;
  }

  if (course.short_desc) {
    return course.short_desc;
  }

  if (course.Short_desc) {
    return course.Short_desc;
  }

  if (course.shortDescription) {
    return course.shortDescription;
  }

  if (Array.isArray(course.details) && course.details.length > 0) {
    return `${courseTitle}: ${course.details[0]}`;
  }

  return `${courseTitle}: Structured learning path designed for practical skill growth.`;
}

function getCourseCategoryMeta(category) {
  return (
    COURSE_CATEGORY_META[category] || {
      icon: "ri-book-open-line",
      label: "Course",
    }
  );
}

function createCourseImage(coverImage, title, badgeMeta) {
  const imageWrap = document.createElement("div");
  imageWrap.className =
    "relative w-full h-44 rounded-lg border border-black/10 overflow-hidden mb-4";

  const image = document.createElement("img");
  image.className = "w-full h-full object-cover";
  image.src = sanitizeUrl(coverImage, { allowDataImage: true, fallback: COURSE_FALLBACK_IMAGE });
  image.alt = escapeHtml(title);
  image.loading = "lazy";

  const badge = document.createElement("span");
  badge.className =
    "absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs font-semibold";
  const icon = document.createElement("i");
  icon.className = badgeMeta.icon;
  badge.append(icon, escapeHtml(badgeMeta.label));

  imageWrap.append(image, badge);
  return imageWrap;
}

function getOrCreateCourseDetailsModal() {
  const existing = document.getElementById("courseDetailsModal");
  if (existing) {
    return existing;
  }

  const modal = document.createElement("div");
  modal.id = "courseDetailsModal";
  modal.className =
    "fixed inset-0 z-50 hidden items-center justify-center bg-black/50 px-4";

  const panel = document.createElement("div");
  panel.className =
    "w-full max-w-2xl rounded-xl border border-black/20 bg-white p-6 shadow-lg";

  const head = document.createElement("div");
  head.className = "mb-4 flex items-start justify-between gap-4";

  const title = document.createElement("h3");
  title.id = "courseModalTitle";
  title.className = "text-2xl font-bold text-gray-900";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className =
    "rounded-md border border-black/20 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-black hover:text-white transition-colors";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  head.append(title, closeButton);

  const shortDesc = document.createElement("p");
  shortDesc.id = "courseModalShortDesc";
  shortDesc.className = "mb-4 text-sm text-gray-700";

  const detailsHeading = document.createElement("p");
  detailsHeading.className =
    "mb-2 text-sm font-semibold uppercase tracking-wide text-gray-800";
  detailsHeading.textContent = "Details";

  const detailsList = document.createElement("ul");
  detailsList.id = "courseModalDetails";
  detailsList.className = "mb-4 list-disc space-y-1 pl-5 text-sm text-gray-700";

  const meta = document.createElement("div");
  meta.className = "mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2";

  const duration = document.createElement("p");
  duration.id = "courseModalDuration";
  duration.className =
    "rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-gray-800";

  const price = document.createElement("p");
  price.id = "courseModalPrice";
  price.className =
    "rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-gray-800";

  meta.append(duration, price);

  const buyNow = document.createElement("a");
  buyNow.id = "courseModalBuyNow";
  buyNow.className =
    "inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
  buyNow.textContent = "Buy Now";
  buyNow.target = "_blank";
  buyNow.rel = "noopener noreferrer";

  panel.append(head, shortDesc, detailsHeading, detailsList, meta, buyNow);
  modal.appendChild(panel);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });

  document.body.appendChild(modal);
  return modal;
}

function openCourseDetails(course) {
  const modal = getOrCreateCourseDetailsModal();
  const modalTitle = modal.querySelector("#courseModalTitle");
  const modalShortDesc = modal.querySelector("#courseModalShortDesc");
  const modalDetails = modal.querySelector("#courseModalDetails");
  const modalDuration = modal.querySelector("#courseModalDuration");
  const modalPrice = modal.querySelector("#courseModalPrice");
  const modalBuyNow = modal.querySelector("#courseModalBuyNow");

  if (
    !modalTitle ||
    !modalShortDesc ||
    !modalDetails ||
    !modalDuration ||
    !modalPrice ||
    !modalBuyNow
  ) {
    return;
  }

  modalTitle.textContent = course.name;
  modalShortDesc.textContent = course.short_desc || course.Short_desc || "";
  modalDetails.innerHTML = "";

  course.details.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    modalDetails.appendChild(li);
  });

  modalDuration.textContent = `Duration: ${course.duration}`;
  modalPrice.textContent = `Price: ${course.price}`;
  modalBuyNow.href = sanitizeUrl(course.link || "#");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function renderCourses() {
  const container = document.getElementById("coursesContainer");

  if (!container) {
    return;
  }

  normalizedCourses.forEach((group) => {
    const section = document.createElement("section");
    section.className = "w-full flex flex-col gap-5";

    const heading = document.createElement("h2");
    heading.className = "text-3xl font-bold text-gray-800";
    heading.textContent = group.category;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 gap-6 w-full";

    group.items.forEach((course) => {
      const card = document.createElement("article");
      card.className =
        "bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col justify-between h-full transition-transform hover:scale-105";
      card.dataset.link = course.link;

      const badgeMeta = getCourseCategoryMeta(group.category);
      const courseTitle = getCourseTitle(course);
      const coverImage = getUniqueCourseCoverImage(
        course,
        group.category,
        grid.children.length,
      );
      const imageWrap = createCourseImage(coverImage, courseTitle, badgeMeta);

      const title = document.createElement("h3");
      title.className = "text-xl font-semibold mb-2 text-gray-900";
      title.textContent = courseTitle;

      const shortDescription = document.createElement("p");
      shortDescription.className = "text-sm text-gray-700 leading-relaxed mb-4";
      shortDescription.textContent = getCourseShortDescription(
        course,
        courseTitle,
      );

      const meta = document.createElement("div");
      meta.className =
        "sm:flex items-center sm:justify-between sm:w-full mt-2 pt-3 border-t border-black/10";
      const durationSpan = document.createElement("span");
      durationSpan.className = "inline-flex items-center gap-2 rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-gray-700";
      durationSpan.innerHTML = '<span class="h-2 w-2 rounded-full bg-red-500"></span>';
      durationSpan.append(`Duration: ${course.duration}`);

      const priceSpan = document.createElement("span");
      priceSpan.className = "text-lg font-bold text-gray-900";
      priceSpan.textContent = course.price;
      meta.append(durationSpan, priceSpan);

      const viewButton = document.createElement("a");
      const courseSlug = createCourseSlug(courseTitle);
      viewButton.className =
        "mt-4 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      viewButton.textContent = "View Course";
      viewButton.href = `course-details.html?course=${encodeURIComponent(courseSlug)}`;
      viewButton.setAttribute("aria-label", `View ${courseTitle}`);

      card.append(imageWrap, title, shortDescription, meta, viewButton);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCourses);
} else {
  renderCourses();
}
