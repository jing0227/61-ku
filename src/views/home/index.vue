<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <p>
      vue过滤器：
      <br />
      时间戳：{{ 1555179366 | timeFilter }}
      <br />
      手机格式化：{{ 16531959057 | formatPhone }}
      <br />
      千分位分隔符：{{ 5000039 | toThousands }}
    </p>
    <button @click="changeUserInfo('jerry')" class="green">
      test vuex: {{ getUserInfo }}
    </button>
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
