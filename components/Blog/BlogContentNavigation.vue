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
      <NuxtLink v-if="!item.published" class="font-medium text-2xl" :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <NuxtLink v-else
        class="hover:underline leading-10 hover:text-black hover:dark:text-white transition-colors duration-200"
        :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <BlogContentNavigation class="p-4" v-if="item.children" :navigation-tree="item.children" />
    </li>
  </ul>
</template>
