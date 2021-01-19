import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#9E5642",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#9E5642",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#9E5642",
            },
            "&:hover fieldset": {
                borderColor: "#9E5642",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#9E5642",
            },
        },
    },
})(TextField);

const CssTextArea = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#9E5642",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#9E5642",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#9E5642",
            },
            "&:hover fieldset": {
                borderColor: "#9E5642",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#9E5642",
            },
        },
    },
})(TextField);

export const CheffSettingsAvatar = ({ firstLetter, profilePhoto }) => {
    return (
        <div className="avatarBox">
            <div className="theAvatar">
                {firstLetter ? firstLetter : <img  alt="profilePhoto" src={profilePhoto} />}
            </div>
            <h3>ALTERAR AVATAR</h3>
            <CssTextField />
        </div>
    );
};

export const CheffSettingsDatas = () => {
    return (
        <div className="cheffDataSettingsBox">
            <h3>ATUALIZE SEUS DADOS</h3>
            <h5>EDITE SEU NOME:</h5>
            <CssTextField />
            <h3>EDITE SEU TEMPO DE EXPERIÊNCIA</h3>
            <h5>EDITE SEU NOME:</h5>
            <CssTextField />

        </div>
    )
}

