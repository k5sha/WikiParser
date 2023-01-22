<template>
    <div class="box-flex">
        <div v-for="(item, index) in data" :key="item.name">
            <Item :item="item" v-bind:class="{ right: index % 2 === 0, left: index % 2 !== 0 }" v-if="item.url" />
        </div>
    </div>
</template>

<script setup>

const { data } = await useFetch('/api/scrap')
</script>

<style scoped>
.box-flex {
    display: flex;
    flex-direction: column;
}

.right {
    float: right;
}

.left {
    float: left;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: black;
}
</style>