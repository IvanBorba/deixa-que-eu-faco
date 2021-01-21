import Footer from "../../components/footer";
import {
  SettingsAvatar,
  SettingsDatas,
  LoginSettings,
  SaveConfigs,
} from "../../components/forms/settings-form";
import Header from "../../components/header";
import "./index.css";

const SettingsPage = () => {
  const isChef = JSON.parse(localStorage.getItem("userData")).isChef;
  return (
    <>
      <Header />
      <div className="settingsPage">
        <div className="subHeader">
          <h4>
            EDITAR O PERFIL {">"} {isChef ? "COZINHEIRO" : "CLIENTE"}
          </h4>
        </div>
        <div>
          <SettingsAvatar />
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
      <Footer />
    </>
  );
};

export default SettingsPage;
