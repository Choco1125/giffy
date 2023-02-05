import './App.css'
import { Link, Route } from 'wouter'
import GiffyLogo from './assets/logo.png'
import ListOfGifs from './components/ListOfGifs'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <img src={GiffyLogo} alt="Logo" className='app-logo' />
      </Link>
      <Route path='/' component={Home} />
      <Route path='/search/:keyword' component={ListOfGifs} />
    </div>
  )
}

// 1:16:21

export default App;
