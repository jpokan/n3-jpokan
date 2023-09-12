<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="font-semibold uppercase text-xs">
    <li v-for="(item, index) in navigationTree" :key="index" class="pb-5">
      <NuxtLink v-if="item.published" :to="item._path" class="jpk-link">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
