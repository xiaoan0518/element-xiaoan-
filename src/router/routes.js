import Home from '../components/Home.vue'
import ISHOWBLACK from '../components/ishowblack.vue'
import TABLE from '../components/Table/Table.vue'
import SORTTODO from '../components/TodoList/sortTodo.vue'
export default [
 {
    path: '/',
    name: 'Home',
    component: Home
 },
 {
   path: '/ishowblack',
   component: ISHOWBLACK
 },
 {
   path: '/table',
   component: TABLE,
 },
 {
   path: '/sorttodo',
   component: SORTTODO,
 },
 {
   path: '/',
   redirect: 'Home'
 }
 
]
