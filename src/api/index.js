import axios from "axios";

const api = axios.create({
    baseURL: 'https://sleepy-journey-51279.herokuapp.com/api',
});

export const createNote = payload=> api.post("/note",payload);
export const updateNote = payload=> api.put("/note",payload);
export const deleteNote = id=>api.delete("/note/"+id);
export const getNotes = ()=>api.get("/note/");