import Image from "next/image";
import Navbar from "./component/Navbar/Navbar";

export default function Home() {
  const navItems: string[] = [
    "redux-implementation"
  ]
  return (
    <div>
      <div>
        <Navbar items={navItems} />
      </div>
    </div>
  );
}
