<template>
  <div class="">

    <div class="welcome">
      <h1>Only Us 
      <img class="welcome-logo" src="https://www.svgrepo.com/show/179277/chat-communication.svg" width="45px" height="30px"> </h1>
    </div>

    <div class="select-username">
      <form @submit.prevent="onSubmit">
        <input v-model="username" placeholder="Seu nome no chat" />
        <button :disabled="!isValid">Escolher nome</button>
      </form>
    </div>

    <div class="footer">
      <span>made by Raziel Rodrigues</span>
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
  margin-bottom: 5rem;
}

.welcome-logo {
  text-align: center;
  margin-top: 4.5rem;
  margin-bottom: 5rem;
}

.select-username {
  display: flex;
}

.select-username form {
  margin: auto;
  border:  #232323 2px solid;
}

.select-username button {
  border:  #232323 2px solid;
}

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #232323;
   color: white;
   text-align: center;
   padding: 10px;
}
</style>
