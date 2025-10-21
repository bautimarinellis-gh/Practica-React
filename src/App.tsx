import './App.css'
import { Navbar } from './components/Navbar'
import { AppRouter } from './routes/AppRouter'


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
