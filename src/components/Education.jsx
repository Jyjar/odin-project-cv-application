/* eslint-disable react/prop-types */
import "../assets/Education.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Education({ schools, setSchools }) {
    const [selectedSchool, setSelectedSchool] = useState(null);

    // Handle input changes for each field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedSchool({
            ...selectedSchool,
            [name]: value,
        });
    };

    // Handle when "Done" button is clicked
    const handleDone = () => {
        if (selectedSchool.id) {
            // Update existing school
            setSchools(
                schools.map((school) =>
                    school.id === selectedSchool.id ? selectedSchool : school
                )
            );
        } else {
            // Add new school
            setSchools([
                ...schools,
                { ...selectedSchool, id: crypto.randomUUID() },
            ]);
        }
        setSelectedSchool(null); // Reset selection
    };

    // Handle school deletion
    const handleDelete = () => {
        setSchools(schools.filter((school) => school.id !== selectedSchool.id));
        setSelectedSchool(null); // Reset selection
    };

    // Handle "Add Education" button click
    const handleAddEducation = () => {
        setSelectedSchool({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
        });
    };

    return (
        <div className="form-container">
            <h1>Education</h1>
            {selectedSchool ? (
                <form className="education-form">
                    <div className="label-input">
                        <label htmlFor="school">School</label>
                        <input
                            type="text"
                            id="school"
                            name="school"
                            value={selectedSchool.school}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-input">
                        <label htmlFor="degree">Degree</label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            value={selectedSchool.degree}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-input">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={selectedSchool.startDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-input">
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={selectedSchool.endDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-input">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={selectedSchool.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="buttons">
                        <button className="white-button" onClick={handleDelete}>
                            Delete
                        </button>
                        <button className="blue-button" onClick={handleDone}>
                            Done
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="schools">
                        {schools.map((school) => (
                            <button
                                key={school.id}
                                onClick={() => setSelectedSchool(school)}
                            >
                                {school.school}
                            </button>
                        ))}
                    </div>
                    <div className="add-education-container">
                        <button
                            className="blue-button"
                            onClick={handleAddEducation}
                        >
                            Add Education
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Education;
