import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { todoAddNew, todoUpdated } from '../actions/taskActions';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from './form/TextInput';
import { ButtonFab } from './ButtonFab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';




const initForm = {
  name: '',
  desc: '',
  completed: false
}



export const TodoForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeTodo } = useSelector(state => state.task);


  const handleTodo = (values) => {
    if (activeTodo) {
      dispatch(todoUpdated(values));
    } else {
      values.id = uuidv4()
      dispatch(todoAddNew(values));
    }
    navigate('/home');

  }


  return (
    <>
      <Grid container
        alignItems='center'
        justifyContent="center"
        style={{ minHeight: "100vh" }}>

        <Container maxWidth="sm">
        <Grid item xs='auto'>
          <Typography align='left' component="h1" variant="h5">
            Que tienes que hacer?
          </Typography>
          <Formik
            initialValues={activeTodo ? activeTodo : initForm}
            onSubmit={(values) => {
              handleTodo(values)
            }}
            validationSchema={
              Yup.object({
                name: Yup.string().required('El nombre es requerido')
                .matches(/^[aA-zZ\s]+$/, "El nombre solo debe contener letras"),
                desc: Yup.string().required('La descripción es requerida')
              })
            }

          >
            {(formik) => (
              <Form>
                <TextInput
                  label="Nombre"
                  name="name"
                />

                <TextInput
                  label="Descripción"
                  name="desc"
                />
                <Box
                  sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Button
                    type="submit"
                    align="flex-end"
                    color='warning'
                    endIcon={!activeTodo ? <AddIcon /> : null}
                    variant="contained"
                  >
                    {activeTodo ? 'Actualizar' : 'Agregar'}
                  </Button>
                </Box>

              </Form>
            )
            }
          </Formik>

        </Grid>
      </Container>
      </Grid>
      <ButtonFab
        b="90%"
        r="5%"
        position='absolute'
        icon={<ArrowBackIcon sx={{ color: "white" }} />}
        action={() => navigate('/home')}
        />
    </>
  );
}








