<template>
  <div class="anime-card-box" @click="$emit('open-anime-detail')">
    <div class="anime-card-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="anime-card-title">
      {{ title }}
    </div>
    <div class="anime-card-additional-info-box">
      <div class="anime-card-episodes">{{ episodes }} ep</div>
      <div class="anime-card-score">
        {{ score }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AnimeCard",
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
 /* @import "@/assets/style/AnimeCard.scss"; */
</style>
