<template>
    <div class="box-flex">
        <div v-for="(item, index) in data" :key="item.name">
            <!-- Use Vue Component ../components/Item.vue -->
            <Item :item="item" v-bind:class="{ right: index % 2 === 0, left: index % 2 !== 0 }" />
        </div>
    </div>
</template>

<script setup>

// Send GET request to the server
const { data } = await useFetch('/api/scrap')

//     countryJson

//     name: string,
//     url: url,
//     capital: string,
//     area: number,
//     population: number,
//     density: number,
//     flag: url,
//     emblem: url,
//     iso_3: string,
//     iso_2: string,
//     domain: string,
//     name_on_english: string,
//     original_name: string,

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