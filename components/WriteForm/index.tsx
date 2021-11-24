import { Button, Input } from '@material-ui/core'
import styles from "./WriteForm.module.scss"
import dynamic from "next/dynamic"
interface WriteFormProps {
    title?: string
}
const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), { ssr: false })
export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {

    return (
        <div>
            <Input classes={{ root: styles.root }} defaultValue={title} placeholder="Заголовок" />
            <div className={styles.editor}>
                <Editor />
            </div>
            <Button style={{ height: 42 }} variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}
