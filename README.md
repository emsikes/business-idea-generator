# 🩺 Demo SaaS Medi Transcriptor

[![License:
MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![Status](https://img.shields.io/badge/Status-Active-success)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![Platform](https://img.shields.io/badge/Platform-React%20%7C%20Next.js%20%7C%20FastAPI%20%7C%20Python-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)

## 📖 Overview

**SaaS Medi Transcriptor** is a demo app of a potential modern SaaS application for **medical
transcription**.\
It empowers healthcare professionals to transcribe conversations into
structured, accurate, and secure text.\
The platform combines a **React + Next.js** frontend with a **FastAPI
(Python)** backend for performance, scalability, and developer-friendly
workflows.

------------------------------------------------------------------------

## ✨ Features

-   🎙️ **Full Text Summarization** -- Accurate transcription of medical
    consultations.\
-   🧾 **Structured Clinical Output** -- Generates clean, formatted
    transcripts.\
-   **Visit Summary Email to Patient** -- Accurate transcription of medical
    consultations emailed to patient.\
-   🔐 **Secure by Design** -- HIPAA-friendly architecture and
    compliance-ready. (demo only and not configured fully HIIPA compliant)\
-   ☁️ **SaaS Multi-Tenancy** -- Scalable backend for multiple
    organizations.\
-   📊 **Export & Sharing** -- Save transcripts in PDF, text, or
    EHR-ready formats.

------------------------------------------------------------------------

## 🚀 Tech Stack

### Frontend

-   ⚛️ **React** -- UI component architecture.\
-   ▲ **Next.js** -- SSR, routing, and API integration.\
-   🎨 **TailwindCSS** *(optional)* -- Modern styling.

### Backend

-   ⚡ **FastAPI (Python)** -- High-performance API framework.\
-   🐍 **Python 3.9+** -- Backend logic and integrations.\
-   🗄️ **Database** -- (e.g., PostgreSQL, MySQL, or SQLite depending on
    setup).

------------------------------------------------------------------------

## 🛠️ Installation

### 1. Clone the repository

\`\`\`bash git clone
https://github.com/emsikes/saas-medi-transcriptor.git cd
saas-medi-transcriptor \`\`\`

### 2. Setup Backend (FastAPI)

\`\`\`bash cd backend python -m venv venv source venv/bin/activate \# On
Windows: venv`\Scripts`{=tex}`\activate`{=tex} pip install -r
requirements.txt

# Run backend server

uvicorn main:app --reload \`\`\`

### 3. Setup Frontend (React + Next.js)

\`\`\`bash cd frontend npm install

# Run development server

npm run dev \`\`\`

The backend runs by default on **http://localhost:8000**\
The frontend runs on **http://localhost:3000**

------------------------------------------------------------------------

## 📂 Project Structure
```
saas/
├── pages/                  # Next.js Pages Router
├── styles/                 # CSS styles
├── api/                    # FastAPI backend
├── public/                 # Static assets
├── node_modules/          
├── .env.local             # Your secrets (never commit!)
├── .gitignore
├── package.json
├── requirements.txt
├── next.config.ts
└── tsconfig.json
```
------------------------------------------------------------------------

## 🤝 Contributing

Contributions are welcome!\
Please fork the repo and submit a pull request.

1.  🍴 Fork the project\
2.  🌱 Create your feature branch
    (`git checkout -b feature/YourFeature`)\
3.  💡 Commit your changes (`git commit -m 'Add new feature'`)\
4.  🚀 Push to the branch (`git push origin feature/YourFeature`)\
5.  🔁 Open a Pull Request

------------------------------------------------------------------------

## 📜 License

This project is licensed under the [MIT License](LICENSE).

------------------------------------------------------------------------

## 📧 Contact

For questions or collaboration opportunities:\
**Author:** Matt Sikes\
**GitHub:** [emsikes](https://github.com/emsikes)

------------------------------------------------------------------------

> 🩺 *Building AI-powered healthcare tools that make medical workflows
> faster, safer, and smarter.*
