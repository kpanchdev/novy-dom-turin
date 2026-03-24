Структура:
- index.html — сайт
- apartments-registry.js — список файлов квартир
- apartments/*.js — одна квартира = один файл
- assets/ — логотип, фото, видео

Как добавить новую квартиру:
1. Скопируй любой файл из папки apartments.
2. Поменяй id, listingType, whatsappUrl, cover и i18n.
3. Добавь путь к новому файлу в apartments-registry.js.

Как добавить фото и видео:
Пример:
cover: './assets/turin-via-foligno-70/cover.jpg',
gallery: [
  { type: 'image', src: './assets/turin-via-foligno-70/1.jpg', alt: 'Living room' },
  { type: 'image', src: './assets/turin-via-foligno-70/2.jpg', alt: 'Bedroom' },
  { type: 'video', src: './assets/turin-via-foligno-70/video-1.mp4', poster: './assets/turin-via-foligno-70/cover.jpg', alt: 'Video tour' }
]

Языки:
- Интерфейс сайта и карточки работают для ru / uk / it.
- Для новой квартиры заполняй i18n.ru, i18n.uk и i18n.it.
- Если в каком-то языке поля нет, сайт возьмёт fallback из ru.
