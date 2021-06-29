import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';
import Footer from '../templates/footer';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
  '/:pages': Home,
}

const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  const footer = null || document.getElementById('footer');

  let hash = getHash();
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404;

  header.innerHTML = await Header();
  content.innerHTML = await render();
  footer.innerHTML = await Footer();

}

export default router;
