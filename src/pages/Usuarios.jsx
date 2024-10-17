import * as React from 'react';
import { useEffect, useState } from 'react';

//MUI Components 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
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
import SideBar from '../components/SideBar';
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
    },
    button1: {
        backgroundColor: '#D53638'
    },
    button2: {
        backgroundColor: '#E4B653'
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


export default function Usuarios() {

    //State 
    

  return (
    <>
    <NavBar />
    
    <div style={styles.layout}>
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={4}>
        <Grid container size={12} justifyContent={'space-between'} alignItems={'center'}>
            <Grid size={8}>
                <Typography variant='h2' style={styles.title}>Usuarios</Typography>
            </Grid>
            <Grid size={2}>
                <Button variant="contained" style={styles.button2}>Nuevo Usuario</Button>
            </Grid>
            
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
            <MUIDataTable
                title={"Tabla de usuarios"}
                data={data}
                columns={columns}
                options={options}
            />
        </Grid>
      </Grid>
    </Box>
    </div>

    </>
        
        
    
  );
}
