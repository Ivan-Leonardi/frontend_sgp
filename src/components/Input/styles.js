import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 10px;
    margin-bottom: 14px;

    > input {
        height: 52px;
        width: 100%;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;        

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }        
    }

    > svg{
            margin: 0 8px;
        }
`;