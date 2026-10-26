# BPR201 Proje Ödevi - Test Notları

Bu belgede, `etkinlikler.html` sayfasında yer alan JavaScript arama/filtreleme özelliğinin ve site genelinin kabul ölçütlerine göre gerçekleştirilen test sonuçları yer almaktadır.

| Test / İşlem | Beklenen Sonuç | Gerçekleşen Sonuç | Durum |
| :--- | :--- | :--- | :--- |
| **1. Başlığın tamamını veya bir bölümünü arama**<br>(Örn: Arama çubuğuna "HTML" yazma) | Yalnızca eşleşen kartlar görünür; sayaç doğru sayıyı gösterir. | Yalnızca "HTML5" içeren kart listelendi, sayaç doğru çalıştı. | **Geçti**[cite: 4] |
| **2. Aynı kelimeyi büyük ve küçük harfle arama**<br>(Örn: "html" ve "HTML" deneme) | Her iki girişte de aynı kartlar görünür (büyük/küçük harf duyarsız olmalı)[cite: 3, 4]. | "html" ve "HTML" aramalarında aynı sonuçlar listelendi. | **Geçti**[cite: 3, 4] |
| **3. Hiçbir başlıkta bulunmayan bir ifade yazma**<br>(Örn: "Quantum" yazma) | Sayaç 0 olur; sonuç bulunamadı mesajı görünür[cite: 3, 4]. | Sayaç 0 oldu, "Sonuç bulunamadı" mesajı ekranda göründü. | **Geçti**[cite: 3, 4] |
| **4. Yalnızca boşluk yazma / Temizle'ye basma**<br>(Örn: Boşluk bırakma veya "Temizle" butonuna tıklama) | Her iki işlemde de tüm etkinlikler görünür[cite: 3, 4]. | Boşluk bırakıldığında ve Temizle butonuna basıldığında tüm etkinlikler tekrar listelendi. | **Geçti**[cite: 3, 4] |
| **5. Üç sayfanın menü bağlantılarını açma**<br>(Ana Sayfa, Etkinlikler, Hakkımızda) | Tüm bağlantılar doğru sayfalara gider[cite: 4]. | Ana sayfa, etkinlikler ve hakkımızda sayfaları birbirine sorunsuz bağlandı. | **Geçti**[cite: 4] |
| **6. 390 px genişlikte ve Tab tuşuyla kontrol**<br>(Mobil görünüm ve klavye erişimi) | Yatay taşma olmaz; arama alanına ve düğmeye ulaşılır[cite: 4]. | Dar ekranda taşma (overflow) yaşanmadı, Tab tuşuyla elemanlar arasında gezilebildi. | **Geçti**[cite: 4] |