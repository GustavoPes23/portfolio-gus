import Content from "./components/content";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Profile from "./components/profiles";

import { loginAuth } from "./utils/user";

import type { DoPostResponse } from "@/services/types";

export default async function Home() {
  const user: DoPostResponse | undefined = await loginAuth();

  return (
    <>
      <Hero />
      <Content 
        user={user}
      />
      <Profile />
      <Footer />
    </>
  );
}
