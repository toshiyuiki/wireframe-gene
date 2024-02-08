<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__5">
    <ul class="nav__l">
      <li class="cap__wrap" :style="{'background-image' : 'url(' + section__5__use.img +')'}">
        <a @mouseover="updateEventGroup('s_5_ov_1')" @mouseleave="updateEventGroup('s_5_ov_1')"  data-event-group="s_5_ov_1" href="./">
          <div class="sec__in__l">
            <dl>
              <dt class="fs__txt__80">TITLE</dt>
              <dd class="fs__txt__26">テキストテキストテキスト</dd>
            </dl>
            <div class="btn">
              <p class="fs__txt__26"><span>READ</span><span>MORE</span></p>
              <svg viewBox="0 0 110 110" width="100px" height="100px">
                <circle cx="55" cy="55" r="50" fill="#333" stroke="#A89942" stroke-width="1"></circle>
              </svg>
            </div>
          </div>
          <aside class="cap__txt fs__txt__12">caption</aside>
        </a>
      </li>
      <li class="right cap__wrap">
        <a @mouseover="updateEventGroup('s_5_ov_2')" @mouseleave="updateEventGroup('s_5_ov_2')"  data-event-group="s_5_ov_2" href="./">
          <div class="sec__in__l">
            <dl>
              <dt class="fs__txt__80">TITLE</dt>
              <dd class="fs__txt__26">テキストテキストテキスト</dd>
            </dl>
            <div class="btn">
              <p class="fs__txt__26"><span>READ</span><span>MORE</span></p>
              <svg viewBox="0 0 110 110" width="100px" height="100px">
                <circle cx="55" cy="55" r="50" fill="#333" stroke="#A89942" stroke-width="1"></circle>
              </svg>
            </div>
          </div>
          <aside class="cap__txt fs__txt__12">caption</aside>
        </a>
      </li>
    </ul>
  </section>
  <!--/html-->

  <!--option-->
  <aside v-if="(props.section_option)" class="option">
    <input ref="section__5__img__pc" type="file" @change="section__5__change" />
  </aside>
  <!--/option-->
</template>

<style lang="scss">
.section__5{
    padding:30px 0 60px;
    @keyframes index__sec09__button{
      0% {
        stroke-dashoffset: 377;
        fill-opacity:0;
      }
      30% {
        fill-opacity:0;
      }
      70% {
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dashoffset: 0;
        fill-opacity:1;
      }
    }
    li{
      background:url(https://placehold.jp/1890x540.png) no-repeat center center;
      background-size:cover;
      position:relative;
    }
    .btn{
      position:absolute;
      aspect-ratio: 1/1;
      bottom:0;
    }
    p{
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
    }
    .btn span{
      display:block;
      text-align:center;
      padding:5px 0;
      transition: color .5s ease 0s;
    }
    svg{
      width:100%;
      height:100%;
      stroke-dasharray:377;
      stroke-dashoffset: 0;
      fill-opacity:0;
    }
    .js--on .btn span{
      color:#fff;
    }
    .js--on svg{
      animation:index__sec09__button .8s ease 0s 1 forwards;
    }
    .comingsoon:before{
      content:"";
      display:block;
      position:absolute;
      width:100%;
      height:100%;
      background:rgba(0,0,40,0.6);
      top:0;
      left:0;
      z-index:5;
    }
    .comingsoon:after{
      content:"COMING SOON";
      display:block;
      font-size: 5rem;
      line-height: 1;
      letter-spacing: 0.1em;
      font-family: "Cormorant";
      color:#fff;
      position:absolute;
      text-align:center;
      top:50%;
      left:50%;
      width:100%;
      transform: translate(-50%,-50%);
      z-index:6;
    }
    li{
      margin:0 0 120px;
    }
    li > .sec__in__l{
      position:relative;
      width:100%;
      box-sizing: border-box;
      max-width:100%;
      padding:0 60px;
    }
    dl{
      padding:80px 0 160px;
    }
    dt{
      margin:0 0 10px;
    }
    dt,
    dd{
      text-align:right;
    }
    li.right dt,
    li.right dd{
      text-align:left;
    }
    li.right .cap__txt{
      inset:auto 0 0 auto;
    }
    .btn{
      width:200px;
      right:60px;
      transform: translateY(50%);
    }
    li.right .btn{
      right:auto;
      left:60px;
    }
    .btn p span:first-child{
      color:#fff;
    }
    @include sp{
      padding:30px 0 60px;
      .comingsoon:after{
        font-size: 3rem;
        line-height: 1;
        letter-spacing: 0.1em;
      }
      li{
        margin:0 0 100px;
      }
      li > .sec__in__l{
        padding:0 per(15,375);
      }
      dl{
        padding:60px 0 120px;
      }
      .btn{
        width:30%;
        right:per(15,375);
      }
      li.right .btn{
        right:auto;
        left:per(15,375);
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
  const section__5__img:Ref<string[]> = ref(['']);
  section__5__img.value[props.section_id] = 'https://placehold.jp/1890x540.png'
  const section__5__use = useState<{img:string}>('section__5__option__id__' + props.section_id, () => {
    const output = section__5__img.value[props.section_id];
    return {
      img: output,
    }
  })
  const section__5__change = (e:any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    section__5__img.value[props.section_id] = url;
    const output = section__5__img.value[props.section_id];
    section__5__use.value.img = output;
  }
</script>
