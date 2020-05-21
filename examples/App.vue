<template>
  <div id="app">
    <div class="content">
      <h1>vue-cool-loading</h1>
      <div class="button" @click="toLoading('loading01')">loading01</div>
      <div class="button" @click="toLoading('loading02')">loading02</div>
      <div class="button" @click="toLoading('loading03')">loading03</div>
      <div class="button" @click="toLoading('loading04')">loading04</div>
      <div class="button" @click="toLoading('loading05')">loading05</div>
      <div class="button" @click="toLoading('loading06')">loading06</div>
      <div class="button" @click="toLoading('loading07')">loading07</div>
      <div class="button" @click="toLoading('loading08')">loading08</div>
      <div class="button" @click="toLoading('loading09')">loading09</div>
      <div class="button" @click="toLoading('loading10')">loading10</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import loading from '../packages'
Vue.use(loading, {
  // type: 'loading01',
  size: '16',
  shapeColor: ['#1875E5', '#C5523F', '#499255', '#F2B736', 'rgba(0, 0, 0, 0.8)'],
  zIndex: 1,
  background: 'rgba(0, 0, 0, 0.6)',
  isClick: true
})

export default {
  name: 'App',
  data() {
    return {
      clickState: true
    }
  },
  methods: {
    toLoading(type) {
      this.lxy_loading(type)
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  display: -webkit-box;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  .content {
    padding: 0 60px;
  }
  .button {
    display: inline-block;
    min-width: 60px;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    background: gray;
    color: white;
    margin: 5px;
    cursor: pointer;
    &:active {
      opacity: 0.85;
    }
  }
  h1 {
    font-size: 80px;
    margin: 30px;
    text-align: center;
  }
}
</style>
