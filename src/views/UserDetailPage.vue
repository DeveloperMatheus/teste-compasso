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

    <div v-if="!isLoading">
      <v-row v-if="user" justify="center">
        <v-col class="col-12 col-md-6 col-lg-3">
          <UserCard
            @user-repo-mode="getOptionFromUserCard"
            :userProp="user"
            :show-card-actions="true"
          />
        </v-col>
        <v-col class="col-12 col-md-6 col-lg-4 col-xl-3">
          <RepoList
            :mode="repoMode"
            v-if="repos.length > 0"
            :repoList="repos"
          />

          <h2 class="text-center" v-if="repoMode !== '' && repos.length === 0">
            Não encontramos nenhum repositório :(
          </h2>
        </v-col>
      </v-row>

      <v-row v-if="!user" justify="center">
        <v-col class="col-12 col-md-6 col-lg-3">
          <h2 class="text-center">Usuário não encontrado :(</h2>
        </v-col>
      </v-row>
    </div>
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
      repoMode: "",
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
    // this.getOptionFromUserCard("userRepos");
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
      this.repoMode = option;
      try {
        if (this.repoMode === "userRepos") {
          const { data } = await userService.getUserRepos(this.id);
          this.repos = data;
        } else {
          const { data } = await userService.getUserStarredRepos(this.id);
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