import { Button, Typography } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FormProvider, useForm } from "react-hook-form";
import { LoginSchema } from "../../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup"
import styles from "../AuthDialog.module.scss"
import { FormField } from "../../FormField";
import { SignUpDto } from "../../../utils/api/types";
import { UserApi } from "../../../utils/api";
import { setCookie } from "nookies";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { setUserData } from "../../../redux/slices/userSlice";
import { useAppDispatch } from "../../../redux/hooks";

interface LoginFormProps {
    onRegister: () => void;
    onMain: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onMain, onRegister }) => {
    const dispatch = useAppDispatch()

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginSchema)
    })

    const onSubmit = async (dto: SignUpDto) => {
        try {
            const data = await UserApi.login(dto);
            setCookie(null, "authToken", data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
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
                        <p onClick={onMain} className={styles.goBack}>
                            <ArrowBackIcon />
                            Войти
                        </p>
                    </Typography>
                    <div className="mb-10 mt-10">
                        <FormField name="email" type="email" label="Почта" />
                    </div>
                    <div className="mb-20">
                        <FormField name="password" type="password" label="Пароль" />
                    </div>
                    {errorMessage && <Alert className="mb-15" severity="error">{errorMessage}</Alert>}
                    <button
                        onClick={onRegister}
                        className={styles.registerButton}>
                        Зарегистрироваться
                    </button>
                    <Button
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth>
                        Войти
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
