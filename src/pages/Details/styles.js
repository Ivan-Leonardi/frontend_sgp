import styled from "styled-components";

export const Container = styled.div`  
    width: 100%;
    height: 100vh;
    display: flex;    
    flex-direction: column;

    > main {        
        padding: 64px 0; 
        overflow-y: auto;

        @media (max-width:440px) {
            padding: 0 26px;
        }
    }
`;

export const Status = styled.span`
    font-size: 18px;    
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const ButtonDiv = styled.div`
    width: 100%;
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 5px;
        color: ${({theme}) => theme.COLORS.GREEN};
    }

    @media (max-width:440px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;