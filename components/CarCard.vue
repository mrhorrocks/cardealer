<template>
    <article class="car-card">
        <div class="image-container">
            <div class="listing-tag">
                <span>Used</span>
            </div>

            <img src="@/assets/img/placeholder.jpg" alt="Car">

            <div class="spec-tags">
                <span>32k miles</span>
                <span>Hybrid</span>
                <span>Manual</span>
                <span>SUV</span>
            </div>

        </div>

        <div class="car-details">
            <p>2014 (64) Mercede-Benz</p>
            <p>CLA 250e Coupe Shooting Break</p>
            <p>£550.90 /mo(PC)</p>
            <p>£23.300 <a href="#">Calculate</a></p>
        </div>

    </article>
</template>

<script>
export default {

}
</script>

<style scoped>
.car-card {
    box-shadow: 0px 6px 20px #00000040;
    display: flex;
    flex-direction: column;
    width: 333px;
    height: 364px;
    margin: 15px;
    border-radius: 1rem;
    overflow: hidden;
    background-color: pink;
}

.image-container {
    position: relative;
    & .listing-tag {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: red;

        & span {
            background-color: #3F3A50;
            font-size: 16px;
            padding: 1px 10px 1px 10px;
            margin: 0 5px 0 5px;
            border: 1px solid #fff;
            color: #fff;
            border-radius: 8px;
        }
    }

    & .spec-tags {
        position: absolute;
        bottom: 10px;
        left: 10px;
        background-color: red;

        & span {
            background-color: #3F3A50;
            font-size: 12px;
            padding: 1px 10px 1px 10px;
            margin: 0 5px 0 5px;
            border: 1px solid #fff;
            color: #fff;
            border-radius: 8px;
        }
    }
}

.car-details {
    padding: 0.5rem;
}

p {
    font-size: 1rem;
    margin: 0;
}
</style>