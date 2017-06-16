<template>
  <div>
    <!-- header -->
    <div class="header container">
      <div class="row">
        <div class="col-md-1 col-lg-2"></div>
        <div class="col-md-10 col-lg-8">

          <!-- slideshow carousel -->
          <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="item active">
                <img src="https://www.w3schools.com/bootstrap/la.jpg" alt="Los Angeles">
              </div>
              <div class="item">
                <img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="Chicago">
              </div>
              <div class="item">
                <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="New york">
              </div>
            </div>
          </div>

        </div>
        <div class="col-md-1 col-lg-2"></div>
      </div>
    </div>

    <!-- view -->
    <div class="container">
      <div class="row">
        <div class="col-md-1 col-lg-2"></div>
        <div class="col-md-10 col-lg-8">
          <router-view :key="$route.fullPath"></router-view>
        </div>
        <div class="col-md-1 col-lg-2"></div>
      </div>
    </div>

  </div>
</template>


<style lang="less" rel="stylesheet/less">
  @import "../node_modules/bootstrap/less/bootstrap.less";
  @import "../node_modules/toastr/toastr.less";
  @import (inline) "../node_modules/nprogress/nprogress.css";
  @import "../node_modules/font-awesome/less/font-awesome.less";
  @fa-font-path: "/fonts/";

  //==== Theme ====
  body {
    background: #BFDDEE url('/imgs/background.jpeg') top 0 left 40% no-repeat fixed;
  }

  //==== OTHER ====
  a {
    cursor: pointer;
  }

  .header {
    .carousel {
      img {
        width: 100%;
      }
    }
  }
</style>