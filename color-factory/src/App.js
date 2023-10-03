import './App.css';
import Routes from './Routes.js'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to the color factory.
      <Link to="/colors/new">Add New Color</Link></header>
      <div>
        <Routes />
      </div>
    </div>
  );
}


// export const colors = [{color: 'red'}, {color: 'orange'}, {color: 'green'}]
// App.defaultProps = { colors };

export default App;

