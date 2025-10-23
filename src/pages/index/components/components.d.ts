// src/types/components.d.ts
import XtxSwiper from './XtxSwiper.vue'
import CategoryPanel from './CategoryPanel.vue'
import HotPanel from './HotPanel.vue'
import XtxGuess from './XtxGurss.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    CategoryPanel: typeof CategoryPanel
    HotPanel: typeof HotPanel
    XtxGuess: typeof XtxGuess
  }
}
// 组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
