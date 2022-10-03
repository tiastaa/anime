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
.anime-card-box {
  position: relative;
  width: 16rem;
  /* height: 24.5rem; */
  border-radius: 3px;
  background-color: rgba(62, 62, 62, 0.258);
  padding: 1rem;
  margin: 10px;
  cursor: pointer;
  /* transform: scaleY(40rem); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.anime-card-img img {
  width: 15rem;
  height: 20rem;
  background-size: cover;
  background-position: center;
}
.anime-card-title {
  color: white;
  padding: 3px;
}
.anime-card-episodes {
  color: white;
  padding: 3px;
}
.anime-card-score {
  color: white;
  padding: 3px;
}
.anime-card-additional-info-box {
  display: flex;
  justify-content: space-around;
  /* position: absolute; */
  /* bottom: ; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
</style>
