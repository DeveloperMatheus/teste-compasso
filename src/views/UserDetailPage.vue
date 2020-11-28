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

    <v-row v-if="user && !isLoading" justify="space-around">
      <v-col class="col-12 col-md-6 col-lg-3">
        <UserCard
          @user-repo-mode="getOptionFromUserCard"
          :userProp="user"
          :show-card-actions="true"
        />
      </v-col>
      <v-col class="col-12 col-md-6">
        <RepoList mode="userRepos" v-if="repos.length" :repoList="repos" />
      </v-col>
    </v-row>

    <v-row v-if="!user && !isLoading" justify="center">
      <v-col class="col-12 col-md-6 col-lg-3">
        <h2 class="text-center">Usuário não encontrado :(</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import userService from "@/services/users/index";
import UserCard from "@/components/UserCard.vue";
import RepoList from "@/components/RepoList.vue";

export default {
  name: "UserDetailPage",
  data() {
    return {
      isLoading: false,
      user: null,
      id: "",
      repos: [],
    };
  },
  components: {
    UserCard,
    RepoList,
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      this.isLoading = true;
      try {
        const { data } = await userService.getUser(this.id);
        this.user = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getOptionFromUserCard(option) {
      this.isLoading = true;
      console.log(option);
      try {
        if (option === "userRepos") {
         const { data } = await userService.getUserRepos(this.id);
         this.repos = data;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>