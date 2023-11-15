import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 12px;
    font-weight: 500;
    padding: 5px 14px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
    color: #000;
    
    display: flex;
    flex-wrap: wrap;
`;