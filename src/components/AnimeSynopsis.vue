<template>
  <div class="anime-box">
    <div class="anime-synopsis">
      {{ synopsis }}
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: "AnimeDescription",
  components: {},
  props: {
    synopsis: {
      type: String,
      default: ". . .",
    },
  },
};
</script>

<style lang="scss" scoped></style>
