<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Vue, Vuex and Typescript</v-toolbar-title>


      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">LATEST RELEASES</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld :userName="userName" :bio="bio" :profilePicture="profilePicture" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';



export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  computed: {
    /** using session state */
      // userName: {
        //   get(): string {
          //     return this.$store.state.session.userName;
      //   }
      // },

      /** using getters */
      userName: {
        get(): string {
          return this.$store.getters.getUserName;
        }
      },

      bio: {
        get(): string {
          return this.$store.getters.getBio;
        }
      },

      profilePicture: {
        get(): string {
          return this.$store.getters.getProfilePicture;
        }
      },
  },

  mounted() {
    console.log({ store: this.$store });
  },

  data: () => ({
    //
  }),
});
</script>
