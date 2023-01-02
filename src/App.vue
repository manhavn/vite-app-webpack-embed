<script>
import { defineAsyncComponent, onMounted } from "vue";
import { logging, loggingTable } from "./logging";

export default {
  name: "MainApp",
  components: {
    HelloWorld: defineAsyncComponent(() =>
      import("./components/HelloWorld.vue")
    ),
  },
  setup() {
    onMounted(() => {
      logging("mounted");
      loggingTable(["mounted"]);
    });
    return {};
  },
};
</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello World!" />
  </main>
</template>
