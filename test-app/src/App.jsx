import './App.css'
import MyFirstComponent from './components/MyFirstComponent'
import MyClassComp from './components/MySecondComponent'
import OddCounter from './components/OddCounter'
import EvenCounter from './components/EvenCounter'
import UserProfileClass from './components/UserProfileClass'

function App() {
  return (
    /*<>
      <UserProfileClass
        name="Luna"
        age="22"
        hobby="Night rider" 
        />
    </>*/
    <>
      <OddCounter />
      <EvenCounter />

    </>
  )
}

/*
<MyClassComp />
      <MyFirstComponent />
*/

export default App
