const searchInput = document.querySelector("#etkinlik-ara");
const clearButton = document.querySelector("#arama-temizle");
const eventCards = document.querySelectorAll(".grid article");
const resultCount = document.querySelector("#sonuc-sayisi");
const noResultsMessage = document.querySelector("#sonuc-yok");

// Başlıkta arama terimini içeren kartları gösterir ve sonucu günceller.
function filterEvents() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const card of eventCards) {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const matches = title.includes(searchTerm);

    card.hidden = !matches;
    if (matches) {
      visibleCount += 1;
    }
  }

  resultCount.textContent = `${visibleCount} etkinlik bulundu.`;
  noResultsMessage.hidden = visibleCount > 0;
}

// Arama alanını boşaltır ve tüm etkinlikleri yeniden gösterir.
function clearSearch() {
  searchInput.value = "";
  filterEvents();
}

searchInput.addEventListener("input", filterEvents);
clearButton.addEventListener("click", clearSearch);
filterEvents();
