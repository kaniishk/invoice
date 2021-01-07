import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import CreateInvoice from '@/components/CreateInvoice'
import ViewInvoice from '@/components/ViewInvoices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/login-singup',
      name: 'login',
      component: Login
    },
    {
      path: '/create-invoice',
      name: 'createInvoice',
      component: CreateInvoice
    },
    {
      path: '/view-invoices',
      name: 'viewInvoices',
      component: ViewInvoice
    }
  ]
})
