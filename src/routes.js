import VueRouter from 'vue-router'
import dataUser from './components/dataUser.vue'
import editUser from './components/editUser.vue'

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: dataUser,
            name: 'page-user',
        },
        {
            path:'/edit',
            component: editUser,
            name:'page-edit',
        }
    ],
    mode: 'history'
})