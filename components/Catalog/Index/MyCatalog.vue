<template>
  <section class="catalog">
    <div class="catalog__content">
      <UICardMyCard
        v-for="(item, idx) in useCatalogItems"
        :key="item"
        :item="item"
        :idx="idx"
      />
    </div>
    <div class="catalog__button">
      <UIButtonMyButton
        aria-label="загрузить еще"
        info="загрузить еще"
        fontSize="24"
        cursor-class="animateCursor"
        bigSize="bigSize"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      useCatalogItems: useCatalogItems(),
    };
  },
  mounted() {
    this.useCatalogItems = [
      {
        name: "платье",
        price: "4 800",
        sale: "5 200",
        imageSrc: "../Primer/catalog1.png",
      },
      {
        name: "сарафан",
        price: "2 800",
        imageSrc: "../Primer/catalog1.png",
      },
      {
        name: "сарочка",
        price: "7 800",
        imageSrc: "../Primer/catalog2.png",
      },
      {
        name: "платье",
        price: "1 800",
        imageSrc: "../Primer/catalog2.png",
      },
      {
        name: "кофта",
        price: "9 800",
        sale: "5 200",
        imageSrc: "../Primer/catalog2.png",
      },
      {
        name: "кофта",
        price: "9 800",
        sale: "5 200",
        imageSrc: "../Primer/catalog2.png",
      },
      {
        name: "кофта",
        price: "9 800",
        sale: "5 200",
        imageSrc: "../Primer/catalog2.png",
      },
    ];
  },
};
</script>

<style scoped>
.catalog {
  position: relative;
}
.catalog__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 65px;
  margin-bottom: 40px;
}
</style>
