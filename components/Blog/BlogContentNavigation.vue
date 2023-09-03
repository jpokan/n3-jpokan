<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul>
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink v-if="item.published" :to="item._path" class="hover:dark:text-white hover:text-black">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
