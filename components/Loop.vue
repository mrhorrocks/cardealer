<template>
    <article v-for="item in testData.data" :key="item.id">
        <img :src="item.media_urls[0].thumb" alt="Car Image" />
        <img :src="item.media_urls[1].thumb" alt="Car Image" />
        <img :src="item.media_urls[2].thumb" alt="Car Image" />
        <img :src="item.media_urls[3].thumb" alt="Car Image" @error="loadAlternateImage" />
    </article>
</template>

<script>
import testData from '~/assets/mock-data.json';
export default {
    data() {
        return {
            testData
        }
    },
    methods: {
        loadAlternateImage(event) {
            event.target.src = require('~/assets/img/alternate-image.png');
        },
    },
};
</script>