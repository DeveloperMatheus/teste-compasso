<template>
  <v-card>
    <v-img :src="user.avatar_url"></v-img>
    <v-card-title v-if="user.name">Nome: {{ user.name }}</v-card-title>
    <v-card-title v-if="user.login">User: {{ user.login }}</v-card-title>
    <v-card-subtitle v-if="user.name">
      Criado em: {{ user.created_at }}
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