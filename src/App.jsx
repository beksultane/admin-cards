import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Card } from './components/Cards/Card'
import { CardOne } from './containers/CardsOne/CardOne';

export default function App() {
  return (
    <>
    <div>
      <Nav />
    </div>
      <Routes>
        <Route path='/' element={<CardOne />} />
        <Route path='/card' element={ <Card /> } />
      </Routes>
    </>
  )
}
