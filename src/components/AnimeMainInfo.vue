<template>
  <div class="anime-box">
    <!-- <anime-img-vue :imgSrc="animeImgInfo.jpg" /> -->

    <div class="anime-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="anime-info-box">
      <div class="anime-title">{{ title }}</div>
      <div class="anime-">{{ type }}</div>
      <div class="anime-">{{ studios }}</div>
      <div class="anime-">{{ dateAired }}</div>
      <div class="anime-">{{ status }}</div>
      <div class="anime-">{{ genre }}</div>

      <div class="anime-card-score">{{ score }}</div>
      <div class="anime-">{{ rating }}</div>
      <div class="anime-">{{ duration }}</div>
      <div class="anime-">{{ episodes }}</div>
      <div class="anime-">{{ popularity }}</div>
    </div>
  </div>
</template>

<script>
// import AnimeImgVue from "./AnimeImg.vue";
export default {
  name: "AnimeMainInfo",
  components: {
    // AnimeImgVue,
  },
  props: {
    imgSrc: {
      type: String,
      default:
        "https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6",
    },
    title: {
      type: String,
      default: ". . .",
    },
    type: {
      type: String,
      default: ". . .",
    },
    studios: {
      type: String,
      default: ". . .",
    },
    dateAired: {
      type: String,
      default: ". . .",
    },
    status: {
      type: String,
      default: ". . .",
    },
    genre: {
      type: String,
      default: ". . .",
    },
    score: {
      type: Number,
      default: 0,
    },
    rating: {
      type: String,
      default: ". . .",
    },
    duration: {
      type: String,
      default: ". . .",
    },
    episodes: {
      type: Number,
      default: 0,
    },
    popularity: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="css" scoped>
.anime-box {
  display: flex;
  justify-content: center;
}
.anime-info-box {
  color: white;
}
.anime-img img {
  width: 15rem;
  height: 20rem;
  background-size: cover;
  background-position: center;
}
</style>
