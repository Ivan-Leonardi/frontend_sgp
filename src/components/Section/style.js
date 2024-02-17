import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    flex-wrap: wrap;
    margin: 18px 0 20px;
    display: flex; 
    align-items: center;
    gap: 10px;
    padding-left: 3px;    
    
    > h2 {        
        text-align: center;
        
        border-bottom-width: 1px;
       
        border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

        //padding-bottom: 16px;
       // margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;

        @media (max-width:440px) {
            font-size: 16px;
        }
    }
`;

