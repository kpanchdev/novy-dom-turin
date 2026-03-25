window.registerApartment({
  id: 'turin-pozzo-strada',
  listingType: 'rent',
  whatsappUrl: 'https://wa.me/393476921026',
  cover: './assets/turin-pozzo-strada/cover.jpg',
  gallery: [
      { type: 'image', src: './assets/turin-pozzo-strada/cover.jpg', alt: 'photo' },
      {
          type: 'video',
          src: './assets/turin-pozzo-strada/video.mp4',
          poster: './assets/turin-pozzo-strada/cover.jpg',
          alt: 'video'
      }
  ],
  i18n: {
    ru: {
      title: 'Метро Pozzo Strada',
      price: '800 € в месяц + коммунальные',
      address: 'Pozzo Strada, Torino',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pozzo+Strada,+Torino',
      description: 'Сдается квартира рядом с метро Pozzo Strada, недавно сделан полный ремонт. Очень хороший и благополучный район.\n\nФормат: прихожая, кухня-гостиная, спальня, 2 балкона, санузел и кладовка, есть кондиционер.\n\nСдача минимум от 6 месяцев.'
    },
    uk: {
      title: 'Оренда квартири у Турині',
      price: '800 € на місяць + комунальні',
      address: 'Pozzo Strada, Torino',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pozzo+Strada,+Torino',
      description: 'Здається квартира поруч із метро Pozzo Strada, нещодавно зроблено повний ремонт. Дуже хороший і благополучний район.\n\nПланування: передпокій, кухня-вітальня, спальня, 2 балкони, санвузол і комора, є кондиціонер.\n\nМінімальний термін оренди — 6 місяців.'
    },
    it: {
      title: 'Appartamento in affitto a Torino',
      price: '800 € al mese + spese',
      address: 'Pozzo Strada, Torino',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pozzo+Strada,+Torino',
      description: 'Si affitta appartamento vicino alla metro Pozzo Strada, recentemente ristrutturato completamente. Zona molto buona e tranquilla.\n\nComposizione: ingresso, cucina-soggiorno, camera da letto, 2 balconi, bagno e ripostiglio; presente aria condizionata.\n\nAffitto minimo di 6 mesi.'
    }
  }
});
