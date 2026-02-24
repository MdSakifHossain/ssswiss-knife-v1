import { Link } from "react-router";
import { CommandPalette } from "../overlays/commandPalette";

export default function Header() {
  return (
    <div className="border-b-2 dark:border-b-0 bg-secondary px-8 py-2 flex justify-between items-center">
      <HeaderIcon />
      <CommandPalette />
    </div>
  );
}

function HeaderIcon() {
  return (
    <Link to="/">
      <img src="/vite.svg" alt="icon" className="size-10" />
    </Link>
  );
}
