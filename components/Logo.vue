<template>
    <div class="font-jost font-bold text-5xl flex flex-wrap h-[52px] absolute">
        <NuxtLink class="mr-5" to="/">JPOKAN</NuxtLink>
        <NuxtLink v-if="subtitle" :to="'/' + subtitle">
            <span class="inline-block text-zinc-200 dark:text-zinc-800 uppercase">{{ subtitle }}</span>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps(['subtitle'])

</script>