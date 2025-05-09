# 🐞 Issue Tracker Fullstack App

A modern, fullstack issue tracker built with **Next.js**, **TypeScript**, **Prisma**, **Tailwind CSS**, **Shadcn/UI**, and **PostgreSQL**.  

Easily create, assign, and manage issues with a clean UI and powerful filtering.

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&style=for-the-badge)

![TypeScript](https://img.shields.io/badge/Code-TypeScript-blue?logo=typescript&style=for-the-badge)

![image](https://github.com/user-attachments/assets/e9cf1115-0f88-4340-8479-11ad9bc09f10)

---

# 🚀 Live Demo

👉 **[Click here to view the app](https://issue-tracker-fullstack-project.vercel.app/)**

---

# 📌 Features

- Create, update, delete issues
- Assign issues to users
- Filter, sort, and paginate issue lists
- Auth integration (Better-auth)
- User-friendly dashboard

---

# 🛠️ Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, Shadcn/UI
- **Backend**: Prisma ORM, PostgreSQL
- **Auth**: Better-auth
- **Hosting**: Vercel

---

# 🧭 Roadmap

- [x] Core issue CRUD features  
- [x] User authentication  
- [x] Assigning and filtering issues  
- [x] Dashboard view  

---

# 👨‍💻 Setup Instructions


Clone the repo
```bash
git clone https://github.com/rites23/issue-tracker-fullstack-project.git
```
```bash
cd issue-tracker-fullstack-project
```
Install dependencies
```bash
pnpm install
```
Set up .env for DB and auth
```bash
cp .env.example .env
```
Push schema and start dev
```bash
pnpm prisma db push
```
```bash
pnpm dev
```

