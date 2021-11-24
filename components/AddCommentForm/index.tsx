import { Button, Input } from "@material-ui/core"
import { useState } from "react"
import styles from "./AddCommentForm.module.scss"
export const AddCommentForm = () => {
    const [isFocused, setFocused] = useState(false)
    const [comment, setComment] = useState("")

    const onAddComment = () => {
        setFocused(false)
        setComment("")
    }


    return (
        <div className={styles.wrapper}>
            <Input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onFocus={() => setFocused(true)}
                minRows={isFocused ? 5 : 1}
                multiline
                placeholder="Написать комментарий..."
                classes={{ root: styles.fieldRoot }}
                fullWidth />
            {isFocused &&
                <Button
                    onClick={onAddComment}
                    disabled={!Boolean(comment)}
                    classes={{ root: styles.sendBtn }}
                    style={{ height: 42 }}
                    variant="contained"
                    color="primary">
                    Отправить
                </Button>}
        </div>
    )
}
