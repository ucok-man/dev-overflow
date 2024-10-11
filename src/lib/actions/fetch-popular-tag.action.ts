import { Tag } from "@prisma/client";

// TODO: Do real implementation
export async function fetchPopularTags(): Promise<Tag[]> {
  return [
    {
      id: "tag1",
      name: "JavaScript",
      description:
        "A high-level programming language primarily used for web development.",
      createdAt: new Date("2024-01-10T08:00:00Z"),
      updatedAt: new Date("2024-01-10T08:00:00Z"),
      questionIds: ["1", "2"],
    },
    {
      id: "tag2",
      name: "TypeScript",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
      createdAt: new Date("2024-02-15T09:00:00Z"),
      updatedAt: new Date("2024-02-15T09:00:00Z"),
      questionIds: ["1"],
    },
    {
      id: "tag3",
      name: "React",
      description: "A JavaScript library for building user interfaces.",
      createdAt: new Date("2024-03-20T10:30:00Z"),
      updatedAt: new Date("2024-03-20T10:30:00Z"),
      questionIds: ["2"],
    },
    {
      id: "tag4",
      name: "Databases",
      description: "Systems for storing and retrieving data efficiently.",
      createdAt: new Date("2024-04-25T11:45:00Z"),
      updatedAt: new Date("2024-04-25T11:45:00Z"),
      questionIds: ["3"],
    },
    {
      id: "tag5",
      name: "API Design",
      description: "Best practices for designing and developing APIs.",
      createdAt: new Date("2024-05-30T12:00:00Z"),
      updatedAt: new Date("2024-05-30T12:00:00Z"),
      questionIds: ["4"],
    },
  ];
}
