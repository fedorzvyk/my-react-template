import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
import { MovieDetails } from '../pages/CharacterDetails/CharacterDetails.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
