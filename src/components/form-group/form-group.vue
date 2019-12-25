<template>
    <Form ref="form" v-if="Object.keys(valueList).length" :label-width="labelWidth" :model="valueList" :rules="rules">
        <FormItem v-for="(item,index) in list" :key="`${_uid}_${index}`" :label="item.label" :prop="item.name" label-position="left">
            <component :is="item.type" :range="item.range" v-model="valueList[item.name]">
                <template v-if="item.children">
                    <component v-for="(child,i) in item.children.list" :label="child.label" :is="item.children.type" :key="`${_uid}_${i}`" :value="child.value">{{child.title}}</component>
                </template>
            </component>
        </FormItem>
        <FormItem>
            <Button @click="handleSubmit" type="primary">提交</Button>
            <Button @click="handleReset">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
import clonedeep from 'clonedeep'
export default {
  name: 'FormGroup',
  data () {
    return {
      initValueList: [],
      rules: {},
      valueList: {}
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 100
    }
  },
  watch: {
    list () {
      this.setInitValue()
    }
  },
  methods: {
    //   重置操作
    setInitValue () {
      let rules = {}
      let valueList = {}
      let initValueList = {}
      this.list.forEach(item => {
        rules[item.name] = item.rule
        valueList[item.name] = item.value
        initValueList[item.name] = item.value
      })
      this.rules = rules
      this.valueList = valueList
      this.initValueList = initValueList
    },
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 走接口
          console.log(this.valueList)
        }
      })
    },
    handleReset () {
      this.valueList = clonedeep(this.initValueList)
    }
  },
  mounted () {
    this.setInitValue()
  }
}
</script>
