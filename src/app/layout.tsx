import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaveWise | Automate Your Wealth",
  description: "Secure, automated savings and mutual fund investments for the modern Nigerian professional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}
