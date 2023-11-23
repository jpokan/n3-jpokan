<template>
<pre :class="`language-${language}`"><code v-html="highlighted"></code></pre>
</template>

<script setup>
import Prism from 'prismjs'

const props = defineProps(['code', 'language', 'filename', 'highlights'])

const highlighted = props.language ? Prism.highlight(
	props.code,
	Prism.languages[props.language],
	props.language
) : props.code
</script>

