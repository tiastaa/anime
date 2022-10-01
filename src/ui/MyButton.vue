<template>
  <div class="my-button-box">
    <button class="my-button">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    text: {
      type: String,
      default: () => ". . .",
    },
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.my-button-box {
  display: inline-block;
  /* background-color: rgba(239, 166, 166, 0.292); */
}
.my-button {
  color: white;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 0.5rem;
  font-size: inherit;
}
.my-button:hover {
  background-color: rgba(147, 104, 107, 0.283);
  border-radius: 3px;
  /* transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); */
}
.my-button:active {
  background-color: rgba(147, 104, 107, 0.405);
}
</style>
