//0.Імпортуємо модуль та його компоненти
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. Import route components.
import Home from './pages/Home'
import AnimeFullDescription from './pages/AnimeFullDescription'
import Favourite from './pages/Favourite'
import Search from './pages/Search'
import RandomAnime from './pages/RandomAnime'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  { path: '/favourite', component: Favourite, name: 'favourite' },
  { path: '/search/:id?', component: Search, name: 'search' },
  { path: '/anime/:id?', component: AnimeFullDescription, name: 'anime' },
  { path: '/randomanime/:id?', component: RandomAnime, name: 'randomanime' },
  

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
export default router