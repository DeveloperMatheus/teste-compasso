<template>
  <v-card>
    <v-img :src="user.avatar_url"></v-img>
    <v-card-title class="justify-center" v-if="user.name">Nome: {{ user.name }}</v-card-title>
    <v-card-title class="justify-center" v-if="user.login">Usuário: {{ user.login }}</v-card-title>
    <v-card-subtitle class="text-center" v-if="user.name">
      Criado em: {{ user.created_at | date }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",

  props: {
    user: Object,
  },
};
</script>