import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const createNote = payload=> api.post("/note",payload);
export const updateNote = payload=> api.put("/note",payload);
export const deleteNote = id=>api.delete("/note/"+id);
export const getNotes = ()=>api.get("/note/");