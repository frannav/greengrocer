import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../public/logo-cabecera.png";
const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #c4c4c4;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    flex-direction: inherit;
`;
const NavBarList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;
const NavBarItem = styled.li`
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
`;

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
