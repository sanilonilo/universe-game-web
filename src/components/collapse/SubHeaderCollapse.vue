<template>
    <div class="flex">
        <img class="max-w-[50px] h-[15px]" src="../../assets/logo-xbox.png" alt=""/>
        <n-collapse  accordion arrow-placement="right">
            <div class="w-screen relative" >
                <div class="absolute top-0 left-0">
                    <n-collapse-item v class="absolute top-0 left-0"  name="1">
                        <div class="bg-red-700">nice</div>
                    </n-collapse-item>
                </div>
            </div>
        </n-collapse>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SubHeaderCollapse"
})
</script>