<template>
    <div class="form-wrapper">
        <form-group :list="formList"></form-group>
    </div>
</template>
<script>
import FormGroup from '_c/form-group'
export default {
  components: {
    FormGroup
  },
  data () {
    return {
      formList: [{
        name: 'name',
        type: 'i-input',
        value: '',
        label: '姓名',
        rule: [{
          required: true,
          message: 'The name cannot be empty',
          trigger: 'blur'
        }]
      },
      {
        name: 'range',
        type: 'slider',
        range: true,
        value: [10, 60],
        label: '范围'
      },
      {
        name: 'sex',
        type: 'i-select',
        value: '',
        label: '性别',
        children: {
          type: 'i-option',
          list: [{
            value: 'man',
            title: '男'
          }, {
            value: 'woman',
            title: '女'
          }]
        }
      },
      {
        name: 'education',
        type: 'radio-group',
        value: 1,
        label: '学历',
        children: {
          type: 'radio',
          list: [{
            label: 1,
            title: '本科'
          }, {
            label: 2,
            title: '研究生'
          }, {
            label: 3,
            title: '博士'
          }]
        }
      },
      {
        name: 'skill',
        type: 'checkbox-group',
        value: [],
        label: '技能',
        children: {
          type: 'checkbox',
          list: [{
            label: 1,
            title: 'Vue'
          }, {
            label: 2,
            title: 'Html'
          }, {
            label: 3,
            title: 'js'
          }]
        }
      },
      {
        name: 'inWork',
        type: 'i-switch',
        value: true,
        label: '在职'
      }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
    .form-wrapper {
        padding: 20px;
    }
</style>
