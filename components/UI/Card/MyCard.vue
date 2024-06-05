<template>
  <div class="card">
    <div class="card__content">
      <div class="card__image" :class="['card__image' + (idx + 1)]">
        <div class="card__photo" cursor-class="animateCursor">
          <div
            class="card__texture"
            v-for="item in arrNewStyleTexture"
            :key="item"
            :style="{
              top: item.topStyle,
              left: item.leftStyle,
            }"
          >
            sale
          </div>
          <img
            width="490"
            height="665"
            class="card__img"
            :src="item.imageSrc"
            alt="Новинки"
          />
        </div>
      </div>
      <h3 class="card__name" :class="['card__name' + (idx + 1)]">
        {{ item.name }}
      </h3>
      <div class="card__prices" :class="['card__prices' + (idx + 1)]">
        <div class="card__price">{{ item.price }} ₽</div>
        <div class="card__sale" v-if="item?.sale">{{ item.sale }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    idx: Number,
  },
  data() {
    return {
      arrNewStyleTexture: null,
    };
  },
  methods: {
    initArrSale() {
      if (!this.item?.sale) return;
      this.arrNewStyleTexture = [1, 2, 3].map((el, idx) => {
        return {
          topStyle: Math.floor(Math.random() * 100) + "%",
          leftStyle: Math.floor(Math.random() * 100) + "%",
        };
      });
    },
  },
  mounted() {
    this.initArrSale();
  },
};
</script>

<style scoped>
.card {
  position: relative;
}
.card__image {
  position: relative;
  margin-bottom: 15px;
  height: 100%;
  overflow: hidden;
}
.card__photo {
  position: relative;
  overflow: hidden;
}
.card__img {
  position: relative;
  width: 100%;
  object-fit: cover;
  width: 490px;
  height: 665px;
  transition: all 0.4s ease;
  z-index: 5;
}
.card__img:hover {
  transform: scale(1.05);
}
.card__texture {
  position: absolute;
  font-weight: 300;
  font-size: 24px;
  color: var(--yellow);
  z-index: 6;
}
.card__name {
  font-weight: 400;
  font-size: 22px;
  color: var(--brown);
  margin-bottom: 20px;
}
.card__prices {
  display: flex;
  align-items: center;
}
.card__price {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
}
.card__sale {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
  margin-left: 84px;
  text-decoration: line-through;
}
</style>
