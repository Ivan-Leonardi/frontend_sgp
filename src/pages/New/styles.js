import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 88px;

    .devs {
        padding: 16px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto; 
    
    @media (max-width: 440px) {
        padding: 0 24px;
    }

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;       

        button {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};

            &:hover {
            text-decoration: underline;
          }
        }     
                   
    }

    @media (max-width: 440px) {
           header {
                justify-content: space-around;
                
            h1 {
                font-size: 18px;
            }           

        }
    }    

     input {
        padding: 20px;      
    }     
`;

export const DivDate = styled.div`
    width: 100%;
        
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 38px;

    label {
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        color: ${({ theme }) => theme.COLORS.GRAY_100};       
    }

    input {
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    @media (max-width: 440px) {
        flex-direction: column;
    }
`;