<template>
  <footer class="footer__2">
    <section class="footer__nav">
      <div class="sec__in__l">
        <div class="nav dp__flex">
          <nav class="cv fs__txt__20 color__txt__white dp__block__pc">
            <ul>
              <li class="request">
                <a href="./" target="_blank">
                  フォーム
                </a>
              </li>
            </ul>
          </nav>
          <nav class="nav__footer">
            <ul class="dp__flex">
              <li>
                <a class="dp__flex" href="./">
                  <span>メニュー</span>
                </a>
              </li>
              <li>
                <a class="dp__flex" href="./">
                  <span>メニュー</span>
                </a>
              </li>
              <li>
                <a class="dp__flex" href="./">
                  <span>メニュー</span>
                </a>
              </li>
              <li>
                <a class="dp__flex" href="./">
                  <span>メニュー</span>
                </a>
              </li>
              <li>
                <a class="dp__flex" href="./">
                  <span>メニュー</span>
                </a>
              </li>
              <li class="new">
                <a class="dp__flex" href="./">
                  <span>メニュー</span>
                </a>
              </li>
              <li class="off">
                <a class="dp__flex">
                  <span>メニュー</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="footer__tel">
      <div class="sec__in__l">
        <div class="wrap dp__flex">
          <dl class="inner dp__flex">
            <dt class="fs__txt__14">テキストテキストテキスト</dt>
            <dd class="fs__txt__50">
              <a href="tel:0000-000-000">
                <img src="https://placehold.jp/50x33.png" alt="">0000-000-000
              </a>
            </dd>
          </dl>
          <p class="fs__txt__14">テキストテキストテキスト</p>
        </div>
        <p class="fs__txt__14 term">※テキストテキストテキストテキストテキストテキスト</p>
      </div>
    </section>
    <div class="copyright">
      <p class="fs__txt__12">&copy; コピーライト</p>
    </div>
  </footer>
</template>

<style lang="scss">
.footer__2{
	padding:100px 0 40px;
	.copyright p{
		text-align:center;
	}
	.footer__nav{
		.nav.dp__flex{
			justify-content: space-between;
		}
		.nav .cv{
			width:per(330, 1180);
		}
		.nav .cv a{
			display:block;
			text-align:center;
			padding:50px 0;
		}
		.nav .cv .request a{
			background:$color-gray5;
		}
		.nav .cv .reservation a{
			background:$color-gray4;
		}
		.nav .nav__footer{
			width:per(730, 1180);
		}
		.nav .nav__footer ul.dp__flex{
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: flex-start;
			gap:0 30px;
		}
		.nav .nav__footer ul.dp__flex li{
			width:calc(50% - 15px);
			border-bottom:1px solid $color-black;
		}
		.nav .nav__footer ul.dp__flex li a{
			justify-content: space-between;
			padding:10px 20px;
			align-items: center;
			position:relative;
		}
		.nav .nav__footer ul.dp__flex li.new a::after{
			content:"NEW";
			color:$color-gray6;
			font-size:1.1rem;
			display:block;
			position:absolute;
			top:2px;
			line-height:1;
			left:4px;
		}
		.nav .nav__footer ul.dp__flex li.off .fa-angle-right{
			display:none;
		}
		.nav .nav__footer ul.dp__flex li.off a{
			opacity:0.5;
		}
		.nav .nav__footer ul.dp__flex li.off a::after{
			content:"Coming soon";
		}
	}
	.footer__tel{
		padding:40px 0;
		.sec__in__l > p{
			text-align:center;
			padding:10px 0 0;
		}
		.wrap.dp__flex{
			justify-content: center;
			align-items: center;
			gap:0 20px;
		}
		.inner.dp__flex{
			justify-content: center;
			align-items: center;
			gap:0 20px;
		}
		dt,p{
			line-height:1.4;
		}
		dd{
			line-height:1;
		}
		dd img{
			width:50px;
			margin:0 10px 0 0;
		}
	}
	@include sp{
		padding:0 0 20px;
		.footer__nav{
			padding:0 per(10, 375);
			.nav.dp__flex{
				display:block;
			}
			.nav .nav__footer{
				width:100%;
			}
			.nav .nav__footer ul.dp__flex{
				gap:0 20px;
				align-items: stretch;
			}
			.nav .nav__footer ul.dp__flex li{
				width:calc(50% - 10px);
			}
			.nav .nav__footer ul.dp__flex li a{
				justify-content: center;
				height:100%;
				box-sizing: border-box;
				padding:10px;
				align-items: center;
			}
			.nav .nav__footer ul.dp__flex li .fa-angle-right,
			.nav .nav__footer ul.dp__flex li.off .fa-angle-right{
				display:none;
			}
			.nav .nav__footer ul.dp__flex li.off a::after{
				content:"Coming soon";
				display:block;
				position:absolute;
				inset:auto 0 2px 0;
				margin:auto;
				font-size:1.0rem;
				line-height:1;
				text-align: center;
				width:100%;
			}
		}
		.footer__tel{
			padding:40px per(10, 375) 0;
			.wrap.dp__flex{
				display:block;
			}
			.inner.dp__flex{
				display:block;
			}
			dl{
				margin:0 0 20px;
			}
			dt,p{
				line-height:1.8;
				text-align:center;
			}
			dt{
				margin:0 0 20px;
			}
			dd{
				text-align:center;
			}
			dd img{
				width:50px;
				margin:0 10px 0 0;
			}
		}
	}
}
</style>

<script lang="ts" setup>
  onMounted(() => {
      useScrollEvent().ScrollEvent()
  })
  const { event_is, event_name, updateEventGroup } = useEventGroup();
</script>