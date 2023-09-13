<template>
    <div class="col-start-1 col-end-2 row-start-1 row-end-2 gap-[15px] flex flex-col flex-grow relative place-self-center">
        <img :id="`thumbnail-${index}`" @click="pick(index, item.path)"
            class="cursor-pointer w-full max-h-[52px] object-contain aspect-video" v-for="(item, index) in images"
            :key="index" :src="item.path" alt="">
        <div id="indicator" :style="style"
            class="absolute top-0 w-full aspect-video border max-h-[52px] scale-y-[1.22] scale-x-[1.13] shadow-lg">
        </div>
    </div>
</template>

<script setup>
const textColor = useState('text-color')
const currentIndex = useState('current-index')
const pickIndex = useState('pick-index')
pickIndex.value = 0

const style = computed(() => {
    return `border-color: ${textColor.value};`
})

function move(target) {
    gsap.to('#indicator', {
        y: target,
        ease: 'circ',
        duration: 0.5
    })
}

function pick(i) {
    // Set pick index
    pickIndex.value = i
    // 0 = 0
    // 1 = unit * 1
    // 2 = unit * 2
    // move
    const el = document.getElementById('thumbnail-' + i)
    const unit = el.offsetTop
    move(unit)
    // Set current index after transition
    currentIndex.value = i
}

const images = [
    { path: '/img/daniel-chung/1.png' },
    { path: '/img/daniel-chung/2.png' },
    { path: '/img/daniel-chung/3.png' },
    { path: '/img/daniel-chung/4.png' },
]


function handler(e) {
    const el = document.getElementById('thumbnail-' + pickIndex.value)
    gsap.set('#indicator', {
        y: el.offsetTop
    })
}

onMounted(() => {
    window.addEventListener('resize', handler)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handler)
})
</script>