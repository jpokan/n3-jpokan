<template>
    <div class="text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 p-14 min-h-screen font-satoshi">
        <Logo subtitle="blog" />
        <NavBar class="z-10" />
        <div class="pt-14 mx-auto max-w-xl">
            <slot />
        </div>
        <Footer class="bottom-14 right-14 fixed" />
    </div>
</template>