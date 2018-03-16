<template>
  <div class="photos">
    <!-- photos -->
    <h3 id="photos">
      <i class="fa fa-picture-o"></i>
      Photos
    </h3>
    <hr/>
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="picture in pictures" :style="{'background-image': 'url(' + picture + ')'}"></div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="swiper-container gallery-thumbs hidden-xs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="picture in pictures" :style="{'background-image': 'url(' + picture + ')'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pictures: [
          'imgs/slideshow/001.jpg',
          'imgs/slideshow/002.jpg',
          'imgs/slideshow/003.jpg',
          'imgs/slideshow/004.jpg',
          'imgs/slideshow/005.jpg',
          'imgs/slideshow/006.jpg',
          'imgs/slideshow/007.jpg',
          'imgs/slideshow/008.jpg',
          'imgs/slideshow/009.jpg',
          'imgs/slideshow/010.jpg',
          'imgs/slideshow/011.jpg',
          'imgs/slideshow/012.jpg',
          'imgs/slideshow/013.jpg',
        ]
      }
    },
    mounted: function (vm = this) {
      var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        grabCursor: true,
        centeredSlides: true,
        paginationClickable: true,
        slidesPerView: 'auto',
        autoplay: 5000,
        speed: 600,
        autoplayDisableOnInteraction: false,
        spaceBetween: 30
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