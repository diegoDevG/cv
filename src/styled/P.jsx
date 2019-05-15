import React from 'react';
import Styled from 'styled-components';

const StyledP = Styled.p`
    font-weight: 300;
    margin: 0.5em 0 1.2em 0;
    color: #757575;
    font-family: 'Roboto', sans-serif;
`;

const P = ({ children }) => <StyledP>{children}</StyledP>

export default P;