import { Question } from "@prisma/client";

export async function fetchTopQeustion(): Promise<Question[]> {
  // TODO: do implementation
  return [
    {
      id: "1",
      title: "What is TypeScript?",
      content:
        "Can someone explain what TypeScript is and its benefits over JavaScript?",
      views: 150,
      createdAt: new Date("2024-10-01T10:00:00Z"),
      updatedAt: new Date("2024-10-01T10:00:00Z"),
      tagIds: ["tag1", "tag2"],
      createdById: "user1",
      savedByIds: [],
      upvotedByIds: ["user2"],
      downvotedByIds: [],
    },
    {
      id: "2",
      title: "How to manage state in React?",
      content:
        "What are the best practices for managing state in a React application?",
      views: 200,
      createdAt: new Date("2024-10-02T11:30:00Z"),
      updatedAt: new Date("2024-10-02T11:30:00Z"),
      tagIds: ["tag3"],
      createdById: "user2",
      savedByIds: ["user3"],
      upvotedByIds: ["user1", "user4"],
      downvotedByIds: [],
    },
    {
      id: "3",
      title: "What is the difference between SQL and NoSQL?",
      content:
        "Could someone outline the key differences between SQL and NoSQL databases?",
      views: 350,
      createdAt: new Date("2024-10-03T09:15:00Z"),
      updatedAt: new Date("2024-10-03T09:15:00Z"),
      tagIds: ["tag4", "tag5"],
      createdById: "user3",
      savedByIds: ["user2", "user4"],
      upvotedByIds: [],
      downvotedByIds: ["user1"],
    },
    {
      id: "4",
      title: "Best practices for REST APIs",
      content: "What are some best practices when designing RESTful APIs?",
      views: 120,
      createdAt: new Date("2024-10-04T14:20:00Z"),
      updatedAt: new Date("2024-10-04T14:20:00Z"),
      tagIds: ["tag6"],
      createdById: "user4",
      savedByIds: ["user1"],
      upvotedByIds: ["user2", "user3"],
      downvotedByIds: [],
    },
    {
      id: "5",
      title: "How to optimize web performance?",
      content:
        "What techniques can be used to improve the performance of a web application?",
      views: 180,
      createdAt: new Date("2024-10-05T16:00:00Z"),
      updatedAt: new Date("2024-10-05T16:00:00Z"),
      tagIds: ["tag7", "tag8"],
      createdById: "user5",
      savedByIds: [],
      upvotedByIds: ["user1", "user2"],
      downvotedByIds: ["user3"],
    },
  ];
}
