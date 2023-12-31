import "../style/style.css";
import "../style/globals.css";
import "../style/queries.css";
import { Rubik, Inter } from "next/font/google";
import Script from "next/script";

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  style: "normal",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Icons */}
      <Script
        src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
        type="module"
        // onError={() => setHasError(true)}
        // onReady={() => setIsReady(true)}
      />
      <Script
        src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
        nomodule=""
        // onError={() => setHasError(true)}
        // onReady={() => setIsReady(true)}
      />

      <body className={rubik.className}>{children}</body>
    </html>
  );
}
