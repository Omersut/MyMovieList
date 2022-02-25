import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("geçersiz").required("zorunlu"),
  password: yup.string().min(5, "minimum 5 karakter").required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "parola uyuşmuyor")
    .required(),
});
export default validations;
