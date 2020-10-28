import Home from '../views/pages/home';
import Restaurants from '../views/pages/restaurants';
import Detail from '../views/pages/detail';
// import Upcoming from "../views/pages/upcoming";
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
