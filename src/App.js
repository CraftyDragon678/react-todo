import React from 'react';
import './App.scss';
import { Fab, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons'

function App() {
  return (
    <div className="App">
      <div className="diag">
        <div className="title">To-Do</div>
        <List>
          <ListItem button>
            <ListItemText primary="test"/>
          </ListItem>
        </List>
        <TextField
          className="addTodo"
          label="test"
        />
        <Fab>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default App;
