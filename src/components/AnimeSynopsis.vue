<template>
  <div class="anime-synopsis-box">
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

<style lang="css" scoped>
.anime-synopsis {
  color: white;
  display: flex;
  justify-content: center;
  margin:0rem 12rem;
  text-align: left;
  line-height: 1.5rem;
  margin-bottom: 5rem ;
}

</style>
