import React from 'react';
import Social from './Social'
import styled from 'styled-components'

const AboutStyle = styled.div`
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 50%;
    width: 160px;
    height: 160px;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    border: 2px solid #05668D;
`;

const AboutName = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: 0.5em 0 0 0;
    color: #028090;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing:1.6px;
    font-weight: 300;
    color: #00A896; 
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight:300;
    text-align: left;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight:600;
`;


const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure onClick={() => alert('click')}>
                    <AboutImg src={avatar} alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>{name}</AboutName>
            <AboutProfession>{profession}</AboutProfession>
            <AboutBio>{bio}</AboutBio>
            <AboutLocation>{address}</AboutLocation>

            <div className="About-social">
                <Social social={social} />
            </div>

        </div>
    </AboutStyle>


)

export default About