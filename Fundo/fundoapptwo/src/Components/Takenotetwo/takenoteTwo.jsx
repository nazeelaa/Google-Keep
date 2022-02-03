import React, { useState } from "react";
import '../Takenotetwo/takenoteTwo.css';
import { TextField } from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { postNotes } from '../../Service/dataService';




const TakenoteTwo=(props)=>{
    const onsubmit=()=>{
        
         const data= new FormData()
         data.append('title',heading.title)
         data.append('description',heading.description)
        // data.append('color',color)
         data.append('isArchived',archive)
         
         
         postNotes(data).then((response)=>{
               
             console.log(response)
         }).catch((error)=>{                
             console.log(error)
         })
        props.listenTakenoteOne(false)
    }
    const [heading,setHeading]=React.useState({title:"",description:""}) 
    const [color,setColor]=React.useState([])
    const [archive,setArchive]=React.useState(false)
    const takeTitle=(event)=>{

        setHeading({...heading,title:event.target.value})

    }
   const takeDescription=(event)=>{

    setHeading({...heading,description:event.target.value})
    }

    const listentoColor=()=>{
        setColor()
    }

    const setIsArchive=()=>{
        setArchive(true)
    }

    
    
    return(
            <div className="takenoteTwo">
            <div className="textName">
            <div className="textbox">
              <TextField fullWidth  label="Title"  id="fullWidth" onChange={takeTitle} /></div>
            <div className="pinbox"><PushPinIcon /></div></div>
            
            <div className="takenoteBig"><TextField fullWidth  label="Take a note" id="fullWidth" onChange={takeDescription} />
            <div className="iconBox">
            <div className="icons"><AddAlertOutlinedIcon /></div>
            <div className="icons"><PersonAddAltOutlinedIcon /></div>
            <div className="icons"><ColorLensOutlinedIcon listentoColor={listentoColor} onClick={listentoColor} /></div>
            <div className="icons"><ImageOutlinedIcon /></div>
            <div className="icons"><ArchiveOutlinedIcon setIsArchive={setIsArchive} onClick={setIsArchive} /></div>
            <div className="icons"><MoreVertOutlinedIcon /></div>
            <div className="icons"><UndoOutlinedIcon /></div>
            <div className="icons"><RedoOutlinedIcon /></div>
            <div className="button"><Button variant="outlined" onClick={onsubmit}>Close </Button></div>

            </div>
            </div> 
            
        </div>
    )
}

export default TakenoteTwo;