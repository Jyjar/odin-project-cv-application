import "../assets/Experience.css";
import { useState } from "react";

function Experience({ experiences, setExperiences }) {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedExperience({
            ...selectedExperience,
            [name]: value,
        });
    };

    const handleDone = () => {
        if (selectedExperience.id) {
            setExperiences(
                experiences.map((experience) =>
                    experience.id === selectedExperience.id ? selectedExperience : experience
                )
            );
        } else {
            setExperiences([
                ...experiences,
                { ...selectedExperience, id : crypto.randomUUID() },
            ]);
        }
        setSelectedExperience(null);
    }

    const handleDelete = () => {
        setExperiences(experiences.filter((experience) => experience.id !== selectedExperience.id));
        setSelectedExperience(null);
    };

    const handleAddExperience = () => {
        setSelectedExperience({
            companyName: "",
            positionTitle: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
        });
    };

    return (
        <div className="form-container">
            <h1>Experience</h1>
            {selectedExperience ? (
                <form className="experience-form">
                    <div className="label-input">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName" value={selectedExperience.companyName} onChange={handleChange} />
                    </div>
                    <div className="label-input">
                        <label htmlFor="positionTitle">Position Title</label>
                        <input type="text" id="positionTitle" name="positionTitle" value={selectedExperience.positionTitle} onChange={handleChange} />
                    </div>
                    <div className="label-input">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" name="startDate" value={selectedExperience.startDate} onChange={handleChange} />
                    </div>
                    <div className="label-input">
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="endDate" name="endDate" value={selectedExperience.endDate} onChange={handleChange} />
                    </div>
                    <div className="label-input">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" value={selectedExperience.location} onChange={handleChange} />
                    </div>
                    <div className="label-input">
                        <label htmlFor="description">Descritpion</label>
                        <textarea type="text" id="description" name="description" value={selectedExperience.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="buttons">
                        <button className="white-button" onClick={handleDelete}>Delete</button>
                        <button className="blue-button" onClick={handleDone}>Done</button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="experiences">
                        {experiences.map((experience) => (
                            <button key={experience.id} onClick={() => setSelectedExperience(experience)}>{experience.companyName}</button>
                        ))}
                    </div>
                    <div className="add-experience-container">
                        <button className="blue-button" onClick={handleAddExperience}>Add Experience</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Experience;
