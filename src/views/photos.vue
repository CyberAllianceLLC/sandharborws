<template>
  <div class="photos">
    <!-- photos -->
    <h3 id="photos">
      <i class="fa fa-picture-o"></i>
      Photos
    </h3>
    <hr/>
    <!-- images -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div v-for="picture in pictures" :data-background="picture" class="swiper-slide swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>

    <!-- thumbnail images -->
    <div class="swiper-container gallery-thumbs hidden-xs">
      <div class="swiper-wrapper">
        <div v-for="picture in pictures" :data-background="picture" class="swiper-slide swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      var pictures = [];

      for(var i = 1; i <= 224; i++) {
        pictures.push('imgs/slideshow/' + i + '.jpg');
      }

      return {
        pictures: pictures
      }
    },
    mounted: function (vm = this) {
      var galleryTop = new swiper('.gallery-top', {
        grabCursor: true,
        centeredSlides: true,
        lazy: {
          loadPrevNext: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        }
      });
      var galleryThumbs = new swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 10
        }
      });
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .photos {
    .swiper-container {
      width: 90%;
      height: 100%;
      margin: 20px auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 450px !important;
      width: 100%;
    }
    @media (max-width: 768px) {
      .gallery-top {
        height: 275px !important;
        width: 100%;
      }
    }
    .gallery-thumbs {
      height: 100px !important;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 100px !important;
      height: 100%;
      opacity: 0.6;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
</style>