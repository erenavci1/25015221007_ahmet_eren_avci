# BPR201 Proje Ödevi - Yapay Zekâ (Copilot) Notları

Bu belgede, proje geliştirme sürecinde GitHub Copilot ile gerçekleştirilen prompt çalışmaları, yapay zekâ önerilerinin değerlendirilmesi ve kod açıklamaları yer almaktadır[cite: 3, 4].

## 1. Kullanılan Temel Prompt'lar ve Amaçları

* **Prompt 1 (Etkinlik Kartları Oluşturma):**
	* *Amaç:* `etkinlikler.html` dosyasına mevcut kart tasarımını bozmadan en az 5 özgün kampüs etkinliği eklemek.
	* *Prompt Metni:* "HTML ve CSS öğreniyorum. etkinlikler.html dosyasına, mevcut card yapısını bozmadan en az 5 özgün kampüs etkinliği ekle (Her kartta başlık, tarih, yer ve açıklama bilgisi olsun). Mevcut style.css tasarımına tam uyumlu olmasını sağla."

* **Prompt 2 (Arama Alanı Tasarımı):**
	* *Amaç:* Kabul ölçütlerine uygun olarak arama input alanı ve "Temizle" düğmesi eklemek.
	* *Prompt Metni:* "etkinlikler.html sayfasına, kullanıcıların etkinlik başlıklarında arama yapabilmesi için açıklayıcı bir label etiketi içeren arama input alanı ve bir 'Temizle' düğmesi ekle. Tasarımı bozma, henüz JavaScript yazma, sadece HTML yapısını öner."

* **Prompt 3 (JavaScript Filtreleme Algoritması):**
	* *Amaç:* `script.js` dosyasında büyük/küçük harf duyarsız, anlık arama ve sayaç özellikli filtreleme mekanizması kurmak.
	* *Prompt Metni:* "HTML ve JavaScript öğrenmeye yeni başladım. etkinlikler.html sayfasındaki etkinlik kartlarını filtreleyen bir script.js dosyası yazmanı istiyorum. Kullanıcı yazdıkça eşleşen kartlar görünsün, büyük/küçük harf fark etmesin ve eşleşen sayaç gösterilsin."

---

## 2. Yapay Zekâ Önerisinin Değerlendirilmesi

* **Kabul Edilen / Düzenlenen Öneri:** Copilot, arama fonksiyonu için başlangıçta `keyup` olayını önermişti[cite: 3, 4]. Ancak modern tarayıcılarda anlık geri bildirim için bu öneriyi `input` olay dinleyicisi (`addEventListener('input', ...)`) olarak güncelledim[cite: 3, 4]. Ayrıca boşluk yönetimi için `.trim()` ve büyük/küçük harf duyarsızlığı için `.toLowerCase()` metotlarının eklendiğini kontrol ettim[cite: 3, 4].

---

## 3. Kod Açıklamaları (Kendi Cümlelerimle)

* **Event Listener (`addEventListener`):**
	* Kullanıcının arama çubuğuna (`#etkinlik-ara`) her karakter girişinde veya silmesinde (yani her `input` olayında) tetiklenen bir dinleyicidir. Kullanıcının yazdığı metni anlık olarak yakalamamızı sağlar[cite: 3, 4].

* **Filtreleme ve Büyük/Küçük Harf Koşulu (`toLowerCase` / `includes`):**
	* Arama çubuğuna girilen metin ve etkinlik kartlarının başlıkları `.toLowerCase()` ile tamamen küçük harfe dönüştürülür. Böylece kullanıcı "html" veya "HTML" yazdığında arama sonucu etkilenmez[cite: 3, 4]. `.includes()` metodu ise aranan kelimenin etkinlik başlığının içinde geçip geçmediğini kontrol ederek `true` veya `false` döner; eşleşen kartlar ekranda gösterilir, eşleşmeyenler gizlenir[cite: 3, 4].
