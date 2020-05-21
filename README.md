# vue-cool-loading

## 下载使用
```
npm install vue-cool-loading

在vue项目中使用
import vueCoolLoading from 'vue-cool-loading'
Vue.use(vueCoolLoading, options)  options: 配置loading的样式

```

## 使用
```
在项目中调用
this.lxy_loading(config)  config: 配置loading的样式
this.lxy_loading(false)   关闭loading

```

## 配置
```
options配置和config配置一样，但是options配置会覆盖config配置
  注：当config为字符串时，配置的是的类型（但是要生效的话不能配置options.type）

options配置：
options = {
  type: 'loading01',      // 样式类型 loading01 ---- loading10
  size: '16',             // 大小
  shapeColor: ['#1875E5', '#C5523F', '#499255', '#F2B736', 'rgba(0, 0, 0, 0.8)'],   // 各方块颜色
  zIndex: 1,              // 遮罩层级
  background: 'rgba(0, 0, 0, 0.6)',  // 遮罩颜色
  isClick: false          // 点击屏幕是否隐藏
}

```
