/* eslint-disable react/prop-types */
import "../assets/GeneralInfo.css";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value,
        });
    };

    return (
        <div className="form-container">
            <h1>General Info</h1>
            <form>
                <div className="label-input">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Enter first and last name" onChange={handleChange} />
                </div>
                <div className="label-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter email" onChange={handleChange} />
                </div>
                <div className="label-input">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" onChange={handleChange} />
                </div>
                <div className="label-input">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" placeholder="Enter address" onChange={handleChange} />
                </div>
            </form>
        </div>
    );
}

export default GeneralInfo;
