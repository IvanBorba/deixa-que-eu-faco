import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string("O formato do e-mail é inválido")
    .email("O formato do e-mail é inválido")
    .required("Por Favor, informe o e-mail"),
  password: yup
    .string("O formato da senha é inválido")
    .min(6, "A Senha deve ter pelo menos 6 caracteres"),
  name: yup
    .string("O formato do nome é inválido")
    .matches(
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
      "Informe nome e sobrenome contendo apenas letras"
    )
    .required("Por favor, informe seu nome"),
  birth_date: yup
    .string("O formato da bio é inválido")
    .required("Precisamos da sua data de nascimento!"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string("O formato do e-mail é inválido")
    .email("O formato do e-mail é inválido")
    .required("Por Favor, informe o e-mail"),
  password: yup
    .string("O formato da senha é inválido")
    .min(6, "A Senha deve ter pelo menos 6 caracteres"),
});
