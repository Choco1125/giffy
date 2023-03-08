import './App.css'
import { Link, Route } from 'wouter'
import GiffyLogo from './assets/logo.png'
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { GifContextProvider } from './context/GifContext'

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <img src={GiffyLogo} alt="Logo" className='app-logo' />
      </Link>
      <GifContextProvider>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword/:rating?' component={SearchResults} />
        <Route path='/gif/:id' component={Detail} />
        <Route path='/404' component={() => <h1>Error 404 :(</h1>} />
      </GifContextProvider>
    </div>
  )
}

export default App;
