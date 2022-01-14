import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export const TodoButton = () => {


    const navigate = useNavigate();

    return (
        <>
        <Grid container
            alignItems='center'
            justifyContent="center"
            style={{ minHeight: "100vh" }}>
            <Grid align='center' item xs='auto'>
                <Typography
                    align='center'
                    component="h1"
                    variant="h5">
                    Estas al día con tus tareas
                </Typography>
                <Button
                    type="button"
                    variant="contained"
                    color='warning'
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => navigate('/form')}
                >
                    Agregar
                </Button>
            </Grid>
        </Grid>
        </>
    )
}



