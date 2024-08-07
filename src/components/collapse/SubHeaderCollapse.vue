<template>
    <div class="flex flex-col relative bg-slate-50 border-t border-slate-200">
        <div class="flex items-center gap-x-3 py-3 px-5">
            <button @click="showItemsCollapse = !showItemsCollapse" class="cursor-pointer">
                <img class="max-w-[65px]" src="../../assets/logo-xbox.png" alt="" />
            </button>
            <FontAwesomeIcon @click="showItemsCollapse = !showItemsCollapse" v-if="!showItemsCollapse" :icon="faAngleDown" class="text-[16px] cursor-pointer text-slate-700"/>
            <FontAwesomeIcon  @click="showItemsCollapse = !showItemsCollapse" v-if="showItemsCollapse" :icon="faAngleUp" class="text-[16px] cursor-pointer text-slate-700"/>
        </div>
        <div v-if="showItemsCollapse" class="w-full absolute top-[44px] bg-slate-50 z-[99999]">
            <n-collapse v-for="item in moreOptions2" accordion arrow-placement="right" >
                <n-collapse-item v-if="(item.children as []).length > 0" :title="item.label"  class=" p-3 border-t border-b border-slate-200" name="1">
                    <n-collapse v-for="item_level_2 in item.children" accordion arrow-placement="right" >
                        <n-collapse-item v-if="(item_level_2?.children as [])?.length > 0" :title="item_level_2.label"  class=" p-3 border-t border-b border-slate-200" name="1">
                            <n-collapse v-for="item_level_3 in item_level_2.children" accordion arrow-placement="right" >
                                <div class="border-t border-slate-200 p-3">{{ item_level_3.label }}</div>
                            </n-collapse>
                        </n-collapse-item>
                        <div v-if="!((item_level_2?.children as [])?.length > 0)" class="border-t border-slate-200 p-3">{{ item_level_2.label }}</div>
                    </n-collapse>
                </n-collapse-item>
                <div v-if="!((item.children as []).length > 0)" class="border-t border-slate-200 p-3">{{ item.label }}</div>
            </n-collapse>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { moreOptions2 } from './domain/domain';

export default defineComponent({
    name: "SubHeaderCollapse",
    components:{
        FontAwesomeIcon
    },
    data(){
        return {
            faAngleUp,
            faAngleDown,
            showItemsCollapse: false,
            moreOptions2
        }
    }
})
</script>