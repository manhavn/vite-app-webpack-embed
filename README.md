# sdk.app.embed

### Config SDK_HOST

```dotenv
# .env
SDK_NAME=sdk.app.embed.dev
SDK_ENV=local
SDK_HOST=https://localhost:8080
SDK_EMBED_NAME=embed.js
```

```dotenv
# .env.production
# .env.staging
SDK_NAME=sdk.app.embed
SDK_ENV=production
SDK_HOST=https://localhost:4173
SDK_EMBED_NAME=embed.js
```

```shell
npm install && npm run prepare

npm run eb-dev # App Dev Local
npm run eb-preview # App Preview Build

npm run eb-build # Embed Build
SET_ENV_STAGING=true npm run eb-build # Embed Build [STAGING]
```

## DEBUG EMBED

```javascript
var script = document.createElement("script");
script.src = "https://localhost:8080/dist/embed.js";
document.head.appendChild(script);
```

## PREVIEW EMBED

```javascript
var script = document.createElement("script");
script.src = "https://localhost:4173/embed.js";
document.head.appendChild(script);
```
