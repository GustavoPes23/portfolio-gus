import Content from "./components/content";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Profile from "./components/profiles";
import { LoginAuth } from "./utils/type";

import { loginAuth } from "./utils/user";

export default async function Home() {
  const user: void | LoginAuth = await loginAuth();

  return (
    <>
      <Hero />
      <Content user={user!} />
      <Profile />
      <Footer />
    </>
  );
}
