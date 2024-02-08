<template>
  <!--html-->
  <section v-if="(!props.section_option)" class="section__7">
    <div class="sec__in__s">
      <ul class="dp__flex fs__txt__26 fw__bold">
        <li>
          <a class="anime__light" href="./" target="_blank"><span>CV</span></a>
        </li>
        <li>
          <a class="anime__light" href="./" target="_blank"><span>CV</span></a>
        </li>
      </ul>
      <div class="contact">
        <h4>テキストテキスト<br>テキストテキストテキストテキスト</h4>
        <p class="tel">
          <a class="dp__flex" href="tel:0120-027-330">
            <img src="https://placehold.jp/46x26.png" alt=""><span class="fs__txt__40 fw__bold">0000-000-000</span>
          </a>
        </p>
        <p class="txt fs__txt__12">テキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </div>
  </section>
  <!--/html-->

  <!--option-->
  <aside v-if="(props.section_option)" class="option">
  </aside>
  <!--/option-->
</template>

<style lang="scss">
.section__7{
	background:$color-gray8;
	padding:45px 0 35px;
	ul{
		justify-content: center;
    gap:0 per(20, 960);
		margin:0 0 30px;
	}
	li{
		width:per(380,960);
	}
	li a{
		box-sizing: border-box;
		display:block;
    border:$color-gray1;
    background:$color-gray6;
	}
	li a span{
		border:1px solid $color-gray1;
		display:block;
		text-align:center;
		padding:15px 0;
	}
	.contact{
		border:1px solid $color-gray1;
		background:$color-white;
		width:per(780, 960);
		box-sizing: border-box;
		margin:0 auto;
		padding:25px 0 30px;
	}
	h4{
		text-align:center;
		margin:0 0 6px;
	}
	.tel a{
		align-items: center;
		justify-content: center;
	}
	.tel img{
		width:46px;
		margin:0 8px 0 0;
		position:relative;
		top:5px;
	}
	.txt{
		text-align:center;
		margin:0 0 5px;
	}
	@include sp{
		padding:30px per(15, 375) 35px;
		ul{
			display:block;
			margin:0 0 20px;
		}
		li{
			width:auto;
			margin:0 0 10px;
		}
		li:last-child{
			margin:0;
		}
		.contact{
			width:auto;
			margin:0 auto;
			padding:20px 0 30px;
		}
		h4{
			margin:0 0 10px;
		}
		.tel{
			margin:0 0 10px;
		}
		.tel img{
			width:40px;
			top:0;
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
  //const section__7__txt:Ref<string[]> = ref(['']);
  //const section__7__use = useState<{txt:string}>('section__6__option__id__' + props.section_id, () => {
  //  const output = section__7__txt.value[props.section_id];
  //  return {
  //    txt: output,
  //  }
  //})
  //const section__7__change = (e:any) => {
  //}
</script>
