import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Link to="/gif/pandas">Gif de pandas</Link>
      <Link to="/gif/colombia">Gif de Colombia</Link>
      <Link to="/gif/programación">Gif de programación</Link>
      <Route path='/gif/:keyword' component={ListOfGifs} />
    </div>
  )
}

// 1:16:21

export default App;
