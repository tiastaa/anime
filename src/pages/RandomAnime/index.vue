<template>
  <main-masterpage-vue>
    <anime-full-info-vue :animeInfo="randomAnime" />
  </main-masterpage-vue>
  <!-- <anime-main-info-vue
    :key="randomAnime.mal_id"
    :img-src="randomAnime.images_url"
    :title="randomAnime.title"
    :episodes="randomAnime.episodes"
    :score="randomAnime.score"
  /> -->
  
</template>

<!-- .jpg.large_image -->
<script>
// import AnimeMainInfoVue from "@/components/AnimeMainInfo.vue";
import AnimeFullInfoVue from "@/components/AnimeFullInfo.vue";
import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";
export default {
  name: "App",
  components: {
    // AnimeMainInfoVue,
    AnimeFullInfoVue,
    MainMasterpageVue
  },

  computed: {
    randomAnime() {
      console.log(this.$store.state.randomAnimeInfo);
      return this.$store.state.randomAnimeInfo;
    },
  },

  mounted() {
    this.$store.dispatch("fetchRandomAnime");
  },
};
</script>

<style></style>
