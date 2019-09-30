import React from 'react'; 

class NoteEditor extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            text: '',
            color: "960C11"
        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChangeColor = this.handleChangeColor.bind(this); 
    }

    handleChange(e){
        this.setState({text: e.target.value});
    }
    
    handleSubmit(e){
        this.props.addNote(this.state.text, this.state.color);
    }

    handleChangeColor(e){
        this.setState({color: e.target.value});
    }

    render(){
        return(
            <div id="editor">
                <textarea id="editortext" placeholder="What's on your mind?" onChange={this.handleChange}></textarea>
                <input className="jscolor" defaultValue={this.state.color} onBlur={this.handleChangeColor}></input>
                <button id='submitButton' onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default NoteEditor;