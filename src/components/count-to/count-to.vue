<template>
    <div>
        <slot name="left"></slot>
        <span ref="number" :class="countClass" :id="eleId"></span>
        <slot name="right"></slot>
    </div>
</template>
<script>
import CountUp from 'countup'
// 引入外部样式方式一
// import './count-to.less'

export default {
  name: 'countTo',
  data () {
    return {
      counter: {}
    }
  },
  props: {
    //   起始值
    startVal: {
      type: Number,
      default: 0
    },
    // 最终值
    endVal: {
      type: Number,
      required: true
    },
    // 小数点后保留几位小数
    decimals: {
      type: Number,
      default: 0
    },
    // 动画延迟 单位ms
    delay: {
      type: Number,
      default: 0
    },
    // 渐变时长
    duration: {
      type: Number,
      default: 1
    },
    // 是否使用变速效果
    useEasing: {
      type: Boolean,
      default: false
    },
    // 是否使用分组
    useGrouping: {
      type: Boolean,
      default: true
    },
    // 分组符号
    separator: {
      type: String,
      default: ','
    },
    // 整数和小数分隔符号
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  methods: {
    getCount () {
      // 获取里面的值
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      //   获取结束之后的值
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000 + 10)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  }
}
</script>
// 引入外部样式方式二
<style lang="less">
    @import './count-to.less';
</style>
