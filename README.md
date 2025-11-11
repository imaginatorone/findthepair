# Найди пару!

Простая игра на память с полем 4×4 с 8 парами.

**Демо:** https://imaginatorone.github.io/findthepair

---

- 4×4 доска по умолчанию
- Каждые 2 плитки - одна пара (в этом репозитории цвета + буквы, но можно заменить на изображения)
- Ходы: выбираются 2 плитки; пара - исчезает, разные - закрываются
- Конец игры - когда все пары найдены
- Стилизация Tailwind CSS
- Деплой на GitHub Pages
- Поддержка последних версий Chrome / Safari / Firefox (без сторонних полифиллов)

---

## Технологии
- **React + Vite**
- **Tailwind CSS**
- **gh-pages** (деплой)

---

## Быстрый старт (dev)
```bash
git clone https://github.com/imaginatorone/findthepair.git
cd findthepair
npm install
npm run dev
# и откройте адрес из консоли (обычно http://localhost:5173)
```

---

## Сборка
```bash
npm run build
npm run preview
```

---

## Деплой
В `vite.config.js` указан корректный base для предотвращения проблем с регистром (важен слеш в конце и точное имя репо):
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/findthepair/',
})
```

## Темизация и анимации

Тема переключается через класс `dark` на <html> (Tailwind darkMode: 'class').

Для заголовка задана увеличенная высота строки `leading-[1.15]` и `py-1`, чтобы не резались глифы.

## Заменить цвета на картинки (опционально)

В `Board.jsx` вместо массива цветов подставьте пути к изображениям и отрисовывайте `<img>` в `Tile.jsx`. Логика совпадений не меняется (сравнивается идентификатор пары).