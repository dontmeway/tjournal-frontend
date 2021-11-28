import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FormProvider, useForm } from "react-hook-form";
import { UserApi } from "../../../utils/api";
import { SignInDto } from "../../../utils/api/types";
import { RegisterSchema } from "../../../utils/validations";
import { FormField } from "../../FormField";
import { setCookie } from "nookies"

import styles from "../AuthDialog.module.scss"
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { useAppDispatch } from "../../../redux/hooks";
import { setUserData } from "../../../redux/slices/userSlice";

interface RegisterFormProps {
    onLogin: () => void
}
export const RegisterForm: React.FC<RegisterFormProps> = ({ onLogin }) => {
    const dispatch = useAppDispatch()

    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(RegisterSchema)
    })

    const onSubmit = async (dto: SignInDto) => {
        try {
            const data = await UserApi.register(dto);
            setCookie(null, "authToken", data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/"
            })
            setErrorMessage(null)
            dispatch(setUserData(data))
        } catch (err) {
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div className={styles.content}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Typography className={styles.title}>
                        <p onClick={onLogin} className={styles.goBack}>
                            <ArrowBackIcon />
                            Регистрация
                        </p>
                    </Typography>
                    <div>
                        <FormField name="fullName" label="Имя и фамилия" />
                    </div>
                    <div className="mb-10 mt-10">
                        <FormField name="email" type="email" label="Почта" />
                    </div>
                    <div className="mb-20">
                        <FormField name="password" label="Пароль" type="password" />
                    </div>
                    {errorMessage && <Alert className="mb-15" severity="error">{errorMessage}</Alert>}
                    <Button
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth>
                        Зарегистрироваться
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
