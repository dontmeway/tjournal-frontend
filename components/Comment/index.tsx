import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import styles from "./Comment.module.scss"
import MoreIcon from '@material-ui/icons/MoreHoriz';
interface CommentProps {
    user: {
        id: number,
        avatarUrl: string,
        fullname: string
    }
    id: number,
    createdAt: string,
    text: string,
    post: {
        id: number,
        title: string
    }
}
export const Comment: React.FC<CommentProps> = ({ user, createdAt, text }) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img src={user.avatarUrl} alt="Avatar" />
                <b>{user.fullname}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                elevation={3}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}
