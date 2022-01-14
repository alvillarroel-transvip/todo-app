import React from 'react';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const ButtonFab = ({icon, action, b='10%', r='20%', position="relative"}) => {



  const CustomFab = styled(Fab)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[800],
    '&:hover': {
      backgroundColor: orange[900],
    },
  }));


    return (
      <CustomFab
        sx={{
          position: position,
          bottom: b,
          right: r,
        }}
        onClick={action}
        variant="contained">
        {icon}
      </CustomFab>
    )
}
