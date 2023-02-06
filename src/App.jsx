import './App.css'
import { Link, Route } from 'wouter'
import GiffyLogo from './assets/logo.png'
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <img src={GiffyLogo} alt="Logo" className='app-logo' />
      </Link>
      <Route path='/' component={Home} />
      <Route path='/search/:keyword' component={SearchResults} />
    </div>
  )
}

// 1:16:21

export default App;
