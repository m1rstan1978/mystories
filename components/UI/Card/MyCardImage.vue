<template>
  <swiper
    class="card__item_swiper"
    :slidesPerView="1"
    :slidesPerGroup="1"
    :effect="'fade'"
    :loop="false"
    :rewind="true"
    :allowTouchMove="true"
    :pagination="pagination"
    :modules="modules"
    :speed="400"
    @swiper="onSwiperInit"
  >
    <swiper-slide
      v-for="slide in getArrSwiperImages"
      class="card__item_slide"
      :key="slide"
    >
      <div class="card__item_card">
        <img
          v-show="checkLoad"
          class="card__item_imgs"
          :src="slide.imageSrc"
          @load="onImageLoad"
          :alt="item.name"
        />
        <UIMyLoadItem v-show="!checkLoad" />
      </div>
    </swiper-slide>
    <div class="card__item_pagination"></div>
    <div class="card__item_texture" v-if="sale"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default {
  props: {
    images: Array,
    idx: Number,
    sale: {},
    item: Object,
  },
  data() {
    return {
      arrImages: null,
      checkLoad: false,
    };
  },
  setup() {
    const pagination = { el: ".card__item_pagination", clickable: true };
    const modules = [EffectFade, Pagination];
    return {
      pagination,
      modules,
    };
  },
  computed: {
    getArrSwiperImages() {
      return this.images.filter((el, idx) => idx <= 3);
    },
  },
  methods: {
    onSwiperInit(instance) {
      this.swiper = instance;
      this.initMouseEnter();
    },
    initMouseEnter() {
      const bulletEl = document.querySelectorAll(
        `.card${this.idx + 1} .swiper-pagination-bullet`
      );
      bulletEl.forEach((el, idx) => {
        el.addEventListener("mouseenter", () => {
          this.swiper.slideTo(idx);
        });
      });
    },
    onImageLoad() {
      this.checkLoad = true;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.card__item_swiper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.card__item_texture {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/Main/textureSale.svg");
  z-index: 6;
}
.card__item_slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.card__item_slide {
  position: relative;
  z-index: 10;
}
.card__item_card {
  height: 100%;
}
.card__item_imgs {
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;
  animation-duration: 0.5s;
  animation-name: animateOpacity;
  z-index: 5;
}
@keyframes animateOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.card__item_pagination {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  gap: 0;
  z-index: 11;
}
</style>
