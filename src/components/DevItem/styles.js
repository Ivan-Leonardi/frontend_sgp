import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dotted ${theme.COLORS.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;
    margin-right: 5px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED_500};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    > input {
        height: 46px;
        width: 100%;

        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholeder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }    
`;