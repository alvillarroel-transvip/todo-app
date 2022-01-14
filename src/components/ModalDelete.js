import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveTodo, deleteTodo } from '../actions/taskActions';

export const ModalDelete = ({open, setOpen}) => {

    const dispatch = useDispatch();
    const {activeTodo} = useSelector(state => state.task);
  
  const handleClose = () => {
    setOpen(!open);
    setTimeout(() => {
        dispatch(clearActiveTodo())
    }, 100);
  };


  const handleDelete = () => {
      dispatch(deleteTodo())
    setOpen(!open);
    setTimeout(() => {
        dispatch(clearActiveTodo())
    }, 100);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Eliminar Tarea"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {`Estas seguro de eliminar la tarea ${activeTodo && activeTodo.name}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
           variant="contained"
           color='error'
          onClick={handleDelete} 
          autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}