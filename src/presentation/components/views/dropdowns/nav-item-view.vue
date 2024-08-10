<template>
    <n-dropdown v-if="options" size="small" class=" text-xs"  trigger="click"  :options="options" >
        <div 
        class="px-2 py-[14px] border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] hover:border-slate-900 border-[#00000000] hover:bg-[#e8e8e8] border-dashed cursor-pointer">
            <div class="flex gap-x-2 items-center py-[2px] border-[#00000000] border-b-[2px] hover:border-black ">
                <span class="text-[12px] cursor-pointer text-nowrap mt-2px" >
                    {{label}}
                </span>
                <FontAwesomeIcon :icon="faAngleDown" class="text-[11px] text-slate-700"/>
            </div>
        </div>
    </n-dropdown>
    <div v-if="!options"
        class="px-4 py-[14px] border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] hover:border-slate-900 border-[#00000000] hover:bg-[#e8e8e8] border-dashed cursor-pointer">
            <div class="flex gap-x-2 items-center py-[2px] border-[#00000000] border-b-[2px] hover:border-black ">
                <span class="text-[12px] cursor-pointer text-nowrap mt-2px" >
                    {{label}}
                </span>
            </div>
        </div>
</template>

<script lang="ts">
import {NavItemController} from '../../controllers/dropdowns/nav-item-controller'
export default NavItemController
</script>