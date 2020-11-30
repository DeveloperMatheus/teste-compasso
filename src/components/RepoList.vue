<template>
  <v-list class="pt-0">
    <h2 class="mb-3">
      {{
        mode === "userRepos"
          ? "Repositórios do Usuário"
          : "Repositórios mais vistos pelo usuário"
      }}
    </h2>
    <template v-for="repo in repoList">
      <v-card class="mt-3" :href="repo.html_url" :key="repo.id" target="_blank">
        <v-card-title class="justify-center">
          <v-avatar v-if="mode === 'userStarredRepos'">
            <img :src="repo.owner.avatar_url" alt="User Photo" />
          </v-avatar>
          <p class="ma-0 ml-3" v-text="repo.full_name"></p>
        </v-card-title>
        <v-card-subtitle class="mt-1 text-center">
          Criado em {{ repo.created_at | date }}
        </v-card-subtitle>

        <v-card-actions class="justify-space-between px-5">
          <p class="ma-0">Issues: {{ repo.open_issues_count }}</p>
          <p class="ma-0">Forks: {{ repo.forks_count }}</p>
        </v-card-actions>
      </v-card>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "RepoList",

  props: {
    mode: String,
    repoList: Array,
  },
};
</script>