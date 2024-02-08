<template>
	<LayoutSection1 v-if='(props.section_select == "1")' :section_option="props.section_option" :section_id="props.section_id" />
	<LayoutSection2 v-if='(props.section_select == "2")' :section_option="props.section_option" :section_id="props.section_id" />
	<LayoutSection3 v-if='(props.section_select == "3")' :section_option="props.section_option" :section_id="props.section_id" />
	<LayoutSection4 v-if='(props.section_select == "4")' :section_option="props.section_option" :section_id="props.section_id" />
	<LayoutSection5 v-if='(props.section_select == "5")' :section_option="props.section_option" :section_id="props.section_id" />
	<LayoutSection6 v-if='(props.section_select == "6")' :section_option="props.section_option" :section_id="props.section_id" />
	<LayoutSection7 v-if='(props.section_select == "7")' :section_option="props.section_option" :section_id="props.section_id" />
	<LayoutSection8 v-if='(props.section_select == "8")' :section_option="props.section_option" :section_id="props.section_id" />
</template>

<style lang="scss">
</style>

<script lang="ts" setup>
const props = withDefaults(defineProps<{section_select:string,section_option:boolean,section_id:number}>(),{section_select:"",section_option:false,section_id:0});
</script>
