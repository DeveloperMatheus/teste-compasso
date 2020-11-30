<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      Compasso UOL
      <v-img
        max-width="40"
        class="d-inline-block ml-md-3"
        alt="Octocat logo"
        src="../assets/logo-uol-navbar.png"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/levisfront/api-github-interview"
      target="_blank"
      text
    >
      <span class="mr-2">Ir para tarefa</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>