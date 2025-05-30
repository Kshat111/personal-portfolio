export const allProjects = [
  {
    id: 1,
    title: "SNOWSHIELD",
    description: "A web application designed to raise awareness about avalanche safety and provide a community-driven platform.",
    problemStatement: "Avalanches pose a significant threat to communities in mountainous regions, with limited access to real-time monitoring and safety information. There was a need for a centralized platform that could provide both educational resources and real-time data.",
    solution: "SNOWSHIELD combines real-time monitoring with educational resources, creating an all-in-one platform for avalanche safety. It features community-reported incidents, SOS alerts services, and comprehensive safety guidelines.",
    approach: "The application was built using React for the frontend and integrates various APIs for weather data and mapping keeping in mind the user experience and accessibility by intervewing various stakeholders.",
    tags: ["React", "D3.js", "Machine Learning", "Real-time Data"],
    category: ["Design", "Development"],
    year: 2025,
    featured: true,
    links: [
      { text: "GitHub", url: "https://github.com/Kshat111/snow-shield-aware" },
      { text: "Product", url: "https://snow-shield.vercel.app/", external: true }
    ],
    image: "/assets/images/snowshield.png",
    additionalImages: [
      { url: "/assets/images/dashboard.png", caption: "Dashboard View" },
      { url: "/assets/images/reportincident.png", caption: "Incident Reporting" },
      { url: "/assets/images/sosalert.png", caption: "SOS Alert" },
    ]
  },
  {
    id: 2,
    title: "BHEDCHAAL",
    description: "An AI-driven solution for crowd analysis and monitoring and panic simulation and detection in large human gathering events.",
    problemStatement: "Design a deep learning and computer vision-based system that processes CCTV footage from large human gatherings (e.g., Kumbh Mela) to: Detect and count pilgrims/pedestrians in real time. Track individual and collective pedestrian paths. Simulate panic situations after a time interval and predict changes in flow dynamics. Analyze pedestrian flow to detect early signs of stampede-like conditions.",
    solution: "It combines advanced computer vision techniques with real-time simulation to analyze human movement patterns from CCTV footage. The system provides top-down visualization, detects crowd anomalies, and simulates panic behavior using physics-based modeling. It is especially valuable for venues with high foot traffic like festivals, railway stations, and religious gatherings, where early intervention can save lives.",
    approach: "The system was built using TensorFlow for the AI model, with a Streamlit frontend for easy interaction. We implemented custom computer vision algorithms and integrated with mapping services for location tracking.",
    tags: ["AI", "Computer Vision", "Python", "Streamlit"],
    category: ["AI/ML", "Development"],
    year: 2025,
    featured: true,
    links: [
      { text: "GitHub", url: "https://github.com/that-coding-kid/BhedChaal" }
    ],
    image: "/assets/images/bhedchaal.png",
    additionalImages: [
      { url: "/assets/images/detection.png", caption: "Detection" },
      { url: "/assets/images/panicinjection.png", caption: "Panic Injection" },
      { url: "/assets/images/spatialtrans.png", caption: "Spatial Transformation" },
      { url: "/assets/images/stampede.png", caption: "Stampede Detection" },
    ]
  },
  {
    id: 3,
    title: "SADAK",
    description: "A comprehensive road safety analysis platform that uses AI to detect road damage and assess infrastructure quality.",
    problemStatement: "Road infrastructure maintenance is often reactive rather than proactive, leading to safety hazards and inefficient resource allocation. There was a need for an automated system to continuously monitor and assess road conditions.",
    solution: "SADAK uses computer vision to analyze road imagery, detecting and classifying various types of damage. It provides detailed reports and visualizations to help authorities prioritize maintenance work.",
    approach: "We developed a custom CNN model for damage detection, integrated with a user-friendly web interface. The system includes features for data visualization and report generation.",
    tags: ["Python", "TensorFlow", "Computer Vision", "Streamlit"],
    category: ["AI/ML", "Development"],
    year: 2024,
    featured: true,
    links: [
      { text: "GitHub", url: "https://github.com/that-coding-kid/S.A.D.A.K" },
      { text: "Product", url: "https://sadakapp.streamlit.app/", external: true }
    ],
    image: "/assets/images/sadak.png",
    additionalImages: [
      { url: "/assets/images/sadak_dash.png", caption: "Dashboard" },
      { url: "/assets/images/architecture.png", caption: "Architecture" },
    ]
  },
  {
    id: 4,
    title: "KANBAN BOARD",
    description: "A modern, intuitive Kanban board application for efficient project and task management.",
    problemStatement: "Teams needed a flexible and user-friendly tool for visualizing and managing their workflow. Existing solutions were either too complex or lacked important features.",
    solution: "The Kanban Board provides a clean, drag-and-drop interface for task management, with features like custom columns, task categorization, and swimlanes with drag and drop functionality.",
    approach: "Built using React with a focus on smooth animations and intuitive interactions. Implemented real-time updates using WebSocket connections and includes features for data persistence and team synchronization.",
    tags: ["React", "DnD", "Real-time", "UI/UX"],
    category: ["Development", "UI/UX"],
    year: 2024,
    featured: true,
    links: [
      { text: "GitHub", url: "https://github.com/Kshat111/kanban-board" },
      { text: "Product", url: "https://61jsolapa0rxp8qs.vercel.app/", external: true }
    ],
    image: "/assets/images/kanbanboard.jpg",
    additionalImages: [
      { url: "/assets/images/kanban.png", caption: "Dashboard" },
    ]
  },
  {
    id: 5,
    title: "BACKEND PROJECTS",
    description: "This is my collection of backend services and APIs built using various technologies and architectural patterns.",
    problemStatement: "Modern applications require robust, scalable, and secure backend services. This collection demonstrates different approaches to common backend challenges.",
    solution: "Various backend services implementing different architectural patterns, authentication systems, and database solutions.",
    approach: "Each project uses different tech stacks including Node.js, Python, and Go, implementing RESTful APIs, GraphQL, and microservices architectures.",
    tags: ["Node.js", "Python", "Go", "Microservices"],
    category: ["Development", "Backend"],
    year: 2024,
    featured: false,
    links: [
      { text: "Caching Server", url: "https://github.com/Kshat111/caching-server" },
      { text: "Movie Reservation API", url: "https://github.com/Kshat111/movie-reservation-api", external: true },
      { text: "Expense Tracker API", url: "https://github.com/Kshat111/Expense-Tracker-API", external: true },
    ],
    image: "/public/assets/images/backend.webp"
  },

  {
    id: 6,
    title: "ENHANCED GEN-DET",
    description: "This is a neural-network-based framework designed to detect AI-generated images by analyzing feature discrepancies between a teacher model (trained on real images) and a student model (trained to replicate the teacher)",
    problemStatement: "As AI-generated imagery becomes more realistic and widespread, distinguishing synthetic content from authentic photographs has become increasingly challenging. Traditional classifiers struggle with generalization across different generators, and high-dimensional embeddings often result in computational inefficiency and overfitting.",
    solution: "The solution lies in leveraging the discrepancy between a teacher-student neural architecture to spot inconsistencies indicative of AI generation. Enhanced-GenDet compresses high-dimensional CLIP embeddings using an autoencoder and uses this reduced representation to train classifiers that are sensitive to subtle differences between real and fake images. The framework includes tools for statistical evaluation and visual analysis, making it adaptable and insightful for detecting generative model artifacts.",
    approach: "I can not reveal the approach and code as it is a part of my research paper.",
    tags: ["AI", "Computer Vision", "Python", "Streamlit"],
    category: ["AI/ML", "Development"],
    year: 2025,
    featured: false,
    links: [
      // { text: "No Links as of now", url: "", external: false }
    ],
    image: "/public/assets/images/project7.png"
  }
]; 