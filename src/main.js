import Vue from 'vue'
import MainComponent from './components/MainComponent.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import './jquery/jquery.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faRedo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(MainComponent)
})
