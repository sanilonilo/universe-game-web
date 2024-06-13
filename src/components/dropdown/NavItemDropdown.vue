<template>
    <n-dropdown size="small" class=" text-xs"  trigger="click"  :options="options" >
        <span class="hover:underline text-[12px] cursor-pointer text-nowrap" >
            {{label}}
        </span>
    </n-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavItemDropdown',
    props: {
        label: String,
        options: Array
    }
})
</script>