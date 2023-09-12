<template>
    <div class="jpk-theme p-[52px] min-h-screen font-satoshi relative">
        <Logo subtitle="blog" />
        <NavBar class="z-10 jpk-theme" />
        <div class="pt-[52px] mx-auto max-w-xl">
            <slot />
        </div>
    </div>
</template>