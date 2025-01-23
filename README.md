# Task Management Application

Modern bir görev yönetim uygulaması. React, Tailwind CSS ve çeşitli modern kütüphanelerle geliştirilmiştir.

## Özellikler

- Görev oluşturma ve yönetme
- Kişi ekleme ve görevlere atama
- Son teslim tarihi takibi
- Görev tamamlama
- Form validasyonu
- Bildirim sistemi

## Teknolojiler

- **React**: UI geliştirme için
- **Tailwind CSS**: Stil ve tasarım için
- **date-fns**: Tarih işlemleri ve formatlaması için
  - `formatDistanceToNow`: Görevin teslim tarihine kalan süreyi göstermek için
  - `differenceInDays`: Teslim tarihine kalan gün sayısını hesaplamak için
  - Türkçe dil desteği
- **react-hook-form**: Form yönetimi ve validasyonu için
  - Kolay form state yönetimi
  - Form validasyonu
  - Form hata yönetimi
- **react-toastify**: Bildirim sistemi için
- **nanoid**: Benzersiz ID üretimi için

## Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Proje Yapısı

```
src/
  ├── components/         # React bileşenleri
  │   ├── Task.jsx       # Görev kartı bileşeni
  │   ├── TaskHookForm.jsx   # Görev oluşturma formu
  │   └── PeopleForm.jsx     # Kişi ekleme formu
  ├── data.js            # Örnek veri
  ├── App.jsx            # Ana uygulama bileşeni
  └── index.css          # Global stiller ve Tailwind direktifleri
```

## Tailwind CSS Kullanımı

Proje Tailwind CSS ile stillendirilmiştir. Önemli özelleştirmeler:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      normal: '#ffd9d4',
      urgent: '#d4d7ff',
    },
  },
}
```

- Özel renk tanımlamaları
- Arbitrary değerler için köşeli parantez sözdizimi kullanımı
- Utility-first yaklaşımı

## Form Validasyonu

react-hook-form ile gelişmiş form validasyonu:

- Zorunlu alan kontrolü
- Minimum karakter uzunluğu
- Maksimum seçim sayısı
- Gerçek zamanlı validasyon
- Özel hata mesajları

## Tarih İşlemleri

date-fns kütüphanesi ile:

- Teslim tarihine kalan süre hesaplama
- Türkçe tarih formatlaması
- Aciliyet durumu kontrolü

## Lisans

MIT