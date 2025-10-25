import './App.css'
import ContactFormControlled from './Components/ContactFormControlled'
import ContactFormUncontrolled from './Components/ContactFormUncontroled'
import MultiInputForm from './Components/MultiInputForm'

export default function App() {
  return (
    <div className="container">
      <h1 className="h1">Homework 6 — Forms</h1>
      <div className="app-stack">
        <ContactFormControlled />
        <ContactFormUncontrolled />
        <MultiInputForm />
      </div>
    </div>
  )
}