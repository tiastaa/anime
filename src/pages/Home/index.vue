<template>
  <main-masterpage-vue>
    <main>
    <!-- <h3 class="h3-title">Top anime list</h3> -->
    <div>
      <!-- <div class="logo-box"></div> -->

      <anime-card-list-vue :animeListData="topAnimes" />
    </div>
  </main>

  </main-masterpage-vue>
 
</template>

<script>
import AnimeCardListVue from "@/components/AnimeCardList.vue";
// import FooterVue from "@/components/Footer.vue";
import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";
// import axios from 'axios';
export default {
  name: "Home",
  components: {
    AnimeCardListVue,
    // FooterVue,
    MainMasterpageVue,
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
      console.log(this.$store.state.topAnimeList)
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
