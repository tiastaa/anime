<template>
  <anime-main-info-vue
    :key="animeInfo.mal_id"
    :img-src="animeInfo.images?.jpg.large_image_url"
    :title="animeInfo.title"
    :type="animeInfo.type"
    :dateAired="animeInfo.aired?.from"
    :status="animeInfo.status"
    :score="animeInfo.score"
    :rating="animeInfo.rating"
    :duration="animeInfo.duration"
    :episodes="animeInfo.episodes"
    :popularity="animeInfo.popularity"
  />
  <anime-synopsis-vue :key="animeInfo.mal_id" :synopsis="animeInfo.synopsis" />
</template>
<!-- :studios="animeInfo.studios?.Array.name"    :genre="animeInfo.genres?.Array.name"
   -->
<script>
import AnimeMainInfoVue from "@/components/AnimeMainInfo.vue";
import AnimeSynopsisVue from "./AnimeSynopsis.vue";
export default {
  name: "AnimeFullInfo",
  components: {
    AnimeMainInfoVue,
    AnimeSynopsisVue,
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
