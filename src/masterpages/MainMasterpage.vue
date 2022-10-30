<template>
    <div>
      <div>
    <header-vue></header-vue>
      </div>
      <div>
        <slot>
          <h1>Super Nika!</h1>
        </slot>
      </div>
      <div >
          <footer-vue ></footer-vue>
      </div>
    </div>
  </template>
  
  <script>

import FooterVue from '@/components/Footer.vue';
import HeaderVue from '@/components/Header.vue';
export default {
    name: 'MainMasterpage',
    components:{
FooterVue,
HeaderVue,

    }
  }
  </script>

  <style lang="css" scoped> 
</style>
  