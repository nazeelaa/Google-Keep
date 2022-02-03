import React from "react";
import '../Header/header.css';
import { TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

    
    

 const Header=(props)=>{
    const clickedNav=()=>{
        props.listenToHeader("clicked on me");
    }
     return(
         <div className="Headerpart">
             <div class="headerparttwo">
              <div className="left-box">
             <div className="main-menu">
                 <MenuIcon fontSize="large" onClick={clickedNav} />
             </div>
             <div className="googleKeepImg">
                 <LightbulbIcon fontSize="large"/>
             </div>
             <div className="textKeep"><p>Keep</p></div></div> 


            <div class="center-search-box">
            <div className="searchbox">
                <SearchIcon fontSize="large" />
            </div>
            <div className="textbox">
                 <TextField fullWidth label="search" id="fullWidth" />
                 </div> 
                </div>
            
         
         <div class="google-keep-buttons">
             <div class="refresh">
             <RefreshIcon fontSize="large"/>
             </div>
             <div class="list-view">
                 <ViewStreamSharpIcon fontSize="large"/>
             </div>
             <div class="setting">
                 <SettingsIcon fontSize="large"/>
             </div>
         </div>   
         </div>

         </div>
         

       
     )
 }
 export default Header