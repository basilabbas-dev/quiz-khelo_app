import { Baloo_2 } from "next/font/google";

import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Quiz Khelo",
  description: "Test your knowledge with Quiz Khelo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        {children}
      </body>
    </html>
  );
}