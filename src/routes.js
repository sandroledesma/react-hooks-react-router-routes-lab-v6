//Components
import Actors from './pages/Actors.js';
import Directors from './pages/Directors.js';
import Error from './pages/Error.js';
import Home from './pages/Home.js';
import Movie from './pages/Movie.js';
import NavBar from './components/NavBar.js'

const routes = [
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
    errorElement: (
      <>
        <NavBar />
        <Error />
      </>
    ),
  },
  {
    path: '/directors',
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
  },
  {
    path: '/actors',
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
  },
  {
    path: '/movie/:id',
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
  },
];

export default routes;