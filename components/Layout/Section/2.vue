<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__2">
    <div class="sec__in__l">
      <p v-html="section__2__use.text" class="fs__txt__40 color__txt__black"></p>
    </div>
  </section>
  <!--/html-->

  <!--option-->
  <aside v-if="(props.section_option)" class="option">
    <textarea v-model="section__2__txt[props.section_id]" @change="section__2__change"></textarea>
  </aside>
  <!--/option-->
</template>

<style lang="scss">
.section__2{
  padding:30px 0 40px;
  p{
    text-align:center;
  }
  @include sp{
    padding:20px per(15, 375) 30px;
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
  const section__2__txt:Ref<string[]> = ref(['']);
  section__2__txt.value[props.section_id] = 'テキストテキストテキストテキストテキスト\nテキストテキストテキストテキストテキスト';
  const section__2__use = useState<{text:string}>('section__2__option__id__' + props.section_id, () => {
    const output = section__2__txt.value[props.section_id].replace(/\n/g, '<br>');
    return {
      text: output
    }
  })
  const section__2__change = () => {
    const output = section__2__txt.value[props.section_id].replace(/\n/g, '<br>');
    section__2__use.value.text = output;
  }
</script>
