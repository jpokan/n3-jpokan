<template>
    <NuxtLink :to="link">{{ text }}</NuxtLink>
</template>

<script setup>
defineProps(['link', 'text'])
</script>