import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KINGFOUNDER | Raising Confident Leaders",
    template: "%s | KINGFOUNDER",
  },
  description:
    "KINGFOUNDER discovers, mentors, and empowers young people through communication, leadership, and personal development to discover their voice and fulfil their purpose.",
  keywords: [
    "KINGFOUNDER",
    "leadership development",
    "young leaders",
    "communication skills",
    "personal development",
    "mentorship",
    "public speaking",
    "leadership training",
  ],
  authors: [{ name: "KINGFOUNDER" }],
  creator: "KINGFOUNDER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
