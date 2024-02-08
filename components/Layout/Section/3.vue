<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__3 color__bg__gray4">
    <div class="sec__in__l">
      <h3 class="fs__txt__26 fw__bold">INFORMATION</h3>
      <ul>
        <li>
          <dl class="dp__flex">
            <dt>0000.00.00</dt>
            <dd>{{section__3__use.text}}</dd>
          </dl>
        </li>
        <li>
          <dl class="dp__flex">
            <dt>0000.00.00</dt>
            <dd>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
  <!--/html-->

  <!--option-->
  <aside v-if="(props.section_option)" class="option">
    <input v-model="section__3__txt[props.section_id]" @change="section__3__change" />
  </aside>
  <!--/option-->
</template>

<style lang="scss">
  .section__3{
    padding:60px 0 70px;
    p{
      margin:0 0 65px;
    }
    h3{
      text-align:center;
      border-bottom:1px solid $color-sep;
      padding:0 0 10px;
    }
    ul{
      padding:20px 0 0;
      width:per(830, 960);
      margin:0 auto;
    }
    ul li{
      margin:0 0 15px;
    }
    ul li:last-child{
      margin:0;
    }
    ul li dl{
      justify-content: flex-start;
      align-items: flex-start;
    }
    ul li dt{
      flex-basis: 10em;
      width:100%;
    }
    ul li dd{
      width:100%;
    }
    @include sp{
      padding:40px per(15, 375);
      p{
        margin:0 0 40px;
      }
      h3{
        padding:0 0 5px;
      }
      ul{
        padding:10px 0 0;
        width:auto;
      }
      ul li{
        margin:0 0 8px;
      }
      ul li:last-child{
        margin:0;
      }
      ul li dl{
        display:block;
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
  const section__3__txt:Ref<string[]> = ref(['']);
  section__3__txt.value[props.section_id] = 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト';
  const section__3__use = useState<{text:string}>('section__3__option__id__' + props.section_id, () => {
    const output = section__3__txt.value[props.section_id];
    return {
      text: output
    }
  })
  const section__3__change = () => {
    const output = section__3__txt.value[props.section_id];
    section__3__use.value.text = output;
  }
</script>
