import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function PageHome() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes >
  );
}

export default PageHome;
