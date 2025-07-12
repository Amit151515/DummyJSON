import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Found from "./components/Found" 
import FoundItem from "./components/FoundItem"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<FoundItem />} />
        <Route path='/find' element={<Found />} />
        <Route path='/find/:id' element={<FoundItem />} />
      </Routes>
    </>
  )
}

export default App
