<template>
    <article v-for="item in carsData.data" :key="item.id" class="car-card">
        <a href="#">
            <!-- Listings -->
            <div class="listing-tag">
                <span>{{ item.advert_classification }}</span>
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

                <!-- Car Name -->
                <p class="car-name">{{ item.name }}</p>

                <FavouriteStar class="favorite" />

                <p>{{ item.derivative }}</p>

                <div class="spec-tags">
                    <span>{{ item.odometer_value }} miles</span>
                    <span>{{ item.fuel_type }}</span>
                    <span>{{ item.technical_data.transmission.value }}</span>
                    <span>{{ item.body_type }}</span>
                </div>

                <div class="pricing">
                    <p class="ppm"><span>£550.90</span> /mo(PC)</p>
                    <p class="total-price">£{{ item.price }} <button @click="calculateFinance"> Calculate finance</button> </p>
                </div>

            </div>
        </a>
    </article>
</template>

<script>
import carsData from '~/assets/mock-vehicle-search-response.json';
export default {
    data() {
        return {
            carsData
        };
    },
    methods: {
        calculateFinance(e) {
            e.preventDefault();
        },
    },
}
</script>

<style lang="scss" scoped>
.car-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 375px;
    margin-top: 0.5rem;
    border-radius: 0rem;
    overflow: hidden;
    background-color: #ffffff;

    a {
        text-decoration: none;
        color: initial;
    }

    .listing-tag {
        position: absolute;
        top: 100px;
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
            &.car-name {
                width: 270px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-weight: 500;
                font-size: 1rem;
            }
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
                font-size: 0.75rem;
                font-weight: 400;
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

            .total-price button {
                background-color: transparent;
                border: none;
                font-size: 0.75rem;
                color: #7572FF;
                padding: 0;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
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
            top: 13px;
            left: 5px;
            z-index: 100;

            span {
                background-color: #3F3A50;
                font-size: 1rem;
                line-height: 27px;
                padding: 5px 10px;
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
                width: 347px;
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
                    font-size: 0.725rem;
                    font-weight: 300;
                    line-height: 18px;
                    padding: 2px 10px;
                    margin: 0 3px 3px 5px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    color: #ffffff;
                    border-radius: 8px;
                }
            }

            .pricing {
                width: 60%;
                float: left;
                text-align: left;
                margin-top: 1rem;
                margin-bottom: 0.5rem;

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

@media only screen and (min-width: 1440px) {
    .car-card {
        max-width: 333px;

        .image-container {
            img {
                width: 333px;
            }
        }
    }
}</style>