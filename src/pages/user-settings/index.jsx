import { SettingsAvatar, SettingsDatas, LoginSettings } from "../../components/forms/settings-form";
import "./index.css";

const SettingsPage = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) // jogar pro form
    console.log(userData)

    return (
        <div className="settingsPage">
            <div>
                <SettingsAvatar firstLetter={userData.name[0]}/>
            </div>
            <div>
                <SettingsDatas />
            </div>
            <div>
                <LoginSettings />
            </div>
        </div>
    )
}

export default SettingsPage
