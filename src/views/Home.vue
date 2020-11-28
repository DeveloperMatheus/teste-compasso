<template>
  <div class="home">
    <div class="text-center">
      <v-img
        width="300"
        class="mx-auto mt-3"
        alt="Octocat logo"
        src="../assets/Octocat.png"
      />

      <div class="d-flex flex-column flex-md-row align-center justify-center">
        <h1>Teste Compasso UOL</h1>
        <v-img
          max-width="70"
          class="d-inline-block ml-md-3"
          alt="Octocat logo"
          src="../assets/uol_marca.png"
        />
      </div>
    </div>

    <section class="mt-5">
      <h2 class="text-center">Digite abaixo o username e clique em buscar</h2>
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="col-12 col-md-6 col-lg-3 col-xl-2">
            <v-text-field
              color="primary"
              v-model="username"
              label="Username"
              outlined
              hide-details="false"
            ></v-text-field>
          </v-col>
          <v-col class="col-12 col-lg-1">
            <v-btn
              large
              block
              color="primary"
              :disabled="username.length < 1"
              @click="getUserByUsername"
            >
              Buscar
            </v-btn>
          </v-col>
        </v-row>

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
          <v-col class="col-12 col-md-5 col-lg-3">
            <UserCard :user="this.user" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue";
import usersService from "@/services/users/index";

export default {
  name: "Home",
  data() {
    return {
      user: null,
      username: "",
      isLoading: false,
    };
  },
  components: {
    UserCard
  },
  methods: {
    async getUserByUsername() {
      this.isLoading = true;
      try {
        const { data } = await usersService.getUser(this.username);
        console.log(data);
        if (data) {
          this.user = data;
        }
      } catch (error) {
        // this.$showSnackbar(error.message);
        console.log("erro ao pegar da api");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
