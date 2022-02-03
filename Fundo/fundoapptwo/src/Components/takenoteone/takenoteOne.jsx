import React from 'react';
import '../takenoteone/takenoteOne.css'
import { TextField } from "@mui/material";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
const TakenoteOne=(props)=>{

    const onsubmit=()=>{
            props.listenTakenoteOne(true)
    }
    return(

        <div className='takeNote' onClick={onsubmit}>
            <div className='note'>
    
             <TextField fullWidth  label="Take a note" height="10px" id="fullWidth" /> 
            </div>
             <div className='takenoteiconbox'>
            <div className='takenoteaIcons'>
            <CheckBoxOutlinedIcon fontSize='medium'/></div> 
            <div className='takenoteaIcons'>
                <BrushOutlinedIcon fontSize='medium' /></div>
            
            <div className='takenoteaIcons'>
                <ImageOutlinedIcon fontSize='medium' />
                </div></div>
        </div>
    )

}
export default TakenoteOne;