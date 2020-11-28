<template>
  <v-card>
    <v-img :src="userProp.avatar_url"></v-img>
    <v-card-title class="justify-center" v-if="userProp.name">Nome: {{ userProp.name }}</v-card-title>
    <v-card-title class="justify-center" v-if="userProp.login">Usuário: {{ userProp.login }}</v-card-title>
    <v-card-subtitle class="text-center" v-if="userProp.name">
      Criado em: {{ userProp.created_at | date }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",

  props: {
    userProp: Object,
  },
};
</script>