<template>
    <header id="header">Header... ...</header>

    <div class="flexed-cols">

        <!-- FILTERS -->
        <aside class="filters">Filters...</aside>

        <!-- MAIN CONTENT -->
        <main>
            <div class="search-results">
                <CarCard />
            </div>
        </main>

    </div>
</template>

<style lang="scss">
body {
    margin: 0;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    background-color: #ffffff;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    margin-top: 10px;
    margin-bottom: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

header {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 90px;
    margin: 0 auto;
    background-color: bisque;
    box-shadow: 0px 7px 5px #0000001c;
    padding: 1rem;
    box-sizing: border-box;
}

.flexed-cols {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    grid-gap: 20px;
    gap: 20px;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #ffffff;

    aside.filters {
        position: fixed;
        left: 33%;
        bottom: 20px;
        z-index: 100;
        width: 33%;
        height: 50px;
        background-color: #db006e;
        color: white;
        text-align: center;
        box-shadow: 0px 7px 5px #0000001c;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 1rem;
    }

    main {
        width: 100%;
        margin-top: 95px;
        margin-bottom: 80px;

        .search-results {
            align-items: flex-start;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }
    }
}

@media only screen and (min-width: 375px) {

    .flexed-cols {
        max-width: 375px;
    }
}

@media only screen and (min-width: 768px) {

    header {
        position: relative;
        max-width: 768px;
    }

    .flexed-cols {
        max-width: 768px;

        main {
            width: 100%;
            margin-top: 0px;
            margin-bottom: 0px;
        }
    }
}

@media only screen and (min-width: 1024px) {

    header {
        max-width: 1024px;
        height: 100px;
    }

    .flexed-cols {
        max-width: 1024px;

        aside.filters {
            position: relative;
            top: 0;
            left: 0;
            width: calc(25% - 15px);
            text-align: left;
            margin-top: 12px;
            border-radius: 0rem;
        }

        main {
            width: calc(75% - 5px);
            margin-top: 0px;
            margin-bottom: 0px;
        }
    }
}

@media only screen and (min-width: 1440px) {

    header {
        max-width: 1440px;
    }

    .flexed-cols {
        max-width: 1440px;
    }
}
</style>
