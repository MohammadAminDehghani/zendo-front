<template>
    <div>
      <Header />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  export default {
    components: { Header, Footer },
  };
  </script>
  