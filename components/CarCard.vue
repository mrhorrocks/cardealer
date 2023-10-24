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
            <p><span>2014 (64) Mercede-Benz</span></p>
            <FavouriteStar class="favorite" />
            <p>CLA 250e Coupe Shooting Break</p>
            <div class="pricing">
                <p class="ppm"><span>£550.90</span> /mo(PC)</p>
                <p class="total-price">£23.300 <a href="#">Calculate</a></p>
            </div>
        </div>

    </article>
</template>

<script>
export default {

}
</script>

<style scoped>
.car-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 12px;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0px 6px 20px #00000040;
}

@media only screen and (min-width: 640px) {
    .car-card {
        max-width: 288px;
    }
}
@media only screen and (min-width: 768px) {
    .car-card {
        max-width: 45%;
    }
}

@media only screen and (min-width: 1024px) {
    .car-card {
        max-width: 350px;
    }
}

@media only screen and (min-width: 1280px) {
    .car-card {
        max-width: 290px;
    }
}

@media only screen and (min-width: 1440px) {
    .car-card {
        max-width: 333px;
    }
}

.image-container {
    position: relative;

    & img {
        width: 100%;
    }

    & .listing-tag {
        position: absolute;
        top: 10px;
        left: 10px;

        & span {
            background-color: #3F3A50;
            font-size: 16px;
            line-height: 27px;
            padding: 2px 10px;
            margin: 0 5px 0 5px;
            border: 1px solid rgb(255, 255, 255, 0.25);
            /* #FFFFFF30 */
            color: #ffffff;
            border-radius: 8px;
        }
    }
}


.spec-tags {
    position: absolute;
    bottom: 10px;
    left: 10px;

    & span {
        display: inline-block;
        background-color: #3F3A50;
        font-size: 12px;
        line-height: 18px;
        padding: 2px 10px;
        margin: 0 3px 3px 5px;
        border: 1px solid rgb(255, 255, 255, 0.25);
        /* #FFFFFF30 */
        color: #ffffff;
        border-radius: 8px;
    }
}

.car-details {
    position: relative;
    padding: 0.75rem 0.5rem 0.5rem 0.5rem;
    font-size: 0.75rem;

    & span {
        font-size: 1rem;
        font-weight: 600;
    }

    & .favorite {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 20px;
        width: 20px;
        /* background-color: red; */
    }

    .pricing {
        margin-top: 1rem;

        & .total-price a {
            color: #7572FF;
            margin-left: 5px;
        }
    }
}

p {
    margin: 0 0 0.25rem 0;
}</style>