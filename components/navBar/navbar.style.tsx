import styled from "styled-components";

export const NavBarContainer = styled.nav`
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
export const NavBarList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;
export const NavBarItem = styled.li`
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
`;
