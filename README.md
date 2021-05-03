# bases-next
Repositório contendo arquivos, plugins e demais coisas que considero importantes para um projeto `ReactJS` feito com `Next.js`.

**Obs.:** Para usar o eslint no terminal utilize `yarn eslint . --ext .js,.ts,.jsx,.tsx`

### Rocketseat "Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50"
Além de algumas regras de eslint que precisei adicionar.
```bash
yarn create next-app firstnext
del README.md
rmdir styles
del public\favicon.ico
del public\vercel.svg
rmdir pages\api

yarn add typescript @types/react @types/node -D

ren pages\_app.js _app.tsx
ren pages\index.js index.tsx

yarn dev

yarn add eslint -D
yarn eslint --init

del package-lock.json
yarn

yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
echo // > .eslintignore
echo // > prettier.config.js
echo // > .editorconfig

yarn add styled-components
yarn add @types/styled-components -D

echo // > babel.config.js
echo // > pages\_document.tsx

mkdir src
mkdir src\styles
echo // > src\styles\global.ts
echo // > src\styles\theme.ts
echo // > src\styles\styled.d.ts

yarn add next-images
echo // > next.config.js
mkdir src\assets
yarn add babel-plugin-inline-react-svg -D

mkdir src\styles\pages
echo // > src\styles\pages\Home.ts
```
### Alterações iniciais

#### eslintPluginImportHelpers
Adicionando eslint-plugin-import-helpers para organizar as importações.
```bash
yarn add eslint-plugin-import-helpers -D
```

#### Reactrotron
Adicionando Reactoton.
Isso deu um trabalho absurdo já que o Reactotron não funciona em SSR.
```bash
yarn add reactotron-react-js
mkdir src\config
echo // > src\config\ReactotronConfig.ts
```

#### Api Start
Iniciando as instruções de API.
```bash
mkdir src\utils
echo // > src\utils\interfaces.ts
echo // > src\utils\routes.ts

yarn add axios @vercel/node
mkdir src\pages\api

mkdir src\pages\api\users\
echo // > src\pages\api\users\index.ts
echo // > src\pages\api\users\create.ts
mkdir src\pages\api\users\[id]
echo // > src\pages\api\users\[id]\delete.ts
echo // > src\pages\api\users\[id]\index.ts
echo // > src\pages\api\users\[id]\update.ts
```

#### SWR - Code/Drops #38
Adicionando SWR e configurando conforme o Code/Drops #38.
```bash
mkdir src\hooks
echo // > src\hooks\useFetch.ts

yarn add swr
```

#### Castle
Mesclando com o back do Castle Monitor, aí posso usar alguns dados de forma mais úlil, além de ver funcionando realmente.
Lembrando que ainda não parei para definir um visual legal.
```bash

```
