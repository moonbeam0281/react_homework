import './App.css'
import MyFirstComponent from './components/MyFirstComponent'
import MyClassComp from './components/MySecondComponent'
import UserProfileClass from './components/UserProfileClass'

function App() {
  return (
    <>
      <UserProfileClass
        name="Luna"
        age="22"
        hobby="Night rider" 
        />
    </>
  )
}

/*
<MyClassComp />
      <MyFirstComponent />
*/

export default App
