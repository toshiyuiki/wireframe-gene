<template>
	<LayoutHeader1 v-if='(props.header_select == "1")' />
	<LayoutHeader2 v-if='(props.header_select == "2")' />
</template>

<style lang="scss">
</style>

<script lang="ts" setup>
const props = withDefaults(defineProps<{header_select:string}>(),{header_select:""});
</script>
