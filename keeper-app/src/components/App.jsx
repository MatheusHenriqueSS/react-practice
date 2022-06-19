import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
    <div>
        <Header/>
        {notes.map(p => <Note key={p.id} title={p.title} content={p.content}/>)}
        <Footer/>
    </div>);
}

export default App;
