import React from 'react';
import Styled from 'styled-components';

const StyledH3 = Styled.h3`
    font-weight: 400;    
    margin: 0.5em 0;
    color: #212121;
    font-family: 'Roboto', sans-serif;
`;

const H3 = ({ children }) => <StyledH3>{children}</StyledH3>

export default H3;