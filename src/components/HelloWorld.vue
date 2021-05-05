<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          TRENDING POST
        </div>
        <v-list-item-title class="headline mb-1">
          {{ userName }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ bio }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey">
        <span class="white--text headline">
          <img :src="profilePicture" alt="" />
        </span>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        v-on:click="changePicture"
        outlined
        rounded
        text>
        CHANGE PICTURE
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { SessionActions } from '@/store/actions/session';
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    userName: String,
    bio: String,
    profilePicture: String,
  },
  methods: {
    changePicture() {
      this.$store.dispatch(SessionActions.UPDATE_PROFILE_PICTURE);
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
