import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;    
    display: flex; 
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > h1 {
        text-align: center;        
        margin-bottom: 24px;
        font-size: 28px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        span {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }

        @media (max-width:440px) {         
            padding: 0 22px;
            font-size: 20px;            
        }
    }

    > h2 {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-bottom: 48px;

        @media (max-width:440px) {
            font-size: 14px;
            margin-bottom: 28px;
            padding: 0 12px;
        }
    }
`;

export const Form = styled.form`   
    width: 600px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media (max-width:440px) {
        width: 100%;
        padding: 0 20px;
    }

    > p {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        display: flex;  
        text-align: left;    
        margin-bottom: 12px;    
    }
    
    span {
        margin-top: 60px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        > a {
            color: ${({ theme }) => theme.COLORS.GREEN};
            margin-left: 5px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;