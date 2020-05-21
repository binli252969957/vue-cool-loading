<template>
  <div v-show="show" class="lxy-container" :style="{ fontSize: size + 'px', zIndex: zIndex, background: background }" @click="toClickLoading">
    <div v-if="type === 'loading01'" class="google-animation-1">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading02'" class="google-animation-2">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading03'" class="google-animation-3">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading04'" class="google-animation-4">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading05'" class="google-animation-5">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading06'" class="google-animation-6">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading07'" class="google-animation-7">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading08'" class="google-animation-8">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4" :style="{backgroundColor: shapeColor[3]}" />
    </div>
    <div v-if="type === 'loading09'" class="google-animation-9">
      <div class="shape shape-1" :style="{backgroundColor: shapeColor[0]}" />
      <div class="shape shape-2" :style="{backgroundColor: shapeColor[1]}" />
      <div class="shape shape-3" :style="{backgroundColor: shapeColor[2]}" />
      <div class="shape shape-4">
        <div class="shape-4-top" :style="{backgroundColor: shapeColor[3]}" />
        <div class="shape-4-bottom" :style="{backgroundColor: shapeColor[3]}" />
        <div class="shape-4-eye" :style="{backgroundColor: shapeColor[4]}" />
        <img src="../images/christmasHat2.png" alt="christmasHat">
      </div>
    </div>
    <div v-if="type === 'loading10'" class="google-animation-10">
      <div class="lxy-horizontal">
        <div class="lxy-circlesup">
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[0] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[1] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[2] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[3] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[4] }" />
          </div>
        </div>
        <div class="lxy-circlesdwn">
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[0] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[1] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[2] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[3] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[4] }" />
          </div>
        </div>
      </div>
      <div class="lxy-vertical">
        <div class="lxy-circlesup">
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[0] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[1] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[2] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[3] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[4] }" />
          </div>
        </div>
        <div class="lxy-circlesdwn">
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[0] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[1] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[2] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[3] }" />
          </div>
          <div class="lxy-circle">
            <div :style="{ background: shapeColor[4] }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: '16',
      shapeColor: ['#1875E5', '#C5523F', '#499255', '#F2B736', 'rgba(0, 0, 0, 0.8)'],
      zIndex: 1,
      background: 'rgba(0, 0, 0, 0.6)',
      show: true,
      type: 'loading01',
      isClick: false
    }
  },
  methods: {
    loadShow() {
      this.show = true
    },
    loadHide() {
      this.show = false
    },
    toClickLoading() {
      if (this.isClick === false) return false
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/loading01.scss';
@import '../scss/loading02.scss';
@import '../scss/loading03.scss';
@import '../scss/loading04.scss';
@import '../scss/loading05.scss';
@import '../scss/loading06.scss';
@import '../scss/loading07.scss';
@import '../scss/loading08.scss';
@import '../scss/loading09.scss';
@import '../scss/loading10.scss';

.lxy-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
