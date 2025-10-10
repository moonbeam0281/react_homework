import './App.css'
import UserProfileClass from './Components/Exercise1/UserProfileClass'
import UserProfileFunction from './Components/Exercise1/UserProfileFunction'
import ListItem from './Components/Exercise2/ListItem'
import Parent from './Components/Exercise3/Parent'

function App() {
  //Created a user to pass down to Class and Functional componenets
  const user = { name: "Luna", age: 22, hobby: "Moon rider!" }

  //Exercise 2: Dynamic listing using components
  const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
  ]

  //Exercise 3: Family

  const family = {
    name: "John (Parent)",
    children: [
      {
        name: "Alex (Child)",
        age: 30,
        grandchildren: [
          { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
          { name: "Sophia (Grandchild)", hobby: "Drawing" },
        ],
      },
      {
        name: "Emma (Child)",
        age: 28,
        grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
      },
    ],
  }

  return (
    //Sepperated exercises with divs and styled them
    <div>
      <div className="exerciseBox">
        <h1>Exercise 1!</h1>
        <p>Using props and passing down arguments</p>
        <UserProfileClass {...user} />
        <UserProfileFunction {...user} />
      </div>
      <div className="exerciseBox">
        <h1>Exercise 2!</h1>
        <ListItem tasks={tasks} />
      </div>
      <div className="exerciseBox">
        <h1>Exercise 3!</h1>
        <Parent name={family.name} children={family.children} />
      </div>
    </div>
  )
}

export default App
