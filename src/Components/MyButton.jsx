import React from 'react'
import { Button } from '@mui/material'
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
function MyButton() {
  return <>
  <Button variant='outlined'>Hello Button</Button>
  <Button startIcon={ <EggAltOutlinedIcon></EggAltOutlinedIcon>}></Button>
  </>
  
}

export default MyButton