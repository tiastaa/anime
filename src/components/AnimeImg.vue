<template>
  <div class="anime-card-img">
    <img :src="imgSrc.large_image_url" alt="" />
  </div>
</template>

<script>
export default {
  name: "AnimeImg",
  props: {
    imgSrc: {
      type: String,
      default:
        "https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6",
    },
  },
};
</script>

<style lang="scss" scoped></style>
