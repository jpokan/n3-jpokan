<template>
    <div id="screen"
        class="overflow-hidden col-start-2 col-end-6 row-start-1 row-end-2 place-self-center  w-full relative aspect-video">
        <div :id="'screen-' + index" class="absolute inset-0 grid place-items-center" v-for="(item, index) in images"
            :key="index">
            <img v-show="item.visible" class="aspect-video anim" :src="item.path">
        </div>
    </div>
</template>

<script setup>
const currentIndex = useState('current-index')
const pickIndex = useState('pick-index')
let last = 0

const images = ref([
    { path: '/img/daniel-chung/1.png', visible: true },
    { path: '/img/daniel-chung/2.png', visible: false },
    { path: '/img/daniel-chung/3.png', visible: false },
    { path: '/img/daniel-chung/4.png', visible: false },
])

watch(currentIndex, () => {
    // Set visible
    images.value[pickIndex.value].visible = true
    const direction = Math.sign(pickIndex.value - last);

    // Animate
    animate(direction)

    // Hide previous
    // images.value[last].visible = false
    // Update last index
    last = pickIndex.value
})

function animate(direction) {
    const t1 = gsap.timeline()

    const lastId = '#screen-' + last
    const pickId = '#screen-' + pickIndex.value

    t1.fromTo(lastId, {
        yPercent: 0,
        scale: 1,
        opacity: 1
    }, {
        yPercent: -direction * 100,
        scale: 0.5,
        opacity: 0,
        duration: 0.25
    })

    t1.fromTo(pickId, {
        yPercent: direction * 100,
        scale: 0.5,
        opacity: 0,
        ease: 'circ',
    }, {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        ease: 'circ',
        duration: 0.25
    })
}

function set() {
}

function handler(e) {
    set()
}

onMounted(() => {
    window.addEventListener('resize', handler)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handler)
})
</script>