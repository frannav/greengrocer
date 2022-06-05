import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-cabecera.png";
import { NavBarContainer, NavBarList, NavBarItem } from "./navbar.style";

const listNavBar = ["About us", "Products", "What we do", "contact"];
const Navbar = () => {
    return (
        <NavBarContainer>
            <Image src={logo} height={50} width={50} alt="logo" />
            <NavBarList>
                {listNavBar.map((item, index) => {
                    return (
                        <NavBarItem key={index}>
                            <Link href={`/${item.toLowerCase()}`}>
                                <a>{item.toLocaleUpperCase()}</a>
                            </Link>
                        </NavBarItem>
                    );
                })}
            </NavBarList>
        </NavBarContainer>
    );
};
export default Navbar;
