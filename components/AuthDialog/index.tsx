import { Dialog, DialogContent } from '@material-ui/core';
import { useState } from 'react';
import { LoginForm } from './forms/LoginForm';
import { MainForm } from './forms/MainForm';
import { RegisterForm } from './forms/RegisterForm';
interface AuthDialogProps {
    open: boolean,
    onClose: () => void
}
export const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose }) => {
    const [formType, setFormType] = useState<"main" | "login" | "register">("main")
    return (
        <Dialog
            maxWidth="xs"
            fullWidth
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogContent>
                {formType === "main" && <MainForm onLogin={() => setFormType("login")} />}
                {formType === "login" && <LoginForm onMain={() => setFormType("main")} onRegister={() => setFormType("register")} />}
                {formType === "register" && <RegisterForm onLogin={() => setFormType("login")} />}
            </DialogContent>
        </Dialog>
    )
}
