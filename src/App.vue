<script lang="ts">
import Header from "./components/templates/header/Header.vue"
import Banner from './components/banner/Banner.vue'
import Icons from './components/icons/Icons.vue'
import GridContent from './components/grid-content/GridContent.vue'
import SocialNetwork from './components/social/SocialNetwork.vue'
import FooterComponent from "./components/footer/FooterComponent.vue"

import { defineComponent } from "vue";
import { GlobalThemeOverrides, NConfigProvider } from 'naive-ui'


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
        Banner,
        Icons,
        GridContent,
        SocialNetwork,
        FooterComponent
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
        <Banner></Banner>
        <Icons></Icons>
        <GridContent></GridContent>
        <SocialNetwork/>
        <FooterComponent/>
    </n-message-provider>
   </n-config-provider>
</template>

