
import '../styles/globals.css';
``

export const metadata = {
  title: "Gael Linn Dashboard",
  description: "Gael Linn Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, background: "#f3f4f6" }}>
        <header
          style={{
            background: "#101A4D",
            color: "white",
            padding: "0.75rem 1rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center"
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Gael Linn
          </a>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="/dashboard" style={{ color: "white" }}>Dashboard</a>
            <a href="/settings/profile" style={{ color: "white" }}>Profile</a>
            <a href="/admin/users" style={{ color: "white" }}>Admin</a>
            <a href="/logout" style={{ color: "white" }}>Logout</a>
          </nav>
        </header>
