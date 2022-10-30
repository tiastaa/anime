<template>
  <div class="anime-box">
    <!-- <anime-img-vue :imgSrc="animeImgInfo.jpg" /> -->

    <div class="anime-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="anime-info-box">
      <div class="anime-title">{{ title }}</div>
      <div class="info3">
        <div class="info2">
          <div class="info">
            <label for="anime-type">Type : </label>
            <div class="anime-type">{{ type }}</div>
          </div>
          <div class="info">
            <label for="anime-status">Status : </label>
            <div class="anime-status">{{ status }}</div>
          </div>
          <!-- <label for="anime-studios">Stusios :</label>
      <div class="anime-studios">{{ studios }}</div> -->
          <!-- <label for="anime-dateAired">dddf :</label>
      <div class="anime-dateAired">{{ dateAired }}</div> -->

          <!-- <label for="anime-genre">Genre :</label>
      <div class="anime-genre">{{ genre }}</div> -->
          <div class="info">
            <label for="anime-score">Score : </label>
            <div class="anime-score">{{ score }}</div>
          </div>
        </div>

        <div class="info2">
          <div class="info">
            <label for="anime-rating">Rating : </label>
            <div class="anime-rating">{{ rating }}</div>
          </div>
          <div class="info">
            <label for="anime-duration">Duration : </label>
            <div class="anime-duration">{{ duration }}</div>
          </div>
          <div class="info">
            <label for="anime-episodes">Episodes : </label>
            <div class="anime-episodes">{{ episodes }} ep</div>
          </div>
          <!-- <div class="info">
        <label for="anime-popularity">Popularity :</label>
        <div class="anime-popularity">{{ popularity }}</div>
      </div> -->
        </div>
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
    type: {
      type: String,
      default: ". . .",
    },
    // studios: {
    //   type: String,
    //   default: ". . .",
    // },
    // dateAired: {
    //   type: String,
    //   default: ". . .",
    // },
    status: {
      type: String,
      default: ". . .",
    },
    // genre: {
    //   type: String,
    //   default: ". . .",
    // },
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
    // popularity: {
    //   type: Number,
    //   default: 0,
    // },
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
  margin: 0 4rem ;
line-height: 2rem;
}
.anime-img img {
  /* width: 15rem; */
  height: 22rem;
  background-size: cover;
  background-position: center;

}
.anime-img{
  position: relative;
  width: 16rem;
  /* height: 24.5rem; */
  border-radius: 3px;
  background-color: rgba(62, 62, 62, 0.258);
  padding: 1rem;
  /* margin: 10px 0; */
  cursor: pointer;
  /* transform: scaleY(40rem); */
  transform: translateY(-9vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.anime-title{
  font-size: 1.4rem;
  margin: 1rem 0;
}
.info {
  display: flex;
  justify-content: flex-start;
  /* position: relative; */
}
.info2{
  width: 15rem;
}
.info3 {
  display: flex;
  justify-content: center;
}
</style>
