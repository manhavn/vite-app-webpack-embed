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

      (function (d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk-autoketing");

      const chatbox = document.getElementById("fb-customer-chat");
      chatbox.setAttribute("page_id", ".....");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function () {
        window.FB.init({
          appId: ".....",
          autoLogAppEvents: false,
          cookie: true,
          status: true,
          xfbml: true,
          version: "v15.0",
        });
      };
    });
    return {};
  },
};
</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello World!" />
    <!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </main>
</template>
