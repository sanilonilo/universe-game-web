<template>
    <div v-if="isMenuMode" class="block flex-col absolute left-0 w-[100%] z-[9999999]">
        <n-collapse v-for="item in options" accordion arrow-placement="right">
            <n-collapse-item v-if="(item.children as []).length > 0" :title="item.label"
                class="p-3 border-t border-b border-slate-200 bg-slate-50 hover:border-slate-800 hover:border-dashed cursor-pointer"
                name="1">
                <n-collapse v-for="item_level_2 in item.children" accordion arrow-placement="right">
                    <n-collapse-item v-if="(item_level_2?.children as [])?.length > 0" :title="item_level_2.label"
                        class="p-3 border-t border-b border-slate-200" name="1">
                        <n-collapse v-for="item_level_3 in item_level_2.children" accordion arrow-placement="right">
                            <div class="border-t border-slate-200 p-3">{{ item_level_3.label }}</div>
                        </n-collapse>
                    </n-collapse-item>
                    <div v-if="!((item_level_2?.children as [])?.length > 0)"
                        class="border-t border-slate-200 p-3 bg-slate-50">{{ item_level_2.label }}</div>
                </n-collapse>
            </n-collapse-item>
            <div v-if="!((item.children as []).length > 0)" class="border-t border-slate-200 p-3 bg-slate-50">{{
                item.label }}</div>
        </n-collapse>
    </div>
</template>

<script lang="ts">
import { MenuNavController } from '../../controllers/panels/menu-nav-controller'
export default MenuNavController
</script>