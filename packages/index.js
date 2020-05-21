import loading from './view/loading.vue'

let instance = null

const plugin = {
  install(Vue, options = {}) {
    Vue.prototype.lxy_loading = function(config = {}) {
      if (config === false) {
        instance.loadHide()
        return false
      }

      if (typeof config === 'string') {
        const typeConfig = config
        config = {
          type: typeConfig
        }
      }

      if (!instance) {
        const LoadingConstructor = Vue.extend(loading)
        instance = new LoadingConstructor().$mount()
        document.body.appendChild(instance.$el)
      }

      instance = Object.assign(instance, config, options)
      instance.loadShow()
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
