<template>
    <n-dropdown :show="showDropdown" :options="options" @select="handleSelect">
        <span class="hover:underline text-[13px] cursor-pointer" @click="handleClick">
            {{title}}
        </span>
    </n-dropdown>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'NavItemDropdown',
    props: {
        title: String,
    },
    setup(){
        const message = useMessage()
        const showDropdownRef = ref(false)
        return {
            options: [
                {
                    label: "da Argentina",
                    value: "da Argentina"
                }
            ],
            showDropdown: showDropdownRef,
            handleSelect (key: string | number) {
            message.info(String(key))
            },
            handleClick () {
            showDropdownRef.value = !showDropdownRef.value
            }
        }
    }
})
</script>