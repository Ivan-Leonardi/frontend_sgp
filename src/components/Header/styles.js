import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    height: 85px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    padding: 0 60px; 
    
    @media (max-width: 440px) {
        height: 85px;
        padding: 0 30px; 
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 20px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    } 
    
    @media (max-width: 440px) {
        > div {    
        span {
            font-size: 12px;            
        }
        strong {
            font-size: 14px;            
        }
     } 
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;       
    }     
`;