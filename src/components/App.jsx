import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import Home from '../pages/Home/Home';
// import CharacterDetails from '../pages/CharacterDetails/CharacterDetails.jsx';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
const Home = lazy(() => import('../pages/Home/Home'));
const CharacterDetails = lazy(() =>
  import('../pages/CharacterDetails/CharacterDetails.jsx')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
