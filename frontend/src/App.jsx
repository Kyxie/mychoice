import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateItem from './pages/CreateItem'
import ItemDetails from './pages/ItemDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  )
}