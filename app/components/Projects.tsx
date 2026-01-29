import { em } from "motion/react-client";
import ProjectCard from "./ProjectCard";
import SpotlightCard from "./SpotlightCard";

export default function Projects() {
  const projectsList: any[] = [
    {
      title: "Borrowin",
      description:
        "A fintech platform frontend focused on complex loan application workflows.",
      liveUrl: "https://borrowin.in",
      githubUrl: "", // private / not applicable
      imageUrl: "images/borrowin.png",
      tags: [
        "Freelance",
        "Frontend",
        "FinTech",
        "Forms",
        "UI/UX",
        "Responsive Design",
      ],
      color: "from-teal-600 to-emerald-700",
      SpotlightColor: "rgba(13,148,136,.5)",
      details: {
        fullDescription:
          "Borrowin is a digital lending platform where I worked specifically on building and maintaining a complex frontend system. My work focused on implementing multi-step loan application forms, handling extensive user inputs, and delivering a clean, intuitive, and responsive user interface suitable for a fintech product.",
        technologies: [
          "React / Modern frontend framework",
          "TypeScript",
          "Tailwind CSS",
          "Form validation libraries",
          "REST API integration",
        ],
        features: [
          "Multi-step loan application forms",
          "Complex form validation and error handling",
          "User-friendly and accessible UI design",
          "Responsive layouts for mobile and desktop",
          "Consistent design system across pages",
          "Smooth user flow for data-heavy forms",
        ],
        challenges:
          "Managing complex form state, validations, and conditional flows without degrading user experience. Ensuring clarity and usability in data-heavy fintech forms required careful UI structuring and attention to edge cases.",
        outcome:
          "Delivered a clean, scalable frontend with well-structured forms and a smooth user experience, supporting real-world fintech workflows and improving usability for loan applicants.",
      },
    },
    {
      title: "Tech Log",
      description:
        "TechLog is a real-time platform for creating, sharing, and discussing tech logs.",
      liveUrl: "https://medium-ecru-six.vercel.app",
      githubUrl: "https://github.com/Darshan98Solanki/medium",
      imageUrl: "images/medium.png",
      tags: [
        "React",
        "Hono",
        "Node",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      color: "from-sky-500 to-indigo-600",
      SpotlightColor: "rgba(56,189,248,.55)",
      details: {
        fullDescription:
          "TechLog is a collaborative platform for creating, sharing, and discussing technical content. It enables authenticated users to publish logs, engage in real-time discussions, and manage their profiles through a clean and responsive interface built with Tailwind CSS.",
        technologies: [
          "React",
          "Hono",
          "Node",
          "TypeScript",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
        ],
        features: [
          "Secure user authentication and authorization",
          "Create, edit, and publish tech logs (posts)",
          "Real-time interactions and discussions",
          "User profile management and updates",
          "Responsive and accessible UI built with Tailwind CSS",
          "Structured backend with Prisma and PostgreSQL",
        ],
        challenges:
          "Designing a scalable data model for logs and user interactions while maintaining performance. Ensuring secure authentication flows and consistent real-time updates required careful backend and state management.",
        outcome:
          "The platform delivers a smooth content publishing and discussion experience, enabling users to share technical knowledge efficiently with reliable performance and clean UI interactions.",
      },
    },
    {
      title: "PayDm",
      description:
        "PayDm is a Paytm-inspired app enabling secure peer-to-peer money transfers.",
      liveUrl: "https://paytm-axue.vercel.app",
      githubUrl: "https://github.com/Darshan98Solanki/paytm",
      imageUrl: "images/paydm.png",
      tags: [
        "React",
        "TypeScript",
        "Node",
        "Express",
        "MongoDB",
        "Prisma",
        "Tailwind CSS",
      ],
      color: "from-violet-500 to-fuchsia-600",
      SpotlightColor: "rgba(168,85,247,.55)",
      details: {
        fullDescription:
          "PayDm is a Paytm-like digital wallet application where users can register, receive initial signup balance, and securely transfer money to other registered users. The system focuses on authentication, transaction integrity, and a clean user experience.",
        technologies: [
          "TypeScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Prisma",
          "Tailwind CSS",
        ],
        features: [
          "User signup and authentication",
          "Initial signup balance allocation",
          "Peer-to-peer money transfers",
          "Real-time balance updates",
          "Transaction validation and error handling",
          "Responsive UI with Tailwind CSS",
        ],
        challenges:
          "Ensuring transactional consistency during money transfers and preventing race conditions. Designing secure APIs for balance updates while maintaining a smooth user experience required careful backend validation.",
        outcome:
          "The project successfully simulates a digital wallet system with reliable transfers, clear transaction flows, and a scalable backend structure suitable for real-world fintech applications.",
      },
    },
    {
      title: "Chat-Dash",
      description:
        "Chat-Dash is a anonymous real-time chat application supporting rooms and live messaging.",
      liveUrl: "https://chat-dash-1.onrender.com",
      githubUrl: "https://github.com/Darshan98Solanki/chat-dash",
      imageUrl: "images/chat-dash.png",
      tags: ["WebSocket", "React", "TypeScript", "Node", "Tailwind CSS"],
      color: "from-teal-400 to-cyan-500",
      SpotlightColor: "rgba(45,212,191,.5)",
      details: {
        fullDescription:
          "Chat-Dash is a full-stack real-time chat application that allows users to join chat rooms and exchange messages instantly. The backend manages WebSocket connections, rooms, and message broadcasting, while the frontend delivers a clean, responsive chat experience.",
        technologies: [
          "TypeScript",
          "React",
          "Node.js",
          "WebSocket",
          "Tailwind CSS",
        ],
        features: [
          "Real-time messaging using WebSockets",
          "Multiple chat room support",
          "Live message broadcasting",
          "Persistent WebSocket connections",
          "Responsive and minimal UI",
          "Type-safe frontend and backend communication",
        ],
        challenges:
          "Managing WebSocket connections efficiently while handling multiple chat rooms and concurrent users. Preventing message duplication and ensuring consistent real-time updates required careful server-side event handling.",
        outcome:
          "The application delivers low-latency real-time communication with a stable WebSocket architecture and a polished UI, demonstrating strong understanding of real-time systems and full-stack development.",
      },
    },
    {
      title: "Short-URI",
      description:
        "Short-URI is a URL shortening service with a simple, clean interface.",
      liveUrl: "https://short-uri-q5yh.vercel.app",
      githubUrl: "https://github.com/Darshan98Solanki/short-uri", // adjust if needed
      imageUrl: "images/short-uri.png",
      tags: ["React", "Node", "MySQL", "Tailwind CSS"],
      color: "from-amber-400 to-orange-500",
      SpotlightColor: "rgba(251,191,36,.5)",
      details: {
        fullDescription:
          "Short-URI is a full-stack URL shortening application that converts long URLs into short, shareable links. The backend handles URL generation, storage, and redirection logic, while the frontend provides a minimal and intuitive user experience.",
        technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
        features: [
          "Generate short URLs from long links",
          "Fast redirection to original URLs",
          "Persistent URL storage using MySQL",
          "Clean and minimal user interface",
          "Responsive design with Tailwind CSS",
        ],
        challenges:
          "Designing a reliable short-code generation strategy while avoiding collisions. Ensuring fast lookups and redirects required careful database indexing and backend logic.",
        outcome:
          "The project delivers a reliable URL shortening service with fast redirects, a straightforward UI, and a solid backend foundation suitable for real-world usage.",
      },
    },
    {
      title: "Stock Market Screener",
      description:
        "A Python-based stock screener for NSE and BSE using technical strategies.",
      liveUrl: "",
      githubUrl: "",
      imageUrl: "images/stocks.jpg",
      tags: ["Python", "Pandas", "NumPy", "talib", "yfinance"],
      color: "from-emerald-400 to-green-500",
      SpotlightColor: "rgba(16,185,129,.5)",
      details: {
        fullDescription:
          "Stock Market Screener is a Python-based analytical tool designed to filter NSE and BSE stocks based on predefined technical analysis strategies. It leverages market data to help shortlist stocks that meet specific indicator-driven conditions.",
        technologies: [
          "Python",
          "Pandas",
          "NumPy",
          "Talib",
          "yfinance",
          "Google Colab",
        ],
        features: [
          "Screen NSE and BSE stocks programmatically",
          "Apply technical indicator-based strategies",
          "Fetch historical market data using yfinance",
          "Efficient data processing with Pandas and NumPy",
          "Strategy-driven stock shortlisting",
        ],
        challenges:
          "Handling incomplete or inconsistent market data while maintaining indicator accuracy. Optimizing performance for processing large stock universes required efficient data handling and vectorized operations.",
        outcome:
          "The project enables systematic stock screening using technical analysis, providing a reproducible and data-driven approach to evaluating investment opportunities.",
        embeddedLink:
          "https://colab.research.google.com/drive/1KJcXG3Zk7YkX3K3l0nVbWcvn3F4h8g0e?usp=sharing",
      },
    },
    {
      title: "Interactive Quiz System",
      description:
        "A computer vision–based quiz system controlled using hand gestures.",
      liveUrl: "",
      githubUrl: "https://github.com/Darshan98Solanki/Quiz-System-OpenCV",
      imageUrl: "images/quiz.png",
      tags: ["Python", "OpenCV", "CVZone", "Computer Vision"],
      color: "from-indigo-600 to-purple-800",
      SpotlightColor: "rgba(99,102,241,.45)",
      details: {
        fullDescription:
          "The Interactive Quiz System is a computer vision–driven application that enables users to participate in quizzes using hand gestures instead of traditional input devices. It leverages real-time video processing to detect gestures and translate them into quiz interactions.",
        technologies: ["Python", "OpenCV", "CVZone"],
        features: [
          "Gesture-based quiz interaction",
          "Real-time hand detection and tracking",
          "Contactless user input using a webcam",
          "Visual feedback for quiz responses",
          "Accessible and immersive interaction model",
        ],
        challenges:
          "Achieving reliable hand gesture detection under varying lighting conditions and camera quality. Maintaining low-latency real-time processing required efficient frame handling and optimized detection logic.",
        outcome:
          "The system successfully demonstrates practical use of computer vision for human-computer interaction, delivering an engaging and hands-free quiz experience.",
      },
    },
    {
      title: "Space Invaders",
      description:
        "A modern Space Invaders game built using Python and Pygame.",
      liveUrl: "",
      githubUrl: "https://github.com/Darshan98Solanki/Space-Invaders-Game", 
      imageUrl: "images/space-invaders.png",
      tags: ["Python", "Pygame", "Game Development"],
      color: "from-lime-400 to-green-600",
      SpotlightColor: "rgba(132,204,22,.5)",
      details: {
        fullDescription:
          "Space Invaders is a modern implementation of the classic arcade game developed using Python and the Pygame library. Players control a spaceship and must defend against continuous waves of alien invaders while aiming to achieve the highest possible score.",
        technologies: ["Python", "Pygame"],
        features: [
          "Classic Space Invaders gameplay mechanics",
          "Keyboard-based player controls",
          "Multiple waves of alien enemies",
          "Collision detection and scoring system",
          "Increasing difficulty over time",
          "Game loop and real-time rendering using Pygame",
        ],
        challenges:
          "Managing real-time game loops, collision detection, and performance optimization within Pygame. Balancing difficulty progression while maintaining smooth gameplay required careful tuning.",
        outcome:
          "The project successfully recreates a classic arcade experience with modern structure, demonstrating strong fundamentals in game logic, event handling, and real-time rendering using Python.",
      },
    },
  ];

  return (
    <section id="project" className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project, index) => (
            <div key={index}>
              <SpotlightCard
                spotlightColor={project.SpotlightColor}
                className="p-4"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  details={project.details}
                  color={project.color}
                />
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
