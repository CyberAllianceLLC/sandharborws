global.q = require('q');
global.jQuery = require('jquery');
global.toastr = require('toastr');
global.nprogress = require('nprogress');
global._ = require('lodash');
global.moment = require('moment');
require('bootstrap');

var Vue = require('vue');
var VueRouter = require('vue-router');
var App = Vue.extend(require('./app.vue'));

//init toastr
global.toastr.options = {
  positionClass: 'toast-bottom-right'
};

//init nprogress
global.nprogress.configure({
  showSpinner: false
});

//init vue
Vue.use(VueRouter);

//global components
Vue.component('v_test', require('./views/components/v_test.vue'));

//routes
var routes = [
  {
    path: '/',
    component: require('./views/home.vue')
  },
  {
    name: 'error',
    path: '/error',
    component: require('./views/error.vue')
  },
  {
    path: '*',
    redirect: '/error'
  }
];

//init router
global.router = new VueRouter({
  routes: routes
  /*mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }else{
      return { x: 0, y: 0 }
    }
  }*/
});

//before each route change
router.beforeEach(function(to, from, next) {
  //start loading bar
  nprogress.start();

  //continue
  next();
});

//after each route change
router.afterEach(function(to, from) {
  //stop loading bar
  nprogress.done();
});


//start app
new App({
  router: router
}).$mount('#app');
