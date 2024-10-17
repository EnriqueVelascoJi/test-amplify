import * as React from 'react';
import { useState } from 'react';

//MUI Components 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

//Icons
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PolicyIcon from '@mui/icons-material/Policy';
import ArticleIcon from '@mui/icons-material/Article';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


//Assets
import logo from '../../src/assets/imgs/logo.png'
import zIndex from '@mui/material/styles/zIndex';


//Pages styles
const styles = {
  container: {
      minWidth: '350px',
      maxWidth: '550px',
      position: 'absolute',
      top: '10%',
      left: '20%',
      backgroundColor: '#D53638',
      padding: '30px',
      borderRadius: '10px',
      zIndex: 10,
      color: '#fff'
      
  },
  titles: {
    fontWeight: 'bold'
  },
  list: {
    borderRadius: '10px',
    backgroundColor: 'rgba(228,182,83,0.98)',
    padding: 10
  },
  listIem: {
    backgroundColor: 'rgba(166,166,166,0.6)',
    borderRadius: 10,
    marginTop: 5
  }
}


export default function Notificaciones({open, setOpen}) {
  
  //State
  

  //Local variables
  const vertical =  'top';
  const horizontal =  'right';

  //handles
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <List sx={{ width: 500, maxWidth: 500}} style={styles.list}>
          
            <ListItem style={styles.listIem}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Notificación" secondary="Jan 9, 2014" />
            </ListItem>
          
            <ListItem style={styles.listIem}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Notificación" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem style={styles.listIem}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Notificación" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem style={styles.listIem}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Notificación" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem style={styles.listIem}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Notificación" secondary="Jan 9, 2014" />
            </ListItem>
            
        
     
        </List>
      </Snackbar>
    </Box>
  );
}