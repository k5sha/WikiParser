<template>

    <div class="item-block" v-if="item.name">
        <div>
            <div class="item hr">
                <div>
                    <div class="text-block no-hr">
                        <a :href="item.url">
                            <p>{{ item.name }}</p>
                        </a>
                        <img :src="item.flag" />
                    </div>
                </div>
                <div class="text-block">
                    <p>Столиця</p>
                    <p class="small">{{ item.capital }}</p>
                </div>
                <div class="text-block">
                    <p>Площа</p>
                    <p class="small">{{ item.area }} кв. м.</p>
                </div>
                <div class="text-block">
                    <p>Населення</p>
                    <p class="small">{{ item.population }}</p>
                </div>
                <div class="text-block">
                    <p>Густота</p>
                    <p class="small">{{ item.density }}/км²</p>
                </div>
                <div class="text-block">
                    <p>ISO3</p>
                    <p class="small">{{ item.iso_3 }}</p>
                </div>
            </div>
            <div class="item item-bottom">
                <div class="text-block">
                    <p>ISO2</p>
                    <p class="small">{{ item.iso_2 }}</p>
                </div>
                <div class="text-block">
                    <p>English</p>
                    <p class="small">{{ item.name_on_english }}</p>
                </div>

            </div>
        </div>
        <br />
        <div class="emblem">
            <img :src="item.emblem" />
        </div>
    </div>

</template>

<script setup>

// Get itemJson from Page
const { item } = defineProps(['item'])
</script>

<style scoped>
.item {
    padding: 10px 10px 32px 32px;
    margin: 20px 20px 20px 20px;
    display: flex;
    flex-direction: row;
}

.item-block {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3vh;
    background-color: white;
    border-radius: 8px;
    padding: 10px 10px 32px 32px;
    margin: 20px 20px 20px 20px;
    display: flex;
}

.text-block {
    margin-right: 32px;
}

.hr {
    border-bottom: 1px rgb(200, 200, 200) solid;
}

.item-bottom {
    flex-direction: row-reverse;
}

.small {
    font-size: 2vh;
}

a {
    text-decoration: none;
    color: black;
}
</style>