<template>
    <div class="flex bg-slate-50">
        <button>
            <img class="max-w-[65px]" src="../../assets/logo-xbox.png" alt=""/>
        </button>
        <n-collapse  accordion arrow-placement="right">
            <div class="w-screen relative" >
                <div class="w-full top-0 left-0">
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