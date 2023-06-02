import React from 'react'
import './scss/main.scss';
import Home from './page/Home';
import Rooms from './page/Rooms';
import SingleRoom from './page/SingleRoom';
import Error from './page/Error';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:slug' element={<SingleRoom />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
