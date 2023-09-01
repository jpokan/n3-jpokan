<template>
  <div class="fixed right-0 mx-5 bottom-1/2 transform translate-y-1/2">
    <div class="grid items-center h-full">
      <div class="navbar-wrapper">
        <NuxtLink class="navbar-links font-medium" to="/" title="Home"
          >JP</NuxtLink
        >
        <NuxtLink class="navbar-links" to="/blog" title="Blog">
          <IconsBook class="fill-current w-5 h-5" />
        </NuxtLink>
        <NuxtLink class="navbar-links" to="/lab" title="Lab">
          <IconsLabs class="fill-current w-5 h-5" />
        </NuxtLink>
        <ColorModeSwitcher
          class="navbar-links fill-current w-5 h-5"
          title="Toggle Color Scheme"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.navbar-links {
  @apply hover:text-black dark:hover:text-white transition-colors duration-200;
}

.navbar-wrapper {
  @apply flex flex-col text-center dark:bg-black bg-white p-2 gap-5 dark:border-zinc-800 border-zinc-200 border rounded-lg shadow-lg md:shadow-none md:border-none;
}
</style>
