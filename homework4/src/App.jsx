import './App.css'
import DynamicColorBox from './Components/Exercise1/DynamicColorBox'
import DynamicCounter from './Components/Exercise1/DynamicCounter'
import RandomUserFetcher from './Components/Exercise2/RandomUserFetcher'
import CatImages from './Components/Exercise3/CatImages'

function App() {

  return (
    <div className="app">
      <div className="exerciseBox">
        <h1>Exercise number 1</h1>
        <DynamicCounter />
        <DynamicColorBox />
      </div>
      <div className="exerciseBox">
        <h1>Exercise number 2</h1>
        <RandomUserFetcher />
      </div>
      <div className="exerciseBox">
        <h1>Exercise number 3</h1>
        <CatImages />
      </div>
    </div>
  )
}

export default App
