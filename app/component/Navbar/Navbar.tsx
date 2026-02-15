import Link from "next/link";
import { navbarStyle } from "./navbarStyle";

type NavbarProps = {
    items: string[];
};

const Navbar = ({ items }: NavbarProps) => {
    return (
        <div style={navbarStyle.root}>
            {items.map((item) => (
                <Link style={navbarStyle.linkSection} key={item} href={`/${item}`}>
                    <span style={{ cursor: "pointer", marginRight: 12 }}>
                        {item}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
