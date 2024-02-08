<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__6">
    <div class="sec__in__l">
      <ul class="nav__s">
        <li class="cap__wrap" :style="{'background-image' : 'url(' + section__6__use.img +')'}">
          <a @mouseover="updateEventGroup('s_6_ov_2')" @mouseleave="updateEventGroup('s_6_ov_1')"  data-event-group="s_6_ov_1" href="./">
            <dl>
              <dt class="fs__txt__50">TITLE</dt>
              <dd class="fs__txt__18">テキストテキストテキスト</dd>
            </dl>
            <div class="btn">
              <p class="fs__txt__20"><span>READ<br>MORE</span></p>
              <svg viewBox="0 0 110 110" width="100px" height="100px">
                <circle cx="55" cy="55" r="50" fill="#333" stroke="#A89942" stroke-width="2"></circle>
              </svg>
            </div>
            <aside class="cap__txt fs__txt__12">caption</aside>
          </a>
        </li>
        <li class="cap__wrap">
          <a @mouseover="updateEventGroup('s_6_ov_2')" @mouseleave="updateEventGroup('s_6_ov_2')"  data-event-group="s_6_ov_2" href="./">
            <dl>
              <dt class="fs__txt__50">TITLE</dt>
              <dd class="fs__txt__18">テキストテキストテキスト</dd>
            </dl>
            <div class="btn">
              <p class="fs__txt__20"><span>READ<br>MORE</span></p>
              <svg viewBox="0 0 110 110" width="100px" height="100px">
                <circle cx="55" cy="55" r="50" fill="#333" stroke="#A89942" stroke-width="2"></circle>
              </svg>
            </div>
            <aside class="cap__txt fs__txt__12">caption</aside>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <!--/html-->

  <!--option-->
    <aside v-if="(props.section_option)" class="option">
    <input ref="section__6__img__pc" type="file" @change="section__6__change" />
  </aside>
  <!--/option-->
</template>

<style lang="scss">
.section__6{
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
      background:url(https://placehold.jp/1120x686.png) no-repeat center center;
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
    ul{
      display:grid;
      grid:repeat(1,1fr 1fr 1fr) / calc(50% - 10px) calc(50% - 10px);
      gap:20px;
    }
    li{
      display:grid;
      grid:subgrid / subgrid;
      grid-row:span 3;
    }
    li:nth-child(n+3){
      display:grid;
      grid:subgrid / subgrid;
      grid-row:span 3;
    }
    a{
      display:grid;
      grid:subgrid / subgrid;
      grid-row:span 3;
    }
    dl{
      grid-row:3 / 4;
      padding:0 25px 40px;
    }
    .btn{
      width:130px;
      right:25px;
    }
    @include sp{
      padding:30px 0 60px;
      .comingsoon:after{
        font-size: 3rem;
        line-height: 1;
        letter-spacing: 0.1em;
      }
      ul{
        display:block;
        padding:0 per(15, 375);
      }
      li{
        display:block;
        margin:0 0 10px;
      }
      li:last-child{
        margin:0;
      }
      dl{
        padding:160px per(10, 345) 40px;
      }
      .btn{
        width:20%;
        right:per(10, 345);
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
  const section__6__img:Ref<string[]> = ref(['']);
  section__6__img.value[props.section_id] = 'https://placehold.jp/1120x686.png'
  const section__6__use = useState<{img:string}>('section__6__option__id__' + props.section_id, () => {
    const output = section__6__img.value[props.section_id];
    return {
      img: output,
    }
  })
  const section__6__change = (e:any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    section__6__img.value[props.section_id] = url;
    const output = section__6__img.value[props.section_id];
    section__6__use.value.img = output;
  }
</script>
