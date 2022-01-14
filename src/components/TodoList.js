import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ButtonFab } from './ButtonFab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { todoAddActive, todoSetCompleted } from '../actions/taskActions';
import { ModalDelete } from './ModalDelete';





export const TodoList = () => {


  const [open, setOpen] = useState(false);
  const { tasks } = useSelector(state => state.task);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const handleToggle = (value) => () => {
    dispatch(todoSetCompleted(value))
  };

  const handleSelectTodo = (value) => {
    dispatch(todoAddActive(value))
    navigate('/form');
  }

  const handleOpenModal = (value) => {
    dispatch(todoAddActive(value))
    setOpen(!open);
  };





  return (
    <>
      <Grid container
        alignItems='center'
        justifyContent="center"
        style={{
          minHeight: "100vh",

        }}>


        <Grid item xs='auto'
          style={{
            minWidth: 300,
            maxWidth: 600,
            width: '100%',
          }}
        >
          <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
            {tasks.map((value) =>(
                <Fragment
                key={value.id}
                >
                  <ListItem
                    secondaryAction={
                      <Fragment>
                        <IconButton onClick={() => handleSelectTodo(value)} edge="start" aria-label="comments">
                          <EditIcon sx={{ color: "#f9d252" }} />
                        </IconButton>
                        <IconButton onClick={() => handleOpenModal(value)} edge="end" aria-label="comments">
                          <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                      </Fragment>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(value)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          sx={{ color: "#c6d67e" }}
                          checked={value.completed}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          textDecoration: value.completed ? "line-through" : "none"
                        }}
                        id={value.id}
                        primary={value.name} />
                    </ListItemButton>
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              )
            )}
          </List>
          <Box 
            sx={{
              marginTop: 5,
              marginRight:3,
              display: 'flex',
              flexDirection: 'row-reverse',
              bgcolor: 'background.paper',
            }} >
            <ButtonFab
              b="-60%"
              r="2%"
              icon={<AddIcon sx={{ color: "white" }} />}
              action={() => navigate('/form')}
            />
           </Box>
        </Grid>
      </Grid>
      <ModalDelete open={open} setOpen={setOpen} />
    </>
  );
}

