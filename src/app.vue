<template>
  <div>
    <!-- header -->
    <div class="header container">
      <div class="row">
        <div class="col-md-1 col-lg-1"></div>
        <div class="col-md-10 col-lg-10">

          <div class="backshadow">
            <!-- slideshow carousel -->
            <div id="header-carousel" class="carousel slide" data-ride="carousel">
              <!-- images -->
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
              <!-- button -->
              <div class="carousel-caption">
                <a href="https://booking.bookinghound.com/rezfe/book?og=f74b4e0a-a7e5-4ec2-95f5-5588152f35fe&mode=al" type="button" class="btn btn-default">
                  <i class="fa fa-shopping-cart"></i> Book Online!
                </a>
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

        </div>
        <div class="col-md-1 col-lg-1"></div>
      </div>
    </div>
    <br/>

    <!-- content -->
    <div class="content container">
      <div class="row">
        <div class="col-md-1 col-lg-1"></div>
        <div class="col-md-10 col-lg-10">
          <!-- views -->
          <div class="backshadow views panel panel-default">
            <!-- navigation -->
            <div class="navigation btn-group btn-group-justified" role="group">
              <router-link to="/" role="button" class="btn btn-primary" active-class="active" exact><i class="fa fa-anchor"></i><br/>Rentals</router-link>
              <router-link to="/tours" role="button" class="btn btn-primary" active-class="active"><i class="fa fa-map-o"></i><br/>Tours</router-link>
              <router-link to="/photos" role="button" class="btn btn-primary" active-class="active"><i class="fa fa-picture-o"></i><br/>Photos</router-link>
              <router-link to="/contact" role="button" class="btn btn-primary" active-class="active"><i class="fa fa-comments"></i><br/>Contact</router-link>
            </div>
            <div class="panel-body">
              <div class="row">
                <!-- sidebar -->
                <div class="hidden-xs hidden-sm col-md-3 col-lg-3 sidebar">

                  <!-- main menu -->
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>Main Menu</h4>
                    </div>
                    <div class="panel-body">
                      <h4><i class="fa fa-anchor"></i> <router-link to="/#rentals">Rentals</router-link></h4>
                      <h4><i class="fa fa-anchor"></i> <router-link to="/tours#tours">Tours</router-link></h4>
                      <h4><i class="fa fa-anchor"></i> <router-link to="/photos#photos">Photos</router-link></h4>
                      <h4><i class="fa fa-anchor"></i> <router-link to="/contact#contact">Contact Us</router-link></h4>
                    </div>
                  </div>

                  <!-- services -->
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>Services</h4>
                    </div>
                    <div class="panel-body">
                      <h4><i class="fa fa-anchor"></i> <router-link to="/#rentals">Jetski Rentals</router-link></h4>
                      <h4><i class="fa fa-anchor"></i> <router-link to="/tours#tours">Private Tours</router-link></h4>
                    </div>
                  </div>

                  <!-- information -->
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>Information</h4>
                    </div>
                    <div class="panel-body">
                      <h4><i class="fa fa-anchor"></i> <router-link to="/contact#about">About Us</router-link></h4>
                      <h4><i class="fa fa-anchor"></i> <router-link to="/contact#directions">Directions</router-link></h4>
                      <h4><i class="fa fa-anchor"></i> <a href="/imgs/Sand_Harbor_Water_Sports.pdf">Our Brochure</a></h4>
                    </div>
                  </div>

                  <!-- our friends -->
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>Our Friends</h4>
                    </div>
                    <div class="panel-body">
                      <!-- Goldfish Properties LLC -->
                      <a href="http://www.goldfishproperties.com/">Goldfish Properties, LLC!</a><br/>
                      <a href="http://www.goldfishproperties.com/"><img src="/imgs/goldfish.gif" alt="Goldfish Properties LLC"></a><br/>
                      <small>Properties and Rentals</small><br/>

                      <!-- Michael's Reno Power Sports-->
                      <a href="https://www.michaelsreno.com/">Michael's Reno Power Sports</a><br/>
                      <a href="https://www.michaelsreno.com/"><img src="/imgs/MichaelsReno.gif" alt="Michael's Reno Power Sports"></a><br/>
                      <small>Watercraft's for sale</small><br/>

                      <!-- Nevada Department Of Wildlife -->
                      <a href="http://www.ndow.org/">Nevada Dept. Of Wildlife</a><br/>
                      <a href="http://www.ndow.org/"><img src="/imgs/WildLife.gif" alt="Nevada Department Of Wildlife"></a><br/>
                      <small>Boating education</small><br/>

                      <!-- Lake Tahoe Boat Rentals -->
                      <a href="http://www.tahoeboatrentals.com/">Lake Tahoe Boat Rentals</a><br/>
                      <a href="http://www.tahoeboatrentals.com/"><img src="/imgs/RentalBoats.gif" alt="Lake Tahoe Boat Rentals"></a><br/>
                      <small>Lake Tahoe boat rentals</small><br/>

                      <!-- Sustain Tahoe -->
                      <a href="http://sustaintahoe.org/">Sustain Tahoe</a><br/>
                      <a href="http://sustaintahoe.org/"><img src="/imgs/sustainTahoe.png" alt="Sustain Tahoe"></a><br/>
                      <small>Tahoe adventure guide</small><br/>
                    </div>
                  </div>

                </div>
                <div class="col-xs-12 col-md-9 col-lg-9">
                  <!-- page -->
                  <router-view :key="$route.fullPath"></router-view>

                  <!-- footer -->
                  <hr/>
                  Copyright © {{ new Date().getFullYear() }}, SandHarbor Water Sports (LLC). All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 col-lg-1"></div>
      </div>
    </div>

  </div>
</template>


<style lang="less" rel="stylesheet/less">
  @import "../node_modules/bootstrap/less/bootstrap.less";
  @import "../node_modules/font-awesome/less/font-awesome.less";
  @import (inline) "../node_modules/swiper/dist/css/swiper.min.css";
  @fa-font-path: "/fonts/";

  //==== Theme ====
  body {
    background: #BFDDEE url('/imgs/background.jpeg') top 0 left 40% no-repeat fixed;
  }

  //==== OTHER ====
  a {
    cursor: pointer;
  }

  hr {
    border-top: 5px dotted #303300;
  }

  .backshadow {
    border: none;
    box-shadow: 0 0 5px #366b8f, 0 0 5px #366b8f, 0 0 10px #366b8f, 0 0 10px #366b8f;
  }

  .header {
    .carousel {
      img {
        width: 100%;
      }
      .item {
        left: 0 !important;
        .transition(opacity 1.5s);
      }
      .carousel-caption {
        top: 30%;
        @media (min-width: 768px) {
          top: 40%;
        }
        .btn {
          border-radius: 24px;
        }
        .btn-default {
          background-color: #F8F255;
          border: 5px solid #9F9E10;
        }
        .btn-default:hover {
          background-color: #B09F21;
          border: 5px solid red;
          color: white;
        }
      }
    }
  }

  .description {
    p {
      font-size: 16px;
    }
  }

  .content {
    .navigation {
      border-radius: 3px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.75);
      .btn {
        border-radius: 3px;
      }
      .btn-primary {
        color: #C3DDB1;
        background-color: #303300;
        border: none;
      }
      .btn-primary:hover {
        color: #2B2D01;
        background-color: #EDFA00;
      }
      .active {
        color: #2B2D01;
        background-color: #EDFA00;
      }
    }
    .sidebar {
      padding-left: 5px;
      padding-right: 0;
      a {
        color: inherit;
        text-decoration: underline;
      }
      a:hover {
        color: #7F5305;
        text-decoration: none;
      }
      .panel-default {
        border: none;
        box-shadow: 0 0 4px 0 rgba(0,0,0,0.75);
      }
      .panel-heading {
        background: #11190B url('/imgs/blockheader.png') scroll;
        border: none;
        color: #FFF200;
        font-family: 'Century Gothic', Arial, 'Arial Unicode MS', Helvetica, Sans-Serif;
        font-weight: bold;
        h4 {
          margin: 0;
        }
        h4::before {
          content: url('/imgs/blockheadericon.png');
          margin-right: 5px;
          display: inline-block;
          vertical-align: middle;
          line-height: 0;
        }
      }
      .panel-body {
        background-color: #EDFA00;
      }
    }
    .views {
      background: #FFF5B3;
      color: #2B2D01;
    }
  }
</style>