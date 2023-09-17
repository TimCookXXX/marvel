import Navigation from "./routes/Navigation";
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Personagens from "./routes/Personagens";
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="personagens" element={<Personagens />} />
      </Route>
    </Routes>
  )
}

export default App;