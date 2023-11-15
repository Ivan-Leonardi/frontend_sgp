import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 100%;
  
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
`;

export const DropdownToggle = styled.div`
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const Placeholder = styled.div`
  color: ${({theme}) => theme.COLORS.GRAY_300};
  padding: 12px;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  border: transparent; 
  border-radius: 10px;
`;

export const DropdownItem = styled.div`
  
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${({theme}) => theme.COLORS.BACKGROUND_500};
  }
`;

// export const Status = styled.select`
//     width: 100%;      
//     height: 52px;
//     border-radius: 10px;
//     margin-bottom: 14px;
//     padding: 12px;
//     font-size: 16px;
    
//     background: ${({ theme }) => theme.COLORS.BACKGROUND_700};        
//     color: ${({ theme }) => theme.COLORS.GRAY_300};
    
//     outline: 0;
//     border: 0; 
    
//    > option {        
//         color: ${({ theme }) => theme.COLORS.WHITE};        
//     }
// `;