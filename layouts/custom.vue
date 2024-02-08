<template>
  <div class="layouts">
    <div class="dp__flex">
      <div class="layouts__view">
        <slot />
      </div>
      <div class="layouts__controller">
        <SystemController />
      </div>
    </div>
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
  .layouts__view{
    width:100%;
  }
  .layouts__controller{
    min-width:260px;
    border-left:10px solid #000;
    overflow: hidden;
  }
}
</style>
