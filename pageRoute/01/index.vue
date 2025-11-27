<template>
  <div>
    <Header />
   
    <Tabbar></Tabbar>
  </div>
</template>

<script setup>
import Header from "./publicComponents/Header.vue";
import Tabbar from "./publicComponents/Tabbar.vue";
import { useRouter } from "vue-router";


const router = useRouter();
</script>

<style lang="scss" scoped>

</style>
