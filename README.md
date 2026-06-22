# Vue3 Admin · 动态表单后台管理

A Vue 3 + TypeScript admin dashboard driven by **config-based dynamic forms & tables**. Pages are assembled from JSON-like configs through a small in-house UI layer (`src/base-ui`), so common CRUD screens are generated instead of hand-written.

> Vue3 + TypeScript 动态表单 / 表格后台管理系统：通过配置生成页面，减少重复 CRUD 代码。

## Features

- 🔐 Login with account validation (`views/login`)
- 📊 Analysis — dashboard & overview (`router/main/analysis`)
- 🛒 Product management — goods (`router/main/product`)
- ⚙️ System management — user / role / menu / department (`router/main/system`)
- 🧩 Config-driven `base-ui` form, table & breadcrumb components (`src/base-ui`)
- 🔒 Permission-based routing & dynamic menus

## Tech Stack

- Vue 3 + TypeScript
- [Element Plus](https://element-plus.org/)
- Vuex 4 · Vue Router 4
- Vue CLI · ESLint + Prettier + Husky + commitlint

## Setup

```bash
yarn install

yarn serve     # dev server
yarn build     # production build
yarn lint
```
