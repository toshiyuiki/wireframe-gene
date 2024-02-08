<template>
  <footer class="footer__1">
    <nav class="fnav">
      <div class="sec__in__l">
        <ul class="dp__flex color__txt__white fs__txt__12">
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
          <li>
            <a data-hover class="anime__underline" href="./">
              メニュー
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="f__content">
      <div class="sec__in__l">
        <div class="content dp__flex">
          <ul class="left img__reset dp__flex colum3">
            <li>
              <a data-hover class="anime__opacity" href="./" target="_blank">
                <img src="https://placehold.jp/221x52.png" alt="バナー">
              </a>
            </li>
            <li>
              <a data-hover class="anime__opacity" href="./" target="_blank">
                <img src="https://placehold.jp/221x52.png" alt="バナー">
              </a>
            </li>
            <li>
              <a data-hover class="anime__opacity" href="./" target="_blank">
                <img src="https://placehold.jp/221x52.png" alt="バナー">
              </a>
            </li>
          </ul>
          <div class="right">
            <ul class="dev img__reset dp__flex">
              <li>
                <a data-hover class="anime__opacity" href="./">
                  <img src="https://placehold.jp/225x47.png" alt="ロゴ">
                </a>
              </li>
            </ul>
            <nav class="devnav">
              <ul class="dp__flex fs__txt__12">
                <li>
                  <a data-hover class="anime__underline" href="./" target="_blank">
                    サブメニュー
                  </a>
                </li>
                <li>
                  <a data-hover class="anime__underline" href="./" target="_blank">
                    サブメニュー
                  </a>
                </li>
                <li>
                  <a data-hover class="anime__underline" href="./" target="_blank">
                    フォーム
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="f__copy">
      <div class="sec__in__l">
        <p class="fs__txt__12">&copy; コピーライト</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer__1{
	padding:0 0 60px;
  .fnav{
    padding:20px 0;
    background: $color-gray4;
  }
  .fnav ul{
    justify-content: center;
  }
  .fnav ul li:after{
    content:"/";
    margin:0 1em;
  }
  .fnav ul li:last-child:after{
		display:none;
	}
	.f__content{
		padding:30px 0 20px;
	}
	.f__content .content{
		justify-content: space-between;
		align-items: flex-start;
	}
	.f__content .left{
		flex-wrap: wrap;
		&.colum2{
			width:per(584,1140);
			gap:15px per(30,1140);
			li{
				width:per(277,584);
			}
		}
		&.colum3{
			width:per(687,1140);
			gap:6px per(12,1140);
			li{
				width:per(221,687);
			}
		}
	}
	.f__content .right{
		padding:5px 0 0;
		width:per(400,1140);	
	}
	.f__content .dev{
		justify-content: flex-end;
		align-items: flex-start;
		gap:0 per(10,400);
		margin:0 0 20px;
	}
	.f__content .dev li{
		width: per(225,400);
	}
	.f__content .devnav ul{
		justify-content: flex-end;
		align-items: center;
	}
	.f__content .devnav li:after{
		content:"|";
		margin:0 1em;
	}
	.f__content .devnav li:last-child:after{
		display:none;
	}
	@include sp{
		padding:0 0 10px;
		.fnav{
			padding:0;
		}
		.fnav ul{
			justify-content: flex-start;
			align-items: stretch;
			flex-wrap: wrap;
			border-top:1px solid $color-sep;
			border-left:1px solid $color-sep;
		}
		.fnav ul li{
			border-bottom:1px solid $color-sep;
			border-right:1px solid $color-sep;
			box-sizing: border-box;
			width:50%;
		}
		.fnav ul li:after{
			display:none;
		}
		.fnav ul li a{
			display:block;
			text-align:center;
			padding:1em;
		}
		.f__content{
			padding:30px 0 60px;
		}
		.f__content .content{
			display:block;
		}
		.f__content .left{
			padding:0 per(15,375);
			display:block;
			margin:0 0 60px;
			&.colum2{
				width:auto;
				li{
					width:per(277,345);
					margin:0 auto 20px;
				}
				li:last-child{
					margin:0 auto;
				}
			}
			&.colum3{
				width:auto;
				li{
					width:per(277,345);
					margin:0 auto 20px;
				}
				li:last-child{
					margin:0 auto;
				}
			}
		}
		.f__content .right{
			padding:0;
			width:auto;	
		}
		.f__content .dev{
			display:block;
			margin:0 0 20px;
		}
		.f__content .dev li{
			width: per(225,345);
			margin:0 auto 20px;
		}
		.f__content .dev li{
			margin:0 auto;
		}
		.f__content .devnav ul{
			justify-content: center;
		}
		.f__copy p{
			text-align:center;
			padding:0 0 60px;
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