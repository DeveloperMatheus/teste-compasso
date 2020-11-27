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
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import usersService from "@/services/users/index";

export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.getUserByUsername("developermatheus");
  },
  methods: {
    async getUserByUsername(username) {
      try {
        const { data } = await usersService.getUser(username);
        console.log(data);
        if (data) {
          this.user = data;
        }
      } catch (error) {
        // this.$showSnackbar(error.message);
        console.log("erro ao pegar da api")
      }
    },
  },
};
</script>
