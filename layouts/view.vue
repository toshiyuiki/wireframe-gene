<template>
  <div class="layouts">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: 'static json',
  });
</script>

<style lang="scss">
.layouts{
  width:100%;
}
</style>
