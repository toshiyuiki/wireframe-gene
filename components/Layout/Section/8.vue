<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__8">
    <div class="sec__in__l">
      <ul class="fs__txt__14">
        <li v-html="section__8__use.text"></li>
        <li>※テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</li>
        <li>※テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</li>
        <li>※テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</li>
        <li>※テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</li>
      </ul>
    </div>
  </section>
  <!--/html-->

  <!--option-->
  <aside v-if="(props.section_option)" class="option">
    <input v-model="section__8__txt[props.section_id]" @change="section__8__change" />
  </aside>
  <!--/option-->
</template>

<style lang="scss">
.section__8{
	padding:20px 0 50px;
	li{
		text-indent:-1em;
		padding:0 0 0 1em;
	}
	@include sp{
		padding:15px per(15, 375) 40px;
	}
}
</style>

<script lang="ts" setup>
  //event
  onMounted(() => {
      useScrollEvent().ScrollEvent()
  })
  const { event_is, event_name, updateEventGroup } = useEventGroup();

  //props
  const props = withDefaults(defineProps<{section_option:boolean,section_id:number}>(),{section_option:false,section_id:0});

  //option
  const section__8__txt:Ref<string[]> = ref(['']);
  section__8__txt.value[props.section_id] = '※テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト';
  const section__8__use = useState<{text:string}>('section__8__option__id__' + props.section_id, () => {
    const output = section__8__txt.value[props.section_id];
    return {
      text: output
    }
  })
  const section__8__change = () => {
    const output = section__8__txt.value[props.section_id];
    section__8__use.value.text = output;
  }
</script>
