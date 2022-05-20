<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/editor">Editor</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
