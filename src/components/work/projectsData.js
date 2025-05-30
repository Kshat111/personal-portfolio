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
    image: "/src/assets/images/snowshield.png",
    additionalImages: [
      { url: "/src/assets/images/dashboard.png", caption: "Dashboard View" },
      { url: "/src/assets/images/reportincident.png", caption: "Incident Reporting" },
      { url: "/src/assets/images/sosalert.png", caption: "SOS Alert" },
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
    image: "/src/assets/images/bhedchaal.png",
    additionalImages: [
      { url: "/src/assets/images/detection.png", caption: "Detection" },
      { url: "/src/assets/images/panicinjection.png", caption: "Panic Injection" },
      { url: "/src/assets/images/spatialtrans.png", caption: "Spatial Transformation" },
      { url: "/src/assets/images/stampede.png", caption: "Stampede Detection" },
    ]
  },
  {
    id: 3,
    title: "SADAK",
    description: "An AI-powered road condition monitoring system that helps identify and report road damage in real-time.",
    problemStatement: "Road maintenance often suffers from delayed reporting and inefficient monitoring systems. There was a need for an automated solution that could identify and report road conditions and congestion situations promptly.",
    solution: "S.A.D.A.K is a real-time, AI-driven traffic flow optimization and congestion management tool developed for the Karnataka State Police Hackathon. It aims to modernize traffic monitoring by utilizing computer vision and drone footage analysis to detect congestion, identify bottlenecks, evaluate traffic signals at junctions, and assess map engine accuracy. The solution addresses three key sub-problems: Benchmarking map-based traffic predictions against drone-analyzed congestion data. Evaluating junction efficiency after optimizing traffic signal timing. Real-time detection of bottlenecks and encroachments to generate alerts for timely intervention.",
    approach: "The approach of S.A.D.A.K integrates real-time computer vision with multi-source video analysis to monitor, evaluate, and optimize urban traffic conditions. Leveraging pre-trained models like YOLOv8 along with custom-trained encroachment detection on UAV and Indian traffic datasets, the system processes inputs from static images, recorded videos, live RTSP streams, YouTube videos, and webcams. It identifies vehicles, detects bottlenecks based on zone-specific wait times, and benchmarks congestion levels against map engine data. Additionally, specialized modules evaluate traffic signal efficiency at junctions and generate datasets for further analysis, all accessible through a user-friendly Streamlit-based interface for local or web deployment.",
    tags: ["AI", "Computer Vision", "Python", "Streamlit"],
    category: ["AI/ML", "Development"],
    year: 2021,
    featured: true,
    links: [
      { text: "GitHub", url: "https://github.com/that-coding-kid/S.A.D.A.K" },
      { text: "Product", url: "https://sadakapp.streamlit.app/", external: true }
    ],
    image: "/src/assets/images/sadak.png",
    additionalImages: [
      { url: "/src/assets/images/sadak_dash.png", caption: "Dashboard" },
      { url: "/src/assets/images/architecture.png", caption: "Architecture" },
      // { url: "/src/assets/images/sadak-report.png", caption: "Analysis Report" }
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
    image: "/src/assets/images/kanbanboard.jpg",
    additionalImages: [
      { url: "/src/assets/images/kanban.png", caption: "Dashboard" },
      // { url: "/src/assets/images/kanban-task-detail.png", caption: "Task Details" }
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
    image: "/src/assets/images/backend.webp"
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
    image: "/src/assets/images/project7.png"
  }
]; 