import { createRouter, createWebHashHistory } from 'vue-router'
import { categories } from '@/catalog/data/categories'

const HomeView = () => import('@/catalog/views/HomeView.vue')
const AllView = () => import('@/catalog/views/AllView.vue')
const CategoryView = () => import('@/catalog/views/CategoryView.vue')
const FavoritesView = () => import('@/catalog/views/FavoritesView.vue')
const DesignSystemsView = () => import('@/catalog/views/DesignSystemsView.vue')
const LandingsView = () => import('@/catalog/views/LandingsView.vue')
const IconsView = () => import('@/catalog/views/IconsView.vue')
const NotFoundView = () => import('@/catalog/views/NotFoundView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Inicio' } },
  { path: '/all', name: 'all', component: AllView, meta: { title: 'Todos' } },
  { path: '/favorites', name: 'favorites', component: FavoritesView, meta: { title: 'Favoritos' } },
  { path: '/design', name: 'design', component: DesignSystemsView, meta: { title: 'Design Systems' } },
  { path: '/landings', name: 'landings', component: LandingsView, meta: { title: 'Landing Templates' } },
  ...categories.map((c) => ({
    path: `/category/${c.slug}`,
    name: `category-${c.slug}`,
    component: c.slug === 'icons' ? IconsView : CategoryView,
    props: { slug: c.slug },
    meta: { title: c.name, category: c.slug }
  })),
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: '404' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const title = to.meta?.title ? `${to.meta.title} · Biblioteca` : 'Biblioteca de Componentes'
  document.title = title
})

export default router
