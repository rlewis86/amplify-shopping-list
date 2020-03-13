<template>
  <amplify-authenticator></amplify-authenticator>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
export default {
  mounted() {
    AmplifyEventBus.$on("authState", eventInfo => {
      if (eventInfo === "signedIn") {
        this.$router.push({ name: "ShoppingList" });
      } else if (eventInfo === "signedOut") {
        this.$router.push({ name: "Auth" });
      }
    });
  }
};
</script>
