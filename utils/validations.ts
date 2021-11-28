import * as yup from "yup"


export const LoginSchema = yup.object().shape({
    email: yup.string().email("Неверная почта").required("Почта обязательна"),
    password: yup.string().min(6, "Минимум: 6 символов").required("Пароль обязателен")
})

export const RegisterSchema = yup.object().shape({
    fullName: yup.string().required("Введите имя и фамилия"),
}).concat(LoginSchema)