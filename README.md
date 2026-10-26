# BPR201 İnternet Tabanlı Programlama - Proje Ödevi 1

## Projenin Amacı
Bu proje, GitHub Codespaces ortamında bulut tabanlı geliştirme yaparak, GitHub Copilot desteğiyle statik bir web sitesini kişiselleştirmek ve JavaScript ile dinamik arama özelliği kazandırmak amacıyla geliştirilmiştir[cite: 1, 3].

## Proje Sayfaları
1. **Ana Sayfa (`index.html`):** Kulübün tanıtımı, temel hedefler ve diğer sayfalara yönlendirme bağlantıları[cite: 1].
2. **Etkinlikler Sayfası (`etkinlikler.html`):** En az 5 özgün etkinlik kartı, anlık arama input alanı, sayaç ve temizleme düğmesi[cite: 1, 3].
3. **Hakkımızda Sayfası (`hakkimizda.html`):** Projenin amacı, kullanılan teknolojiler ve geliştirme süreci hakkında detaylar[cite: 1, 3].

## Kullanılan Teknolojiler
* HTML5 / CSS3 (Ortak `style.css` tasarımı ve responsive düzen)[cite: 1, 4]
* JavaScript (DOM manipülasyonu ve anlık filtreleme)[cite: 3, 4]
* GitHub Codespaces & GitHub Copilot[cite: 1, 3]

## Çalıştırma Adımları
1. Projeyi GitHub Codespaces üzerinde açın veya ZIP arşivi olarak bilgisayarınıza indirin[cite: 1, 2].
2. Terminal penceresinde aşağıdaki komutu çalıştırarak yerel sunucuyu başlatın[cite: 24]:
   ```bash
   python3 -m http.server 8000 --bind 0.0.0.0
