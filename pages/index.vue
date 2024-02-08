<template>
	<div :class="controller_content.ff==='2' ? 'ff__serif' : 'ff__sans'">
		<LayoutHeaderList :header_select="controller_content.header" />
		<main>
			<!--<section>
				<HtmlImg
				:pc="'./images/index/img_pc.jpg'"
				:sp="'./images/index/img_sp.jpg'"
				:alt="'ALT'"
				/>
			</section>-->
			<LayoutSectionList v-for="(section,index) in controller_content.section" :section_select="controller_content.section[index]" :section_option="false" :section_id="index" />
		</main>
		<LayoutFooterList :footer_select="controller_content.footer" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
});
const { controller_content, updateController } = useController();
</script>