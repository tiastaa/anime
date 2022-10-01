<template>
  <div class="my-button-orange-box">
    <button class="my-button-orange">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButtonOrange",
  props: {
    text: {
      type: String,
      default: ". . .",
    },
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.my-button-orange {
  padding: 10px;
  color: white;
  border: none;
  background-color: rgb(142, 56, 25);
}
.my-button-orange:hover {
  border-bottom: 2px solid rgb(55, 22, 10);
}
.my-button-orange:active {
  border: 2px solid rgb(55, 22, 10);
}
</style>
