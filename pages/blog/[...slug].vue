<template>
    <ContentDoc v-slot="{ doc }">
        <article
            class="prose prose-zinc dark:prose-invert prose-a:no-underline prose-a:font-black prose-headings:uppercase prose-headings:font-semibold prose-h1:font-bold">
            <h1 class="font-jost font-black uppercase text-5xl">{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
        </article>
    </ContentDoc>
</template>

<script setup>
import '~/assets/css/prism-forest-light.css'

definePageMeta({
    layout: "blog",
})
</script>

