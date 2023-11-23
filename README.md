# Табло - Аэропорт Кольцово

Стек
---
- Vue 3 - [Документация](https://vuejs.org/guide/introduction.html)
- Vue Router - [Документация](https://router.vuejs.org/guide/)
- Vuetify - [Документация](https://vuetifyjs.com/en/introduction/why-vuetify/#what-is-vuetify3f)
#### Dev
- Vite - [Документация](https://vitejs.dev/guide/)
- ESLint - [Документация](https://eslint.org/docs/latest/)

Так же: scss, css-modules

---

## Действия перед запуском

```sh
nvm use #либо установите версию nodejs из .nvmrc
npm install
```

### Запуск в режиме разработки

```sh
npm run dev
```

### Сборка

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Pre-commit хуки
- проверка eslint
- проверка commitlint по правилам [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), [commitlint config](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

---
Просьба указывать ref задачи в коммите:
```text
feat: feature 

ref: #task_number
```

