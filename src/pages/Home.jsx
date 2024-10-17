import * as React from 'react';
import { useEffect, useState } from 'react';

//MUI Components 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

//Icons
import PolicyIcon from '@mui/icons-material/Policy';
import ArticleIcon from '@mui/icons-material/Article';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';



//React components
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';


//Table
import MUIDataTable from "mui-datatables";


//Page Style
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
}));
const styles = {
    title: {
        color: 'gray'
    },
    layout: {
        maxWidth: '85%',
        margin: '0 auto'
    }

}

//Table settings
const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "city",
     label: "City",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "state",
     label: "State",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   
   const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
   ];
   
   const options = {
     filterType: 'checkbox',
   };


export default function Home() {

    //State 
    

  return (
    <>
    <NavBar />

    <div style={styles.layout}>
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={12}>
        <Grid size={12}>
        <Typography variant='h2' style={styles.title}>Página de Inicio</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
            <MUIDataTable
                title={"Catalogo de Datos"}
                data={data}
                columns={columns}
                options={options}
            />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
            
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.3)' }}>
                <Typography component="div" >
                    <Box sx={{ fontWeight: 'bold', m: 3 }}>Busquedas Recientes</Box>
                </Typography>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <PolicyIcon htmlColor='#ffec33'/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Políticas" secondary="Hace 4 hrs" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ArticleIcon htmlColor='#ff4833'/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Artefactos" secondary="Hace un día" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AccountTreeIcon htmlColor='#3396ff'/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Procediemientos" secondary="Hace 3 días" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <InsertDriveFileIcon htmlColor='#00740c'/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Formatos" secondary="Hace 1 semansa" />
                </ListItem>
            </List>
        </Grid>
      </Grid>
    </Box>
    </div>

    </>
        
        
    
  );
}
