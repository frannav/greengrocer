import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../public/logo-cabecera.png";
const NavbarContainer = styled.nav`
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
    flex-direction: row-reverse;
`;
const NavbarList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;
const NavbarItem = styled.li`
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
`;
const NavbarLogo = styled.img`
    width: 100px;
    height: auto;
    float: left;
`;

const listNavBar = ["About us", "Products", "What we do", "Contact"];
const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarList>
                <NavbarItem>
                    <Image src={logo} height={50} width={50} alt="logo" />
                </NavbarItem>
                {listNavBar.map((item, index) => {
                    return (
                        <NavbarItem key={index}>
                            <Link href={`/${item.toLowerCase()}`}>
                                <a>{item}</a>
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarList>
        </NavbarContainer>
    );
};
export default Navbar;
