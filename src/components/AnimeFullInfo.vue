<template>
  <anime-main-info-vue
    :key="animeInfo.mal_id"
    :img-src="animeInfo.images.jpg.large_image_url"
    :title="animeInfo.title"
    :episodes="animeInfo.episodes"
    :score="animeInfo.score"
  />
</template>
<!--  :img-src="animeInfo.image_url"     -->
<script>
import AnimeMainInfoVue from "@/components/AnimeMainInfo.vue";

export default {
  name: "AnimeFullInfo",
  components: {
    AnimeMainInfoVue,
  },
  props: {
    animeInfo: {
      type: Array,
      default: () => [],
    },
    animeImg: {
      type: Array,
      default: () => [],
    },
  },
  //   computed: {
  //     randomAnime() {
  //       console.log(this.$store.state.randomAnimeInfo);
  //       return this.$store.state.randomAnimeInfo;
  //     },
  //   },
  //   mounted() {
  //     this.$store.dispatch("fetchRandomAnime");
  //   },
};
</script>

<style></style>
