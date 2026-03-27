import { FloatingNav } from "./FloatingNav";

export function Navbar({ brand, navLinks, discordHref }) {
  return <FloatingNav brand={brand} navLinks={navLinks} discordHref={discordHref} />;
}
