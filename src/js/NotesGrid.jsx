import React from 'react'
import Note from './Note.jsx'
import Masonry from 'masonry-layout'

class NotesGrid extends React.Component{

    componentDidMount(){
        var grid = this.refs.grid;  // grab the DOM element for notesgrid
        this.msnry = new Masonry(grid, {
            columnWidth: 200, // see https://masonry.desandro.com/faq.html 
            itemSelector: '.note', // the things in the grid
            gutter: 10 // horizontal space between elements
        })
    }

    componentDidUpdate(prevProps){
        this.msnry.reloadItems();  // a React thing 
        this.msnry.layout();   // redoes the layout 
    }

    render(){       
        return(
            <div id='notes-grid' ref='grid'>
                {this.props.notes.map((o)=>{return(
                    <Note key={o.id}  color={o.color}
                    deleteNote={this.props.deleteNote.bind(null, o.id)}>{o.text} 
                     </Note>
                )})}    
            </div>
        )
    }
} 

export default NotesGrid; 

