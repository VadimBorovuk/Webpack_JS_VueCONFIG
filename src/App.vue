<template>
  <div id="app">
    <h1>Hello!</h1>
    <img :src="Image" alt="not found">

    <div class="block__sport">
      {{isDev}}
      <h2 class="block__sport_title">{{enLangs.title}}</h2>
      <h2 class="block__sport_desc">{{uaLangs.title}}</h2>
    </div>
  </div>
</template>

<script setup>
import Image from '@/assets/sports.png'
import enLangs from '../public/locales/en.json'
import uaLangs from '../public/locales/ua.json'
import {computed, onMounted} from "vue";

const isDev = computed(() => ENV_DEVELOPMENT)
onMounted(()=>{
  console.log(enLangs)
})
</script>

<style lang="scss">
@import './App';

</style>