## DevOverflow

---

**DevOverflow** is a [Stack Overflow](https://stackoverflow.com/) clone build with Next.js that allows users to ask and answer programming questions. The platform is designed to be community-driven, with features such as user profiles, question tagging, and search functionality.

## Getting Started

---

### Prerequisites

- Node.js (>=20.17.0)
- Npm (>=10.8.2)
- Clerk account
- Mongodb with configured clusters

---

### Installation

1.  Clone the repository: `git clone https://github.com/your-username/dev-overflow.git`
2.  Install dependencies: `npm install`
3.  Create `.env` file in the root of your project. Fill the environment with the value on `env.example` file
4.  Run the seeded data if you needed: `npx prisma db seed`
5.  Start the development server: `npm run dev`
6.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

---

- Next.js for rendering framework
- Tailwind and Shadcn for styling
- Clerk For authentication
- Prisma for orm database
- Mongodb for the database

## TODO

---

- [ ] Completing implementation of action function
- [ ] Fix bug fecth all answer on lowest upvoted
