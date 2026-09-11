# Raiders Lacrosse Academy

Full-stack site for the Raiders Lacrosse Academy: a React (Vite) frontend and a
Node/Express backend.

## Structure

```
raiders/
├── client/   React frontend (Vite)
└── server/   Express API backend
```

## Pages

- **Home** (`/`) — hero, "About Us" preview with the Develop / Empower / Inspire /
  Succeed pillars, and the Programs section.
- **About** (`/about`) — mission, values, and program stats.
- **Join the Team** (`/join`) — application form that posts to the backend.

## Running locally

**Backend** (http://localhost:4000):

```bash
cd server
npm install
npm run dev
```

**Frontend** (http://localhost:5173):

```bash
cd client
npm install
npm run dev
```

The frontend calls the API at `http://localhost:4000/api` by default. Override
with a `VITE_API_BASE` env var in `client/.env` if the backend runs elsewhere.

## API

- `GET /api/health` — health check
- `GET /api/pillars` — About Us pillars (Develop/Empower/Inspire/Succeed)
- `GET /api/programs` — program cards (Elite Training, Competitive Play, etc.)
- `POST /api/join` — submit a team application (`firstName`, `lastName`,
  `email`, `phone`, `age`, `position`, `institution` required; `experience`, `message`
  optional). Validated submissions are appended to `server/data/submissions.json`.
