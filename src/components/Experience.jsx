import React from 'react';
import H2 from '../styled/H2';
import H3 from '../styled/H3';
import P from '../styled/P';

const Experience = (props) => (
    <div className="Experience">
        <H2 name='Experience'></H2>
        <div className="Experience-container">
            {props.data.map((exp, index) => (
                <div className="Experiece-item" key={`Exp-${index}`}>
                    <H3>{exp.jobTitle} at {exp.company}</H3>
                    <H3>{exp.startDate} - {exp.endDate}</H3>
                    <P>{exp.jobDescription}</P>
                </div>
            ))}

        </div>
    </div>
)

export default Experience;