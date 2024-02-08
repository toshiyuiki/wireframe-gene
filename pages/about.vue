<template>
	<div class="xxxxxxx sec__in__s">
		<main>
			<section>
				<h2>ディレクトリ構成</h2>
				<ul>
					<li>/layouts/
						<ul>
							<li>/view.vue<br>コントローラーの無いレイアウト。URLから遷移用。</li>
							<li>/custom.vue<br>コントローラーの有りのレイアウト。編集用。</li>
						</ul>
					</li>
					<li>/components/
						<ul>
							<li>/Html/<br>コーディング短縮用のパーツ</li>
							<li>/System/<br>テンプレート編集パーツ</li>
							<li>/Layout/<br>テンプレートレイアウト
								<ul>
									<li>/Footer/<br>フッターテンプレート
										<ul>
											<li>1.vue～</li>
										</ul>
									</li>
									<li>/Header/<br>ヘッダーテンプレート
										<ul>
											<li>1.vue～</li>
										</ul>
									</li>
									<li>/Section/<br>セクションテンプレート（細分化予定）
										<ul>
											<li>1.vue～</li>
										</ul>
									</li>
									<li>vueファイルについて
										<ul>
											<li>表示用テンプレート毎にコントローラに表示させるinputも記述している。sectionテンプレートが何番目かをidにいれてuseStateで同期させつつも個別に動かす。</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>/pages/
						<ul>
							<li>/index.vue<br>テンプレート編集ページ</li>
							<li>/about.vue<br>テンプレート説明（現在のページ）</li>
							<li>/view.vue<br>テンプレート表示ページ。パラメータ付（?h=1,f=1,s=1,1など）</li>
						</ul>
					</li>
					<li>/composables/
						<ul>
							<li>/use-controller.ts<br>コントローラー用のjs</li>
							<li>/use-event-group.ts<br>テンプレート用のvイベント管理</li>
							<li>/use-scroll-event.ts<br>テンプレート用のスクロールイベント管理</li>
						</ul>
					</li>
				</ul>
			</section>
			<section>
				<h2>説明</h2>
				<ul>
					<li>コントローラー上でテンプレートを選んで作成する。</li>
					<li>確認用のテキスト、画像の編集は編集時のみの反映。あくまで確認用。</li>
					<li>ワイヤーフレームを作成して、このサイト外で構築＋微調整などすることが前提。</li>
					<li>このサイトで完結しないことで、サーバーの状況にあわせたメインフレームを選択してコピペで作成できるようにする。</li>
					<li>また、テンプレート想定外の要望を対応することが一番重要。</li>
				</ul>
			</section>
			<section>
				<h2>備考</h2>
				<ul>
					<li>パラメータの型が良くわからずエラーが出たままになってしまった。</li>
					<li>eventの型もよくわからず、anyを使ってしまっている。</li>
				</ul>
			</section>
		</main>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
});
const { controller_content, updateController } = useController();
</script>

<style lang="scss">
.xxxxxxx{
	padding:60px 0;
	h2{
		margin:0 0 20px;
	}
	ul{
		padding:10px 10px 10px 20px;
		border-radius: 10px;
		background:rgba(0,0,0,0.05);
	}
	li{
		margin:0 0 10px;
	}
}

</style>