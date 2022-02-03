import axios from 'axios'


const headerconfig={

    headers:{

        Authorization:localStorage.getItem("token")
    }
}

export const getNotes=()=>{
    
    let response=axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerconfig)
    return response
}
export const postNotes=(data)=>{

    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",data,headerconfig)
    return response
}


