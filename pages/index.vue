<template>
  <div class="container">
    <div>
      <svg-icon class="pulsar-icon" name="comet" />
      <h1 class="title">
        Coming soon.
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: $bg;
  }

  .title {
    animation: 1s appear;
    display: block;
    font-weight: 400;
    font-size: 6em;
    letter-spacing: 1px;
    color: $fg;
  }

  .links {
    padding-top: 15px;
  }

  .pulsar-icon {
    animation: 1s appear;
    margin: auto;
    fill: $fg;
    transition: fill .7s ease-out;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
