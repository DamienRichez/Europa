import Accueil from './components/Accueil.vue'
import Informations from './components/Informations.vue'

export default [
    {path: '/', component: Accueil},
    {path: '/pays/:id', component: Informations}
]