import React,{useState} from 'react'

const NewSongForm = ({addSong}) => {
    const [title,setTitle]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addSong(title);
        setTitle('');
        
    }
    

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label>Song Name:</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="submit" value="add song"/>
        </form>
        </div>
    )
}

export default NewSongForm;
