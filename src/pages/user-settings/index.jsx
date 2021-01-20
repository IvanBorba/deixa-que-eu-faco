import { SettingsAvatar, SettingsDatas, LoginSettings, SaveConfigs } from "../../components/forms/settings-form";
import "./index.css";

const SettingsPage = () => {
    return (
        <div className="settingsPage">
            <div>
                <SettingsAvatar/>
            </div>
            <div>
                <SettingsDatas />
            </div>
            <div>
                <LoginSettings />
            </div>
            <div>
                <SaveConfigs />
            </div>
        </div>
    )
}

export default SettingsPage
