import { DropdownContainer, DropdownToggle,  Placeholder, DropdownList,  DropdownItem } from "./styles";
import { useState, useRef, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';

export function StatusDropdown({ onSelectStatus }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');
  
    const dropdownRef = useRef(null);
  
    const statusOptions = ['planejamento', 'iniciado'];
  
    const handleStatusClick = (status) => {
      setSelectedStatus(status);
      onSelectStatus(status);
      setIsOpen(false);
    };
  
    const handleToggleClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <DropdownContainer ref={dropdownRef}>
        <DropdownToggle onClick={handleToggleClick}>
          <Placeholder>
            {selectedStatus ? selectedStatus : 'Selecione o status'}
          </Placeholder>
          <FaCaretDown />
        </DropdownToggle>
        <DropdownList isOpen={isOpen}>
          {statusOptions.map((status, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleStatusClick(status)}
            >
              {status}
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownContainer>
    );
};


// import { Status } from "./styles";

// export function StatusProject() {
//     return (
//         <Status>
//             <option value="">Status do projeto</option>
//             <option value="planejamento">Planejamento</option>
//             <option value="iniciado">Iniciado</option>
//         </Status>
//     );
// }