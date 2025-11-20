import {useState} from "react";

interface EditProfileProps {
    close: () => void;
}

const EditProfile = ({close}: EditProfileProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleClickClear = () => {
        setFirstName("");
        setLastName("");
    }

    const handleClickSave = () => {
        // TODO save edited profile
        alert("Profile saved");
        close();
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
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default EditProfile;