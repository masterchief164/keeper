import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import {Fab, Zoom} from "@material-ui/core";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [selected, changeSelected] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote() {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    function popOpen() {
        changeSelected(previousValue => !previousValue);
    }


    return (
        <div>
            <form className="create-note" >
                {selected&&(<input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />)}
                <textarea
                    name="content"
                    onChange={handleChange}
                    onClick={popOpen}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={selected?"3":"1"}
                />
                {selected&&<Zoom in={true}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>}
            </form>
        </div>
    );
}

export default CreateArea;
