import EditorJS from "@editorjs/editorjs"
import { useEffect } from "react"

export const Editor: React.FC = () => {
    useEffect(() => {
        const Editor = new EditorJS({
            holder: "editor",
            placeholder: "Введите текст статьи"
        })
    }, [])
    return (
        <div id="editor" />
    )
}
