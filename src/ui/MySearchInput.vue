<template>
  <div>
    <input type="search" class="my-search-input" placeholder="Search anime" />

    <my-button-vue text="Search"></my-button-vue>
  </div>
</template>

<script>
import MyButtonVue from "./MyButton.vue";
export default {
  name: "MySearchInput",
  components: {
    MyButtonVue,
  },
  props: {},
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.my-search-input {
  background: none;
  /* border-radius: 3px; */
  border: none;
  outline: none;
  color: white;
  border-bottom: 2px solid rgba(106, 72, 83, 0.691);
  font-size: inherit;
  /* background-image: linear-gradient(
    to bottom,
    rgba(178, 178, 178, 0),
    #4f383825
  ); */
}
</style>
