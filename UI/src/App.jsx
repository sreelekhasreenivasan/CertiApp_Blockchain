import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Issue from './pages/Issue';
import Get from './pages/get';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/issue' element={<Issue/>}/>
          <Route path='/get' element={<Get/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App