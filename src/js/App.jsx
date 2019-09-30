import React from 'react'; 
import ReactDOM from 'react-dom';
import NotesGrid from './NotesGrid.jsx';
import NoteEditor from './NoteEditor.jsx';
import '../style.css'
'use strict';


class App extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            //defaults
            notes: [
                {id:1, text:"This is an example note", color: "#4a1235"}, 
                {id:2, text:"This is a second note with more interesting content", color: "#1E1E96"},
                {id:3, text:"Put your own notes here!", color: "#138227"}, 
                {id:4, text:"And give them interesting colours", color: "#B81010"}
            ]
        }
        this.addNote = this.addNote.bind(this); 
        this.deleteNote = this.deleteNote.bind(this);
    }
    componentDidMount(){
        // runs after the app loads for first time 

        //load what's in localStorage. 
        // if there's something, we'll set our state, else just use defaults
        var localNotes = JSON.parse(localStorage.getItem('notes')); 
        if (localNotes) {
            this.setState({notes:localNotes})
        }
    }

    componentDidUpdate(){
        // runs after app is updated. But doesn't run for the first time this is called. 
        // updates localStorage with our notes. 
        localStorage.setItem('notes', JSON.stringify(this.state.notes))
    }


    addNote(new_text, new_color){
        var newState = [...this.state.notes]
        newState.unshift({id: Date.now(), text:new_text, color: new_color});
        this.setState({notes:newState})
    }

    deleteNote(id){ 
        const newNotes = this.state.notes.filter( o => o.id != id)
        this.setState({notes:newNotes})
        
    }

    render(){
        return(
            <div id='app'>
                <NoteEditor addNote={this.addNote}></NoteEditor>
                <NotesGrid notes={this.state.notes} deleteNote={this.deleteNote}></NotesGrid>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root')); 
