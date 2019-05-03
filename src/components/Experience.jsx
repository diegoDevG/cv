import React from 'react';

const Experience = (props) => (
    <div className="Experience">
        <div className="Experience-container">
            {props.data.map((exp, index) => (
                <div className="Experiece-item" key={`Exp-${index}`}>
                    <h3>{exp.jobTitle} at {exp.company}</h3>
                    <h3>{exp.startDate} - {exp.endDate}</h3>
                    <p>{exp.jobDescription}</p>
                </div>
            ))}

        </div>
    </div>
)

export default Experience;