import React from 'react';
import H2 from '../styled/H2';
import H3 from '../styled/H3';
import P from '../styled/P';

const Certificates = (props) => (
    <div className="Certificates">
        <H2 name='Certificates'></H2>
        <div className="Certificates-container">
            {props.data.map((cert, index) => (
                <div className="Certificates-item" key={`Cert-${index}`}>
                    <H3>{cert.name}</H3>
                    <P><span>{cert.description}</span></P>
                    <H3>
                        <span>{cert.institution}</span>
                        <span>{cert.date}</span>
                    </H3>
                </div>
            ))}
        </div>
    </div>
)

export default Certificates;