<template>
	<LayoutFooter1 v-if='(props.footer_select == "1")' />
	<LayoutFooter2 v-if='(props.footer_select == "2")' />
</template>

<style lang="scss">
</style>

<script lang="ts" setup>
const props = withDefaults(defineProps<{footer_select:string}>(),{footer_select:""});
</script>
