<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/events">Events</router-link>
        <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
        <button v-else @click="logout">Logout</button>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
  import { computed } from 'vue';
//   import { useStore } from 'vuex';
  import { useStore } from 'vuex/types/index.js';
  
  export default {
    setup() {
      const store = useStore();
      const isAuthenticated = computed(() => store.state.isAuthenticated);
  
      const logout = () => {
        store.dispatch('logout');
      };
  
      return { isAuthenticated, logout };
    },
  };
  </script>
  