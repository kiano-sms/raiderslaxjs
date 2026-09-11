const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }

  return data;
}

export function getPrograms() {
  return request("/programs");
}

export function getPillars() {
  return request("/pillars");
}

export function submitJoinForm(payload) {
  return request("/join", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
