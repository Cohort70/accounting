import {useState} from "react";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleClickClear = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }

    const handleClickSave = () => {
        if (newPassword === confirmPassword) {
            // TODO save new password and close component
            alert("Password changed");
        } else {
            alert("Passwords do not match");
        }
    }

    const handleClickClose = () => {
        // TODO close component ChangePassword without saving changes
        alert("ChangePassword closed");
    }

    return (
        <>
            <label>Old Password:
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </label>
            <label>New Password:
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </label>
            <label>Confirm Password:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default ChangePassword;