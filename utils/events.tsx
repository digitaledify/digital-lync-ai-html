import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { ReactNode } from "react"

// Update the Event interface to include the link property
export interface IEvent {
  id: number
  title: string
  subtitle: string
  start: string
  end: string
  tag: string
  topics: string[]
  image: string
  link: string
}
type TeamMember = {
  name: string;
  role: string;
  description: string;
  description1: string;
  imageUrl: string;
  avatarUrl: string;
};

// Update the events array to include the link property for each event
export const events: IEvent[] = [
  {
    id: 1,
    title: "FullStack with AI",
    subtitle: "FullStack with AI Master Class to Build Modern Applications",
    start: "April 19, 2025, 5:00 PM IST",
    end: "8:00 PM IST",
    tag: "FullStack with AI Master Class",
    topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
    image: "/assets/Event/c1.jpg",
    link: "fullstack-ai-masterclass",
  },
  {
    id: 2,
    title: "DevOps",
    subtitle: "Roadmap to DevOps",
    start: "April 19, 2025, 5:00 PM IST",
    end: "8:00 PM IST",
    tag: "Java",
    topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
    image: "/assets/Event/c2.jpg",
    link: "devops-masterclass",
  },
  {
    id: 3,
    title: "Python",
    subtitle: "Roadmap to Fullstack Python",
    start: "April 19, 2025, 5:00 PM IST",
    end: "8:00 PM IST",
    tag: "Java",
    topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
    image: "/assets/Event/c3.jpg",
    link: "python-fullstack",
  },
  {
    id: 4,
    title: "Java",
    subtitle: "Roadmap to Fullstack Python",
    start: "April 19, 2025, 5:00 PM IST",
    end: "8:00 PM IST",
    tag: "Java",
    topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
    image: "/assets/Event/c4.jpg",
    link: "java-fullstack",
  },
  {
    id: 5,
    title: "DevOps",
    subtitle: "Roadmap to Fullstack Python",
    start: "April 19, 2025, 5:00 PM IST",
    end: "8:00 PM IST",
    tag: "Java",
    topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
    image: "/assets/Event/c5.jpg",
    link: "advanced-devops",
  },
  {
    id: 6,
    title: "Python",
    subtitle: "Roadmap to Fullstack Python",
    start: "April 19, 2025, 5:00 PM IST",
    end: "8:00 PM IST",
    tag: "Java",
    topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
    image: "/assets/Event/c6.jpg",
    link: "python-data-science",
  },
]

// Update the EventDetail interface to include the link property
export interface IEventDetail {
  id: number
  title: string
  titleHeader?: string
  subtitle: string
  topics: string
  date: string
  heroImage: string
  link: string
  about: {
    description: string
    image: string
    features: {
      title: string
      description: string
    }[]
  }
  slider: TeamMember[]
  benefits: {
    items: {
      title: string
      description: string
    }[]
  }
  audience: {
    groups: string[]
    image: string
  }
  highlights: {
    items: {
      id: string
      title: string
      description: string
    }[]
  }
  jobRoles: {
    subtitle: string
    description: string
    roles: {
      title: string
      description: string
      icon: ReactNode
    }[]
  }
  faqs: {
    question: string
    answer: string
  }[]
}

// Change the eventDetails from a Record to an array
export const eventDetails: IEventDetail[] = [
  {
    id: 1,
    link: "fullstack-ai-masterclass",
    title: "FullStack with AI Master Class to Build Modern Applications",
    subtitle: "Comprehensive Full-Stack Coverage",
    topics: "Java | Python | MERN | MEAN | UX | GenAI",
    date: "Date: Saturday, May 03, 2025 Time: 10:00 AM - 12:00 PM IST",
    heroImage: "/assets/Event/evenimg.jpg",

    about: {
      description:
        "The future of apps is FullStack + GenAI. Get a first look at cutting-edge development in Digital Edify's FREE Demo Master Class. See how to ignite your potential and transform your career.",
      image: "/assets/Event/system.jpg",
      features: [
        {
          title: 'FullStack Java',
          description: 'Building robust, scalable enterprise-level applications.',
        },
        {
          title: 'FullStack Python',
          description: "Leveraging Python's versatility for rapid web development and backend systems.",
        },
        {
          title: 'FullStack MERN',
          description: 'Mastering the MongoDB, Express.js, React, and Node.js ecosystem for dynamic UIs.',
        },
        {
          title: 'FullStack MEAN',
          description: 'Understanding the MongoDB, Express.js, Angular, and Node.js stack for powerful web apps.',
        },
        {
          title: 'FullStack UX',
          description: 'Designing user-centric, intuitive interfaces that drive engagement.',
        },
        {
          title: 'FullStack With GenAI',
          description: 'Integrating GenAI for code generation, automated testing, intelligent deployment strategies, and more across the complete Application Lifecycle.',
        },
      ],
    },

    benefits: {
      items: [
        {
          title: 'Master Multiple FullStack Ecosystems',
          description: 'Gain proficiency across diverse and in-demand technology stacks including Java, Python, MERN, and MEAN.',
        },
        {
          title: 'Utilize AI Agents Practically',
          description: 'Understand the application of AI Agents across the entire software development lifecycle (SDLC).',
        },
        {
          title: 'Develop User-Centric Applications',
          description: 'Learn essential FullStack User Experience (UX) principles to design and build intuitive and engaging applications.',
        },
        {
          title: 'Build Modern, Intelligent Apps',
          description: 'Learn to combine robust full-stack techniques with AI capabilities to create next-generation applications.',
        },
        {
          title: 'Integrate Cutting-Edge AI',
          description: 'Discover how to effectively leverage Generative AI within the development workflow.',
        },
        {
          title: 'Enhance Development Efficiency',
          description: 'See how GenAI can streamline and accelerate various phases of application creation, from ideation to deployment.',
        },
      ],
    },

    slider: [
      {
        name: "Manikanta Kona",
        role: "Founder & Chief Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Ravi Vetagiri",
        role: "CEO",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Bharat Sreeram",
        role: "AI Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      {
        name: "Arjun",
        role: "CRM Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/akhil.webp", // replace with your image
      },
      {
        name: "Praveen",
        role: "Full Stack Architect & Trainer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Lakshmi",
        role: "GenAi Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Murali",
        role: "Sr Platform Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      // You can add more team members here
    ],

    audience: {
      groups: [
        "Aspiring Developers looking to break into Full-Stack roles.",
        "Experienced Engineers aiming to upskill with Generative AI.",
        "Product Managers & UX Designers curious about AI-powered workflows.",
        "Tech Enthusiasts eager to stay ahead of industry trends.",
        "Anyone wanting to Skill or Upskill in high-demand tech!"
      ],
      image: "/assets/Event/attend.jpg",
    },

    highlights: {
      items: [
        {
          id: "01",
          title: "Cutting-Edge Curriculum",
          description: "Get exclusive insights into what's driving the industry right now",
        },
        {
          id: "02",
          title: "Real-Time Interaction",
          description: "Live Q&A sessions with experts and immediate feedback on your questions",
        },
        {
          id: "03",
          title: "Actionable Takeaways",
          description: "Walk away with practical, field-proven strategies you can apply from day one",
        },
        {
          id: "04",
          title: "Flexible Format",
          description:
            "Join conveniently from anywhere online—perfect for busy professionals with unpredictable schedules",
        },
        {
          id: "05",
          title: "End-to-End Skill Showcase",
          description: "See the complete full-stack journey, from concept to deployment, with detailed explanations",
        },
        {
          id: "06",
          title: "Focus on Live Demonstration",
          description:
            "Experience hands-on examples that demonstrate real techniques in a live environment - not just theory",
        },
      ],
    },

    jobRoles: {
      subtitle: "Get the right training, grab the best opportunities",
      description:
        "Go from learning to earning – our courses are designed to jumpstart your career with practical results.",
      roles: [
        {
          icon: <Image src="/assets/Event/JobRole/di1.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'Full Stack Developer',
          description: 'Full Stack Developer, you can take on roles like frontend/backend developer, AI web developer, DevOps engineer, and software engineer, building scalable, intelligent web apps across various industries.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di2.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'Front-End Developer',
          description: 'Full Stack Developer, you can take on roles like frontend/backend developer, AI web developer, DevOps engineer, and software engineer, building scalable, intelligent web apps across various industries.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di3.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Back-End Developer',
          description: 'Back-End Developer, you’ll build and manage server-side logic, databases, and APIs to ensure seamless functionality and performance of web applications.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di4.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'DevOps Engineer',
          description: 'DevOps Engineer, you’ll automate workflows, manage deployments, and ensure smooth integration and delivery of applications across development and production environments.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di5.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Software Engineer',
          description: 'Software Engineer, you’ll design, develop, and maintain software systems that solve real-world problems and power modern digital experiences.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di6.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Web Developer',
          description: 'Web Developer, you’ll build and maintain functional, responsive websites and web applications using modern coding practices and web technologies. 4o',
        },
      ],
    },

    faqs: [
      {
        question: "Is this Master Class Demo really free?",
        answer: "Yes, absolutely! This 2-hour introductory Master Class Demo session is completely free of charge. Our goal is to give you a valuable insight into modern FullStack development with GenAI.",
      },
      {
        question: "Who should attend this demo? Is it suitable for beginners?",
        answer: "This demo is ideal for anyone interested in skilling up or upskilling in web development – including aspiring developers, current programmers wanting to learn AI integration, students, and tech enthusiasts. While some familiarity with tech concepts is helpful, deep coding expertise isn't required to grasp the demo's overview.",
      },
      {
        question: "What specific topics will be covered during the 2 hours?",
        answer: "We will provide a high-level overview of key FullStack ecosystems (Java, Python, MERN, MEAN, UX) and focus on demonstrating how Generative AI and AI Agents can be practically applied across the entire application development lifecycle. Expect illustrative examples.",
      },
      {
        question: "Do I need any coding experience or specific software installed for the demo?",
        answer: "No mandatory coding experience is needed to follow the demo's concepts. You also do not need to install any specific software beforehand. Just join with an open mind!",
      },
      {
        question: "Is this demo live? Can I interact and ask questions?",
        answer: "Yes! This is a live, interactive session led by our expert instructors. There will be dedicated time for Q&A where you can ask your questions directly.",
      },
      {
        question: "How do I join the demo? (Online or Hyderabad)",
        answer: "Simply click the registration button above and choose your preferred mode: 'Online' or 'Classroom (Hyderabad)'. After registration, you will receive an email confirmation with the necessary details (a meeting link for online attendees, or the campus address for classroom attendees).",
      },
      {
        question: "What is the \"Personalized Individual Roadmap\"?",
        answer: "This is a unique benefit for attendees. After the demo, we offer a brief follow-up to discuss your background and career goals. Based on this, we'll provide you with a tailored learning roadmap outlining potential next steps to achieve your objectives in the FullStack and AI domain.",
      },
      {
        question: "What if I register but cannot attend the live session? Will there be a recording?",
        answer: "Attending live is highly recommended for the interactive experience and Q&A. However, we suggest you register even if unsure. We will notify registered participants if a recording is made available post-session.",
      },
      {
        question: "How is this free demo different from Digital Edify's full FullStack course?",
        answer: "This 2-hour demo serves as an introduction. It showcases the importance of FullStack with GenAI, our teaching approach, and the scope of our curriculum. Our full courses offer comprehensive, in-depth, hands-on training with projects, mentorship, and career support over a much longer duration.",
      },
      {
        question: "What is the exact date and time of the demo?",
        answer: "The Master Class Demo is scheduled for Saturday, from 10:00 AM to 12:00 PM Indian Standard Time (IST). Please ensure you adjust for your local timezone if joining from outside India.",
      },
    ],
  },

  {
    id: 2,
    link: "platform-engineer-with-ai",
    title: "Platform Engineer With AI",
    titleHeader: "Platform Engineering with AI Master Class to Build Intelligent, Resilient Systems",
    subtitle: "Streamlining Development & Operations with AI",
    topics: "DevOps | Cloud | SRE | MLops | GenAI",
    date: "Date: Saturday, May 03, 2025 Time: 10:00 AM - 12:00 PM IST",
    heroImage: "/assets/Event/evenimg.jpg",

    about: {
      description:
        "The future of technology infrastructure lies in intelligent, automated platforms. Get a first look at cutting-edge Platform Engineering practices enhanced by AI in Digital Edify's FREE Demo Master Class. See how to streamline development workflows, boost reliability, and build future-ready systems.",
      image: "/assets/Event/system.jpg",
      features: [
        {
          title: 'Platform Engineering Foundation (DevOps, Cloud, SRE)',
          description: 'Understanding the core principles and practices that form modern infrastructure platforms.',
        },
        {
          title: 'Cloud with AWS & Azure',
          description: "Leveraging the power of leading cloud providers for scalable and robust platform infrastructure.",
        },
        {
          title: 'AI in DevOps',
          description: 'Automating CI/CD pipelines, intelligent testing strategies, predictive deployment failure detection, and optimizing build processes.',
        },
        {
          title: 'SRE (Site Reliability Engineering)',
          description: 'Enhancing monitoring with intelligent alerting, accelerating root cause analysis using AI insights, predictive incident detection, and enabling automated remediation.',
        },
        {
          title: 'MLops',
          description: 'Integrating the machine learning lifecycle (training, deployment, monitoring, retraining) seamlessly into the platform, managed and optimised with AI techniques.',
        },
        {
          title: 'GenAI in Platform Engineering',
          description: 'Leveraging generative AI for tasks like Infrastructure as Code generation, automated documentation, creating troubleshooting guides, and building intelligent platform assistants',
        },
      ],
    },

    benefits: {
      items: [
        {
          title: 'Understand Core Platform Principles',
          description: 'Grasp the fundamental concepts of Platform Engineering, integrating DevOps, Cloud, and SRE.',
        },
        {
          title: 'Integrate ML Workflows',
          description: 'See how platforms support and manage the MLops lifecycle with AI assistance.',
        },
        {
          title: 'See Cloud in Action',
          description: 'Learn how platforms leverage major cloud providers like AWS and Azure effectively.',
        },
        {
          title: 'Explore Practical AI Applications',
          description: 'Get insights into using AI and GenAI for tangible platform improvements.',
        },
        {
          title: `Learn AI's Role in Reliability`,
          description: 'Understand how AI enhances SRE practices for more resilient systems.',
        },
        {
          title: 'Boost Efficiency & Innovation',
          description: 'Learn how AI enables faster delivery and more robust infrastructure.',
        },
      ],
    },

    slider: [
      {
        name: "Manikanta Kona",
        role: "Founder & Chief Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Ravi Vetagiri",
        role: "CEO",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Bharat Sreeram",
        role: "AI Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      {
        name: "Arjun",
        role: "CRM Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/akhil.webp", // replace with your image
      },
      {
        name: "Praveen",
        role: "Full Stack Architect & Trainer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Lakshmi",
        role: "GenAi Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Murali",
        role: "Sr Platform Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      // You can add more team members here
    ],

    audience: {
      groups: [
        "DevOps Engineers & SREs looking to integrate AI into their workflows.",
        "Cloud Engineers (AWS/Azure specialists) aiming to build intelligent infrastructure.",
        "Software Engineers interested in infrastructure automation and internal platforms.",
        "ML Engineers & Data Scientists seeking better platforms for deploying models.",
        "Infrastructure Architects and Tech Leads designing future systems.",
        "IT Managers overseeing operations and platform teams.",
        "Anyone wanting to Skill or Upskill in modern infrastructure and AI."
      ],
      image: "/assets/Event/attend.jpg",
    },

    highlights: {
      items: [
        {
          id: "01",
          title: "Cutting-Edge Curriculum",
          description: "We uniquely fuse five essential Full-Stack disciplines with practical GenAI integration.",
        },
        {
          id: "02",
          title: "Real-Time Interaction",
          description: "This is a live session! Ask questions and get instant feedback from expert instructors.",
        },
        {
          id: "03",
          title: "Actionable Takeaways",
          description: "Walk away with insights, best practices, and your FREE Personalized Learning Roadmap provided after the session.",
        },
        {
          id: "04",
          title: "Flexible Format",
          description:
            "Join conveniently from anywhere online—or network in person at our Hyderabad campus.",
        },
        {
          id: "05",
          title: "End-to-End Skill Showcase",
          description: "See the complete full-stack journey, from frontend finesse to backend power, demonstrated live.",
        },
        {
          id: "06",
          title: "Focus on Live Demonstration",
          description:
            " Experience hands-on examples and expert commentary, reflecting the actual class environment – not just slides.",
        },
      ],
    },

    jobRoles: {
      subtitle: "Get the right training, grab the best opportunities",
      description:
        "Go from learning to earning – our courses fast-track you to high-paying tech careers with proven results.",
      roles: [
        {
          icon: <Image src="/assets/Event/JobRole/di1.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'Full Stack Developer',
          description: 'Full Stack Developer, you can take on roles like frontend/backend developer, AI web developer, DevOps engineer, and software engineer, building scalable, intelligent web apps across various industries.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di2.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'Front-End Developer',
          description: 'Full Stack Developer, you can take on roles like frontend/backend developer, AI web developer, DevOps engineer, and software engineer, building scalable, intelligent web apps across various industries.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di3.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Back-End Developer',
          description: 'Back-End Developer, you’ll build and manage server-side logic, databases, and APIs to ensure seamless functionality and performance of web applications.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di4.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'DevOps Engineer',
          description: 'DevOps Engineer, you’ll automate workflows, manage deployments, and ensure smooth integration and delivery of applications across development and production environments.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di5.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Software Engineer',
          description: 'Software Engineer, you’ll design, develop, and maintain software systems that solve real-world problems and power modern digital experiences.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di6.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Web Developer',
          description: 'Web Developer, you’ll build and maintain functional, responsive websites and web applications using modern coding practices and web technologies. 4o',
        },
      ],
    },

    faqs: [
      {
        question: "Is this Master Class Demo really free?",
        answer: "Yes, absolutely! This 2-hour introductory Master Class Demo session is completely free of charge. Our goal is to give you a valuable insight into modern FullStack development with GenAI.",
      },
      {
        question: "Who should attend this demo? Is it suitable for beginners?",
        answer: "This demo is ideal for anyone interested in skilling up or upskilling in web development – including aspiring developers, current programmers wanting to learn AI integration, students, and tech enthusiasts. While some familiarity with tech concepts is helpful, deep coding expertise isn't required to grasp the demo's overview.",
      },
      {
        question: "What specific topics will be covered during the 2 hours?",
        answer: "We will provide a high-level overview of key FullStack ecosystems (Java, Python, MERN, MEAN, UX) and focus on demonstrating how Generative AI and AI Agents can be practically applied across the entire application development lifecycle. Expect illustrative examples.",
      },
      {
        question: "Do I need any coding experience or specific software installed for the demo?",
        answer: "No mandatory coding experience is needed to follow the demo's concepts. You also do not need to install any specific software beforehand. Just join with an open mind!",
      },
      {
        question: "Is this demo live? Can I interact and ask questions?",
        answer: "Yes! This is a live, interactive session led by our expert instructors. There will be dedicated time for Q&A where you can ask your questions directly.",
      },
      {
        question: "How do I join the demo? (Online or Hyderabad)",
        answer: "Simply click the registration button above and choose your preferred mode: 'Online' or 'Classroom (Hyderabad)'. After registration, you will receive an email confirmation with the necessary details (a meeting link for online attendees, or the campus address for classroom attendees).",
      },
      {
        question: "What is the \"Personalized Individual Roadmap\"?",
        answer: "This is a unique benefit for attendees. After the demo, we offer a brief follow-up to discuss your background and career goals. Based on this, we'll provide you with a tailored learning roadmap outlining potential next steps to achieve your objectives in the FullStack and AI domain.",
      },
      {
        question: "What if I register but cannot attend the live session? Will there be a recording?",
        answer: "Attending live is highly recommended for the interactive experience and Q&A. However, we suggest you register even if unsure. We will notify registered participants if a recording is made available post-session.",
      },
      {
        question: "How is this free demo different from Digital Edify's full FullStack course?",
        answer: "This 2-hour demo serves as an introduction. It showcases the importance of FullStack with GenAI, our teaching approach, and the scope of our curriculum. Our full courses offer comprehensive, in-depth, hands-on training with projects, mentorship, and career support over a much longer duration.",
      },
      {
        question: "What is the exact date and time of the demo?",
        answer: "The Master Class Demo is scheduled for Saturday, from 10:00 AM to 12:00 PM Indian Standard Time (IST). Please ensure you adjust for your local timezone if joining from outside India.",
      },
    ],
  },

  {
    id: 3,
    link: "business-analytics-with-ai",
    title: "Business Analytics With AI",
    titleHeader: "Business Analytics with GenAI Master Class to Drive Data-Powered Decisions",
    subtitle: "Empowering the Business Analyst with AI Tools & Techniques",
    topics: "Business Analyst | PowerBI | SQL | Python | Statistics | ML | MLOps | GenAI",
    date: "Date: Saturday, May 03, 2025 Time: 10:00 AM - 12:00 PM IST",
    heroImage: "/assets/Event/evenimg.jpg",

    about: {
      description:
        "The role of the Business Analyst, Data Analyst is evolving, powered by cutting-edge data tools and GenAi. Get a first look at enhanced Business Analytics practices leveraging AI",
      image: "/assets/Event/system.jpg",
      features: [
        {
          title: 'Business Analyst',
          description: 'Understanding how AI tools empower the BA to gather requirements, analyze data, communicate findings.',
        },
        {
          title: 'PowerBI for Business Analysis',
          description: "Create more interactive, intuitive, and intelligent dashboards tailored for business stakeholders.",
        },
        {
          title: 'SQL for Analytics',
          description: 'Creating and optimising complex queries, allowing BAs to extract precise data without deep technical SQL expertis.',
        },
        {
          title: 'Python for Analytics',
          description: 'Enhancing data cleaning, transformation, exploratory data analysis (EDA), and visualization workflows.',
        },
        {
          title: 'Statistics for Analytics',
          description: 'To identify significant statistical patterns, automate standard statistical tests, and interpret model outputs',
        },
        {
          title: 'Machine Learning for Analytics',
          description: 'Understanding how BAs can utilize or work with ML models for predictive analytics',
        },
        {
          title: 'MLOps for Data',
          description: 'Gaining insight into how data pipelines and analytical models (including ML) are operationalized and monitored.',
        },
        {
          title: 'GenAI & AI Agents',
          description: 'Applying Generative AI to automate business report writing, summarize key findings from complex analyses.',
        },
      ],
    },

    benefits: {
      items: [
        {
          title: 'Understand the AI-Powered BA Role',
          description: 'See how Artificial Intelligence is redefining the capabilities and efficiency of a Business Analyst.',
        },
        {
          title: 'Discover AI-Powered Insights & Automation',
          description: 'Leverage the power of GenAI to uncover deeper insights faster and automate repetitive analytical tasks.',
        },
        {
          title: 'Master Core Analytics Tools',
          description: 'Learn how to use industry-standard tools like PowerBI, SQL, and Python',
        },
        {
          title: 'Build Intelligent Analytics Workflows',
          description: 'Learn to combine traditional BA methodologies with AI capabilities for more strategic and impactful analysis.',
        },
        {
          title: `Apply Statistical & ML Concepts`,
          description: 'Understand the application of fundamental statistical principles and machine learning models in deriving business insights.',
        },
        {
          title: 'Enhance Communication & Decision-Making',
          description: 'See how AI can help BAs translate complex data into clear, actionable recommendations for stakeholders.',
        },
      ],
    },

    slider: [
      {
        name: "Manikanta Kona",
        role: "Founder & Chief Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Ravi Vetagiri",
        role: "CEO",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Bharat Sreeram",
        role: "AI Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      {
        name: "Arjun",
        role: "CRM Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/akhil.webp", // replace with your image
      },
      {
        name: "Praveen",
        role: "Full Stack Architect & Trainer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Lakshmi",
        role: "GenAi Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Murali",
        role: "Sr Platform Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      // You can add more team members here
    ],

    audience: {
      groups: [
        "Aspiring Business Analysts & Data Analysts.",
        "Current Business Analysts seeking to integrate AI into their toolkit.",
        "Data Professionals looking to understand AI's impact on analytics.",
        "Business Intelligence (BI) Professionals.",
        "Managers and Decision-Makers who rely on data insights.",
        "Students and Graduates interested in data-driven business roles.",
        "Anyone wanting to Skill or Upskill in business analysis with modern AI techniques."
      ],
      image: "/assets/Event/attend.jpg",
    },

    highlights: {
      items: [
        {
          id: "01",
          title: "Cutting-Edge Curriculum",
          description: "We uniquely fuse five essential Full-Stack disciplines with practical GenAI integration.",
        },
        {
          id: "02",
          title: "Real-Time Interaction",
          description: "This is a live session! Ask questions and get instant feedback from expert instructors.",
        },
        {
          id: "03",
          title: "Actionable Takeaways",
          description: "Walk away with insights, best practices, and your FREE Personalized Learning Roadmap provided after the session.",
        },
        {
          id: "04",
          title: "Flexible Format",
          description:
            "Join conveniently from anywhere online—or network in person at our Hyderabad campus.",
        },
        {
          id: "05",
          title: "End-to-End Skill Showcase",
          description: "See the complete full-stack journey, from frontend finesse to backend power, demonstrated live.",
        },
        {
          id: "06",
          title: "Focus on Live Demonstration",
          description:
            " Experience hands-on examples and expert commentary, reflecting the actual class environment – not just slides.",
        },
      ],
    },

    jobRoles: {
      subtitle: "Get the right training, grab the best opportunities",
      description:
        "Go from learning to earning – our courses fast-track you to high-paying tech careers with proven results.",
      roles: [
        {
          icon: <Image src="/assets/Event/JobRole/di1.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'Full Stack Developer',
          description: 'Full Stack Developer, you can take on roles like frontend/backend developer, AI web developer, DevOps engineer, and software engineer, building scalable, intelligent web apps across various industries.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di2.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'Front-End Developer',
          description: 'Full Stack Developer, you can take on roles like frontend/backend developer, AI web developer, DevOps engineer, and software engineer, building scalable, intelligent web apps across various industries.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di3.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Back-End Developer',
          description: 'Back-End Developer, you’ll build and manage server-side logic, databases, and APIs to ensure seamless functionality and performance of web applications.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di4.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'DevOps Engineer',
          description: 'DevOps Engineer, you’ll automate workflows, manage deployments, and ensure smooth integration and delivery of applications across development and production environments.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di5.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Software Engineer',
          description: 'Software Engineer, you’ll design, develop, and maintain software systems that solve real-world problems and power modern digital experiences.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di6.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Web Developer',
          description: 'Web Developer, you’ll build and maintain functional, responsive websites and web applications using modern coding practices and web technologies. 4o',
        },
      ],
    },

    faqs: [
      {
        question: "Is this Master Class Demo really free?",
        answer: "Yes, absolutely! This 2-hour introductory Master Class Demo session is completely free of charge. Our goal is to give you a valuable insight into modern FullStack development with GenAI.",
      },
      {
        question: "Who should attend this demo? Is it suitable for beginners?",
        answer: "This demo is ideal for anyone interested in skilling up or upskilling in web development – including aspiring developers, current programmers wanting to learn AI integration, students, and tech enthusiasts. While some familiarity with tech concepts is helpful, deep coding expertise isn't required to grasp the demo's overview.",
      },
      {
        question: "What specific topics will be covered during the 2 hours?",
        answer: "We will provide a high-level overview of key FullStack ecosystems (Java, Python, MERN, MEAN, UX) and focus on demonstrating how Generative AI and AI Agents can be practically applied across the entire application development lifecycle. Expect illustrative examples.",
      },
      {
        question: "Do I need any coding experience or specific software installed for the demo?",
        answer: "No mandatory coding experience is needed to follow the demo's concepts. You also do not need to install any specific software beforehand. Just join with an open mind!",
      },
      {
        question: "Is this demo live? Can I interact and ask questions?",
        answer: "Yes! This is a live, interactive session led by our expert instructors. There will be dedicated time for Q&A where you can ask your questions directly.",
      },
      {
        question: "How do I join the demo? (Online or Hyderabad)",
        answer: "Simply click the registration button above and choose your preferred mode: 'Online' or 'Classroom (Hyderabad)'. After registration, you will receive an email confirmation with the necessary details (a meeting link for online attendees, or the campus address for classroom attendees).",
      },
      {
        question: "What is the \"Personalized Individual Roadmap\"?",
        answer: "This is a unique benefit for attendees. After the demo, we offer a brief follow-up to discuss your background and career goals. Based on this, we'll provide you with a tailored learning roadmap outlining potential next steps to achieve your objectives in the FullStack and AI domain.",
      },
      {
        question: "What if I register but cannot attend the live session? Will there be a recording?",
        answer: "Attending live is highly recommended for the interactive experience and Q&A. However, we suggest you register even if unsure. We will notify registered participants if a recording is made available post-session.",
      },
      {
        question: "How is this free demo different from Digital Edify's full FullStack course?",
        answer: "This 2-hour demo serves as an introduction. It showcases the importance of FullStack with GenAI, our teaching approach, and the scope of our curriculum. Our full courses offer comprehensive, in-depth, hands-on training with projects, mentorship, and career support over a much longer duration.",
      },
      {
        question: "What is the exact date and time of the demo?",
        answer: "The Master Class Demo is scheduled for Saturday, from 10:00 AM to 12:00 PM Indian Standard Time (IST). Please ensure you adjust for your local timezone if joining from outside India.",
      },
    ],
  }, {
    id: 4,
    link: "servicenow",
    title: "ServiceNOW",
    titleHeader: "ServiceNow Ecosystem Master Class Demo: Admin, Dev, BA & Key Modules",
    subtitle: "Unlocking Enterprise Service Management Power",
    topics: "Admin | Developer | Business Analyst | ITSM | ITOM | ITAM | CSM | HRSD",
    date: "Date: Saturday, May 03, 2025 Time: 10:00 AM - 12:00 PM IST",
    heroImage: "/assets/Event/evenimg.jpg",

    about: {
      description:
        "ServiceNow is the platform defining modern enterprise service management. Get a comprehensive first look at the breadth and depth of this powerful ecosystem in Digital Edify's FREE Demo Master Class.",
      image: "/assets/Event/system.jpg",
      features: [
        {
          title: 'ServiceNow Administrator',
          description: 'Understanding platform configuration, user access, instance maintenance, and basic troubleshooting.',
        },
        {
          title: 'ServiceNow Developer',
          description: "Diving into scripting (Client-side, Server-side), workflow automation, integrations, and building custom applications.",
        },
        {
          title: 'ServiceNow Business Analyst',
          description: 'Bridging the gap between business needs and platform capabilities, focusing on requirements gathering and process mapping.',
        },
        {
          title: 'IT Service Management (ITSM)',
          description: 'Exploring core IT processes like Incident, Problem, Change, and Service Request Management on the platform.',
        },
        {
          title: 'IT Operations Management (ITOM)',
          description: 'Discovering modules for Discovery, Service Mapping, Event Management, and managing infrastructure.',
        },
        {
          title: 'IT Asset Management (ITAM)',
          description: 'Getting an overview of managing software (SAM) and hardware (HAM) assets within ServiceNow.',
        },
        {
          title: 'Customer Service Management (CSM - often referred to as CRM in this context)',
          description: 'Learning how ServiceNow supports external customer interactions and service delivery.',
        },
        {
          title: 'HR Service Delivery (HRSD)',
          description: 'Understanding how ServiceNow streamlines HR processes and employee service requests.',
        },
      ],
    },

    benefits: {
      items: [
        {
          title: 'Understand the Breadth of ServiceNow',
          description: 'Get a high-level overview of key modules like ITSM, ITOM, ITAM, CSM, and HRSD.',
        },
        {
          title: 'Connect Modules and Roles',
          description: 'Understand how the different parts of the ServiceNow ecosystem work together.',
        },
        {
          title: 'Identify Key Roles',
          description: 'Learn about the distinct functions of ServiceNow Administrators, Developers, and Business Analysts.',
        },
        {
          title: 'Explore Career Opportunities',
          description: 'Identify the various in-demand career paths available within the ServiceNow world.',
        },
        {
          title: `See Platform Capabilities in Action`,
          description: 'Experience a live demonstration showcasing core features and functionalities across different areas.',
        },
        {
          title: 'Gain Insights into Implementation',
          description: 'Get a glimpse into how ServiceNow is used to solve real-world enterprise challenges.',
        },
      ],
    },

    slider: [
      {
        name: "Manikanta Kona",
        role: "Founder & Chief Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Ravi Vetagiri",
        role: "CEO",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Bharat Sreeram",
        role: "AI Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      {
        name: "Arjun",
        role: "CRM Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/akhil.webp", // replace with your image
      },
      {
        name: "Praveen",
        role: "Full Stack Architect & Trainer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Lakshmi",
        role: "GenAi Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Murali",
        role: "Sr Platform Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      // You can add more team members here
    ],

    audience: {
      groups: [
        "Aspiring IT Professionals looking to enter the ServiceNow ecosystem.",
        "Current IT Staff seeking to understand ServiceNow roles and modules.",
        "Business Analysts interested in Service Management platforms.",
        "Project Managers overseeing ServiceNow implementations.",
        "Anyone working in or managing ITSM, HR, or Customer Service functions.",
        "Tech Enthusiasts eager to learn about a leading enterprise platform.",
        "Anyone wanting to Skill or Upskill in a high-demand platform technology!"
      ],
      image: "/assets/Event/attend.jpg",
    },

    highlights: {
      items: [
        {
          id: "01",
          title: "Cutting-Edge Curriculum",
          description: "We cover the essential roles (Admin, Dev, BA) and key modules (ITSM, ITOM, ITAM, CSM, HRSD) in a single session.",
        },
        {
          id: "02",
          title: "Real-Time Interaction",
          description: "This is a live session! Ask questions and get instant feedback from expert instructors.",
        },
        {
          id: "03",
          title: "Actionable Takeaways",
          description: "Walk away with insights, best practices, and your FREE Personalized Learning Roadmap provided after the session.",
        },
        {
          id: "04",
          title: "Flexible Format",
          description:
            "Join conveniently from anywhere online—or network in person at our Hyderabad campus.",
        },
        {
          id: "05",
          title: "End-to-End Skill Showcase",
          description: "See the complete full-stack journey, from frontend finesse to backend power, demonstrated live.",
        },
        {
          id: "06",
          title: "Focus on Live Demonstration",
          description:
            " Experience hands-on examples and expert commentary, reflecting the actual class environment – not just slides.",
        },
      ],
    },

    jobRoles: {
      subtitle: "Get the right training, grab the best opportunities",
      description:
        "Go from learning to earning – our courses fast-track you to high-paying tech careers with proven results.",
      roles: [
        {
          icon: <Image src="/assets/Event/JobRole/di1.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Administrator',
          description: `Manages the platform's configuration, users, and basic health.`,
        },
        {
          icon: <Image src="/assets/Event/JobRole/di2.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Developer',
          description: 'Builds custom applications, integrations, and complex workflows.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di3.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Business Analyst:',
          description: 'Defines requirements, designs processes, and ensures platform alignment with business goals.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di4.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Consultant',
          description: 'Provides expertise on implementations and module configurations.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di5.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'IT Service Management (ITSM) Specialist',
          description: 'Focuses on optimizing IT processes within ServiceNow.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di6.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Architect',
          description: 'Designs complex solutions and oversees platform strategy. 4o',
        },
      ],
    },

    faqs: [
      {
        question: "Is this Master Class Demo really free?",
        answer: "Yes, absolutely! This 2-hour introductory Master Class Demo session is completely free of charge. Our goal is to give you a valuable insight into modern FullStack development with GenAI.",
      },
      {
        question: "Who should attend this demo? Is it suitable for beginners?",
        answer: "This demo is ideal for anyone interested in skilling up or upskilling in web development – including aspiring developers, current programmers wanting to learn AI integration, students, and tech enthusiasts. While some familiarity with tech concepts is helpful, deep coding expertise isn't required to grasp the demo's overview.",
      },
      {
        question: "What specific topics will be covered during the 2 hours?",
        answer: "We will provide a high-level overview of key FullStack ecosystems (Java, Python, MERN, MEAN, UX) and focus on demonstrating how Generative AI and AI Agents can be practically applied across the entire application development lifecycle. Expect illustrative examples.",
      },
      {
        question: "Do I need any coding experience or specific software installed for the demo?",
        answer: "No mandatory coding experience is needed to follow the demo's concepts. You also do not need to install any specific software beforehand. Just join with an open mind!",
      },
      {
        question: "Is this demo live? Can I interact and ask questions?",
        answer: "Yes! This is a live, interactive session led by our expert instructors. There will be dedicated time for Q&A where you can ask your questions directly.",
      },
      {
        question: "How do I join the demo? (Online or Hyderabad)",
        answer: "Simply click the registration button above and choose your preferred mode: 'Online' or 'Classroom (Hyderabad)'. After registration, you will receive an email confirmation with the necessary details (a meeting link for online attendees, or the campus address for classroom attendees).",
      },
      {
        question: "What is the \"Personalized Individual Roadmap\"?",
        answer: "This is a unique benefit for attendees. After the demo, we offer a brief follow-up to discuss your background and career goals. Based on this, we'll provide you with a tailored learning roadmap outlining potential next steps to achieve your objectives in the FullStack and AI domain.",
      },
      {
        question: "What if I register but cannot attend the live session? Will there be a recording?",
        answer: "Attending live is highly recommended for the interactive experience and Q&A. However, we suggest you register even if unsure. We will notify registered participants if a recording is made available post-session.",
      },
      {
        question: "How is this free demo different from Digital Edify's full FullStack course?",
        answer: "This 2-hour demo serves as an introduction. It showcases the importance of FullStack with GenAI, our teaching approach, and the scope of our curriculum. Our full courses offer comprehensive, in-depth, hands-on training with projects, mentorship, and career support over a much longer duration.",
      },
      {
        question: "What is the exact date and time of the demo?",
        answer: "The Master Class Demo is scheduled for Saturday, from 10:00 AM to 12:00 PM Indian Standard Time (IST). Please ensure you adjust for your local timezone if joining from outside India.",
      },
    ],
  },

  {
    id: 5,
    link: "salesforce",
    title: "Salesforce",
    titleHeader: "Salesforce Ecosystem Master Class Demo: Admin, Dev, BA & Key Clouds",
    subtitle: "Mastering the World's #1 CRM Platform",
    topics: "Admin | Apex Dev | LWC | Business Analyst | SalesCloud | ServiceCloud",
    date: "Date: Saturday, May 03, 2025 Time: 10:00 AM - 12:00 PM IST",
    heroImage: "/assets/Event/evenimg.jpg",

    about: {
      description:
        "Salesforce is the undisputed leader in CRM and a powerful platform for building enterprise applications. Get a comprehensive first look at the core roles and key functionalities of this vast ecosystem in Digital Edify's FREE Demo Master Class.",
      image: "/assets/Event/system.jpg",
      features: [
        {
          title: 'Salesforce Administrator',
          description: 'Understanding platform configuration, user management, security settings, and declarative automation tools (Flows, etc.).',
        },
        {
          title: 'Salesforce Developer (Apex)',
          description: "Diving into server-side programming with Apex for custom business logic, triggers, and controllers.",
        },
        {
          title: 'Salesforce Developer (LWC - Lightning Web Components)',
          description: 'Mastering modern frontend development on the platform for building dynamic user interfaces.',
        },
        {
          title: 'Salesforce Business Analyst',
          description: 'Bridging the gap between business requirements and Salesforce capabilities, focusing on process analysis and solution design.',
        },
        {
          title: 'Sales Cloud',
          description: 'Exploring functionalities for managing the sales process, including Leads, Opportunities, Accounts, Contacts, and reporting.',
        },
        {
          title: 'Service Cloud:',
          description: 'Discovering modules for customer support, including Case Management, Service Console, Knowledge Base, and automation for service delivery.',
        },
        {
          title: 'See how these roles and clouds',
          description: 'collaborate to deliver powerful customer relationship management and business solutions.',
        },
      ],
    },

    benefits: {
      items: [
        {
          title: 'Understand the Core of Salesforce',
          description: `Get a high-level overview of the platform's architecture and its foundational elements.`,
        },
        {
          title: 'See Platform Capabilities in Action',
          description: 'Experience a live demonstration showcasing core features across different areas (config, dev, clouds).',
        },
        {
          title: 'Identify Key Roles',
          description: ' Learn about the distinct functions of Salesforce Administrators, Developers (Apex & LWC), and Business Analysts.',
        },
        {
          title: 'Connect Roles and Modules',
          description: 'Understand how different roles leverage various parts of the Salesforce platform.',
        },
        {
          title: `Explore Major Clouds`,
          description: 'Get introduced to the capabilities of Sales Cloud and Service Cloud, two of the most critical components.',
        },
        {
          title: 'Explore Career Opportunities',
          description: 'Identify the various in-demand career paths available within the thriving Salesforce job market.',
        },
      ],
    },

    slider: [
      {
        name: "Manikanta Kona",
        role: "Founder & Chief Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Ravi Vetagiri",
        role: "CEO",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Bharat Sreeram",
        role: "AI Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      {
        name: "Arjun",
        role: "CRM Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/akhil.webp", // replace with your image
      },
      {
        name: "Praveen",
        role: "Full Stack Architect & Trainer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Lakshmi",
        role: "GenAi Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Murali",
        role: "Sr Platform Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      // You can add more team members here
    ],

    audience: {
      groups: [
        "Aspiring CRM/Platform Professionals looking to enter the Salesforce ecosystem.",
        "Current IT Staff or Developers seeking to learn or transition to Salesforce.",
        "Business Analysts interested in the #1 CRM platform.",
        "Sales or Service professionals curious about the technology behind their work.",
        "Project Managers overseeing Salesforce projects.",
        "Tech Enthusiasts eager to learn about a leading enterprise platform.",
        "Anyone wanting to Skill or Upskill in a high-demand platform technology!"
      ],
      image: "/assets/Event/attend.jpg",
    },

    highlights: {
      items: [
        {
          id: "01",
          title: "Cutting-Edge Curriculum",
          description: "We cover the essential roles (Admin, Dev, BA) and key clouds (Sales & Service) in a single session.",
        },
        {
          id: "02",
          title: "Real-Time Interaction",
          description: "This is a live session! Ask questions and get instant feedback from expert instructors.",
        },
        {
          id: "03",
          title: "Actionable Takeaways",
          description: "Walk away with insights, best practices, and your FREE Personalized Learning Roadmap provided after the session.",
        },
        {
          id: "04",
          title: "Flexible Format",
          description:
            "Join conveniently from anywhere online—or network in person at our Hyderabad campus.",
        },
        {
          id: "05",
          title: "End-to-End Skill Showcase",
          description: "See the complete full-stack journey, from frontend finesse to backend power, demonstrated live.",
        },
        {
          id: "06",
          title: "Focus on Live Demonstration",
          description:
            " Experience hands-on examples and expert commentary, reflecting the actual class environment – not just slides.",
        },
      ],
    },

    jobRoles: {
      subtitle: "Get the right training, grab the best opportunities",
      description:
        "Go from learning to earning – our courses fast-track you to high-paying tech careers with proven results.",
      roles: [
        {
          icon: <Image src="/assets/Event/JobRole/di1.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Administrator',
          description: `Manages the platform's configuration, users, and basic health.`,
        },
        {
          icon: <Image src="/assets/Event/JobRole/di2.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Developer',
          description: 'Builds custom applications, integrations, and complex workflows.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di3.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Business Analyst:',
          description: 'Defines requirements, designs processes, and ensures platform alignment with business goals.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di4.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'ServiceNow Consultant',
          description: 'Provides expertise on implementations and module configurations.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di5.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Salesforce Architect:',
          description: 'Designs complex solutions and oversees platform strategy.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di6.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Salesforce Project Manager',
          description: 'Leads implementation and development projects.',
        },
      ],
    },

    faqs: [
      {
        question: "Is this Master Class Demo really free?",
        answer: "Yes, absolutely! This 2-hour introductory Master Class Demo session is completely free of charge. Our goal is to give you a valuable insight into modern FullStack development with GenAI.",
      },
      {
        question: "Who should attend this demo? Is it suitable for beginners?",
        answer: "This demo is ideal for anyone interested in skilling up or upskilling in web development – including aspiring developers, current programmers wanting to learn AI integration, students, and tech enthusiasts. While some familiarity with tech concepts is helpful, deep coding expertise isn't required to grasp the demo's overview.",
      },
      {
        question: "What specific topics will be covered during the 2 hours?",
        answer: "We will provide a high-level overview of key FullStack ecosystems (Java, Python, MERN, MEAN, UX) and focus on demonstrating how Generative AI and AI Agents can be practically applied across the entire application development lifecycle. Expect illustrative examples.",
      },
      {
        question: "Do I need any coding experience or specific software installed for the demo?",
        answer: "No mandatory coding experience is needed to follow the demo's concepts. You also do not need to install any specific software beforehand. Just join with an open mind!",
      },
      {
        question: "Is this demo live? Can I interact and ask questions?",
        answer: "Yes! This is a live, interactive session led by our expert instructors. There will be dedicated time for Q&A where you can ask your questions directly.",
      },
      {
        question: "How do I join the demo? (Online or Hyderabad)",
        answer: "Simply click the registration button above and choose your preferred mode: 'Online' or 'Classroom (Hyderabad)'. After registration, you will receive an email confirmation with the necessary details (a meeting link for online attendees, or the campus address for classroom attendees).",
      },
      {
        question: "What is the \"Personalized Individual Roadmap\"?",
        answer: "This is a unique benefit for attendees. After the demo, we offer a brief follow-up to discuss your background and career goals. Based on this, we'll provide you with a tailored learning roadmap outlining potential next steps to achieve your objectives in the FullStack and AI domain.",
      },
      {
        question: "What if I register but cannot attend the live session? Will there be a recording?",
        answer: "Attending live is highly recommended for the interactive experience and Q&A. However, we suggest you register even if unsure. We will notify registered participants if a recording is made available post-session.",
      },
      {
        question: "How is this free demo different from Digital Edify's full FullStack course?",
        answer: "This 2-hour demo serves as an introduction. It showcases the importance of FullStack with GenAI, our teaching approach, and the scope of our curriculum. Our full courses offer comprehensive, in-depth, hands-on training with projects, mentorship, and career support over a much longer duration.",
      },
      {
        question: "What is the exact date and time of the demo?",
        answer: "The Master Class Demo is scheduled for Saturday, from 10:00 AM to 12:00 PM Indian Standard Time (IST). Please ensure you adjust for your local timezone if joining from outside India.",
      },
    ],
  },

  {
    id: 6,
    link: "full-ai-stack",
    title: "Full AI Stack",
    titleHeader: "Full AI Stack Master Class Demo: From Data to Decisions with AI",
    subtitle: "Mastering the Complete Artificial Intelligence Journey for Business Impact",
    topics: "Python | Statistics | Machine Learning | Deep Learning |GEN AI | Ai Agents| Business Analysis | Power BI | Physical AI",
    date: "Date: Saturday, May 03, 2025 Time: 10:00 AM - 12:00 PM IST",
    heroImage: "/assets/Event/evenimg.jpg",

    about: {
      description:
        "The true power of AI lies in transforming data into actionable insights and intelligent applications. Understanding the entire pipeline, from data foundations and model building to business analysis and visualization, is key to success. Get a comprehensive first look at this expanded Full AI Stack in Digital Edify's FREE Demo Master Class.",
      image: "/assets/Event/system.jpg",
      features: [
        {
          title: 'Python',
          description: 'Understanding the essential programming language and its powerful libraries (like NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch).',
        },
        {
          title: 'Statistics for AI:',
          description: "Grasping the crucial statistical concepts that underpin data analysis, model understanding, and performance evaluation.",
        },
        {
          title: 'Machine Learning:',
          description: 'Exploring core ML algorithms and techniques for building predictive and pattern-recognition models from data.',
        },
        {
          title: 'Deep Learning',
          description: 'Diving into neural networks, their architectures (CNNs, RNNs), and how they power advanced AI capabilities.',
        },
        {
          title: 'Transformers & Generative AI (Gen AI):',
          description: 'Discovering the revolutionary Transformer architecture and the exciting world of creating new content (text, images, code)',
        },
        {
          title: 'AI Agents & Applications',
          description: 'Seeing how AI models are deployed, integrated into systems, and interact with environments to perform complex tasks, showcasing examples of real-world AI solutions.',
        },
        {
          title: 'Business Analysis & Insights',
          description: 'Understanding how to identify business problems solvable by AI, define requirements, interpret model results from a business perspective, and translate technical outcomes into strategic recommendations.',
        },
      ],
    },

    benefits: {
      items: [
        {
          title: 'Understand the End-to-End AI Journey',
          description: `Gain a high-level overview of the interconnected areas needed to deliver AI solutions from data to business value.`,
        },
        {
          title: 'See How AI Drives Business Value',
          description: 'Get a glimpse of how AI capabilities are translated into actionable insights and tangible applications using analysis and visualization techniques.',
        },
        {
          title: 'Connect Technical Skills to Business Outcomes',
          description: 'See how programming, statistics, and model building directly support business analysis and data visualization for decision-making.',
        },
        {
          title: 'Identify Diverse Career Paths',
          description: 'Understand the various in-demand roles available within the broader AI, Data, and Business Intelligence fields.',
        },
        {
          title: `Explore Key AI & Data Disciplines`,
          description: 'Get introduced to core concepts in ML, DL, GenAI, along with the roles of Business Analysis and tools like Power BI.',
        },
        {
          title: 'Demystify Complex Topics',
          description: 'Gain clarity on cutting-edge areas like Transformers, Gen AI, and AI Agents, alongside practical tools for data communication like Power BI.',
        },
      ],
    },

    slider: [
      {
        name: "Manikanta Kona",
        role: "Founder & Chief Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Ravi Vetagiri",
        role: "CEO",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Bharat Sreeram",
        role: "AI Architect",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      {
        name: "Arjun",
        role: "CRM Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/akhil.webp", // replace with your image
      },
      {
        name: "Praveen",
        role: "Full Stack Architect & Trainer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/satish.webp", // replace with your image
      },
      {
        name: "Lakshmi",
        role: "GenAi Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/vijay.webp", // replace with your image
      },
      {
        name: "Murali",
        role: "Sr Platform Engineer",
        description: "With strong experience in product development and a passion for teaching, our instructor brings world-class expertise to the classroom. Having worked with leading tech companies and holding multiple certifications in Java/JEE, Spring Frameworks, he combines technical depth with real-world insights to mentor aspiring developers.",
        description1: "His journey from competitive programming to backend engineering of Google, and now mentoring thousands of students, makes him the perfect guide for mastering Java full stack technologies - from frontend to backend and beyond.",
        imageUrl: "/assets/Event/evenimg.jpg", // replace with your image
        avatarUrl: "/assets/raveena.png", // replace with your image
      },
      // You can add more team members here
    ],

    audience: {
      groups: [
        "Aspiring Data Scientists, ML Engineers, and AI Specialists.",
        "Developers looking to transition into AI/ML or data-focused roles.",
        "Analysts, Statisticians, and Business Intelligence professionals.",
        "**Business Analysts** seeking to understand and leverage AI.",
        "Engineers curious about integrating AI into systems (Software, Hardware, Robotics).",
        "Product Managers & Tech Leaders interested in leveraging data and AI for business growth.",
        "Tech Enthusiasts eager to understand the frontier of AI and its practical applications.",
        "Anyone wanting to Skill or Upskill in the rapidly evolving fields of AI, Data Science, and Business Intelligence!"
      ],
      image: "/assets/Event/attend.jpg",
    },

    highlights: {
      items: [
        {
          id: "01",
          title: "Cutting-Edge Curriculum",
          description: "We uniquely fuse foundational AI skills, advanced topics, and the crucial aspects of business analysis and visualization needed for real-world impact.",
        },
        {
          id: "02",
          title: "Real-Time Interaction",
          description: "This is a live session! Ask questions and get instant feedback from expert instructors.",
        },
        {
          id: "03",
          title: "Actionable Takeaways",
          description: "Walk away with insights, best practices, and your FREE Personalized Learning Roadmap provided after the session.",
        },
        {
          id: "04",
          title: "Flexible Format",
          description:
            "Join conveniently from anywhere online—or network in person at our Hyderabad campus.",
        },
        {
          id: "05",
          title: "End-to-End Skill Showcase",
          description: "See how the different components of the AI stack fit together to deliver business value, from raw data and models to dashboards and insights.",
        },
        {
          id: "06",
          title: "Focus on Live Demonstration",
          description:
            "Experience a high-level, illustrative walk-through demonstrating how technical AI skills translate into practical solutions and business understanding.",
        },
      ],
    },

    jobRoles: {
      subtitle: "Get the right training, grab the best opportunities",
      description:
        "Go from learning to earning – our courses fast-track you to high-paying tech careers with proven results.",
      roles: [
        {
          icon: <Image src="/assets/Event/JobRole/di1.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'AI Engineer',
          description: `Designs, builds, and maintains AI systems.`,
        },
        {
          icon: <Image src="/assets/Event/JobRole/di2.png" width={25} height={25} alt="d1" className="text-purple-600" />,
          title: 'Machine Learning Engineer',
          description: 'Specializes in building and deploying ML models.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di3.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Data Scientist',
          description: 'Analyzes data, builds models, and extracts insights using AI/ML techniques.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di4.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Deep Learning Engineer:',
          description: 'Focuses on designing and implementing deep neural networks.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di5.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'Generative AI Specialist:',
          description: 'Works with models that create new content and understand complex data.',
        },
        {
          icon: <Image src="/assets/Event/JobRole/di6.png" width={28} height={28} alt="d1" className="text-purple-600" />,
          title: 'AI Applications Developer',
          description: 'Integrates AI capabilities into software products.',
        },
      ],
    },

    faqs: [
      {
        question: "Is this Master Class Demo really free?",
        answer: "Yes, absolutely! This 2-hour introductory Master Class Demo session is completely free of charge. Our goal is to give you a valuable insight into modern FullStack development with GenAI.",
      },
      {
        question: "Who should attend this demo? Is it suitable for beginners?",
        answer: "This demo is ideal for anyone interested in skilling up or upskilling in web development – including aspiring developers, current programmers wanting to learn AI integration, students, and tech enthusiasts. While some familiarity with tech concepts is helpful, deep coding expertise isn't required to grasp the demo's overview.",
      },
      {
        question: "What specific topics will be covered during the 2 hours?",
        answer: "We will provide a high-level overview of key FullStack ecosystems (Java, Python, MERN, MEAN, UX) and focus on demonstrating how Generative AI and AI Agents can be practically applied across the entire application development lifecycle. Expect illustrative examples.",
      },
      {
        question: "Do I need any coding experience or specific software installed for the demo?",
        answer: "No mandatory coding experience is needed to follow the demo's concepts. You also do not need to install any specific software beforehand. Just join with an open mind!",
      },
      {
        question: "Is this demo live? Can I interact and ask questions?",
        answer: "Yes! This is a live, interactive session led by our expert instructors. There will be dedicated time for Q&A where you can ask your questions directly.",
      },
      {
        question: "How do I join the demo? (Online or Hyderabad)",
        answer: "Simply click the registration button above and choose your preferred mode: 'Online' or 'Classroom (Hyderabad)'. After registration, you will receive an email confirmation with the necessary details (a meeting link for online attendees, or the campus address for classroom attendees).",
      },
      {
        question: "What is the \"Personalized Individual Roadmap\"?",
        answer: "This is a unique benefit for attendees. After the demo, we offer a brief follow-up to discuss your background and career goals. Based on this, we'll provide you with a tailored learning roadmap outlining potential next steps to achieve your objectives in the FullStack and AI domain.",
      },
      {
        question: "What if I register but cannot attend the live session? Will there be a recording?",
        answer: "Attending live is highly recommended for the interactive experience and Q&A. However, we suggest you register even if unsure. We will notify registered participants if a recording is made available post-session.",
      },
      {
        question: "How is this free demo different from Digital Edify's full FullStack course?",
        answer: "This 2-hour demo serves as an introduction. It showcases the importance of FullStack with GenAI, our teaching approach, and the scope of our curriculum. Our full courses offer comprehensive, in-depth, hands-on training with projects, mentorship, and career support over a much longer duration.",
      },
      {
        question: "What is the exact date and time of the demo?",
        answer: "The Master Class Demo is scheduled for Saturday, from 10:00 AM to 12:00 PM Indian Standard Time (IST). Please ensure you adjust for your local timezone if joining from outside India.",
      },
    ],
  },
]

// Helper function to get event by ID
export function getEventById(id: number): IEventDetail | undefined {
  return eventDetails.find((event) => event.id === id)
}

// Helper function to get event by link
export function getEventByLink(link: string): IEventDetail | undefined {
  return eventDetails.find((event) => event.link === link)
}