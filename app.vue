<template>
  <div class="search-results">
    <CarCard />
    <CarCard />
    <CarCard />
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* 
sm: '640px',
md: '768px',
lg: '1024px',
xl: '1280px', 
*/

@media only screen and (min-width: 640px) {
  body {
    background-color: red;
  }
}

@media only screen and (min-width: 798px) {
  body {
    background-color: yellow;
  }
}

@media only screen and (min-width: 1024px) {
  body {
    background-color: pink;
  }
}

@media only screen and (min-width: 1280px) {
  body {
    background-color: green;
  }
}

.search-results {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
}
</style>
