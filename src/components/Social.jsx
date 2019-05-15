import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';

const SocialStyled = Styled.div`
    margin: 0 auto;
    display: block;
 `;

const SocialUl = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0; 
 `;

const SocialLi = Styled.li`
    display: inline;
    margin: 0 1em 0 0;    
`;

const SocialAnchor = Styled.a`
    color: #212121; 
    text-decoration: none;
    font-size: 1.2em;
 `;

const SocialIcon = Styled.i`
    color: ${props => props.theme.color};
`;

const SocialColors = {
    facebook: '#3B5998',
    twitter: '#38A1F3',
    linkedin: '#0E76A8',
    github: '#333'
}

const getColor = name => ({
    color: SocialColors[name]
})

const Social = (props) => (
    <SocialStyled>
        {props.social &&
            <SocialUl>
                {props.social.map((item, index) => (
                    <SocialLi key={`item-${index}`}>
                        <SocialAnchor
                            href={item.url}
                            target="_blank">
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fa fa-${item.name}`} />
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl>
        }

    </SocialStyled>
)

export default Social;