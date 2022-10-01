<template>
  <div class="anime-card-list-box">
    <anime-card-vue
      v-for="item in animeListData"
      :key="item.mal_id"
      :img-src="item.images.jpg.large_image_url"
      :title="item.title"
      :episodes="item.episodes"
      :score="item.score"
      @open-anime-detail="onAnimeDetail(item.mal_id)"
    />
  </div>
</template>

<script>
import AnimeCardVue from "./AnimeCard.vue";
export default {
  name: "AnimeCardList",
  components: {
    AnimeCardVue,
  },
  props: {
    animeListData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onAnimeDetail(itemId) {
      this.$router.push({
        name: "anime",
        params: { id: itemId },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.anime-card-list-box {
  /* display: flex;
  justify-content: space-between; */
  /* transform: translateY(-10vh); */
  /* flex: 1 1 33%;
	width: 33%;
	max-width: 33%;
	padding: 0px 8px;
	margin-bottom: 16px; */
  display: flex;

  flex-wrap: wrap;
  /* max-width: 50%; */
  justify-content: center;
  /* width: 70vw; */
}
</style>
