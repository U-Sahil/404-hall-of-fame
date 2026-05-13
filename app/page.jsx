"use client";

import { useState, useEffect, useRef } from "react";

const entries = [
  {
    id: 1,
    title: "GitHub",
    company: "GitHub",
    url: "https://github.com/404",
    screenshot: "https://i.imgur.com/octocat.png",
    category: "Interactive",
    tags: ["animated", "character", "space"],
    votes: 2847,
    description: "Octocat lost in space with a parallax star field. Click to explore the cosmos.",
    color: "#0d1117",
    accent: "#58a6ff",
    emoji: "🐙",
    submittedBy: "octodev",
    year: 2023,
  },
  {
    id: 2,
    title: "Pixar",
    company: "Pixar",
    url: "https://pixar.com/404",
    screenshot: "",
    category: "Animated",
    tags: ["cute", "animated", "colorful"],
    votes: 1923,
    description: "A loveable character tumbles through a white void. Pure Pixar magic.",
    color: "#1a1a2e",
    accent: "#e94560",
    emoji: "🎬",
    submittedBy: "designlover",
    year: 2022,
  },
  {
    id: 3,
    title: "Blizzard",
    company: "Blizzard",
    url: "https://blizzard.com/404",
    screenshot: "",
    category: "Gaming",
    tags: ["dark", "epic", "gaming"],
    votes: 1654,
    description: "A dramatic dungeon scene with a skeleton guard blocking your path.",
    color: "#0a0a0a",
    accent: "#ffd700",
    emoji: "⚔️",
    submittedBy: "gamer404",
    year: 2023,
  },
  {
    id: 4,
    title: "Lego",
    company: "Lego",
    url: "https://lego.com/404",
    screenshot: "",
    category: "Playful",
    tags: ["colorful", "fun", "brand"],
    votes: 3102,
    description: "Build your way back home. Lego bricks scatter across the screen.",
    color: "#ffcf00",
    accent: "#da291c",
    emoji: "🧱",
    submittedBy: "brickmaster",
    year: 2024,
  },
  {
    id: 5,
    title: "Spotify",
    company: "Spotify",
    url: "https://spotify.com/404",
    screenshot: "",
    category: "Minimal",
    tags: ["minimal", "music", "green"],
    votes: 2211,
    description: "Even the best DJs lose a track. Clean, musical, and on-brand.",
    color: "#121212",
    accent: "#1db954",
    emoji: "🎵",
    submittedBy: "spotifan",
    year: 2023,
  },
  {
    id: 6,
    title: "Airbnb",
    company: "Airbnb",
    url: "https://airbnb.com/404",
    screenshot: "",
    category: "Illustrated",
    tags: ["illustrated", "warm", "travel"],
    votes: 1789,
    description: "A traveler lost on a winding road, beautifully illustrated.",
    color: "#fff8f6",
    accent: "#ff5a5f",
    emoji: "🏠",
    submittedBy: "ux_nomad",
    year: 2022,
  },
];

const categories = ["All", "Interactive", "Animated", "Gaming", "Playful", "Minimal", "Illustrated"];

const GraveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22V18a4 4 0 0 1 8 0v4" />
    <rect x="4" y="4" width="16" height="14" rx="2" />
    <path d="M12 8v4M10 10h4" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

function Particle({ x, y, delay }) {
  return (
    <div style={{
      position: "absolute",
      left: x + "%",
      top: y + "%",
      width: "2px",
      height: "2px",
      animation: `float 5s ease-in-out ${delay}s infinite alternate`,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.15)",

      pointerEvents: "none",
    }} />
  );
}

function CardPreview({ entry, voted, onVote, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0f0f13",
        border: `1px solid ${hovered ? entry.accent + "66" : "#ffffff15"}`,
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 40px ${entry.accent}22` : "none",
        position: "relative",
      }}
    >
      <div style={{
        height: "180px",
        background: `linear-gradient(135deg, ${entry.color} 0%, ${entry.accent}33 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          fontSize: "72px",
          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          transition: "transform 0.3s ease",
          lineHeight: 1,
        }}>{entry.emoji}</div>
        <div style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: entry.accent + "22",
          border: `1px solid ${entry.accent}44`,
          color: entry.accent,
          fontSize: "11px",
          fontWeight: 600,
          padding: "4px 10px",
          borderRadius: "20px",
          fontFamily: "monospace",
          letterSpacing: "0.05em",
        }}>{entry.category}</div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "8px" }}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{entry.company}</div>
            <div style={{ fontSize: "12px", color: "#ffffff55", marginTop: "2px" }}>by @{entry.submittedBy}</div>
          </div>
          <button
            onClick={e => { e.stopPropagation(); onVote(entry.id); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              background: voted ? entry.accent + "22" : "transparent",
              border: `1px solid ${voted ? entry.accent : "#ffffff25"}`,
              borderRadius: "20px",
              padding: "6px 12px",
              cursor: "pointer",
              color: voted ? entry.accent : "#ffffff55",
              fontSize: "13px",
              fontWeight: 600,
              transition: "all 0.2s ease",
            }}
          >
            <HeartIcon filled={voted} />
            {(entry.votes + (voted ? 1 : 0)).toLocaleString()}
          </button>
        </div>
        <p style={{ fontSize: "13px", color: "#ffffff66", lineHeight: "1.6", margin: "0 0 12px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {entry.description}
        </p>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {entry.tags.map(tag => (
            <span key={tag} style={{
              fontSize: "11px",
              color: "#ffffff44",
              background: "#ffffff0a",
              border: "1px solid #ffffff15",
              padding: "3px 8px",
              borderRadius: "20px",
            }}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Modal({ entry, voted, onVote, onClose }) {
  useEffect(() => {
    const h = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
      zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#0f0f13",
        border: `1px solid ${entry.accent}44`,
        borderRadius: "24px",
        width: "100%",
        maxWidth: "560px",
        overflow: "hidden",
        animation: "modalIn 0.25s cubic-bezier(.4,0,.2,1)",
      }}>
        <div style={{
          height: "240px",
          background: `linear-gradient(135deg, ${entry.color} 0%, ${entry.accent}44 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}>
          <div style={{ fontSize: "100px", lineHeight: 1 }}>{entry.emoji}</div>
          <button onClick={onClose} style={{
            position: "absolute", top: "16px", right: "16px",
            background: "#00000066", border: "1px solid #ffffff22", borderRadius: "50%",
            width: "36px", height: "36px", cursor: "pointer", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}><XIcon /></button>
        </div>
        <div style={{ padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{entry.company}</h2>
              <span style={{
                background: entry.accent + "22", border: `1px solid ${entry.accent}44`,
                color: entry.accent, fontSize: "12px", fontWeight: 600, padding: "4px 12px",
                borderRadius: "20px", display: "inline-block", marginTop: "8px",
              }}>{entry.category}</span>
            </div>
            <button onClick={() => onVote(entry.id)} style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: voted ? entry.accent + "22" : "#ffffff0a",
              border: `1px solid ${voted ? entry.accent : "#ffffff22"}`,
              borderRadius: "24px", padding: "10px 18px", cursor: "pointer",
              color: voted ? entry.accent : "#ffffff66",
              fontSize: "15px", fontWeight: 700, transition: "all 0.2s",
            }}>
              <HeartIcon filled={voted} />
              {(entry.votes + (voted ? 1 : 0)).toLocaleString()}
            </button>
          </div>
          <p style={{ fontSize: "15px", color: "#ffffffaa", lineHeight: "1.7", marginBottom: "20px" }}>{entry.description}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {entry.tags.map(tag => (
              <span key={tag} style={{
                fontSize: "12px", color: entry.accent + "cc",
                background: entry.accent + "11", border: `1px solid ${entry.accent}33`,
                padding: "4px 12px", borderRadius: "20px",
              }}>#{tag}</span>
            ))}
          </div>
          <a href={entry.url} target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: entry.accent, color: "#000",
            fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "12px",
            textDecoration: "none", transition: "opacity 0.2s",
          }} onMouseEnter={e => e.target.style.opacity = 0.85} onMouseLeave={e => e.target.style.opacity = 1}>
            Visit the 404 <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

function SubmitModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ company: "", url: "", description: "", category: "Minimal", emoji: "🌐" });
  const emojis = ["🌐", "🎮", "🎬", "🎵", "🏠", "🧱", "⚔️", "🚀", "🌈", "💀", "🤖", "🦄"];

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)",
      zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#0f0f13", border: "1px solid #ffffff22", borderRadius: "24px",
        width: "100%", maxWidth: "500px", padding: "32px",
        animation: "modalIn 0.25s cubic-bezier(.4,0,.2,1)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#fff" }}>Submit a 404 Page</h2>
          <button onClick={onClose} style={{ background: "transparent", border: "1px solid #ffffff22", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><XIcon /></button>
        </div>
        {[
          { key: "company", label: "Company / Site Name", placeholder: "e.g. Netflix" },
          { key: "url", label: "404 Page URL", placeholder: "https://netflix.com/404" },
          { key: "description", label: "Description", placeholder: "What makes it special?" },
        ].map(f => (
          <div key={f.key} style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#ffffff66", marginBottom: "6px", fontWeight: 600 }}>{f.label}</label>
            {f.key === "description"
              ? <textarea placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} rows={3}
                style={{ width: "100%", background: "#ffffff08", border: "1px solid #ffffff22", borderRadius: "10px", padding: "10px 12px", color: "#fff", fontSize: "14px", resize: "vertical", boxSizing: "border-box", outline: "none", fontFamily: "inherit" }} />
              : <input type="text" placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                style={{ width: "100%", background: "#ffffff08", border: "1px solid #ffffff22", borderRadius: "10px", padding: "10px 12px", color: "#fff", fontSize: "14px", boxSizing: "border-box", outline: "none" }} />
            }
          </div>
        ))}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontSize: "13px", color: "#ffffff66", marginBottom: "6px", fontWeight: 600 }}>Category</label>
          <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
            style={{ width: "100%", background: "#ffffff08", border: "1px solid #ffffff22", borderRadius: "10px", padding: "10px 12px", color: "#fff", fontSize: "14px", outline: "none" }}>
            {categories.filter(c => c !== "All").map(c => <option key={c} value={c} style={{ background: "#0f0f13" }}>{c}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontSize: "13px", color: "#ffffff66", marginBottom: "8px", fontWeight: 600 }}>Pick an emoji</label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {emojis.map(e => (
              <button key={e} onClick={() => setForm(p => ({ ...p, emoji: e }))} style={{
                fontSize: "22px", background: form.emoji === e ? "#ffffff22" : "transparent",
                border: `1px solid ${form.emoji === e ? "#ffffff44" : "#ffffff15"}`,
                borderRadius: "10px", padding: "6px 10px", cursor: "pointer", transition: "all 0.15s",
              }}>{e}</button>
            ))}
          </div>
        </div>
        <button onClick={() => { if (form.company && form.url) { onSubmit(form); onClose(); } }} style={{
          width: "100%", background: "linear-gradient(135deg, #7c3aed, #a855f7)",
          border: "none", borderRadius: "12px", padding: "14px",
          color: "#fff", fontSize: "15px", fontWeight: 700, cursor: "pointer",
          transition: "opacity 0.2s",
        }} onMouseEnter={e => e.target.style.opacity = 0.85} onMouseLeave={e => e.target.style.opacity = 1}>
          Submit to the Hall of Fame 🏆
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [allEntries, setAllEntries] = useState(entries);
  const [selected, setSelected] = useState(null);
  const [showSubmit, setShowSubmit] = useState(false);
  const [votedIds, setVotedIds] = useState(new Set());
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("votes");

  const [particles] = useState([
  { id: 1, x: 10, y: 20, delay: 0.2 },
  { id: 2, x: 30, y: 40, delay: 0.5 },
  { id: 3, x: 50, y: 60, delay: 0.8 },
  { id: 4, x: 70, y: 30, delay: 1.1 },
  { id: 5, x: 90, y: 50, delay: 1.4 },
  { id: 6, x: 20, y: 80, delay: 1.7 },
  { id: 7, x: 40, y: 10, delay: 2.0 },
  { id: 8, x: 60, y: 70, delay: 2.3 },
  { id: 9, x: 80, y: 90, delay: 2.6 },
  { id: 10, x: 15, y: 55, delay: 2.9 },
]);

  const filtered = allEntries
    .filter(e => filter === "All" || e.category === filter)
    .filter(e => !search || e.company.toLowerCase().includes(search.toLowerCase()) || e.description.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === "votes" ? b.votes - a.votes : b.year - a.year);

  const handleVote = id => {
    setVotedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const handleSubmit = form => {
    const colors = ["#0d1117", "#1a1a2e", "#0a0a0a", "#fff8f6", "#121212"];
    const accents = ["#58a6ff", "#e94560", "#ffd700", "#ff5a5f", "#1db954", "#a855f7"];
    setAllEntries(prev => [{
      ...form,
      id: Date.now(),
      votes: 0,
      submittedBy: "you",
      year: 2024,
      tags: [form.category.toLowerCase()],
      color: colors[Math.floor(Math.random() * colors.length)],
      accent: accents[Math.floor(Math.random() * accents.length)],
    }, ...prev]);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080810", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes float { from { transform: translateY(0px) scale(1); } to { transform: translateY(-20px) scale(1.1); } }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }
        @keyframes pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080810; }
        ::-webkit-scrollbar-thumb { background: #ffffff22; border-radius: 3px; }
        input:focus, select:focus, textarea:focus { border-color: #a855f7 !important; box-shadow: 0 0 0 3px #a855f722 !important; }
      `}</style>

      {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} />)}

      <div style={{
        position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "800px",
        background: "radial-gradient(circle, #7c3aed22 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <header style={{ textAlign: "center", padding: "80px 20px 60px", position: "relative" }}>
        <div style={{
          display: "inline-block",
          background: "linear-gradient(135deg, #7c3aed22, #a855f722)",
          border: "1px solid #7c3aed44",
          borderRadius: "20px",
          padding: "6px 16px",
          fontSize: "13px",
          color: "#a855f7",
          fontWeight: 600,
          marginBottom: "20px",
          letterSpacing: "0.05em",
        }}>✦ OPEN SOURCE PROJECT ✦</div>
        <h1 style={{
          fontSize: "clamp(48px, 8vw, 88px)",
          fontWeight: 900,
          margin: "0 0 8px",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          background: "linear-gradient(135deg, #ffffff 30%, #a855f7 70%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "fadeUp 0.6s ease forwards",
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800,
          margin: "0 0 20px",
          letterSpacing: "-0.03em",
          color: "#ffffff88",
          animation: "fadeUp 0.6s ease 0.1s both",
        }}>Hall of Fame</h2>
        <p style={{
          fontSize: "18px",
          color: "#ffffff55",
          maxWidth: "500px",
          margin: "0 auto 40px",
          lineHeight: 1.6,
          animation: "fadeUp 0.6s ease 0.2s both",
        }}>The internet's most creative error pages, curated by the community.</p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.6s ease 0.3s both" }}>
          <div style={{ background: "#ffffff0a", border: "1px solid #ffffff15", borderRadius: "12px", padding: "12px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#a855f7" }}>{allEntries.length}</div>
            <div style={{ fontSize: "12px", color: "#ffffff44", fontWeight: 600 }}>ENTRIES</div>
          </div>
          <div style={{ background: "#ffffff0a", border: "1px solid #ffffff15", borderRadius: "12px", padding: "12px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#a855f7" }}>
              {allEntries.reduce((s, e) => s + e.votes, 0).toLocaleString()}
            </div>
            <div style={{ fontSize: "12px", color: "#ffffff44", fontWeight: 600 }}>TOTAL VOTES</div>
          </div>
          <div style={{ background: "#ffffff0a", border: "1px solid #ffffff15", borderRadius: "12px", padding: "12px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#a855f7" }}>{categories.length - 1}</div>
            <div style={{ fontSize: "12px", color: "#ffffff44", fontWeight: 600 }}>CATEGORIES</div>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px 32px" }}>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ flex: 1, minWidth: "240px", position: "relative" }}>
            <div style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#ffffff44" }}><SearchIcon /></div>
            <input
              placeholder="Search companies, descriptions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", background: "#ffffff08", border: "1px solid #ffffff22",
                borderRadius: "12px", padding: "12px 14px 12px 40px", color: "#fff",
                fontSize: "14px", outline: "none",
              }}
            />
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{
            background: "#ffffff08", border: "1px solid #ffffff22", borderRadius: "12px",
            padding: "12px 16px", color: "#fff", fontSize: "14px", outline: "none", cursor: "pointer",
          }}>
            <option value="votes" style={{ background: "#0f0f13" }}>Most Voted</option>
            <option value="year" style={{ background: "#0f0f13" }}>Newest</option>
          </select>
          <button onClick={() => setShowSubmit(true)} style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            border: "none", borderRadius: "12px", padding: "12px 20px",
            color: "#fff", fontSize: "14px", fontWeight: 700, cursor: "pointer",
            whiteSpace: "nowrap", transition: "opacity 0.2s",
          }} onMouseEnter={e => e.currentTarget.style.opacity = 0.85} onMouseLeave={e => e.currentTarget.style.opacity = 1}>
            <PlusIcon /> Submit Page
          </button>
        </div>

        {/* Category filters */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              background: filter === cat ? "#a855f7" : "#ffffff08",
              border: `1px solid ${filter === cat ? "#a855f7" : "#ffffff22"}`,
              borderRadius: "20px", padding: "8px 16px",
              color: filter === cat ? "#fff" : "#ffffff66",
              fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px 80px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "#ffffff33" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>🕸️</div>
            <div style={{ fontSize: "20px", fontWeight: 700 }}>No pages found</div>
            <div style={{ fontSize: "14px", marginTop: "8px" }}>Try a different search or category</div>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}>
            {filtered.map((entry, i) => (
              <div key={entry.id} style={{ animation: `fadeUp 0.5s ease ${i * 0.05}s both` }}>
                <CardPreview
                  entry={entry}
                  voted={votedIds.has(entry.id)}
                  onVote={handleVote}
                  onClick={() => setSelected(entry)}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #ffffff0f",
        padding: "40px 20px",
        textAlign: "center",
        color: "#ffffff33",
        fontSize: "14px",
      }}>
        <div style={{ marginBottom: "8px" }}>
          <span style={{ fontSize: "20px" }}>🪦</span>{" "}
          <span style={{ fontWeight: 700, color: "#ffffff55" }}>404 Hall of Fame</span>
        </div>
        <div>Open source · Built with ❤️ by the community · Contribute on GitHub</div>
        <div style={{ marginTop: "16px", display: "flex", gap: "16px", justifyContent: "center" }}>
          {["Contribute", "GitHub", "Submit a 404"].map(link => (
            <span key={link} style={{ color: "#a855f766", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={e => e.target.style.color = "#a855f7"}
              onMouseLeave={e => e.target.style.color = "#a855f766"}
            >{link}</span>
          ))}
        </div>
      </footer>

      {selected && <Modal entry={selected} voted={votedIds.has(selected.id)} onVote={handleVote} onClose={() => setSelected(null)} />}
      {showSubmit && <SubmitModal onClose={() => setShowSubmit(false)} onSubmit={handleSubmit} />}
    </div>
  );
}
