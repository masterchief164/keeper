import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import * as api from "../api/index"

function App() {
    const [notes, setNotes] = useState([]);
    useEffect(()=> {
        api.getNotes().then((notesArray) => setNotes(notesArray.data.data))
    },[notes]);


    function addNote(newNote) {
        api.createNote(newNote);

    }

    function deleteNote(id) {
        api.deleteNote(id)
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem) => {
                return (
                    <Note
                        key={noteItem._id}
                        id={noteItem._id}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer/>
        </div>
    );
}

export default App;
