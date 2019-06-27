<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <p @click="changeUserInfo('jerry')" class="green">
      test vuex: {{ getUserInfo }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, mapActions } from "vuex";
// import { getUserInfo } from "@/api/common";

export default {
  name: "home",
  mounted() {
    this.getRank();
  },
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters("user", ["getUserInfo"])
  },
  methods: {
    ...mapActions("user", ["changeUserInfo", "getRank"])
  }
};
</script>
