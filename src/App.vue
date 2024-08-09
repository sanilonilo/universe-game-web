<script lang="ts">
import { defineComponent } from "vue";
import { GlobalThemeOverrides, NConfigProvider } from 'naive-ui'
import HomeView from './presentation/screens/views/home-view.vue'

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
  }

export default defineComponent({
    name: 'App',
    components: {
      HomeView
    },
    data() {
        return {themeOverrides}
    }
})
</script>

<template>
   <n-config-provider :theme-overrides="themeOverrides"> 
    <n-message-provider>
        <HomeView/>
    </n-message-provider>
   </n-config-provider>
</template>

