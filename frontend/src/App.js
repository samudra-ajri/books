import { Container } from '@mui/material'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Favorite from './pages/Favorite'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/favorites' element={<Favorite />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
