<template>
    <div @click="toggleFavorite">
        <i :class="['fa', { 'fa-star': isFavorite, 'fa-star-o': !isFavorite }]"></i>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isFavorite: false,
        };
    },
    methods: {
        toggleFavorite(e) {
            this.isFavorite = !this.isFavorite;
            e.preventDefault();
        },
    },
};
</script>
<style>
.fa {
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #7572FF;
    font-size: 1.3rem;
    cursor: pointer;
}

.fa-star-o:before {
    color: #000000;
}
</style>