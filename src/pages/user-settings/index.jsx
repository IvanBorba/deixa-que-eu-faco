import { SettingsAvatar, SettingsDatas, LoginSettings, SaveConfigs } from "../../components/forms/settings-form";
import "./index.css";
const isChef = JSON.parse(localStorage.getItem("userData")).isChef

const SettingsPage = () => {
    return (
        <div className="settingsPage">
            <div className="subHeader">
                <h4>EDITAR O PERFIL > {isChef ? "COZINHEIRO" : "CLIENTE"}</h4>
            </div>
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
