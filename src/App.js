import React from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import DragDrop from './components/Dashboard/DragDrop'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/drags" component={DragDrop}/>
      </Switch>
    </div>
    </BrowserRouter>
   );
}

export default App;
