import { createApp } from "vue";
import { loggingInfo } from "./logging";
import App from "./App.vue";
import "./assets/main.scss";

const fbId = "fb-chat-instance";
if (!document.getElementById(fbId)) {
  const chatDiv = document.createElement("div");
  chatDiv.setAttribute("id", fbId);
  document.body.appendChild(chatDiv);

  loggingInfo(
    `document.body.appendChild(chatDiv): ${fbId}`,
    import.meta.url,
    import.meta.env,
    window.location.search
  );
  createApp(App).mount(chatDiv);
}
