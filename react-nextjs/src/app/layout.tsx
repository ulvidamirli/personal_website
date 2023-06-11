import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children, }: { children: React.ReactNode; }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container-sm">
          <div className="row -mx-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
