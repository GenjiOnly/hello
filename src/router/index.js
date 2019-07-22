import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '@/components/Container.vue'


Vue.use(VueRouter)
export default new VueRouter({
    routes:[{
        name:'index',
        path: '/',
        component:Container
    }]
})