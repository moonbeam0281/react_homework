import './App.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import SimpleButton from './SimpleButton'

function App() {

  return (
    <div className="app">
      <Header />
      <Menu />
      <div className="content">
        <SimpleButton />
        <SimpleButton />
        <SimpleButton />
      </div>
      <Footer />
    </div>
  )
}

export default App
