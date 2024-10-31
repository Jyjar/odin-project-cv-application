/* eslint-disable react/prop-types */
import "../assets/Resume.css";

function Resume({ generalInfo, education, experiences }) {
    return (
        <div className="resume">
            <div className="general-info-container">
                <h2 className="general-info-h">{generalInfo.fullName}</h2>
                <div className="general-info">
                    <h3 className="general-info-h">{generalInfo.email}</h3>
                    <h3 className="general-info-h">{generalInfo.phoneNumber}</h3>
                    <h3 className="general-info-h">{generalInfo.address}</h3>
                </div>
            </div>
            <div className="education-experience">
                <div className="education-container">
                    <h3>Education</h3>
                    {education.map((school) => (
                        <div key={school.id} className="education">
                            <p>
                                {school.startDate} - {school.endDate}
                            </p>
                            <p>
                                <strong>{school.school}</strong>
                            </p>
                            <p>{school.location}</p>
                            <p>{school.degree}</p>
                        </div>
                    ))}
                </div>
                <div className="experience-container">
                    <h3>Experience</h3>
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience">
                            <p>{exp.companyName}</p>
                            <p>{exp.positionTitle}</p>
                            <p>
                                {exp.startDate} - {exp.endDate}
                            </p>
                            <p>{exp.location}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resume;
