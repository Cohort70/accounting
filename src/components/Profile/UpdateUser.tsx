import {useState} from "react";
import EditProfile from "./EditProfile.tsx";
import ChangePassword from "./ChangePassword.tsx";

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState('default')

    switch (updateMode) {
        case 'edit profile':
            return <EditProfile/>
        case 'change password':
            return <ChangePassword/>
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode('edit profile')}>Edit Profile</button>
                    <button onClick={() => setUpdateMode('change password')}>Change Password</button>
                </div>
            )
    }
}

export default UpdateUser;