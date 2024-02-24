import Link from "next/link";
import ThemeToggle from "../about/components/ThemeToggle";

export const metadata = {
  title: "Contact page",
  description: "Generated for Contact page",
};

export default function Contact() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1 style={{ textAlign: "center", marginTop: 50 }}>Contact Page</h1>
      <br /><br /><br />
      <ThemeToggle />
      <br /><br />
      <Link href="/" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Back to home</h2>
      </Link>
      <Link href="/about" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Go to about</h2>
      </Link>
    </div>
  );
}
