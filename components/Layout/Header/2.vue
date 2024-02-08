<template>
  <header class="header__2">
    <div class="head dp__flex">
      <h1 class="logo">
        <a href="./">
          <img src="https://placehold.jp/270x27.png" alt="">
        </a>
      </h1>
      <ul class="float dp__flex fs__txt__14">
        <li class="dp__block__pc">
          <a href="./">
            サブメニュー
          </a>
        </li>
        <li class="dp__block__pc">
          <a href="./">
            サブメニュー
          </a>
        </li>
        <li class="request color__txt__white">
          <a href="./">
            フォーム
          </a>
        </li>
      </ul>
      <aside role="button" aria-label="メニューボタン" @click="updateEventGroup('h_2_menu')" data-event-group="h_2_menu" class="menu dp__block__sp img__reset">
        <span></span>
      </aside>
    </div>
    <nav aria-label="メニュー" data-event-group="h_2_menu" class="nav__global fs__txt__12">
      <ul class="dp__flex">
        <li>
          <a href="./">
            メニュー
          </a>
        </li>
        <li>
          <a href="./">
            メニュー
          </a>
        </li>
        <li>
          <a href="./">
            メニュー
          </a>
        </li>
		<li class="new">
          <a href="./">
            メニュー
          </a>
        </li>
        <li class="off">
          <a>
            メニュー
          </a>
        </li>
        <li class="off">
          <a>
            メニュー
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header__2{
	position:sticky;
	top:0;
	width:100%;
	background:$color-white;
	z-index:99;
	.head.dp__flex{
		justify-content: space-between;
		padding:0 0 0 30px;
	}
	.head .logo{
		padding:10px 0 0;
	}
	.head .float{
		align-items: center;
	}
	.head .float li a{
		border:1px solid $color-white;
	}
	.head .float .request a{
		border:1px solid $color-black;
		background: $color-gray4;
	}
	.head .float li.request{
		width:140px;
		padding:10px 0;
	}
	.head .float li a{
		display:block;
		text-align:center;
		padding:10px;
	}
	.nav__global{
		padding:0 40px;
		align-items: center;
	}
	.nav__global li{
		width:100%;
		box-sizing: border-box;
		border-right:1px solid $color-gray7;
	}
	.nav__global li:last-child{
		border-right:none;
	}
	.nav__global li a{
		position:relative;
		display:flex;
		width:100%;
		height:100%;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		text-align:center;
		line-height:1.2;
		padding:10px 0;
	}
	.nav__global li.new a::after{
		content:"NEW";
		color:$color-gray3;
		font-size:1.1rem;
		display:block;
		position:absolute;
		top:2px;
		left:4px;
	}
	.nav__global li.off a{
		opacity:0.2;
	}
	@include sp{
		.logo{
			width:per(235, 365);
			position:relative;
			z-index:100;
		}
		.head.dp__flex{
			align-items: center;
			justify-content: space-between;
			padding:0 0 0 per(10, 375);
		}
		.head .float{
			position:fixed;
			bottom:0;
			left:0;
			width:100%;
			z-index:100;
		}
		.head .float li.request{
			width:100%;
			padding:0;
		}
		.menu{
			position:relative;
			padding:per(55,365) 0 0;
			width:per(55, 365);
			z-index:100;
		}
		.menu::before,
		.menu::after{
			content:"";
		}
		.menu span,
		.menu::before,
		.menu::after{
			display:block;
			position:absolute;
			margin:auto;
			width:50%;
			height:2px;
			background:$color-gray1;
			transition: all .5s ease 0s;
		}
		.menu span{
			inset:0 0 0 0;
		}
		.menu::before{
			inset:26px 0 0 0;
		}
		.menu::after{
			inset:0 0 26px 0;
		}
		.menu.js--on{
			span{
				width:0;
			}
			&::before{
				inset:0 0 0 0;
				transform: rotate(45deg);
			}
			&::after{
				inset:0 0 0 0;
				transform: rotate(-45deg);
			}
		}
		.nav__global{
			display:block;
			position:fixed;
			z-index:99;
			top:0;
			right:-100%;
			padding:15% 0 0;
			transition:right .5s ease 0s;
			width:100%;
			background:rgba($color-white,0.8);
			height:100dvh;
			box-sizing: border-box;
		}
		.nav__global.js--on{
			right:0%;
		}
		.nav__global ul.dp__flex{
			padding:per(10, 375);
			flex-wrap: wrap;
			gap:0 20px;
		}
		.nav__global ul.dp__flex li{
			width:calc(50% - 10px);
			border-right:none;
			border-bottom:1px solid $color-gray7;
		}
		.nav__global ul.dp__flex li a{
			padding:20px 0;
		}
		.nav__global ul.dp__flex li.off a::after{
			content:"Coming Soon";
			position:absolute;
			display:block;
			font-size:1.0rem;
			inset:auto 0 2px 0;
			margin:auto;
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
