import React from 'react';

const Certificates = (props) => (
    <div className="Certificates">
        <div className="Certificates-container">
            {props.data.map((cert, index) => (
                <div className="Certificates-item" key={`Cert-${index}`}>
                    <h3>{cert.name}</h3>
                    <p><span>{cert.description}</span></p>
                    <h4>
                        <span>{cert.institution}</span>
                        <span>{cert.date}</span>
                    </h4>
                </div>
            ))}
        </div>
    </div>
)

export default Certificates;