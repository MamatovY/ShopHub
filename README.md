
  # ShopHub

  ShopHub — фронтенд интернет-магазина на React + Vite с адаптивной версткой (мобильная и desktop версии), каталогом товаров, корзиной, оформлением заказа и экраном аккаунта.

  ## Стек

  - React 18
  - React Router 7 (`createBrowserRouter`)
  - Vite 6
  - Tailwind CSS 4
  - Набор UI-компонентов на базе Radix UI
  - Иконки: `lucide-react`

  ## Быстрый старт

  ### Требования

  - Node.js 18+
  - npm 9+

  ### Установка и запуск

  ```bash
  npm install
  npm run dev
  ```

  Приложение поднимется на локальном адресе Vite (обычно `http://localhost:5173`).

  ### Сборка

  ```bash
  npm run build
  ```

  ## Скрипты

  - `npm run dev` — запуск dev-сервера
  - `npm run build` — production-сборка

  ## Структура проекта

  ```text
  src/
    main.tsx                  # Точка входа
    app/
      App.tsx                 # Подключение RouterProvider
      routes.tsx              # Все маршруты приложения
      components/             # Layout, Header, Footer, MobileNav, ProductCard и UI
      data/
        products.ts           # Моковые товары и категории
      pages/                  # Экранные страницы (Home, Catalog, Cart, Checkout и др.)
      utils/
        unsplash.ts           # Вспомогательная работа с изображениями
    styles/
      index.css               # Подключение fonts/tailwind/theme
  ```

  ## Маршруты

  Маршруты настроены в `src/app/routes.tsx`:

  - `/` — главная
  - `/catalog` — каталог
  - `/product/:id` — карточка товара
  - `/cart` — корзина
  - `/checkout` — оформление заказа
  - `/orders` — заказы
  - `/wishlist` — избранное
  - `/account` — аккаунт
  - `/address` — адреса
  - `/add-address` — добавление адреса
  - `/payment` — способы оплаты
  - `/add-card` — добавление карты
  - `/profile` — профиль
  - `/search` — поиск
  - `*` — 404 (NotFound)

  ## Архитектура UI

  - Общая оболочка страницы в `Layout`: `Header` + контент + `Footer` + `MobileNav`.
  - В desktop-режиме отображаются верхнее меню и футер.
  - В mobile-режиме используется компактный заголовок, выпадающее меню и нижняя навигация.

  ## Данные

  Сейчас проект использует локальные моковые данные из `src/app/data/products.ts`:

  - `Product` — тип товара
  - `products` — список товаров
  - `categories` — список категорий

  ## Настройки сборки

  - Алиас `@` указывает на `src` (см. `vite.config.ts`).
  - Подключены плагины `@vitejs/plugin-react` и `@tailwindcss/vite`.

  ## Дизайн-источник

  Исходный макет: https://www.figma.com/design/puorXIQYWTYDHvVViqLtp4/%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%83%D1%8E-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8E
  