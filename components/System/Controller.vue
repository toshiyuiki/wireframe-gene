<template>
  <section class="system_controller">
    <nav class="system_controller_nav">
      <ul>
        <li>
          <NuxtLink to="/">
            Edit
          </NuxtLink>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <ul class="system_controller_input">
      <li class="ff">
        font-family：
        <select v-model="layout_ff" @change="controller_change">
          <option>選択してください</option>
          <option value="1">ゴシック</option>
          <option value="2">明朝</option>
        </select>
      </li>
      <li class="h">
        header：
        <select v-model="layout_header" @change="controller_change">
          <option>選択してください</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </li>
      <li class="f">
        footer：
        <select v-model="layout_footer" @change="controller_change">
          <option>選択してください</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </li>
      <li class="s">
        <ol>
          <li v-for="(section,index) in layout_section">
            <div>
              section：
              <select v-model="layout_section[index]" @change="controller_change">
                <option>選択してください</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <ul class="pm dp__flex">
              <li @click="select_plus">+</li>
              <li v-if="(index > 0)" @click="select_minus">-</li>
            </ul>
            <LayoutSectionList :section_select="layout_section[index]" :section_option="true" :section_id="index" />
          </li>
        </ol>
      </li>
    </ul>
    <dl>
      <dt>URL</dt>
      <dd class="url">
        <NuxtLink :to="layout_url" target="_blank">
          {{ layout_url }}
        </NuxtLink>
      </dd>
    </dl>
  </section>
</template>

<style lang="scss">
.system_controller{
  position:fixed;
  overflow: hidden;
  top:0;
  right:0;
  width:250px;
  height:100%;
  overflow-y: scroll;
  .url{
    word-break: break-all;
  }
  .system_controller_nav{
    text-decoration: underline;
    padding:10px;
    border-bottom:1px solid #000;
  }
  .system_controller_input{
    padding:10px;
  }
  .system_controller_input > li{
    margin:0 0 20px;
    background:rgba(0,0,0,0.1);
    border-radius: 5px;
    padding:10px;
  }
  .system_controller_input select{
    padding:5px;
    width:4em;
  }
  .system_controller_input textarea{
    padding:5px;
    height:4em;
  }
  .system_controller_input .s ol > li{
    background:rgba(0,0,0,0.1);
    margin:0 0 10px;
    padding:10px;
  }
  .system_controller_input .s ol > li > div{
    align-items: center;
    gap:0 10px;
  }
  .system_controller_input .s .pm{
    align-items: center;
    gap:0 5px;
    margin:0 0 5px;
  }
  .system_controller_input .s .pm li{
    width:1.8em;
    text-align:center;
    padding:5px;
    box-sizing: border-box;
    border-radius: 5px;
    background:#666;
    color:#fff;
    line-height:1;
    border:1px solid #666;
    cursor: pointer;
  }
  .system_controller_input .s .pm li:hover{
    color:#666;
    background:#fff;
  }
}
</style>

<script lang="ts" setup>
const layout_header:Ref<string> = ref('選択してください');
const layout_footer:Ref<string> = ref('選択してください');
const layout_section:Ref<string[]> = ref(['選択してください']);
const layout_ff:Ref<string> = ref('選択してください');
const layout_url:Ref<string> = ref('./');
const layout_content:Ref<{ff:string,header:string,footer:string,section:string[],url:string}> = ref({
  ff:layout_ff.value,
  header:layout_header.value,
  footer:layout_footer.value,
  section:layout_section.value,
  url:layout_url.value
});
const { controller_content, updateController } = useController();
const controller_change = () => {
  layout_url.value = `./view/?ff=${layout_ff.value}&h=${layout_header.value}&f=${layout_footer.value}&s=${layout_section.value}`
  layout_content.value.ff = layout_ff.value;
  layout_content.value.header = layout_header.value;
  layout_content.value.footer = layout_footer.value;
  layout_content.value.section = layout_section.value;
  layout_content.value.url = layout_url.value;
  updateController(layout_content.value);
}
const select_plus = () => {
  layout_section.value.push('');
}
const select_minus = () => {
  layout_section.value.pop();
}
</script>
