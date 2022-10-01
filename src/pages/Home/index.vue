<template>
  <main>
    <!-- <h3 class="h3-title">Top anime list</h3> -->
    <div>
      <!-- <div class="logo-box"></div> -->

      <anime-card-list-vue :animeListData="topAnimes" />
    </div>
  </main>
</template>

<script>
import AnimeCardListVue from "@/components/AnimeCardList.vue";
// import axios from 'axios';
export default {
  name: "Home",
  components: {
    AnimeCardListVue,
  },

  // data(){
  //   return{info:null}
  // },
  // mounted(){axios.get('https://api.jikan.moe/v4/top/anime')
  // .then((resp)=>{
  //   this.info=resp.data.data;
  //   console.log(resp.data.data)
  // })

  // }
  computed: {
    topAnimes() {
      return this.$store.state.topAnimeList;
    },
  },

  mounted() {
    this.$store.dispatch("fetchTopAnimeList");
  },
};
</script>

<style lang="css" scoped>
main {
  margin: 0 5vw;
  transform: translateY(-14vh);
}
.h3-title {
  /* background-color: aquamarine; */
  text-align: start;
  color: white;
}
</style>
