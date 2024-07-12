<script lang="ts">
import Header from "./components/templates/header/Header.vue"
import { defineComponent } from "vue";
import { GlobalThemeOverrides, NConfigProvider } from 'naive-ui'
//import SubHeaderCollapse from './components/collapse/SubHeaderCollapse.vue'


  /**
   * Use this for type hints under js file
   * @type import('naive-ui').GlobalThemeOverrides
   */
  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#000'
    },
    Input: {
        borderFocus: '#0067b8',
        borderHover: '#0067b8',
        borderRadius: 'none',
        clearColorHover: true
        
    },
    // ...
  }

export default defineComponent({
    name: 'App',
    components: {
        Header,
        //SubHeaderCollapse
    },
    data() {
        return {themeOverrides}
    }
})
</script>

<template>
   <n-config-provider :theme-overrides="themeOverrides"> 
    <n-message-provider>
        <Header></Header>
        <!-- <SubHeaderCollapse class="block md:hidden"/> -->
    </n-message-provider>
   </n-config-provider>
</template>

