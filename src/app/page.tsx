"use client"

import Content from "./components/content";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Profile from "./components/profiles";

export default function Home() {
  return (
    <>
      <Hero />
      <Content />
      <Profile />
      <Footer />
    </>
  );
}
