import styled from "styled-components";
import { Link } from "react-router-dom";

export const Brand = styled.div`
    font-size: 10px;
    text-align: center;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 20px;
    
        > p {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.GREEN};
       
        border: 1px solid gray;
        border-radius: 50%;
        padding: 10px;        
    }

    @media (max-width: 768px) {
        font-size: 8px;

        p {
            font-size: 18px;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};;
    border-bottom-style: solid; 
    padding-bottom: 16px;
    
    @media (max-width: 440px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 26px;
    }
`;

export const Search = styled.div`   
    display: flex;
    align-items: center;
    min-width: 30%;    
`;

export const Box = styled.div`    
    width: 100%;
    display: flex;            
`;

export const Menu = styled.ul`
    margin-top: 10px;    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px 12px;   
    width: 20%;
    text-align: center;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-right-style: solid;    

    > li {
        list-style: none;
        color: ${({ theme }) => theme.COLORS.GRAY_100};       
    }

    @media (max-width: 440px) {
        display: none;
    }
`;

export const Content = styled.div`
    margin-top: -14px;    
    width: 100%;
    padding: 6px 46px;
    overflow-y: auto;   
`;

export const NewProject = styled(Link)`
    background: ${({ theme }) => theme.COLORS.GREEN};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 10px 20px;
    border-radius: 5px;

    svg {
        margin-right: 5px;
    }
`;