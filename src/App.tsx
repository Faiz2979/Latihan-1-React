import { Route, Routes } from 'react-router-dom'
import About from './about'
import './App.css'
import BookPage from './book'
import Home from './home'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
  )
}

export default App
