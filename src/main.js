global.q = require('q');
global._ = require('lodash');
global.jQuery = require('jquery');
global.swiper = require('swiper');
require('bootstrap');

var Vue = require('vue');
var VueRouter = require('vue-router');
var App = Vue.extend(require('./app.vue'));

//init vue
Vue.use(VueRouter);

//routes
var routes = [
  {
    name: 'rentals',
    path: '/',
    component: require('./views/rentals.vue')
  },
  {
    name: 'tours',
    path: '/tours',
    component: require('./views/tours.vue')
  },
  {
    name: 'photos',
    path: '/photos',
    component: require('./views/photos.vue')
  },
  {
    name: 'contact',
    path: '/contact',
    component: require('./views/contact.vue')
  },
  {
    name: 'disclaimer',
    path: '/disclaimer',
    component: require('./views/disclaimer.vue')
  },
  {
    name: 'error',
    path: '/error',
    component: require('./views/error.vue')
  },
  {
    path: '/index.php',
    redirect: '/'
  },
  {
    path: '*',
    component: require('./views/error.vue')
  }
];

//init router
global.router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if(to.hash) {
      return {selector: to.hash}
    }else if(savedPosition){
      return savedPosition
    }else{
      return { x: 0, y: 0 }
    }
  }
});

//start app
new App({
  router: router
}).$mount('#app');
