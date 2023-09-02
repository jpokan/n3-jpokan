<template>
    <component :is="props.component" class="fill-current w-5 h-5"></component>
</template>

<script setup>
const props = defineProps(['component'])
</script>