import React from "react";
import '../takenoteThree/takeNoteThree.css';

import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function TakeNoteThree(props){
    console.log(props)
 
     

    return(
        
        <div className="takeNoteThree">
          
            <div className="titlediv">
              {props.note.title}  
            </div>
            <div className="descriptiondiv">
               {props.note.description}
            </div>
            <div className="iconDiv">
            <div className="submenu1">
                    <AddAlertIcon />
                </div>
                <div className="submenu1">
                    <PersonAddAltIcon />
                </div>
                <div className="submenu1">
                    <ColorLensIcon />
                </div>
                <div className="submenu1">
                    <PhotoCameraBackIcon />
                </div>
                <div className="submenu1">
                < ArchiveIcon />
                </div>
                <div className="submenu1">
                 <MoreVertIcon />
                </div>
                

            </div>   
        </div>
    )

}
export default TakeNoteThree