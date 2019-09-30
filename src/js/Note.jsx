import React from 'react'; 

class Note extends React.Component {
    render(){
        var styling = {
            backgroundColor: this.props.color
        };
        return (
            <div className='note' style={styling}> {this.props.children}
                <span className='delete' onClick={this.props.deleteNote}>X</span>
                
                
            </div>
        )
    }
}
export default Note; 
