<template>
  <header id="header"></header>
  <main>
    <div class="search-results">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  </main>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

main {
  margin: 0 auto;
  width: 100%;
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

header {
  width: 100%;
  background-color: bisque;
  height: 200px;
}

.search-results {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
}
</style>
