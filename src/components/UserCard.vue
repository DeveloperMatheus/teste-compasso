<template>
  <v-card>
    <router-link class="text-decoration-none" :to="{ name: 'UserDetail', params: { id: userProp.login } }">
      <v-img :src="userProp.avatar_url"></v-img>
      <v-card-title class="justify-center black--text" v-if="userProp.name">
        Nome: {{ userProp.name }}
      </v-card-title>
      <v-card-title class="justify-center black--text" v-if="userProp.login">
        Usuário: {{ userProp.login }}
      </v-card-title>
      <v-card-subtitle class="text-center black--text" v-if="userProp.name">
        Criado em: {{ userProp.created_at | date }}
      </v-card-subtitle>
    </router-link>

    <v-card-actions v-if="showCardActions" class="primary pa-0">
      <v-container fluid>
        <v-row>
          <v-col class="col-12 col-md-6 py-0">
            <v-btn block large color="success">Ver Repos</v-btn>
          </v-col>
          <v-col class="col-12 col-md-6 py-0">
            <v-btn block large color="orange" class="white--text">
              Ver Starred Repos
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",

  props: {
    userProp: Object,

    showCardActions: {
      type: Boolean,
      default: false,
    },
  },
};
</script>