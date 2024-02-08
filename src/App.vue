<script lang="ts" setup></script>

<template>
  <div class="maintenance-mode">
    <div class="container">
      <img src="@/assets/images/logo.png" alt="Telapodium logo" />
      <h1>Az oldal fejlesztés alatt áll</h1>
      <p>Hamarosan elérhető lesz</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.maintenance-mode {
  width: 100%;
  height: 100vh;
  background-color: #262626;
  color: #c9ab8b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  img {
    max-width: 250px;

    @media (min-width: 600px) {
      max-width: 400px;
    }
  }

  h1 {
    font-family: $font-family-serif;
    font-size: 28px;
    font-weight: 700;
    margin: 20px 0 0;

    @media (min-width: 600px) {
      font-size: 50px;
    }
  }

  p {
    font-size: 14px;
    letter-spacing: 4px;
    line-height: 1.25;
    font-weight: 700;
    font-family: $font-family-normal;
    margin: 8px 0 0;
    text-transform: uppercase;

    @media (min-width: 600px) {
      font-size: 16px;
    }
  }
}
</style>
