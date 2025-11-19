import {useState} from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleClickClear = () => {
        setFirstName("");
        setLastName("");
    }

    const handleClickSave = () => {
        // TODO save edited profile and close component
        alert("Profile saved");
    }

    const handleClickClose = () => {
        // TODO close component EditProfile without saving changes
        alert("EditProfile closed");
    }

    return (
        <>
            <label>First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default EditProfile;