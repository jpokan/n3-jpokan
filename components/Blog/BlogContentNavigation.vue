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
      <div v-if="item.title === 'Blog'">

      </div>

      <!-- <NuxtLink v-if="!item.published" class="text-5xl font-limelight text-zinc-600 dark:text-zinc-100 uppercase"
        :to="item._path">
        {{ item.title }}
      </NuxtLink> -->
      <NuxtLink class="hover:text-black hover:dark:text-white transition-colors duration-400" :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <BlogContentNavigation class="p-4" v-if="item.children" :navigation-tree="item.children" />
    </li>
  </ul>
</template>
