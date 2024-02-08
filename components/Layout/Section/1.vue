<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__1">
    <div class="img__reset">
      <HtmlImg
      :pc="section__1__use.pc"
      :sp="section__1__use.sp"
      :alt="'ALT'"
      />
    </div>
  </section>
  <!--/html-->

  <!--option-->
  <aside v-if="(props.section_option)" class="option">
    PC：<input ref="section__1__img__pc" type="file" @change="section__1__change__pc" />
    SP：<input ref="section__1__img__sp" type="file" @change="section__1__change__sp" />
  </aside>
  <!--/option-->
</template>

<style lang="scss">
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
  const section__1__img__pc:Ref<string[]> = ref(['']);
  const section__1__img__sp:Ref<string[]> = ref(['']);
  section__1__img__pc.value[props.section_id] = 'https://placehold.jp/1260x709.png'
  section__1__img__sp.value[props.section_id] = 'https://placehold.jp/750x1200.png';
  const section__1__use = useState<{pc:string,sp:string}>('section__1__option__id__' + props.section_id, () => {
    const output_pc = section__1__img__pc.value[props.section_id];
    const output_sp = section__1__img__sp.value[props.section_id];
    return {
      pc: output_pc,
      sp: output_sp
    }
  })
  const section__1__change__pc = (e:any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    section__1__img__pc.value[props.section_id] = url;
    const output = section__1__img__pc.value[props.section_id];
    section__1__use.value.pc = output;
  }
  const section__1__change__sp = (e:any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    section__1__img__sp.value[props.section_id] = url;
    const output = section__1__img__sp.value[props.section_id];
    section__1__use.value.sp = output;
  }
</script>
