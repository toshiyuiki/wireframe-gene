<template>
	<div :class="fontfamily==='2' ? 'ff__serif' : 'ff__sans'">
		<LayoutHeaderList :header_select="header" />
		<main>
			<LayoutSectionList v-for="(val,index) in section" :section_select="section[index]" :section_option="false" />
		</main>
		<LayoutFooterList :footer_select="footer" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'view',
});
const route = useRoute();
let fontfamily:string = route.query.ff;
let header:string = route.query.h;
let footer:string = route.query.f;
let section:string | [string] = route.query.s;
if(route.query.s && route.query.s.indexOf(',') !== -1){
	fontfamily = route.query.ff;
	header = route.query.h;
	footer = route.query.f;
	section = route.query.s.split(',');
}
</script>