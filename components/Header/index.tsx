import React, { useState } from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/PermIdentity';
import styles from './Header.module.scss';
import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/userSlice';


export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData)

  const [authVisible, setAuthVisible] = useState(false);

  const handleClickOpen = () => {
    setAuthVisible(true);
  };

  const handleClose = () => {
    setAuthVisible(false);
  };


  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        {userData ?
          <>
            <IconButton>
              <MessageIcon />
            </IconButton>
            <IconButton>
              <NotificationIcon />
            </IconButton>
            <Link href="/profile/1">
              <a className="d-flex align-center">
                <Avatar
                  className={styles.avatar}
                  alt={userData.fullName}
                  src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                />
                <ArrowBottom />
              </a>
            </Link>
          </> :
          <>
            <IconButton>
              <NotificationIcon />
            </IconButton>
            <Button onClick={handleClickOpen}>
              <PersonIcon />
              Войти
            </Button>
          </>}
      </div>
      <AuthDialog open={authVisible} onClose={handleClose} />
    </Paper>
  );
};
