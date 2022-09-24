<template>
  <div class="">

    <div class="welcome">
      <h1>CHAT PRIVADO BY RZ CORPS</h1>
    </div>

    <div class="select-username">
      <form @submit.prevent="onSubmit">
        <input v-model="username" placeholder="Your username..." />
        <button :disabled="!isValid">Send</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "SelectUsername",
  data() {
    return {
      username: "",
    };
  },
  computed: {
    isValid() {
      return this.username.length > 2;
    },
  },
  methods: {
    onSubmit() {
      this.$emit("input", this.username);
    },
  },
};
</script>

<style scoped>

.welcome {
  text-align: center;
  margin-top: 5rem;
}

.select-username {
  width: 300px;
  margin: 200px auto 0;
}
</style>
