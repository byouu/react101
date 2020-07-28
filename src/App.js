import React, {Component} from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      notes:[
        {
          id: 1,
          text: 'Watch Youtube'
        },
        {
          id: 2,
          text: 'Make Tea'
        },
        {
          id: 3,
          text: 'Do some react'
        }
      ],
      noteInputValue: ''
    }
  }

  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
  }
  handleAddButtonClick = (e)=>{
    e.preventDefault()
    var note = {
      id:Date.now(),
      text:this.state.noteInputValue
    }

    var newNotes = [note,...this.state.notes]

    this.setState({
      notes:newNotes,
      noteInputValue: ''
    })
  }

  handleNoteDelete = (e)=>{
    var noteIDToDelete = parseInt(e.target.id)
    var notes = this.state.notes

    var filteredNotes = notes.filter((item)=>{
      return item.id !== noteIDToDelete
    })

    this.setState({notes:filteredNotes})
  }


  render(){
    //practicing git commit
    return (
      <div className="wrap">
      <div className="container">
        <div className="notes">
          {
            this.state.notes.map((note)=>{
              return (
                <div className="note" key={note.id}>
                <div className="note-body">
                  <i id={note.id} className="far fa-times-circle note-remove" onClick={this.handleNoteDelete}></i>
                  <div className="note-text">
                    {note.text}
                  </div>
                </div>
              </div>
              )
            })
          }
      
          <div className="note new-note">
  
            <form className="note-body">
                <div className="form-group">
                  <label htmlFor="note-input">New note</label>
                  <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange} />
                </div>
          
                <button type="submit" className="btn btn-primary" onClick={this.handleAddButtonClick}>Add</button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    )
  }

}
export default App;
