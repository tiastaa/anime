<template>
    <footer class="header-box">
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
  

      </div>
  
    </footer>

  </template>
  
  <script>

  import MyButtonVue from "@/ui/MyButton.vue";
  //    import axios from 'axios';
  
  export default {
    name: "Footer",
    components: {
      MyButtonVue,

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
    height: 3rem;
    background-color:#222222;
    background-size: cover;
    background-position: bottom;
    position: relative;
    padding: 1rem;
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
  /* .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
  } */

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
  