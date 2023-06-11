import Image from "next/image";
import deskPhoto from "/public/images/homepage/desk.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulvi Damirli Blog",
  description: "Code, tech, and other things I like to write about.",
  alternates: {
    canonical: "/",
  },
};

export default function Home(): JSX.Element {
  return (
    <main className="w-full px-4 prose max-w-none">
      <h1>
        I am Ulvi Damirli, <br /> Senior Software Engineer.
      </h1>
      <p>
        I love building technology that makes people&apos;s lives easier.
        <br />
        <br />
        This app is built with: <br /> React, Next JS, Tailwind CSS, Directus CMS,
        PostgreSQL, NGINX and Docker.
      </p>
      <Image
        src={deskPhoto}
        alt="My work desk with Apple iMac and peripherals"
      ></Image>
    </main>
  );
}
