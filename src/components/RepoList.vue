<template>
  <v-list class="pt-0">
    <h2 class="mb-3">
      {{
        mode === "userRepos"
          ? "Repositórios do Usuário"
          : "Repositórios mais vistos pelo usuário"
      }}
    </h2>
    <template v-for="(repo, i) in repoList">
      <v-divider :key="i"></v-divider>
      <v-list-item :href="repo.html_url" :key="repo.id" target="_blank">
        <v-list-item-avatar v-if="mode === 'userStarredRepos'">
          <v-img :src="repo.owner.avatar_url"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="repo.full_name"></v-list-item-title>
          <v-list-item-subtitle>
            Criado em {{ repo.created_at | date }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <p class="ma-0">Issues: {{repo.open_issues_count}}</p>
        </v-list-item-action>
        <v-list-item-action>
          <p class="ma-0">Forks: {{repo.forks_count}}</p>
        </v-list-item-action>
      </v-list-item>
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