import React from 'react';
import Styled from 'styled-components';

const StyledH2 = Styled.h2`
    font-weight: 300;
    letter-spacing: .8px;
    margin: 1em 0 0 0 ;
    color: #C2185B;
    font-family:'Roboto', sans-serif;
`;

const H2 = ({ name }) => <StyledH2>{name}</StyledH2>

export default H2;