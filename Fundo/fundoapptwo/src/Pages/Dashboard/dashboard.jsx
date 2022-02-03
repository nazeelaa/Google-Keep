import React from 'react'
import '../Dashboard/dashboard.css';
import Header from '../../Components/Header/header';
import TakenoteOne from '../../Components/takenoteone/takenoteOne'
import TakeNoteThree from '../../Components/takenoteThree/takeNoteThree'
import TakenoteTwo from '../../Components/Takenotetwo/takenoteTwo'
import {getNotes} from '../../Service/dataService'
import MiniDrawer from '../../Components/sidenav/sideNav';

function Dashboard() {

  const [notes,setNotes] = React.useState([])
  const[switchTakeNote,setSwitchTakeNote]=React.useState(false)
  const[openNav,setOpenNav]=React.useState(false)
  


  const listenTakenoteOne=(data)=>{
    if(data===true)
    {
      setSwitchTakeNote(true)
    }
    else
    {
      setSwitchTakeNote(false)
    }
  }

  
    const listenToHeader=(data)=>{
        console.log(data)
        setOpenNav(!openNav)
    }



  React.useEffect( () => {
    getNotes().then((response) => {
      setNotes(response.data.data.data)
    }).catch((err)=> { console.log(err)})
  } ,[])

  return (
  <div>
    <div><Header listenToHeader= {listenToHeader} /></div>
   <div>{switchTakeNote ? <TakenoteTwo listenTakenoteOne={listenTakenoteOne} />: <TakenoteOne listenTakenoteOne={listenTakenoteOne}/>}</div> 
   <div><MiniDrawer openNav={openNav} /> </div>
   <div className='getNotesServer'>
   
    {notes.map((note) => (<TakeNoteThree note={note} />))}</div>
  </div>
  )
}

export default Dashboard