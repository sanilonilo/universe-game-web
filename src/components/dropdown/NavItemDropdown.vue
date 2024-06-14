<template>
    <n-dropdown size="small" class=" text-xs"  trigger="click"  :options="options" >
        <div 
        class="px-4 py-[14px] border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] hover:border-slate-900 border-[#00000000] hover:bg-[#e8e8e8] border-dashed cursor-pointer">
            <div class="py-[2px] border-[#00000000] border-b-[2px] hover:border-black ">
                <span class="text-[12px] cursor-pointer text-nowrap mt-2px" >
                    {{label}}
                </span>
            </div>
        </div>
    </n-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavItemDropdown',
    props: {
        label: String,
        options: Array
    },
    components:{
    },
})
</script>