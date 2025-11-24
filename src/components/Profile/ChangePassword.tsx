import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useChangePasswordMutation, useFetchUserQuery} from "../../features/api/accountApi.ts";
import {createToken} from "../../utils/constants.ts";
import {setToken} from "../../features/token/tokenSlice.ts";

interface ChangePasswordProps {
    close: () => void;
}

const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useAppDispatch();
    const [changePassword] = useChangePasswordMutation();
    const token = useAppSelector(state => state.token)
    const {data} = useFetchUserQuery(token);

    const handleClickClear = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }

    const handleClickSave = async () => {
        if (newPassword === confirmPassword) {
            const token = createToken(data!.login, oldPassword);
            try {
                await changePassword({token, newPassword});
                dispatch(setToken(createToken(data!.login, newPassword)))
            } catch (e) {
                console.log('change password error', e)
            }
            close();
        } else {
            alert("Passwords do not match");
        }
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
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default ChangePassword;