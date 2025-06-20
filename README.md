
# 🧠 RepoRank  
**GitHub trends decoded. MVPs accelerated.**  
Built with Google Vertex AI for the AI in Action Hackathon

---

## 🔍 What is RepoRank?

**RepoRank** helps developers turn ideas into MVPs by analyzing public GitHub repositories at scale. It surfaces rising projects, explains why they’re trending, and distills reusable components—powered by LLMs.

You can:
- Search repos with natural language
- Filter by time (daily → all-time)
- Summarize components (auth, data model, etc.)
- Export blueprints for faster dev

---

## 🚀 Live Demo
👉 [reporank.ai](https://reporank.ai) *(insert actual link)*

---

## 🧰 Tech Stack

### 🖥️ Frontend
- **Next.js** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (animations)
- Gradient + minimalist layout inspired by OpenAI

### 🔧 Backend
- **Node.js** + **Express**
- **MongoDB Atlas** (with Vector Search for semantic repo search)
- **Google Vertex AI (Gemini)** for:
  - Summarizing repo architecture
  - Extracting MVP components
  - Clustering topics via embeddings
- **LangChain** for LLM-based RAG pipelines

---

## 📦 Features

### 🔎 Trend Discovery
- Tracks fast-growing repos using GitHub public data (GH Archive + REST API)
- Supports semantic time filtering:
  - Daily, Weekly, Last 2 Weeks, Monthly, Last 6 Months, Year, All Time
- Displays stars (⭐ yellow) and forks (🍴 orange)
- At least 30 trending repos per time range

### 🤖 MVP Helper
- Input: “I want to build a journaling app”
- Output:
  - Key components extracted from similar repos
  - Suggested architecture (routes, DB, auth, deployment)
  - Exportable code templates (coming soon)

---

## 🛠️ Getting Started

### 🔌 Backend (Node + Express)

```bash
cd backend
npm install
npm run dev
```

- Requires MongoDB Atlas URL and Vertex AI key in `.env`
```
MONGODB_URI=your_mongo_uri
VERTEX_API_KEY=your_google_vertex_key
```

---

### 💻 Frontend (Next.js + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

- Uses `/api` routes to communicate with backend
- Update `.env.local` with your API endpoints if deploying separately

---

## 🧪 Sample Query

```http
POST /api/search
{
  "query": "show me LLM agents for browser automation",
  "timeRange": "last_2_weeks"
}
```

Returns a ranked list of GitHub repos with summaries, stars, forks, and links.

---

## 👥 Team

- Kedaar Rentachintala – Product + Fullstack

---

## 📜 License
MIT License
