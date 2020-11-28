<template>
  <v-container fluid>
    <h1>Pagina de detalhe do usuário</h1>
    <div class="text-center">
      <v-progress-circular
        color="primary"
        class="mx-auto"
        v-if="isLoading"
        indeterminate
        size="120"
      ></v-progress-circular>
    </div>

    <v-row v-if="user" justify="center">
      <v-col class="col-12 col-md-6 col-lg-3">
        <UserCard :userProp="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import userService from "@/services/users/index";
import UserCard from "@/components/UserCard.vue";

export default {
  name: "UserDetailPage",
  data() {
    return {
      isLoading: false,
      user: null,
    };
  },
  components: {
    UserCard,
  },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      this.isLoading = true;
      const { id } = this.$route.params;
      try {
        const { data } = await userService.getUser(id);
        console.log(data);
        this.user = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>