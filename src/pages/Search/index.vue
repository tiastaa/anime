<template>
    <main-masterpage-vue>
          <main>
      <div>
        <anime-card-list-vue :animeListData="searchAnimes" />
      </div>
    </main>  
    </main-masterpage-vue>


    <!-- <footer-vue></footer-vue> -->
  </template>
  
  <script>
  import AnimeCardListVue from "@/components/AnimeCardList.vue";
import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";
//   import FooterVue from "@/components/Footer.vue";

  // import axios from 'axios';
  export default {
    name: "Search",
    components: {
      AnimeCardListVue,
    //   FooterVue,
    MainMasterpageVue,
    },
  
    computed: {
      searchAnimes() {
        console.log( this.$store.state.animeList)
        return this.$store.state.animeList;
      },
    },
  
    // mounted() {
    //   this.$store.dispatch("fetchAnimeList")
    // },
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
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 0px;
    height: 0px;
}
  </style>
  