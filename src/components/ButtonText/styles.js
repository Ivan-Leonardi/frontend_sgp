import styled from "styled-components";

export const Container = styled.button`    
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.RED_500 : theme.COLORS.GRAY_100 };
    border: none;
    font-size: 16px;    
    /* margin-top: 30px;
    text-align: center;
    padding: 8px 20px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center; */

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-align: center;
        margin-left: 5px;
        font-size: 24px;
    }
`;