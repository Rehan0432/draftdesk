# DraftDesk AI — Groq Edition (one-command startup)

## First-time setup (Windows PowerShell)

1. Extract this ZIP and open the `DraftDesk-Groq` folder in VS Code.
2. Inside `backend`, copy `.env.example` and rename the copy to `.env`.
3. Add your Groq API key in `backend/.env`:

```env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-120b
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
```

4. Open a terminal in the project root (the folder containing the root `package.json`).
5. Run:

```bash
npm run dev
```

The first run installs the root, backend, and frontend dependencies, then starts both servers. Later, run the same command again.

- Frontend: http://localhost:5173
- Backend health check: http://localhost:5000

The backend uses the Groq SDK and the `openai/gpt-oss-120b` model. It streams Groq response chunks internally, then returns the completed email draft to the existing frontend API.

The assistant is configured for email writing and replies only. Review every generated email before using it. Keep `backend/.env` private and never commit it to Git.

Stop both servers with `Ctrl + C`.
