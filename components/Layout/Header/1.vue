<template>
  <header class="header__1">
    <div class="sec__in__l">
      <div class="h__content dp__flex">
        <h1 class="logo img__reset">
          <a @mouseover="updateEventGroup('h_1_ov')" @mouseleave="updateEventGroup('h_1_ov')"  data-event-group="h_1_ov" class="anime__opacity" href="./">
            <img src="https://placehold.jp/312x66.png" alt="ALT">
          </a>
        </h1>
        <div class="nav dp__block__pc">
          <h2 class="fs__txt__12">テキストテキストテキストテキストテキスト</h2>
          <nav class="dp__flex">
            <ul class="snav dp__flex fs__txt__12">
              <li>
                <a class="dp__flex" href="./">
                  サブメニュー
                </a>
              </li>
              <li>
                <a class="dp__flex" href="./">
                  サブメニュー
                </a>
              </li>
            </ul>
            <ul class="cvnav dp__flex fs__txt__18 color__txt__sep fw__bold">
              <li>
                <a class="color__bg__gray3 anime__light" href="">
                  <span>フォーム</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <aside class="menu img__reset">
          <div role="button" aria-label="メニューボタン" @click="updateEventGroup('h_1_menu')" data-event-group="h_1_menu">
            <span></span>
          </div>
        </aside>
        <nav aria-label="メニュー" data-event-group="h_1_menu" class="gnav color__bg__white">
          <ul class="mnav">
            <li>
              <a class="dp__flex" data-hover href="./">
                <b class="fs__txt__26 fw__en__bold">メニュー</b><small class="fs__txt__18">メニュー</small>
              </a>
            </li>
            <li>
              <a class="dp__flex" data-hover href="./">
                <b class="fs__txt__26 fw__en__bold">メニュー</b><small class="fs__txt__18">メニュー</small>
              </a>
            </li>
            <li>
              <a class="dp__flex" data-hover href="./">
                <b class="fs__txt__26 fw__en__bold">メニュー</b><small class="fs__txt__18">メニュー</small>
              </a>
            </li>
            <li>
              <a class="dp__flex" data-hover href="./">
                <b class="fs__txt__26 fw__en__bold">メニュー</b><small class="fs__txt__18">メニュー</small>
              </a>
            </li>
            <li>
              <a class="dp__flex" data-hover href="./">
                <b class="fs__txt__26 fw__en__bold">メニュー</b><small class="fs__txt__18">メニュー</small>
              </a>
            </li>
            <li>
              <a class="dp__flex" data-hover href="./">
                <b class="fs__txt__26 fw__en__bold">メニュー</b><small class="fs__txt__18">メニュー</small>
              </a>
            </li>
          </ul>
          <ul class="snav dp__flex fs__txt__12">
            <li>
              <a class="dp__flex" href="./">
                サブメニュー
              </a>
            </li>
            <li>
              <a class="dp__flex" href="./">
                サブメニュー
              </a>
            </li>
          </ul>
          <ul class="cvnav dp__flex fs__txt__14 color__txt__gray1 fw__bold">
            <li>
              <a class="color__bg__gray4 anime__light" href="./">
                <span>フォーム</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="h__float dp__block__sp">
      <ul class="color__txt__sep dp__flex">
        <li>
          <a class="color__bg__gray4" href="./">
            <span class="fs__txt__12">メニュー</span>
          </a>
        </li>
        <li>
          <a class="color__bg__gray4" href="./">
            <span class="fs__txt__12">メニュー</span>
          </a>
        </li>
        <li>
          <a class="color__bg__gray4" href="./">
            <span class="fs__txt__12">メニュー</span>
          </a>
        </li>
        <li>
          <a class="color__bg__gray2" href="./">
            <span class="fs__txt__12">フォーム</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
.header__1{
	background:$color-sep;
	padding:10px 0;
	box-sizing: border-box;
	position:sticky;
	top:0;
	width:100%;
	z-index:100;
	.sec__in__l{
		padding:0 10px;
		box-sizing: border-box;
		max-width:100%;
		position:relative;
	}
  .h__content{
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    width:per(312,1140);
		max-width:312px;
		position:relative;
		z-index:2;
  }
  .nav{
		padding:14px 0 0;
    width:per(700,1140);
		max-width:700px;
		margin:0 per(12,1140) 0 auto;
		position:relative;
		z-index:2;
  }
	.nav h2{
		text-align:right;
		margin:0 0 6px;
	}
	.nav nav{
		justify-content: flex-end;
		align-items: center;
	}
	.snav{
		gap:0 1em;
		margin:0 20px 0 0;
	}
	.snav li a{
		align-items: center;
	}
	.snav li .svg-inline--fa{
		font-size:1.8rem;
		margin:0 .25em 0 0;
	}
	.cvnav{
		gap:0 1rem;
	}
	.cvnav li{
		width:161px;
	}
	.cvnav li + li{
		width:225px;
	}
	.cvnav li a{
		box-sizing: border-box;
		display:block;
	}
	.cvnav li a{
		border:1px solid $color-gray1;
	}
	.cvnav li a span{
		border:1px solid $color-white;
		display:block;
		text-align:center;
		padding:8px 0;
	}
  .menu{
		width:per(64,1140);
		max-width:64px;
		padding:17px 0 0;
		position:relative;
		z-index:4;
  }
  .menu div{
    width:100%;
    padding:100% 0 0;
    border-radius: 100%;
    border:1px solid $color-gray2;
    position:relative;
		span{
			transition: width .3s ease 0s;
		}
		&:before,
		&:after{
			transition: transform .3s ease 0s, top .3s ease 0s,bottom .3s ease 0s;
		}
		&.js--on{
			span{
				width:0;
			}
			&:before{
				transform:rotate(45deg);
				bottom:0;
			}
			&:after{
				transform:rotate(-45deg);
				top:0;
			}
		}
  }
  .menu div:before,
  .menu div:after{
		content:"";
  }
  .menu span,
  .menu div:before,
  .menu div:after{
    display:block;
		background:$color-gray1;
		height:2px;
		width:per(23,64);
		position:absolute;
		top:0;
		bottom:0;
		left:0;
		right:0;
		margin:auto;
  }
	.menu div:before{
		bottom:16px;
	}
	.menu div:after{
		top:16px;
	}
	.gnav{
		position:absolute;
		overflow: hidden;
		width:0;
		top:0;
		right:0;
		z-index:3;
		padding:105px 0 65px;
		box-sizing: border-box;
		transition: max-width .5s ease 0s,padding .5s ease 0s;
		white-space: nowrap;
		width:per(655,1140);
		max-width:0;
		.mnav li,
		.snav,
		.cvnav{
			transform:translateX(100px);
			opacity:0;
		}
		&.js--on{
			max-width:665px;
			box-sizing: border-box;
			height:100dvh;
			padding:105px per(65,1140) 65px;
			.snav{
				transition: transform .3s ease .7s,opacity .3s ease .7s;
			}
			.cvnav{
				transition: transform .3s ease .75s,opacity .3s ease .75s;
			}
			.mnav li:nth-child(1){
				transition: transform .3s ease .65s,opacity .3s ease .65s;
			}
			.mnav li:nth-child(2){
				transition: transform .3s ease .7s,opacity .3s ease .7s;
			}
			.mnav li:nth-child(3){
				transition: transform .3s ease .75s,opacity .3s ease .75s;
			}
			.mnav li:nth-child(4){
				transition: transform .3s ease .8s,opacity .3s ease .8s;
			}
			.mnav li:nth-child(5){
				transition: transform .3s ease .85s,opacity .3s ease .85s;
			}
			.mnav li:nth-child(6){
				transition: transform .3s ease .9s,opacity .3s ease .9s;
			}
			.mnav li:nth-child(7){
				transition: transform .3s ease .95s,opacity .3s ease .95s;
			}
			.mnav li:nth-child(8){
				transition: transform .3s ease 1.0s,opacity .3s ease 1.0s;
			}
			.mnav li:nth-child(9){
				transition: transform .3s ease 1.05s,opacity .3s ease 1.05s;
			}
			.mnav li:nth-child(10){
				transition: transform .3s ease 1.1s,opacity .3s ease 1.1s;
			}
			.snav,
			.cvnav,
			.mnav li{
				opacity:1;
				transform:translateX(0);			
			}
		}
	}
	.gnav .mnav{
		margin:0 0 50px;
	}
	.gnav .mnav li{
		margin:0 0 25px;
	}
	.gnav .mnav li:last-child{
		margin:0;
	}
	.gnav .mnav li b{
		margin:0em .5em 0 0;
	}
	.gnav .mnav li a.dp__flex{
		position:relative;
		align-items: flex-start;
	}
	.gnav .mnav li a:after{
		content:"";
		position:absolute;
		bottom:0;
		left:0;
		height:1px;
		width:0;
		transition: width .5s ease 0s;
		background:$color-black;
	}
	.gnav .mnav li a.js--on{
		&:after{
			width:100%;
		}
	}
	.gnav .snav{
		margin:0 0 25px;
	}
	.gnav .cvnav{
		width:100%;
	}
	.gnav .cvnav li{
		width:per(260, 524);
	}
	.h__float ul{
		gap:0 1px;
	}
	.h__float li{
		width:100%;
	}
	.h__float li a{
		line-height:1;
		display:block;
		text-align:center;
		padding:5px 0;
		box-sizing: border-box;
		height:100%;
	}
	.h__float li a span{
		display:block;
		text-align:center;
	}
	@include sp{
		padding:0;
		.sec__in__l{
			padding:10px per(15,375);
			box-sizing: border-box;
		}
		.h__content{
			justify-content: space-between;
		}
		.logo{
			width:per(195,345);
		}
		.menu{
			width:per(48,345);
			padding:0;
		}
		.menu span,
		.menu div:before,
		.menu div:after{
			width:per(23,48);
		}
		.menu div:before{
			bottom:12px;
		}
		.menu div:after{
			top:12px;
		}
		.gnav{
			top:100%;
			padding:10px 0 20px;
			transition: max-width .5s ease 0s,padding .5s ease 0s;
			width:100%;
			.mnav li,
			.snav,
			.cvnav{
				transform:translateX(100px);
				opacity:0;
			}
			&.js--on{
				max-width:100%;
				padding:10px per(15,375) 20px;
			}
		}
		.gnav .mnav{
			margin:0 0 40px;
		}
		.gnav .mnav li{
			margin:0 0 20px;
		}
		.gnav .mnav li:last-child{
			margin:0;
		}
		.gnav .mnav li b{
			margin:.3em .5em 0 0;
		}
		.gnav .snav{
			margin:0 0 15px;
		}
		.gnav .cvnav li{
			width:per(170, 345);
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
