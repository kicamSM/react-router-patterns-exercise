import Nav from './Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to the color factory.</header>
      <div>
        <Nav colors={colors}/>
      </div>
    </div>
  );
}


export const colors = [{color: 'red'}, {color: 'orange'}, {color: 'green'}]
App.defaultProps = { colors };

export default App;

