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
                <img src="/imgs/slides/slide_1.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_2.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_3.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_4.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_5.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_6.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_7.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_8.jpg">
              </div>
              <div class="item">
                <img src="/imgs/slides/slide_9.jpg">
              </div>
            </div>
          </div>

          <!-- weather widget -->
          <div class="hidden-xs" style="width: 100%">
            <iframe style="display: block;" src="//cdnres.willyweather.com/widget/loadView.html?id=66899" width="100%" height="92" frameborder="0" scrolling="no"></iframe>
            <a style="float: right;z-index: 1;position: relative;margin: -92px 0 0 0;text-indent: -9999em;width: 20px;height: 92px" href="http://www.willyweather.com/nv/washoe-county/incline-village.html" rel="nofollow">Incline Village Weather</a>
          </div>
          <div class="visible-xs" style="width: 100%">
            <iframe style="display: block;" src="//cdnres.willyweather.com/widget/loadView.html?id=66900" width="100%" height="62" frameborder="0" scrolling="no"></iframe>
            <a style="position: relative;display: block;margin: -20px 0 0 0;z-index: 1;text-indent: -9999em;height: 20px" href="http://www.willyweather.com/nv/washoe-county/incline-village.html" rel="nofollow">Up to date weather for Incline Village</a>
          </div>

        </div>
        <div class="col-md-1 col-lg-2"></div>
      </div>
    </div>

    <!-- content -->
    <div class="content container">
      <div class="row">
        <div class="col-md-1 col-lg-2"></div>
        <div class="col-md-10 col-lg-8">
          <!-- navigation -->
          <div class="navigation btn-group btn-group-justified" role="group">
            <router-link to="/" role="button" class="btn btn-primary" active-class="active" exact><i class="fa fa-anchor"></i><br/>Rentals</router-link>
            <router-link to="/tours" role="button" class="btn btn-primary" active-class="active" exact><i class="fa fa-map-o"></i><br/>Tours</router-link>
            <router-link to="/photos" role="button" class="btn btn-primary" active-class="active" exact><i class="fa fa-picture-o"></i><br/>Photos</router-link>
            <router-link to="/contact" role="button" class="btn btn-primary" active-class="active" exact><i class="fa fa-comments"></i><br/>Contact</router-link>
          </div>
          <!-- views -->
          <div class="views panel panel-default">
            <div class="panel-body">
              <router-view :key="$route.fullPath"></router-view>
            </div>
          </div>
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

  .title {
    background-color: #303300;
    border-color: #303300;
    color: #FFF200;
    h4 {
      padding: 0 30px;
      margin: 0;
    }
  }

  .description {
    p {
      font-size: 16px;
    }
  }

  .content {
    .navigation {
      .btn-primary {
        color: #C3DDB1;
        background-color: #303300;
        border-color: #303300;
      }
      .btn-primary:hover {
        color: #2B2D01;
        background-color: #C2CB00;
        border-color: #ffffff;
      }
      .active {
        color: #2B2D01;
        background-color: #C2CB00;
        border-color: #ffffff;
      }
    }
    .views {
      background: #FFF5B3;
      color: #2B2D01;
    }
  }
</style>