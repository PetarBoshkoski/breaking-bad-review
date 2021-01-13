import styled from "styled-components"
import { Link } from "react-router-dom";


export const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    color: chartreuse;  
`;

export const NavWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    min-height: 100vh;
    display: none;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Li = styled.li`
    font-size: 22px;
    font-weight: normal;
    list-style-type: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.1s;
    z-index: 1;
    &:hover {
        transform: translateY(-5px);
        opacity: 0.8;
    }
`;

export const LinkRouter = styled(Link)`
    z-index: 1;
    color: chartreuse;
    text-decoration: none;
`;