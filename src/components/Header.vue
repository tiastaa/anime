<template>
  <header class="header-box">
    <div class="header-panel-box">
      <div class="logo-box"></div>
      <router-link class="router-link-button" to="/randomanime"
        ><my-button-vue text="Random Anime"
      /></router-link>

      <router-link class="router-link-button" to="/"
        ><my-button-vue text="Go to Home"
      /></router-link>
      <router-link class="router-link-button" to="/favourite"
        ><my-button-vue text="Favourite"
      /></router-link>

      <my-search-input-vue></my-search-input-vue>
    </div>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <h1 class="header-title">MY ANIME</h1>
  </header>
  <router-view></router-view>
</template>

<script>
import MySearchInputVue from "@/ui/MySearchInput.vue";
import MyButtonVue from "@/ui/MyButton.vue";
//    import axios from 'axios';

export default {
  name: "Header",
  components: {
    MyButtonVue,
    MySearchInputVue,
  },
  methods: {
    // data() {
    //     return {
    //         info: null
    //             };
    //         },
    // mounted() {
    //         axios
    //         .get('https://api.jikan.moe/v4/random/anime')
    //         .then(response => (this.info = response));
    //     },
    // data(){
    //     return{info:null}
    // },
    // mounted(){axios.get('https://api.jikan.moe/v4/random/anime')
    //     .then((resp)=>{
    //     this.info=resp.data.data;
    //     console.log(resp.data.data)
    // }),
    // ShowRandomAnime() {
    //   this.$router.push({
    //     name: 'randomanime',
    //   })}
  },
};
</script>

<style lang="css" scoped>
.header-box {
  height: 55vh;
  background-image: linear-gradient(to bottom, rgba(178, 178, 178, 0), #1c1c1c),
    url(https://img1.akspic.ru/crops/8/4/9/7/6/167948/167948-anime-anime_art-ken_kaneki-tokio-oblako-3840x2160.jpg);
  background-size: cover;
  background-position: bottom;
  position: relative;
  padding: 2rem;
}
.header-panel-box {
  display: flex;
  justify-content: space-between;
}
.router-link-button {
  height: 100%;
  /* width: 100%; */
  cursor: auto;
}
.logo-box {
  height: 4rem;
  width: 4rem;
  clip-path: polygon(
    50% 0%,
    54% 38%,
    79% 49%,
    61% 61%,
    80% 90%,
    39% 69%,
    20% 90%,
    19% 67%,
    6% 5%,
    29% 48%
  );
  background-color: white;
  /* transform: scaleY(40rem); */
  flex-shrink: 0;
}
.header-title {
  color: white;

  transform: translateY(10vh);
  letter-spacing: 1.5rem;
  font-size: 3rem;
}
.header-title:hover {
  cursor: default;
}

/* .router-link{
   
    
   color: white;
   border: none;
   
   
}
.router-link:hover{
   background-color:rgba(147, 104, 107, 0.283);
   border-radius: 3px;

}
.router-link:active{
   background-color: rgba(147, 104, 107, 0.405);
}  */
</style>
