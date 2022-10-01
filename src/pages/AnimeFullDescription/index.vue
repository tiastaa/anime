<template>
  <!-- <div><img :src="anime.images.jpg.large_image_url" alt="" /></div> -->
  <!-- <anime-main-info-vue
    :key="anime.mal_id"
    :title="anime.title"
    :episodes="anime.episodes"
    :score="anime.score"
    :img-src="anime.image_url"
  /> -->
  <anime-full-info-vue :animeInfo="anime" />
</template>
<!-- :animeImgInfo="animeImg"  -->
<script>
// import AnimeMainInfoVue from "@/components/AnimeMainInfo.vue";
import AnimeFullInfoVue from "@/components/AnimeFullInfo.vue";
export default {
  name: "App",
  components: {
    // AnimeMainInfoVue,
    AnimeFullInfoVue,
  },

  computed: {
    //     receivedAnimeId() {
    //         console.log(this.receivedAnimeId)
    //   return this.$route.params.id

    // },
    // currentAnime() {
    //   return this.getAnimeById(this.receivedAnimeId)
    // },
    anime() {
      // console.log(this.$store.state.animeInfo);

      return this.$store.state.animeInfo;
    },
    // animeImg() {
    //   console.log(this.$store.state.animeInfo.images.jpg.large_image_url);
    //   return this.$store.state.animeInfo.images.jpg.large_image_url;
    // },
  },
  mounted() {
    // console.log(this.receivedAnimeId)
    this.$store.dispatch("fetchAnimeInfo", this.$route.params.id);
    // this.$store.dispatch("fetchAnimeImgInfo", this.$route.params.id);
  },
};
</script>

<style></style>
