
export const metadata = {
  title: "Gael Linn Dashboard",
  description: "Gael Linn Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, background: "#f3f4f6" }}>
        {children}
      </body>
    </html>
  );
}
