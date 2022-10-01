<template>
  <div class="anime-box">
    <!-- <anime-img-vue :imgSrc="animeImgInfo.jpg" /> -->

    <div class="anime-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="anime-info-box">
      <div class="anime-title">
        {{ title }}
      </div>
      <div class="anime-card-episodes">{{ episodes }} ep</div>
      <div class="anime-card-score">
        {{ score }}
      </div>
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
    episodes: {
      type: Number,
      default: 0,
    },
    score: {
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
</style>
