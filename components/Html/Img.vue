<template>
  <picture>
    <source :srcset="pc" media="(min-width: 750px)">
    <img :src="sp" :alt="alt">
  </picture>
</template>

<style lang="scss">
</style>

<script lang="ts" setup>
const props = defineProps(['pc','sp','alt']);
</script>
