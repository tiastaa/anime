<template>
<!-- <main-masterpages-> -->
  <main-masterpage-vue>
    
    <anime-full-info-vue :animeInfo="anime" />
  </main-masterpage-vue>
<!-- </main-masterpages-> -->

</template>

<script>

import AnimeFullInfoVue from "@/components/AnimeFullInfo.vue";
import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";
export default {
  name: "App",
  components: {
    // AnimeMainInfoVue,
    AnimeFullInfoVue,
    MainMasterpageVue
    // MainMasterpageVue,
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
