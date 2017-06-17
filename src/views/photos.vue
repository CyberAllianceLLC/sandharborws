<template>
  <div class="photos">
    <!-- photos -->
    <h3>
      <i class="fa fa-picture-o"></i>
      Photos
    </h3>
    <hr/>
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/2)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/3)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/4)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/5)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/6)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/7)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/8)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/9)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/10)"></div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="swiper-container gallery-thumbs hidden-xs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/2)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/3)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/4)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/5)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/6)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/7)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/8)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/9)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/10)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted: function () {
      var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        grabCursor: true,
        centeredSlides: true,
        autoplay: 5000,
        speed: 600,
        autoplayDisableOnInteraction: false,
        spaceBetween: 10
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        grabCursor: true,
        touchRatio: 0.6,
        slideToClickedSlide: true,
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        }
      });
      galleryTop.params.control = galleryThumbs;
      galleryThumbs.params.control = galleryTop;
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .photos {
    .swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 250px !important;
      width: 100%;
    }
    .gallery-thumbs {
      height: 100px !important;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 100px !important;
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
</style>