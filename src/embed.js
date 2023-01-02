/* eslint-disable no-undef */
// noinspection JSFileReferences

import manifest from "../dist/manifest.json";

const id = "sdk.app.embed";
const mainElement = document.getElementById(id);
if (mainElement === null || !mainElement) {
  const getSrc = (mainJs) => {
    const script = document.querySelector(
      `script[src*="/assets/${process.env.SDK_EMBED_NAME}"]`
    );
    if (script && script.src) {
      return script.src.replace(process.env.SDK_EMBED_NAME, mainJs);
    } else {
      const scriptPath = document.querySelector(
        `script[src*="/${process.env.SDK_EMBED_NAME}"]`
      );
      return scriptPath && scriptPath.src
        ? scriptPath.src
            .replace(process.env.SDK_EMBED_NAME, mainJs)
            .replace(new URL(scriptPath.src).search, "")
        : `${process.env.SDK_HOST}/${mainJs}`;
    }
  };

  const scriptManifest = document.createElement("script");
  scriptManifest.id = id;
  scriptManifest.type = "module";
  scriptManifest.src = getSrc(manifest["src/main.js"].file);

  const regexMobileUserAgent =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Phone/i;
  if (regexMobileUserAgent.test(navigator.userAgent)) {
    setTimeout(function () {
      document.head.appendChild(scriptManifest);
    }, 1500);
  } else {
    document.head.appendChild(scriptManifest);
  }
}
