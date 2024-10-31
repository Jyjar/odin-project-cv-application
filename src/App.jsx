import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Resume from "./components/Resume.jsx";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
    });

    const [schools, setSchools] = useState([
        {
            school: "ABC College",
            degree: "BA",
            startDate: "2024-01-01",
            endDate: "2024-08-12",
            location: "At",
            id: crypto.randomUUID(),
        },
        {
            school: "City College",
            degree: "MA",
            startDate: "2010-07-02",
            endDate: "2011-08-12",
            location: "To",
            id: crypto.randomUUID(),
        },
    ]);

    const [experiences, setExperiences] = useState([
        {
            companyName: "Megasoft",
            positionTitle: "SWE",
            startDate: "2024-01-01",
            endDate: "2024-08-12",
            location: "Lato Palo",
            description:
                "Successfully supervised various project for big clients",
            id: crypto.randomUUID(),
        },
    ]);

    return (
        <div className="main-container">
            <div className="form-containers">
                <GeneralInfo
                    generalInfo={generalInfo}
                    setGeneralInfo={setGeneralInfo}
                />
                <Education schools={schools} setSchools={setSchools} />
                <Experience
                    experiences={experiences}
                    setExperiences={setExperiences}
                />
            </div>
            <Resume
                generalInfo={generalInfo}
                education={schools}
                experiences={experiences}
            />
        </div>
    );
}

export default App;
