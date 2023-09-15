import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Saibamais = styled(Link)`
  background-color: #ffd900;
  color: #000000; 
  border: none;
  padding: 10px 20px; 
  font-size: 150%;
  font-weight: 700; 
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;  
  text-decoration: none;
  transition: background-color 0.3s ease;
 


&:hover{ 
  background-color: #000000;
  color: #ffffff; 
  font-size: 165%;
  transition: font-size 0.3s ease;
}

&:not(:hover){
  transition: font-size 0.2s ease;
  font-size: 150%;
}
`;
