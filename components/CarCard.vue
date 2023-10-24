<template>
    <article class="car-card">

        <!-- Listings -->
        <div class="listing-tag">
            <span>Used</span>
        </div>

        <!-- Images -->
        <div class="image-container">
            <img src="@/assets/img/placeholder.jpg" alt="Car">
            <img src="@/assets/img/placeholder.jpg" alt="Car">
            <img src="@/assets/img/placeholder.jpg" alt="Car">
            <img src="@/assets/img/placeholder.jpg" alt="Car">
            <img src="@/assets/img/placeholder.jpg" alt="Car">
            <img src="@/assets/img/placeholder.jpg" alt="Car">
        </div>

        <!-- Car Details -->
        <div class="car-details">

            <p><span>2014 (64) Mercede-Benz</span></p>

            <FavouriteStar class="favorite" />

            <p>CLA 250e Coupe Shooting Break</p>

            <div class="spec-tags">
                <span>32k miles</span>
                <span>Hybrid</span>
                <span>Manual</span>
                <span>SUV</span>
            </div>

            <div class="pricing">
                <p class="ppm"><span>£550.90</span> /mo(PC)</p>
                <p class="total-price">£23.300 <!-- a href="#">Calculate</a --></p>
            </div>

        </div>

    </article>
</template>

<style lang="scss" scoped>
.car-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 305px;
    margin-top: 0.5rem;
    border-radius: 0rem;
    overflow: hidden;
    background-color: #ffffff;
    .listing-tag {
        position: absolute;
        top: 96px;
        right: 35px;
        span {
            background-color: #3F3A50;
            font-size: 0.8rem;
            line-height: 27px;
            padding: 2px 10px;
            margin: 0 5px 0 5px;
            border: 1px solid rgb(255, 255, 255, 0.25);
            color: #ffffff;
            border-radius: 8px;
        }
    }
    .image-container {
        position: relative;
        width: -moz-max-content;
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        img {
            width: 113px;
            border-radius: 1rem;
            margin-right: 0.5rem;
        }
    }
    .car-details {
        position: relative;
        padding: 0.75rem 0.5rem 0.5rem 0.5rem;
        font-size: 0.75rem;
        p {
            margin: 0 0 0.25rem 0;
        }
        .favorite {
            position: absolute;
            top: 10px;
            right: 10px;
            height: 20px;
            width: 20px;
        }
        span {
            font-size: 1rem;
            font-weight: 600;
        }
        .spec-tags {
            margin-top: 1rem;
            width: 50%;
            float: left;
            span {
                display: inline-block;
                font-size: 12px;
                line-height: 13px;
                padding: 0px 5px 5px 0px;
                margin: 0 3px 3px 0px;
                color: #55595D;
                border-radius: 0px;
                border-right: 1px solid rgb(85, 89, 93, 0.25);
                &:last-child {
                    border: 0;
                }
            }
        }
        .pricing {
            margin-top: 1rem;
            width: 50%;
            float: right;
            text-align: right;
            .total-price a {
                color: #7572FF;
                margin-left: 5px;
            }
        }
    }
}

@media only screen and (min-width: 768px) {
    .car-card {
        max-width: 45%;
        border-radius: 1rem;
        margin: 12px;
        min-width: inherit;
        box-shadow: 0px 6px 20px #00000040;
        .listing-tag {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 100;
            span {
                background-color: #3F3A50;
                font-size: 1rem;
                line-height: 27px;
                padding: 2px 10px;
                margin: 0 5px 0 5px;
                border: 1px solid rgb(255, 255, 255, 0.25);
                color: #ffffff;
                border-radius: 8px;
            }
        }
        .image-container {
            position: relative;
            width: max-content;
            img {
                width: 257px;
                border-radius: 0;
            }
        }
        .car-details {
            .spec-tags {
                position: absolute;
                top: -33px;
                left: 0;
                width: 100%;
                margin: 0;
                span {
                    display: inline-block;
                    background-color: #3F3A50;
                    font-size: 0.625rem;
                    line-height: 18px;
                    padding: 2px 10px;
                    margin: 0 3px 3px 5px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    color: #ffffff;
                    border-radius: 8px;
                }
            }
            .pricing {
                margin-top: 1rem;
                width: 50%;
                float: left;
                text-align: left;
                .total-price a {
                    color: #7572FF;
                    margin-left: 5px;
                }
            }
        }
    }
}

@media only screen and (min-width: 1024px) {
    .car-card {
        max-width: 350px;
        .image-container {
            img {
                width: 350px;
            }
        }
    }
}

@media only screen and (min-width: 1280px) {
    .car-card {
        max-width: 290px;
        .image-container {
            img {
                width: 290px;
            }

        }
    }
}

@media only screen and (min-width: 1440px) {
    .car-card {
        max-width: 333px;
        .image-container {
            img {
                width: 333px;
            }
        }
    }
}
</style>