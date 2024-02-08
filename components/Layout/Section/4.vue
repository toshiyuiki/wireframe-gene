<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__4">
    <div class="sec__in__l">
      <h3 class="fs__txt__26 fw__bold">TITLE</h3>
      <div class="dp__flex">
        <figure class="img__reset left cap__wrap">
          <img :src="section__4__use.img" alt="image">
          <figcaption class="cap__txt fs__txt__12">caption</figcaption>
        </figure>
        <div class="right">
          <h4 class="fs__txt__40" v-html="section__4__use.title"></h4>
          <p v-html="section__4__use.text"></p>
        </div>
      </div>
    </div>
  </section>
  <!--/html-->

  <!--option-->
    <aside v-if="(props.section_option)" class="option">
    <textarea v-model="section__4__tit[props.section_id]" @change="section__4__change__tit"></textarea>
    <textarea v-model="section__4__txt[props.section_id]" @change="section__4__change__txt"></textarea>
    <input ref="section__4__img" type="file" @change="section__4__change__img" />
  </aside>
  <!--/option-->
</template>

<style lang="scss">
  .section__4{
    padding:80px 0;
    h3{
      text-align:center;
      margin:0 0 20px;
    }
    .left{
      width:per(570,1140);
    }
    .right{
      width:per(570,1140);
      padding:20px per(20,1140) 20px per(40,1140);
      box-sizing: border-box;
    }
    h4{
      margin:0 0 50px;
    }
    @include sp{
      padding:50px per(15, 375) 40px;
      div.dp__flex{
        display:block;
      }
      .left{
        width:auto;
      }
      .right{
        width:auto;
        padding:20px per(15, 345) 30px;
      }
      h4{
        margin:0 0 20px;
        text-align:center;
      }
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
  const section__4__txt:Ref<string[]> = ref(['']);
  const section__4__tit:Ref<string[]> = ref(['']);
  const section__4__img:Ref<string[]> = ref(['']);
  section__4__tit.value[props.section_id] = 'テキストテキストテキスト\nテキストテキストテキストテキストテキスト';
  section__4__txt.value[props.section_id] = 'テキストテキストテキストテキストテキスト\nテキストテキストテキストテキストテキストテキストテキスト\nテキストテキストテキストテキスト\nテキストテキストテキストテキストテキストテキストテキストテキスト\nテキストテキストテキストテキストテキスト\nテキストテキストテキストテキストテキストテキストテキスト\nテキストテキストテキストテキスト\nテキストテキストテキストテキストテキストテキストテキスト\nテキストテキストテキストテキスト\nテキストテキストテキストテキストテキスト';
  section__4__img.value[props.section_id] = 'https://placehold.jp/570x713.png';
  const section__4__use = useState<{title:string,text:string,img:string}>('section__4__option__id__' + props.section_id, () => {
    const output_tit = section__4__tit.value[props.section_id].replace(/\n/g, '<br>');
    const output_txt = section__4__txt.value[props.section_id].replace(/\n/g, '<br>');
    const output_img = section__4__img.value[props.section_id];
    return {
      title: output_tit,
      text: output_txt,
      img: output_img
    }
  })
  const section__4__change__tit = () => {
    const output = section__4__tit.value[props.section_id].replace(/\n/g, '<br>');
    section__4__use.value.title = output;
  }
  const section__4__change__txt = () => {
    const output = section__4__txt.value[props.section_id].replace(/\n/g, '<br>');
    section__4__use.value.text = output;
  }
  const section__4__change__img = (e:any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    section__4__img.value[props.section_id] = url;
    const output = section__4__img.value[props.section_id];
    section__4__use.value.img = output;
  }
</script>
