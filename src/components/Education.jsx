import React from 'react';
import H2 from '../styled/H2';
import H3 from '../styled/H3';
import P from '../styled/P';


const Education = props => (
    <div className="Eduacation">
        <H2 name='Education'></H2>
        <div className="Education-container">
            {
                props.data.map((edu, index) => (
                    <div className="Education-Item" key={`Edu-${index}`}>
                        <H3>{edu.degree}
                            {edu.institution}
                            <span>{edu.startDate}- {edu.endDate}</span>
                        </H3>
                        <P>{edu.description}</P>
                    </div>
                ))
            }

        </div>
    </div>
)

export default Education;