import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Recipes from './pages/Recipes'
import Submit from './pages/Submit'
import RestaurantDetail from './pages/RestaurantDetail'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  return (
    <BrowserRouter basename="/p59/">
      <Navigation />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
