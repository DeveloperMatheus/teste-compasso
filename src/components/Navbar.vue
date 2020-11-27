<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      Teste Compasso
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