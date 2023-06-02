<script setup lang="ts">
// @ts-nocheck
  import { reactive, shallowRef, computed, onMounted } from 'vue'
  import { javascript } from '@codemirror/lang-javascript'
  import { html } from '@codemirror/lang-html'
  import { json } from '@codemirror/lang-json'
  import { markdown } from '@codemirror/lang-markdown'
  import { oneDark } from '@codemirror/theme-one-dark'
  import { Codemirror } from 'vue-codemirror'

  const themes: any = { oneDark }
  const languages: any = {
    javascript: javascript(),
    html: html(),
    json: json(),
    markdown: markdown()
  }
  function writeCode(code) {
    console.log('writeCode:', code)
    import.meta.hot.send('viteblitz:demo:write', {'code':code})
  }

  const consoleLog = console.log
  const code = shallowRef(`console.log('Hello World')`)
  const view = shallowRef()
  const config = reactive({
    disabled: false,
    indentWithTab: true,
    tabSize: 4,
    autofocus: true,
    placeholder: 'input...',
    language: 'javascript',
    theme: 'one-dark',// 'default',
    phrases: 'en-us'
  })

  const handleReady = (payload: any) => {
    console.log('handleReady payload:', payload)
  }

  const extensions = computed(() => {
    const result = []
    result.push(languages[config.language])
    if (themes[config.theme]) {
      result.push(themes[config.theme])
    }
    return result
  })

  onMounted(() => {
    console.log('mounted view:', view)
  })

</script>

<template>
      <codemirror
        class="codemirror"
        ref="cm"
        :autofocus="config.autofocus"
        :placeholder="config.placeholder"
        :indentWithTab="config.indentWithTab"
        :tabSize="config.tabSize"
        :disabled="config.disabled"
        :style="{
          height: '100%',
          backgroundColor: '#fff',
          color: '#333'
        }"
        :extensions="extensions"
        v-model="code"
        @ready="handleReady"
        @change="writeCode($event)"
        @focus="consoleLog('focus', $event)"
        @blur="consoleLog('blur', $event)"
      />
</template>

<style scoped>
  .codemirror {
    height: 100%;
    width: 100%;
  }
</style>