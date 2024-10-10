import { Answer, Question, Tag, User } from "@prisma/client";

enum UserEnum {
  User0 = "67081f2162015f27d5e61411",
  User1 = "67081f375f2b1ae257cb128c",
  User2 = "67081f67ada72fee8d547655",
  User3 = "67081f836a6e64d87aa160ec",
  User4 = "67081f97b73e83a2a1bc4f65",
  User5 = "67081fc2aa5c4d8b504604d2",
  User6 = "67081fde19b9d67041469119",
  User7 = "67081ff7432c86060c4979ed",
  User8 = "6708201b4819c029232dbae9",
  User9 = "67082031c230d3629ab5241c",
}

enum TagEnum {
  React = "605c72f19e7b8a3f7c0f3d5b",
  Netlify = "605c72f19e7b8a3f7c0f3d5c",
  MongoDB = "605c72f19e7b8a3f7c0f3d5d",
  Database = "605c72f19e7b8a3f7c0f3d5e",
  JWT = "605c72f19e7b8a3f7c0f3d5f",
  NodeJs = "605c72f19e7b8a3f7c0f3d60",
  Authentication = "605c72f19e7b8a3f7c0f3d61",
  Redux = "605c72f19e7b8a3f7c0f3d62",
  StateManagement = "605c72f19e7b8a3f7c0f3d63",
  Concurrency = "605c72f19e7b8a3f7c0f3d64",
  Performance = "605c72f19e7b8a3f7c0f3d65",
  ProjectSetup = "605c72f19e7b8a3f7c0f3d66",
  TypeScript = "605c72f19e7b8a3f7c0f3d67",
  GraphQL = "605c72f19e7b8a3f7c0f3d68",
  Pagination = "605c72f19e7b8a3f7c0f3d69",
  ApiDesign = "605c72f19e7b8a3f7c0f3d6a",
  Docker = "605c72f19e7b8a3f7c0f3d6b",
  Kubernetes = "605c72f19e7b8a3f7c0f3d6c",
  Containers = "605c72f19e7b8a3f7c0f3d6d",
  Angular = "605c72f19e7b8a3f7c0f3d6e",
  Architecture = "605c72f19e7b8a3f7c0f3d6f",
  ProjectStructure = "605c72f19e7b8a3f7c0f3d70",
  CICD = "605c72f19e7b8a3f7c0f3d71",
  Automation = "605c72f19e7b8a3f7c0f3d72",
  Security = "605c72f19e7b8a3f7c0f3d73",
  Scaling = "605c72f19e7b8a3f7c0f3d74",
  Microservices = "605c72f19e7b8a3f7c0f3d75",
  AWS = "605c72f19e7b8a3f7c0f3d76",
  OAuth = "605c72f19e7b8a3f7c0f3d77",
  Flask = "605c72f19e7b8a3f7c0f3d78",
  Production = "605c72f19e7b8a3f7c0f3d79",
  Deployment = "605c72f19e7b8a3f7c0f3d7a",
  Optimization = "605c72f19e7b8a3f7c0f3d7b",
  Django = "605c72f19e7b8a3f7c0f3d7c",
  SASS = "605c72f19e7b8a3f7c0f3d7d",
  AWSLambda = "605c72f19e7b8a3f7c0f3d7e",
  Serverless = "605c72f19e7b8a3f7c0f3d7f",
  Python = "605c72f19e7b8a3f7c0f3d80",
  SchemaDesign = "605c72f19e7b8a3f7c0f3d81",
  CSS = "605c72f19e7b8a3f7c0f3d82",
}

enum QuestionEnum {
  Q0 = "507f1f77bcf86cd799439011",
  Q1 = "507f1f77bcf86cd799439012",
  Q2 = "507f1f77bcf86cd799439013",
  Q3 = "507f1f77bcf86cd799439014",
  Q4 = "507f1f77bcf86cd799439015",
  Q5 = "507f1f77bcf86cd799439016",
  Q6 = "507f1f77bcf86cd799439017",
  Q7 = "507f1f77bcf86cd799439018",
  Q8 = "507f1f77bcf86cd799439019",
  Q9 = "507f1f77bcf86cd79943901a",
  Q10 = "507f1f77bcf86cd79943901b",
  Q11 = "507f1f77bcf86cd79943901c",
  Q12 = "507f1f77bcf86cd79943901d",
  Q13 = "507f1f77bcf86cd79943901e",
  Q14 = "507f1f77bcf86cd79943901f",
  Q15 = "507f1f77bcf86cd799439020",
  Q16 = "507f1f77bcf86cd799439021",
  Q17 = "507f1f77bcf86cd799439022",
  Q18 = "507f1f77bcf86cd799439023",
  Q19 = "507f1f77bcf86cd799439024",
  Q20 = "507f1f77bcf86cd799439025",
  Q21 = "507f1f77bcf86cd799439026",
  Q22 = "507f1f77bcf86cd799439027",
  Q23 = "507f1f77bcf86cd799439028",
  Q24 = "507f1f77bcf86cd799439029",
  Q25 = "507f1f77bcf86cd79943902a",
  Q26 = "507f1f77bcf86cd79943902b",
  Q27 = "507f1f77bcf86cd79943902c",
}

enum AnswerEnum {
  A0 = "67081df118a54aa5bf02d7b3",
  A1 = "67081e67a613a21f86179440",
  A2 = "67081e817d9817b77f56003f",
  A3 = "67081e92c3cf6c6f5b42c3b6",
  A4 = "67081ea73c8bd3d4ff6ae1b6",
  A5 = "67081ebbde23aaccffa9ab09",
}

export const questionData: Record<
  string,
  Omit<Question, "createdAt" | "updatedAt">
> = {
  "507f1f77bcf86cd799439011": {
    id: "507f1f77bcf86cd799439011",
    title: "How to deploy a React app to Netlify?",
    content:
      "What steps are required to deploy a React application on Netlify?",
    views: 120,
    createdById: UserEnum.User0,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439012": {
    id: "507f1f77bcf86cd799439012",
    title: "Best practices for MongoDB indexing?",
    content:
      "How can I optimize MongoDB queries with proper indexing techniques?",
    views: 340,
    createdById: UserEnum.User1,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439013": {
    id: "507f1f77bcf86cd799439013",
    title: "How to secure a Node.js API with JWT?",
    content:
      "What is the best way to implement JWT authentication in a Node.js API?",
    views: 410,
    createdById: UserEnum.User2,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439014": {
    id: "507f1f77bcf86cd799439014",
    title: "Managing global state with Redux?",
    content:
      "How do I manage global state efficiently in a large-scale React application using Redux?",
    views: 230,
    createdById: UserEnum.User1,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439015": {
    id: "507f1f77bcf86cd799439015",
    title: "Handling concurrency in Node.js applications?",
    content:
      "What are the best practices for handling concurrent requests in a Node.js application?",
    views: 320,
    createdById: UserEnum.User3,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439016": {
    id: "507f1f77bcf86cd799439016",
    title: "How to set up a TypeScript project for Node.js?",
    content:
      "What are the necessary steps to configure a TypeScript project for Node.js development?",
    views: 250,
    createdById: UserEnum.User2,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439017": {
    id: "507f1f77bcf86cd799439017",
    title: "How to implement pagination in GraphQL?",
    content:
      "What is the best way to implement pagination for queries in GraphQL?",
    views: 470,
    createdById: UserEnum.User3,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439018": {
    id: "507f1f77bcf86cd799439018",
    title: "What is the difference between Docker and Kubernetes?",
    content:
      "Can someone explain the key differences between Docker and Kubernetes in managing containers?",
    views: 540,
    createdById: UserEnum.User3,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439019": {
    id: "507f1f77bcf86cd799439019",
    title: "How to structure a large-scale Angular application?",
    content:
      "What is the recommended approach to structure a large-scale Angular application for maintainability?",
    views: 330,
    createdById: UserEnum.User4,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943901a": {
    id: "507f1f77bcf86cd79943901a",
    title: "How to set up a CI/CD pipeline for Node.js?",
    content:
      "What are the best practices to set up a continuous integration and deployment pipeline for Node.js applications?",
    views: 670,
    createdById: UserEnum.User5,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943901b": {
    id: "507f1f77bcf86cd79943901b",
    title: "What are the benefits of using TypeScript in large projects?",
    content: "Why should I consider using TypeScript for larger codebases?",
    views: 170,
    createdById: UserEnum.User1,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943901c": {
    id: "507f1f77bcf86cd79943901c",
    title: "How to secure JWT tokens in a web app?",
    content:
      "What are the key considerations for securing JWT tokens in a web application?",
    views: 360,
    createdById: UserEnum.User5,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943901d": {
    id: "507f1f77bcf86cd79943901d",
    title: "How to implement GraphQL in an existing REST API?",
    content: "What are the steps for migrating a REST API to GraphQL?",
    views: 260,
    createdById: UserEnum.User3,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943901e": {
    id: "507f1f77bcf86cd79943901e",
    title: "Scaling Node.js applications with Kubernetes?",
    content:
      "What are the best practices for scaling Node.js applications using Kubernetes?",
    views: 280,
    createdById: UserEnum.User3,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943901f": {
    id: "507f1f77bcf86cd79943901f",
    title: "How to use Docker in microservices architecture?",
    content:
      "What are the key considerations for using Docker in a microservices-based architecture?",
    views: 340,
    createdById: UserEnum.User9,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439020": {
    id: "507f1f77bcf86cd799439020",
    title: "Best practices for securing AWS resources?",
    content: "What are the top security practices when working with AWS?",
    views: 240,
    createdById: UserEnum.User5,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439021": {
    id: "507f1f77bcf86cd799439021",
    title: "How to automate deployments using CI/CD pipelines?",
    content:
      "What are the best tools and techniques for automating deployments using CI/CD?",
    views: 230,
    createdById: UserEnum.User6,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439022": {
    id: "507f1f77bcf86cd799439022",
    title: "How to optimize React app performance?",
    content:
      "What techniques can be employed to enhance the performance of a React app?",
    views: 190,
    createdById: UserEnum.User4,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439023": {
    id: "507f1f77bcf86cd799439023",
    title: "How to integrate third-party APIs in a React app?",
    content:
      "What is the best way to integrate third-party APIs into a React application?",
    views: 360,
    createdById: UserEnum.User3,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439024": {
    id: "507f1f77bcf86cd799439024",
    title: "How to securely store JWT tokens?",
    content:
      "What is the best way to securely store JWT tokens in a web or mobile application?",
    views: 370,
    createdById: UserEnum.User5,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439025": {
    id: "507f1f77bcf86cd799439025",
    title: "How to use AWS Lambda with Django?",
    content:
      "What is the best way to integrate AWS Lambda functions into a Django project?",
    views: 190,
    createdById: UserEnum.User9,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439026": {
    id: "507f1f77bcf86cd799439026",
    title: "How to use Python with GraphQL?",
    content:
      "What is the recommended way to implement GraphQL in a Python-based web application?",
    views: 250,
    createdById: UserEnum.User6,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439027": {
    id: "507f1f77bcf86cd799439027",
    title: "How to manage state in a Redux-based application?",
    content:
      "What are the best practices for managing state in a complex Redux-based application?",
    views: 410,
    createdById: UserEnum.User4,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439028": {
    id: "507f1f77bcf86cd799439028",
    title: "How to containerize a Flask app using Docker?",
    content:
      "What is the process of creating a Docker container for a Flask application?",
    views: 220,
    createdById: UserEnum.User5,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd799439029": {
    id: "507f1f77bcf86cd799439029",
    title: "How to optimize MongoDB schemas?",
    content:
      "What are the best strategies to optimize MongoDB schemas for high-performance queries?",
    views: 290,
    createdById: UserEnum.User6,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943902a": {
    id: "507f1f77bcf86cd79943902a",
    title: "How to optimize GraphQL queries for better performance?",
    content: "What techniques can be used to optimize GraphQL queries?",
    views: 280,
    createdById: UserEnum.User7,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943902b": {
    id: "507f1f77bcf86cd79943902b",
    title: "How to structure a large-scale SASS project?",
    content:
      "What are the recommended best practices for structuring a large-scale SASS project for maintainability?",
    views: 340,
    createdById: UserEnum.User8,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "507f1f77bcf86cd79943902c": {
    id: "507f1f77bcf86cd79943902c",
    title: "Best practices for handling concurrency in Kubernetes?",
    content:
      "What are the best practices for managing concurrency and scaling in a Kubernetes-based infrastructure?",
    views: 410,
    createdById: UserEnum.User3,
    tagIds: [],
    savedByIds: [],
    upvotedByIds: [],
    downvotedByIds: [],
  },
};

export const tagData: Record<string, Omit<Tag, "createdAt" | "updatedAt">> = {
  "605c72f19e7b8a3f7c0f3d5b": {
    id: "605c72f19e7b8a3f7c0f3d5b",
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d5c": {
    id: "605c72f19e7b8a3f7c0f3d5c",
    name: "Netlify",
    description: "A platform for automating web projects.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d5d": {
    id: "605c72f19e7b8a3f7c0f3d5d",
    name: "MongoDB",
    description: "A NoSQL database for modern applications.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d5e": {
    id: "605c72f19e7b8a3f7c0f3d5e",
    name: "Database",
    description: "A structured set of data held in a computer.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d5f": {
    id: "605c72f19e7b8a3f7c0f3d5f",
    name: "JWT",
    description: "JSON Web Tokens for secure data transmission.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d60": {
    id: "605c72f19e7b8a3f7c0f3d60",
    name: "NodeJs",
    description: "JavaScript runtime built on Chrome's V8 engine.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d61": {
    id: "605c72f19e7b8a3f7c0f3d61",
    name: "Authentication",
    description: "The process of verifying identity.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d62": {
    id: "605c72f19e7b8a3f7c0f3d62",
    name: "Redux",
    description: "A predictable state container for JavaScript apps.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d63": {
    id: "605c72f19e7b8a3f7c0f3d63",
    name: "StateManagement",
    description: "Managing the state of an application.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d64": {
    id: "605c72f19e7b8a3f7c0f3d64",
    name: "Concurrency",
    description: "Managing multiple tasks at the same time.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d65": {
    id: "605c72f19e7b8a3f7c0f3d65",
    name: "Performance",
    description: "The efficiency of a system in accomplishing tasks.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d66": {
    id: "605c72f19e7b8a3f7c0f3d66",
    name: "ProjectSetup",
    description: "Initial configuration and setup of a project.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d67": {
    id: "605c72f19e7b8a3f7c0f3d67",
    name: "TypeScript",
    description: "A superset of JavaScript that adds static types.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d68": {
    id: "605c72f19e7b8a3f7c0f3d68",
    name: "GraphQL",
    description: "A query language for APIs.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d69": {
    id: "605c72f19e7b8a3f7c0f3d69",
    name: "Pagination",
    description: "The process of dividing content into pages.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d6a": {
    id: "605c72f19e7b8a3f7c0f3d6a",
    name: "ApiDesign",
    description: "The structure and architecture of APIs.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d6b": {
    id: "605c72f19e7b8a3f7c0f3d6b",
    name: "Docker",
    description:
      "A platform for developing, shipping, and running applications in containers.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d6c": {
    id: "605c72f19e7b8a3f7c0f3d6c",
    name: "Kubernetes",
    description:
      "An orchestration tool for managing containerized applications.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d6d": {
    id: "605c72f19e7b8a3f7c0f3d6d",
    name: "Containers",
    description:
      "Lightweight, portable, and self-sufficient software packages.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d6e": {
    id: "605c72f19e7b8a3f7c0f3d6e",
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d6f": {
    id: "605c72f19e7b8a3f7c0f3d6f",
    name: "Architecture",
    description: "The overall design and structure of a system.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d70": {
    id: "605c72f19e7b8a3f7c0f3d70",
    name: "ProjectStructure",
    description: "The organization of files and directories in a project.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d71": {
    id: "605c72f19e7b8a3f7c0f3d71",
    name: "CICD",
    description: "Continuous Integration and Continuous Deployment practices.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d72": {
    id: "605c72f19e7b8a3f7c0f3d72",
    name: "Automation",
    description:
      "Using technology to perform tasks with minimal human intervention.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d73": {
    id: "605c72f19e7b8a3f7c0f3d73",
    name: "Security",
    description: "Protecting systems against threats and vulnerabilities.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d74": {
    id: "605c72f19e7b8a3f7c0f3d74",
    name: "Scaling",
    description: "Adjusting resources to handle increased load.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d75": {
    id: "605c72f19e7b8a3f7c0f3d75",
    name: "Microservices",
    description:
      "Architectural style that structures an application as a collection of loosely coupled services.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d76": {
    id: "605c72f19e7b8a3f7c0f3d76",
    name: "AWS",
    description:
      "Amazon Web Services, a comprehensive cloud computing platform.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d77": {
    id: "605c72f19e7b8a3f7c0f3d77",
    name: "OAuth",
    description: "An open standard for access delegation.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d78": {
    id: "605c72f19e7b8a3f7c0f3d78",
    name: "Flask",
    description: "A micro web framework for Python.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d79": {
    id: "605c72f19e7b8a3f7c0f3d79",
    name: "Production",
    description: "The environment where applications are run for end users.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d7a": {
    id: "605c72f19e7b8a3f7c0f3d7a",
    name: "Deployment",
    description:
      "The process of making a software application available for use.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d7b": {
    id: "605c72f19e7b8a3f7c0f3d7b",
    name: "Optimization",
    description: "The process of making a system as effective as possible.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d7c": {
    id: "605c72f19e7b8a3f7c0f3d7c",
    name: "Django",
    description:
      "A high-level Python web framework that encourages rapid development.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d7d": {
    id: "605c72f19e7b8a3f7c0f3d7d",
    name: "SASS",
    description: "A preprocessor scripting language for CSS.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d7e": {
    id: "605c72f19e7b8a3f7c0f3d7e",
    name: "AWSLambda",
    description:
      "A serverless compute service that runs code in response to events.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d7f": {
    id: "605c72f19e7b8a3f7c0f3d7f",
    name: "Serverless",
    description: "A cloud-computing model that abstracts server management.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d80": {
    id: "605c72f19e7b8a3f7c0f3d80",
    name: "Python",
    description: "A high-level programming language known for its readability.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d81": {
    id: "605c72f19e7b8a3f7c0f3d81",
    name: "SchemaDesign",
    description: "The structure of a database and how data is organized.",
    questionIds: [],
  },
  "605c72f19e7b8a3f7c0f3d82": {
    id: "605c72f19e7b8a3f7c0f3d82",
    name: "CSS",
    description:
      "A style sheet language used for describing the presentation of a document.",
    questionIds: [],
  },
};

export const userData: Record<string, Omit<User, "createdAt" | "updatedAt">> = {
  "67081f2162015f27d5e61411": {
    id: "67081f2162015f27d5e61411",
    clerkId: "clerk_0",
    name: "John Doe",
    username: "johndoe",
    picture: "/assets/images/anonymus.jpg",
    email: "john.doe@example.com",
    password: "password123",
    bio: "A software engineer from New York.",
    location: "New York, USA",
    website: "https://johndoe.com",
    reputation: 250,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67081f375f2b1ae257cb128c": {
    id: "67081f375f2b1ae257cb128c",
    clerkId: "clerk_1",
    name: "Jane Smith",
    username: "janesmith",
    picture: "/assets/images/anonymus.jpg",
    email: "jane.smith@example.com",
    password: "password456",
    bio: "A front-end developer specializing in React and UI/UX design.",
    location: "San Francisco, USA",
    website: "https://janesmith.dev",
    reputation: 320,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67081f67ada72fee8d547655": {
    id: "67081f67ada72fee8d547655",
    clerkId: "clerk_2",
    name: "Carlos Rodríguez",
    username: "carlosr",
    picture: "/assets/images/anonymus.jpg",
    email: "carlos.rodriguez@example.com",
    password: "password789",
    bio: "Backend developer with expertise in Node.js and databases.",
    location: "Mexico City, Mexico",
    website: "https://carlosr.dev",
    reputation: 180,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67081f836a6e64d87aa160ec": {
    id: "67081f836a6e64d87aa160ec",
    clerkId: "clerk_3",
    name: "Aisha Khan",
    username: "aishak",
    picture: "/assets/images/anonymus.jpg",
    email: "aisha.khan@example.com",
    password: "password321",
    bio: "DevOps engineer with a focus on cloud infrastructure.",
    location: "Dubai, UAE",
    website: "https://aishakhan.io",
    reputation: 400,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67081f97b73e83a2a1bc4f65": {
    id: "67081f97b73e83a2a1bc4f65",
    clerkId: "clerk_4",
    name: "Maria Garcia",
    username: "mariag",
    picture: "/assets/images/anonymus.jpg",
    email: "maria.garcia@example.com",
    password: "password654",
    bio: "Full-stack developer with experience in Angular and Java.",
    location: "Madrid, Spain",
    website: "https://mariag.dev",
    reputation: 210,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67081fc2aa5c4d8b504604d2": {
    id: "67081fc2aa5c4d8b504604d2",
    clerkId: "clerk_5",
    name: "Li Wei",
    username: "liwei",
    picture: "/assets/images/anonymus.jpg",
    email: "li.wei@example.com",
    password: "password987",
    bio: "Mobile developer focused on iOS and Swift.",
    location: "Beijing, China",
    website: "https://liwei.io",
    reputation: 290,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67081fde19b9d67041469119": {
    id: "67081fde19b9d67041469119",
    clerkId: "clerk_6",
    name: "Anna Ivanova",
    username: "annai",
    picture: "/assets/images/anonymus.jpg",
    email: "anna.ivanova@example.com",
    password: "password135",
    bio: "Data scientist with a focus on machine learning and AI.",
    location: "Moscow, Russia",
    website: "https://annaivanova.ai",
    reputation: 350,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67081ff7432c86060c4979ed": {
    id: "67081ff7432c86060c4979ed",
    clerkId: "clerk_7",
    name: "David Kim",
    username: "davidkim",
    picture: "/assets/images/anonymus.jpg",
    email: "david.kim@example.com",
    password: "password468",
    bio: "Security expert specializing in web application security.",
    location: "Seoul, South Korea",
    website: "https://davidkim.secure",
    reputation: 275,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "6708201b4819c029232dbae9": {
    id: "6708201b4819c029232dbae9",
    clerkId: "clerk_8",
    name: "Emily Johnson",
    username: "emilyj",
    picture: "/assets/images/anonymus.jpg",
    email: "emily.johnson@example.com",
    password: "password579",
    bio: "UI/UX designer with a passion for creating seamless user experiences.",
    location: "London, UK",
    website: "https://emilyjdesign.com",
    reputation: 330,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
  "67082031c230d3629ab5241c": {
    id: "67082031c230d3629ab5241c",
    clerkId: "clerk_9",
    name: "Ahmed Ali",
    username: "ahmedali",
    picture: "/assets/images/anonymus.jpg",
    email: "ahmed.ali@example.com",
    password: "password912",
    bio: "Blockchain developer with a focus on Ethereum and smart contracts.",
    location: "Cairo, Egypt",
    website: "https://ahmedali.dev",
    reputation: 340,
    savedQuestionIds: [],
    upvotedQuestionIds: [],
    downvotedQuestionIds: [],
    upvotedAnswerIds: [],
    downvotedAnswerIds: [],
  },
};

export const answersData: Record<
  string,
  Omit<Answer, "createdAt" | "updatedAt">
> = {
  "67081df118a54aa5bf02d7b3": {
    id: "67081df118a54aa5bf02d7b3",
    content:
      "To deploy a React app on Netlify, first create a build of your app using `npm run build`. Then, log in to your Netlify account, click 'New site from Git', and connect your repository. Choose the branch to deploy and set the build command to `npm run build` and the publish directory to `build`. Finally, click 'Deploy site' to finish.",
    createdById: UserEnum.User1, // User ID of the answer creator
    questionId: QuestionEnum.Q0, // ID of the question being answered
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "67081e67a613a21f86179440": {
    id: "67081e67a613a21f86179440",
    content:
      "You can also deploy your React app on Netlify by dragging and dropping your build folder into the Netlify dashboard. This is a quick way to deploy without setting up a Git repository. Just make sure your app runs correctly by testing it locally first.",
    createdById: UserEnum.User2, // User ID of the answer creator
    questionId: QuestionEnum.Q0, // ID of the question being answered
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "67081e817d9817b77f56003f": {
    id: "67081e817d9817b77f56003f",
    content:
      "To optimize MongoDB queries, you should create indexes on fields that are frequently queried, such as those used in filters and sorts. Compound indexes can also be useful when you need to query multiple fields. Monitor your query performance using the `explain()` method to identify which queries would benefit from indexing.",
    createdById: UserEnum.User2, // User ID of the answer creator
    questionId: QuestionEnum.Q1, // ID of the question being answered
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "67081e92c3cf6c6f5b42c3b6": {
    id: "67081e92c3cf6c6f5b42c3b6",
    content:
      "It's important to keep in mind that while indexes can speed up read operations, they can also slow down write operations. Therefore, you should only index fields that are critical for performance. Additionally, consider using TTL (Time-To-Live) indexes for data that only needs to be retained for a specific duration.",
    createdById: UserEnum.User3, // User ID of the answer creator
    questionId: QuestionEnum.Q1, // ID of the question being answered
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "67081ea73c8bd3d4ff6ae1b6": {
    id: "67081ea73c8bd3d4ff6ae1b6",
    content:
      "Regularly analyze your indexes and remove any that are unused to reduce storage costs and improve performance. Use the `db.collection.getIndexes()` method to review existing indexes and assess their usage with the help of the query profiler to understand the impact on performance.",
    createdById: UserEnum.User5, // User ID of the answer creator
    questionId: QuestionEnum.Q1, // ID of the question being answered
    upvotedByIds: [],
    downvotedByIds: [],
  },
  "67081ebbde23aaccffa9ab09": {
    id: "67081ebbde23aaccffa9ab09",
    content:
      "To implement JWT authentication in a Node.js API, start by installing the `jsonwebtoken` package. First, create a login route that verifies user credentials and, upon successful authentication, generates a JWT using `jsonwebtoken.sign()`, including a secret key and user information. Send this token back to the client. For protected routes, use middleware to verify the token with `jsonwebtoken.verify()`. Ensure that you handle token expiration and refresh tokens appropriately for enhanced security.",
    createdById: UserEnum.User3, // User ID of the answer creator
    questionId: QuestionEnum.Q2, // ID of the question being answered
    upvotedByIds: [],
    downvotedByIds: [],
  },
};

// import { answersData, questionData, tagData, userData } from "./initial-data";

/* ---------------------------------------------------------------- */
/*                      question tag realation                      */
/* ---------------------------------------------------------------- */

{
  questionData[QuestionEnum.Q0].tagIds = [TagEnum.React, TagEnum.Netlify];
  tagData[TagEnum.React].questionIds.push(QuestionEnum.Q0);
  tagData[TagEnum.Netlify].questionIds.push(QuestionEnum.Q0);

  questionData[QuestionEnum.Q1].tagIds = [TagEnum.MongoDB, TagEnum.Database];
  tagData[TagEnum.MongoDB].questionIds.push(QuestionEnum.Q1);
  tagData[TagEnum.Database].questionIds.push(QuestionEnum.Q1);

  questionData[QuestionEnum.Q2].tagIds = [
    TagEnum.NodeJs,
    TagEnum.JWT,
    TagEnum.Authentication,
  ];
  tagData[TagEnum.NodeJs].questionIds.push(QuestionEnum.Q2);
  tagData[TagEnum.JWT].questionIds.push(QuestionEnum.Q2);
  tagData[TagEnum.Authentication].questionIds.push(QuestionEnum.Q2);

  questionData[QuestionEnum.Q3].tagIds = [
    TagEnum.React,
    TagEnum.Redux,
    TagEnum.StateManagement,
  ];
  tagData[TagEnum.React].questionIds.push(QuestionEnum.Q3);
  tagData[TagEnum.Redux].questionIds.push(QuestionEnum.Q3);
  tagData[TagEnum.StateManagement].questionIds.push(QuestionEnum.Q3);

  questionData[QuestionEnum.Q4].tagIds = [
    TagEnum.NodeJs,
    TagEnum.Concurrency,
    TagEnum.Performance,
  ];
  tagData[TagEnum.NodeJs].questionIds.push(QuestionEnum.Q4);
  tagData[TagEnum.Concurrency].questionIds.push(QuestionEnum.Q4);
  tagData[TagEnum.Performance].questionIds.push(QuestionEnum.Q4);

  questionData[QuestionEnum.Q5].tagIds = [
    TagEnum.NodeJs,
    TagEnum.TypeScript,
    TagEnum.ProjectSetup,
  ];
  tagData[TagEnum.NodeJs].questionIds.push(QuestionEnum.Q5);
  tagData[TagEnum.TypeScript].questionIds.push(QuestionEnum.Q5);
  tagData[TagEnum.ProjectSetup].questionIds.push(QuestionEnum.Q5);

  questionData[QuestionEnum.Q6].tagIds = [
    TagEnum.GraphQL,
    TagEnum.Pagination,
    TagEnum.ApiDesign,
  ];
  tagData[TagEnum.GraphQL].questionIds.push(QuestionEnum.Q6);
  tagData[TagEnum.Pagination].questionIds.push(QuestionEnum.Q6);
  tagData[TagEnum.ApiDesign].questionIds.push(QuestionEnum.Q6);

  questionData[QuestionEnum.Q7].tagIds = [
    TagEnum.Docker,
    TagEnum.Kubernetes,
    TagEnum.Containers,
  ];
  tagData[TagEnum.Docker].questionIds.push(QuestionEnum.Q7);
  tagData[TagEnum.Kubernetes].questionIds.push(QuestionEnum.Q7);
  tagData[TagEnum.Containers].questionIds.push(QuestionEnum.Q7);

  questionData[QuestionEnum.Q8].tagIds = [
    TagEnum.Angular,
    TagEnum.Architecture,
    TagEnum.ProjectStructure,
  ];
  tagData[TagEnum.Angular].questionIds.push(QuestionEnum.Q8);
  tagData[TagEnum.Architecture].questionIds.push(QuestionEnum.Q8);
  tagData[TagEnum.ProjectStructure].questionIds.push(QuestionEnum.Q8);

  questionData[QuestionEnum.Q9].tagIds = [
    TagEnum.NodeJs,
    TagEnum.CICD,
    TagEnum.Automation,
  ];
  tagData[TagEnum.NodeJs].questionIds.push(QuestionEnum.Q9);
  tagData[TagEnum.CICD].questionIds.push(QuestionEnum.Q9);
  tagData[TagEnum.Automation].questionIds.push(QuestionEnum.Q9);

  questionData[QuestionEnum.Q10].tagIds = [TagEnum.TypeScript];
  tagData[TagEnum.TypeScript].questionIds.push(QuestionEnum.Q10);

  questionData[QuestionEnum.Q11].tagIds = [TagEnum.JWT, TagEnum.Security];
  tagData[TagEnum.JWT].questionIds.push(QuestionEnum.Q11);
  tagData[TagEnum.Security].questionIds.push(QuestionEnum.Q11);

  questionData[QuestionEnum.Q12].tagIds = [TagEnum.GraphQL];
  tagData[TagEnum.GraphQL].questionIds.push(QuestionEnum.Q12);

  questionData[QuestionEnum.Q13].tagIds = [
    TagEnum.NodeJs,
    TagEnum.Kubernetes,
    TagEnum.Scaling,
  ];
  tagData[TagEnum.NodeJs].questionIds.push(QuestionEnum.Q13);
  tagData[TagEnum.Kubernetes].questionIds.push(QuestionEnum.Q13);
  tagData[TagEnum.Scaling].questionIds.push(QuestionEnum.Q13);

  questionData[QuestionEnum.Q14].tagIds = [
    TagEnum.Docker,
    TagEnum.Microservices,
    TagEnum.Architecture,
  ];
  tagData[TagEnum.Docker].questionIds.push(QuestionEnum.Q14);
  tagData[TagEnum.Microservices].questionIds.push(QuestionEnum.Q14);
  tagData[TagEnum.Architecture].questionIds.push(QuestionEnum.Q14);

  questionData[QuestionEnum.Q15].tagIds = [TagEnum.AWS, TagEnum.Security];
  tagData[TagEnum.AWS].questionIds.push(QuestionEnum.Q15);
  tagData[TagEnum.Security].questionIds.push(QuestionEnum.Q15);

  questionData[QuestionEnum.Q16].tagIds = [TagEnum.CICD];
  tagData[TagEnum.CICD].questionIds.push(QuestionEnum.Q16);

  questionData[QuestionEnum.Q17].tagIds = [
    TagEnum.OAuth,
    TagEnum.Authentication,
    TagEnum.Security,
  ];
  tagData[TagEnum.OAuth].questionIds.push(QuestionEnum.Q17);
  tagData[TagEnum.Authentication].questionIds.push(QuestionEnum.Q17);
  tagData[TagEnum.Security].questionIds.push(QuestionEnum.Q17);

  questionData[QuestionEnum.Q18].tagIds = [
    TagEnum.Flask,
    TagEnum.Production,
    TagEnum.Deployment,
  ];
  tagData[TagEnum.Flask].questionIds.push(QuestionEnum.Q18);
  tagData[TagEnum.Production].questionIds.push(QuestionEnum.Q18);
  tagData[TagEnum.Deployment].questionIds.push(QuestionEnum.Q18);

  questionData[QuestionEnum.Q19].tagIds = [
    TagEnum.Django,
    TagEnum.AWS,
    TagEnum.Optimization,
  ];
  tagData[TagEnum.Django].questionIds.push(QuestionEnum.Q19);
  tagData[TagEnum.AWS].questionIds.push(QuestionEnum.Q19);
  tagData[TagEnum.Optimization].questionIds.push(QuestionEnum.Q18);

  questionData[QuestionEnum.Q20].tagIds = [TagEnum.SASS];
  tagData[TagEnum.SASS].questionIds.push(QuestionEnum.Q20);

  questionData[QuestionEnum.Q21].tagIds = [TagEnum.JWT, TagEnum.Security];
  tagData[TagEnum.JWT].questionIds.push(QuestionEnum.Q21);
  tagData[TagEnum.Security].questionIds.push(QuestionEnum.Q21);

  questionData[QuestionEnum.Q22].tagIds = [
    TagEnum.Django,
    TagEnum.AWS,
    TagEnum.AWSLambda,
    TagEnum.Serverless,
  ];
  tagData[TagEnum.Django].questionIds.push(QuestionEnum.Q22);
  tagData[TagEnum.AWS].questionIds.push(QuestionEnum.Q22);
  tagData[TagEnum.AWSLambda].questionIds.push(QuestionEnum.Q22);
  tagData[TagEnum.Serverless].questionIds.push(QuestionEnum.Q22);

  questionData[QuestionEnum.Q23].tagIds = [
    TagEnum.GraphQL,
    TagEnum.Python,
    TagEnum.ApiDesign,
  ];
  tagData[TagEnum.GraphQL].questionIds.push(QuestionEnum.Q23);
  tagData[TagEnum.Python].questionIds.push(QuestionEnum.Q23);
  tagData[TagEnum.ApiDesign].questionIds.push(QuestionEnum.Q23);

  questionData[QuestionEnum.Q24].tagIds = [
    TagEnum.React,
    TagEnum.Redux,
    TagEnum.StateManagement,
  ];
  tagData[TagEnum.React].questionIds.push(QuestionEnum.Q24);
  tagData[TagEnum.Redux].questionIds.push(QuestionEnum.Q24);
  tagData[TagEnum.StateManagement].questionIds.push(QuestionEnum.Q24);

  questionData[QuestionEnum.Q25].tagIds = [TagEnum.Docker, TagEnum.Flask];
  tagData[TagEnum.Docker].questionIds.push(QuestionEnum.Q25);
  tagData[TagEnum.Flask].questionIds.push(QuestionEnum.Q25);

  questionData[QuestionEnum.Q26].tagIds = [
    TagEnum.MongoDB,
    TagEnum.SchemaDesign,
    TagEnum.Performance,
  ];
  tagData[TagEnum.MongoDB].questionIds.push(QuestionEnum.Q26);
  tagData[TagEnum.SchemaDesign].questionIds.push(QuestionEnum.Q26);
  tagData[TagEnum.Performance].questionIds.push(QuestionEnum.Q26);

  questionData[QuestionEnum.Q27].tagIds = [TagEnum.GraphQL];
  tagData[TagEnum.GraphQL].questionIds.push(QuestionEnum.Q27);

  // questionData[QuestionEnum.Q28].tagIds = [
  //   TagEnum.SASS,
  //   TagEnum.CSS,
  //   TagEnum.ProjectStructure,
  // ];
  // tagData[TagEnum.SASS].questionIds.push(QuestionEnum.Q28);
  // tagData[TagEnum.CSS].questionIds.push(QuestionEnum.Q28);
  // tagData[TagEnum.ProjectStructure].questionIds.push(QuestionEnum.Q28);

  // questionData[QuestionEnum.Q29].tagIds = [
  //   TagEnum.Kubernetes,
  //   TagEnum.Concurrency,
  //   TagEnum.Scaling,
  // ];
  // tagData[TagEnum.Kubernetes].questionIds.push(QuestionEnum.Q29);
  // tagData[TagEnum.Concurrency].questionIds.push(QuestionEnum.Q29);
  // tagData[TagEnum.Scaling].questionIds.push(QuestionEnum.Q29);
}

/* ---------------------------------------------------------------- */
/*                user saved question relation                      */
/* ---------------------------------------------------------------- */

{
  userData[UserEnum.User0].savedQuestionIds.push(
    QuestionEnum.Q1,
    QuestionEnum.Q12
  );
  questionData[QuestionEnum.Q1].savedByIds.push(UserEnum.User0);
  questionData[QuestionEnum.Q12].savedByIds.push(UserEnum.User0);

  userData[UserEnum.User1].savedQuestionIds.push(
    QuestionEnum.Q0,
    QuestionEnum.Q4,
    QuestionEnum.Q15,
    QuestionEnum.Q10,
    QuestionEnum.Q22
  );
  questionData[QuestionEnum.Q0].savedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q4].savedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q15].savedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q10].savedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q22].savedByIds.push(UserEnum.User1);

  userData[UserEnum.User2].savedQuestionIds.push(
    QuestionEnum.Q3,
    QuestionEnum.Q5,
    QuestionEnum.Q18,
    QuestionEnum.Q22
  );
  questionData[QuestionEnum.Q3].savedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q5].savedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q18].savedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q22].savedByIds.push(UserEnum.User2);

  userData[UserEnum.User3].savedQuestionIds.push(
    QuestionEnum.Q7,
    QuestionEnum.Q10,
    QuestionEnum.Q20
  );
  questionData[QuestionEnum.Q7].savedByIds.push(UserEnum.User3);
  questionData[QuestionEnum.Q10].savedByIds.push(UserEnum.User3);
  questionData[QuestionEnum.Q20].savedByIds.push(UserEnum.User3);

  userData[UserEnum.User4].savedQuestionIds.push(
    QuestionEnum.Q2,
    QuestionEnum.Q11,
    QuestionEnum.Q19,
    QuestionEnum.Q1,
    QuestionEnum.Q3
    // QuestionEnum.Q28
  );
  questionData[QuestionEnum.Q2].savedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q11].savedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q19].savedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q1].savedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q3].savedByIds.push(UserEnum.User4);
  // questionData[QuestionEnum.Q28].savedByIds.push(UserEnum.User4);

  userData[UserEnum.User5].savedQuestionIds.push(
    QuestionEnum.Q6,
    QuestionEnum.Q14,
    QuestionEnum.Q27,
    QuestionEnum.Q16
  );
  questionData[QuestionEnum.Q6].savedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q14].savedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q27].savedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q16].savedByIds.push(UserEnum.User5);

  userData[UserEnum.User6].savedQuestionIds.push(
    QuestionEnum.Q8,
    QuestionEnum.Q13,
    QuestionEnum.Q25,
    QuestionEnum.Q4,
    QuestionEnum.Q9,
    QuestionEnum.Q21
  );
  questionData[QuestionEnum.Q8].savedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q13].savedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q25].savedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q4].savedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q9].savedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q21].savedByIds.push(UserEnum.User6);

  userData[UserEnum.User7].savedQuestionIds.push(
    QuestionEnum.Q9,
    QuestionEnum.Q17,
    QuestionEnum.Q21,
    QuestionEnum.Q24
    // QuestionEnum.Q28
  );
  questionData[QuestionEnum.Q9].savedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q17].savedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q21].savedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q24].savedByIds.push(UserEnum.User7);
  // questionData[QuestionEnum.Q28].savedByIds.push(UserEnum.User7);

  userData[UserEnum.User8].savedQuestionIds.push(
    QuestionEnum.Q19,
    QuestionEnum.Q23,
    QuestionEnum.Q26,
    QuestionEnum.Q12,
    QuestionEnum.Q5,
    QuestionEnum.Q1,
    QuestionEnum.Q7
  );
  questionData[QuestionEnum.Q19].savedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q23].savedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q26].savedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q12].savedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q5].savedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q1].savedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q7].savedByIds.push(UserEnum.User8);

  userData[UserEnum.User9].savedQuestionIds.push(
    QuestionEnum.Q24,
    // QuestionEnum.Q28,
    QuestionEnum.Q11,
    QuestionEnum.Q2,
    QuestionEnum.Q18
  );
  questionData[QuestionEnum.Q24].savedByIds.push(UserEnum.User9);
  // questionData[QuestionEnum.Q28].savedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q11].savedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q2].savedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q18].savedByIds.push(UserEnum.User9);
}

/* ---------------------------------------------------------------- */
/*                  user downvote question relation                 */
/* ---------------------------------------------------------------- */

{
  userData[UserEnum.User0].downvotedQuestionIds.push(
    QuestionEnum.Q1,
    QuestionEnum.Q12,
    QuestionEnum.Q19
  );
  questionData[QuestionEnum.Q1].downvotedByIds.push(UserEnum.User0);
  questionData[QuestionEnum.Q12].downvotedByIds.push(UserEnum.User0);
  questionData[QuestionEnum.Q19].downvotedByIds.push(UserEnum.User0);

  userData[UserEnum.User1].downvotedQuestionIds.push(
    QuestionEnum.Q0,
    QuestionEnum.Q4,
    QuestionEnum.Q15
    // QuestionEnum.Q28
  );
  questionData[QuestionEnum.Q0].downvotedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q4].downvotedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q15].downvotedByIds.push(UserEnum.User1);
  // questionData[QuestionEnum.Q28].downvotedByIds.push(UserEnum.User1);

  userData[UserEnum.User2].downvotedQuestionIds.push(
    QuestionEnum.Q2,
    QuestionEnum.Q5,
    QuestionEnum.Q9,
    QuestionEnum.Q22
  );
  questionData[QuestionEnum.Q2].downvotedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q5].downvotedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q9].downvotedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q22].downvotedByIds.push(UserEnum.User2);

  userData[UserEnum.User3].downvotedQuestionIds.push(
    QuestionEnum.Q3,
    QuestionEnum.Q11,
    QuestionEnum.Q20
  );
  questionData[QuestionEnum.Q3].downvotedByIds.push(UserEnum.User3);
  questionData[QuestionEnum.Q11].downvotedByIds.push(UserEnum.User3);
  questionData[QuestionEnum.Q20].downvotedByIds.push(UserEnum.User3);

  userData[UserEnum.User4].downvotedQuestionIds.push(
    QuestionEnum.Q6,
    QuestionEnum.Q14,
    QuestionEnum.Q18,
    QuestionEnum.Q25
  );
  questionData[QuestionEnum.Q6].downvotedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q14].downvotedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q18].downvotedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q25].downvotedByIds.push(UserEnum.User4);

  userData[UserEnum.User5].downvotedQuestionIds.push(
    QuestionEnum.Q8,
    QuestionEnum.Q13,
    QuestionEnum.Q24,
    QuestionEnum.Q12
  );
  questionData[QuestionEnum.Q8].downvotedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q13].downvotedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q24].downvotedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q12].downvotedByIds.push(UserEnum.User5);

  userData[UserEnum.User6].downvotedQuestionIds.push(
    QuestionEnum.Q7,
    QuestionEnum.Q17,
    QuestionEnum.Q21
    // QuestionEnum.Q29
  );
  questionData[QuestionEnum.Q7].downvotedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q17].downvotedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q21].downvotedByIds.push(UserEnum.User6);
  // questionData[QuestionEnum.Q29].downvotedByIds.push(UserEnum.User6);

  userData[UserEnum.User7].downvotedQuestionIds.push(
    QuestionEnum.Q10,
    QuestionEnum.Q16,
    QuestionEnum.Q26
  );
  questionData[QuestionEnum.Q10].downvotedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q16].downvotedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q26].downvotedByIds.push(UserEnum.User7);

  userData[UserEnum.User8].downvotedQuestionIds.push(
    QuestionEnum.Q12,
    QuestionEnum.Q15,
    QuestionEnum.Q23,
    QuestionEnum.Q27
  );
  questionData[QuestionEnum.Q12].downvotedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q15].downvotedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q23].downvotedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q27].downvotedByIds.push(UserEnum.User8);

  userData[UserEnum.User9].downvotedQuestionIds.push(
    QuestionEnum.Q1,
    QuestionEnum.Q3,
    QuestionEnum.Q14,
    QuestionEnum.Q19,
    QuestionEnum.Q22
  );
  questionData[QuestionEnum.Q1].downvotedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q3].downvotedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q14].downvotedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q19].downvotedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q22].downvotedByIds.push(UserEnum.User9);
}

/* ---------------------------------------------------------------- */
/*                  user upvote question relation                 */
/* ---------------------------------------------------------------- */

{
  userData[UserEnum.User0].upvotedQuestionIds.push(
    QuestionEnum.Q12,
    QuestionEnum.Q19
  );
  questionData[QuestionEnum.Q12].upvotedByIds.push(UserEnum.User0);
  questionData[QuestionEnum.Q19].upvotedByIds.push(UserEnum.User0);

  userData[UserEnum.User1].upvotedQuestionIds.push(
    QuestionEnum.Q0,
    QuestionEnum.Q4,
    QuestionEnum.Q15
    // QuestionEnum.Q28
  );
  questionData[QuestionEnum.Q0].upvotedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q4].upvotedByIds.push(UserEnum.User1);
  questionData[QuestionEnum.Q15].upvotedByIds.push(UserEnum.User1);
  // questionData[QuestionEnum.Q28].upvotedByIds.push(UserEnum.User1);

  userData[UserEnum.User2].upvotedQuestionIds.push(
    QuestionEnum.Q2,
    QuestionEnum.Q5,
    QuestionEnum.Q9,
    QuestionEnum.Q22,
    QuestionEnum.Q18
  );
  questionData[QuestionEnum.Q2].upvotedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q5].upvotedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q9].upvotedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q22].upvotedByIds.push(UserEnum.User2);
  questionData[QuestionEnum.Q18].upvotedByIds.push(UserEnum.User2);

  userData[UserEnum.User3].upvotedQuestionIds.push(
    QuestionEnum.Q3,
    QuestionEnum.Q11,
    QuestionEnum.Q20
  );
  questionData[QuestionEnum.Q3].upvotedByIds.push(UserEnum.User3);
  questionData[QuestionEnum.Q11].upvotedByIds.push(UserEnum.User3);
  questionData[QuestionEnum.Q20].upvotedByIds.push(UserEnum.User3);

  userData[UserEnum.User4].upvotedQuestionIds.push(
    QuestionEnum.Q6,
    QuestionEnum.Q14,
    QuestionEnum.Q18,
    QuestionEnum.Q25
  );
  questionData[QuestionEnum.Q6].upvotedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q14].upvotedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q18].upvotedByIds.push(UserEnum.User4);
  questionData[QuestionEnum.Q25].upvotedByIds.push(UserEnum.User4);

  userData[UserEnum.User5].upvotedQuestionIds.push(
    QuestionEnum.Q8,
    QuestionEnum.Q13,
    QuestionEnum.Q24
  );
  questionData[QuestionEnum.Q8].upvotedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q13].upvotedByIds.push(UserEnum.User5);
  questionData[QuestionEnum.Q24].upvotedByIds.push(UserEnum.User5);

  userData[UserEnum.User6].upvotedQuestionIds.push(
    QuestionEnum.Q7,
    QuestionEnum.Q17,
    QuestionEnum.Q21
    // QuestionEnum.Q29
  );
  questionData[QuestionEnum.Q7].upvotedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q17].upvotedByIds.push(UserEnum.User6);
  questionData[QuestionEnum.Q21].upvotedByIds.push(UserEnum.User6);
  // questionData[QuestionEnum.Q29].upvotedByIds.push(UserEnum.User6);

  userData[UserEnum.User7].upvotedQuestionIds.push(
    QuestionEnum.Q10,
    QuestionEnum.Q16,
    QuestionEnum.Q26,
    QuestionEnum.Q14
  );
  questionData[QuestionEnum.Q10].upvotedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q16].upvotedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q26].upvotedByIds.push(UserEnum.User7);
  questionData[QuestionEnum.Q14].upvotedByIds.push(UserEnum.User7);

  userData[UserEnum.User8].upvotedQuestionIds.push(
    QuestionEnum.Q12,
    QuestionEnum.Q15,
    QuestionEnum.Q23,
    QuestionEnum.Q27,
    QuestionEnum.Q3
  );
  questionData[QuestionEnum.Q12].upvotedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q15].upvotedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q23].upvotedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q27].upvotedByIds.push(UserEnum.User8);
  questionData[QuestionEnum.Q3].upvotedByIds.push(UserEnum.User8);

  userData[UserEnum.User9].upvotedQuestionIds.push(
    QuestionEnum.Q1, // Not included to avoid conflict with downvotes
    QuestionEnum.Q14,
    QuestionEnum.Q20
  );
  questionData[QuestionEnum.Q1].upvotedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q14].upvotedByIds.push(UserEnum.User9);
  questionData[QuestionEnum.Q20].upvotedByIds.push(UserEnum.User9);
}

/* ---------------------------------------------------------------- */
/*                    user answer upvote realtion                   */
/* ---------------------------------------------------------------- */
{
  answersData[AnswerEnum.A5].upvotedByIds.push(
    UserEnum.User0,
    UserEnum.User1,
    UserEnum.User9,
    UserEnum.User5
  );
  userData[UserEnum.User0].upvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User1].upvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User9].upvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User5].upvotedAnswerIds.push(AnswerEnum.A5);

  answersData[AnswerEnum.A4].upvotedByIds.push(
    UserEnum.User0,
    UserEnum.User1,
    UserEnum.User2,
    UserEnum.User3,
    UserEnum.User4
  );
  userData[UserEnum.User0].upvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User1].upvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User2].upvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User3].upvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User4].upvotedAnswerIds.push(AnswerEnum.A4);

  answersData[AnswerEnum.A0].upvotedByIds.push(
    UserEnum.User9,
    UserEnum.User6,
    UserEnum.User2,
    UserEnum.User1
  );
  userData[UserEnum.User9].upvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User6].upvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User2].upvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User1].upvotedAnswerIds.push(AnswerEnum.A5);
}

/* ---------------------------------------------------------------- */
/*                  user answer downvote realtion                   */
/* ---------------------------------------------------------------- */
{
  answersData[AnswerEnum.A1].downvotedByIds.push(
    UserEnum.User0,
    UserEnum.User1,
    UserEnum.User9,
    UserEnum.User5
  );
  userData[UserEnum.User0].downvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User1].downvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User9].downvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User5].downvotedAnswerIds.push(AnswerEnum.A5);

  answersData[AnswerEnum.A2].downvotedByIds.push(
    UserEnum.User0,
    UserEnum.User1,
    UserEnum.User2,
    UserEnum.User3,
    UserEnum.User4
  );
  userData[UserEnum.User0].downvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User1].downvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User2].downvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User3].downvotedAnswerIds.push(AnswerEnum.A4);
  userData[UserEnum.User4].downvotedAnswerIds.push(AnswerEnum.A4);

  answersData[AnswerEnum.A3].downvotedByIds.push(
    UserEnum.User9,
    UserEnum.User6,
    UserEnum.User2,
    UserEnum.User1
  );
  userData[UserEnum.User9].downvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User6].downvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User2].downvotedAnswerIds.push(AnswerEnum.A5);
  userData[UserEnum.User1].downvotedAnswerIds.push(AnswerEnum.A5);
}
