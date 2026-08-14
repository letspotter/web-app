const copy = {
  tr: {
    "nav.how": "Nasıl çalışır",
    "nav.app": "Uygulama",
    "nav.faq": "SSS",
    "nav.cta": "Uygulamayı al",
    "hero.eyebrow": "Fitness partner matching",
    "hero.lede":
      "Tek başına spor sıkıcı geliyorsa Spotter, aynı sporları, hedefleri ve programı paylaşan insanlarla seni buluşturur. Dating değil — antrenman arkadaşlığı.",
    "hero.cta": "App Store’da yakında",
    "hero.secondary": "Nasıl çalışır",
    "hero.notDating": "Spotter bir dating uygulaması değildir.",
    "how.title": "Üç adım",
    "how.find.title": "Find",
    "how.find.body":
      "Konumuna, sporlarına ve müsaitliğine göre yakındaki sporcuları keşfet. Pass veya Fit.",
    "how.match.title": "Match",
    "how.match.body":
      "Karşılıklı Fit olunca It’s a Fit. Sohbet açılır; antrenmanı birlikte planlayın.",
    "how.train.title": "Train",
    "how.train.body":
      "Salonda veya açık havada, seviyen ve hedeflerin uyan biriyle çalış.",
    "f1.kicker": "Eşleşmeler",
    "f1.title": "Seni Fit’leyenler ve yeni eşleşmeler",
    "f1.body":
      "Gelen Fit’leri gör, yeni eşleşmelere selam ver. Motivasyon tek başına değil — birlikte antrenman için kapı açık.",
    "f2.kicker": "Mesajlar",
    "f2.title": "Karşılıklı Fit sonrası anlık sohbet",
    "f2.body":
      "Saat, salon, tempo. Sohbet yalnızca eşleşince açılır — odak antrenmanı planlamak.",
    "f3.kicker": "Profil",
    "f3.title": "Spor, hedef, program, fotoğraf",
    "f3.body":
      "1–6 fotoğraf, sporlar ve seviyeler, hedefler ve müsait olduğun saatler. Filtrelerle mesafeyi, yaşı ve sporu daralt.",
    "f4.kicker": "Kontrol sende",
    "f4.title": "Dil, bildirimler, gizlilik",
    "f4.body":
      "Türkçe veya English. Fit, match, mesaj ve yakındakiler bildirimlerini ayrı ayrı açıp kapat.",
    "faq.title": "Sık sorulanlar",
    "faq.q1": "Dating uygulaması mı?",
    "faq.a1":
      "Hayır. Spotter fitness ve antrenman arkadaşlığı içindir. Odak: spor, hedef ve program uyumu.",
    "faq.q2": "Kimler için?",
    "faq.a2":
      "Aktif spor yapan veya spora başlamak isteyen yetişkinler. Fitness, koşu, yoga, dövüş sporları ve daha fazlası.",
    "faq.q3": "Konum neden gerekir?",
    "faq.a3":
      "Keşfet yakındaki adayları gösterir. Konum yalnızca bu işlev için kullanılır; reklam takibi yoktur.",
    "dl.title": "Birlikte antrenman yap.",
    "dl.body": "iOS sürümü App Store’da. Android yolda.",
    "dl.store": "App Store",
    "footer.privacy": "Gizlilik",
  },
  en: {
    "nav.how": "How it works",
    "nav.app": "The app",
    "nav.faq": "FAQ",
    "nav.cta": "Get the app",
    "hero.eyebrow": "Fitness partner matching",
    "hero.lede":
      "Tired of training alone? Spotter connects you with people who share your sports, goals, and schedule. Not dating — training companionship.",
    "hero.cta": "Coming to the App Store",
    "hero.secondary": "How it works",
    "hero.notDating": "Spotter is not a dating app.",
    "how.title": "Three steps",
    "how.find.title": "Find",
    "how.find.body":
      "Discover athletes nearby by location, sports, and availability. Pass or Fit.",
    "how.match.title": "Match",
    "how.match.body":
      "When it’s mutual, it’s a Fit. Chat unlocks so you can plan the session.",
    "how.train.title": "Train",
    "how.train.body":
      "Meet at the gym or outdoors with someone who matches your level and goals.",
    "f1.kicker": "Matches",
    "f1.title": "Incoming Fits and new matches",
    "f1.body":
      "See who Fitted you and say hi to new matches. Motivation isn’t solo — the door is open to train together.",
    "f2.kicker": "Messages",
    "f2.title": "Realtime chat after a mutual Fit",
    "f2.body":
      "Time, gym, pace. Chat only opens after a match — the focus is planning the workout.",
    "f3.kicker": "Profile",
    "f3.title": "Sports, goals, schedule, photos",
    "f3.body":
      "1–6 photos, sports and levels, goals, and when you’re free. Filter by distance, age, and sport.",
    "f4.kicker": "You’re in control",
    "f4.title": "Language, notifications, privacy",
    "f4.body":
      "Turkish or English. Toggle Fit, match, message, and nearby alerts independently.",
    "faq.title": "FAQ",
    "faq.q1": "Is this a dating app?",
    "faq.a1":
      "No. Spotter is for fitness and training companionship. The focus is sports, goals, and schedule fit.",
    "faq.q2": "Who is it for?",
    "faq.a2":
      "Adults who train or want to start. Fitness, running, yoga, martial arts, and more.",
    "faq.q3": "Why location?",
    "faq.a3":
      "Discover shows people nearby. Location is used only for that — no ad tracking.",
    "dl.title": "Train together.",
    "dl.body": "iOS on the App Store. Android on the way.",
    "dl.store": "App Store",
    "footer.privacy": "Privacy",
  },
};

const toggle = document.getElementById("lang-toggle");
let lang = localStorage.getItem("spotter-lang") || "tr";

function apply(next) {
  lang = next;
  localStorage.setItem("spotter-lang", lang);
  document.documentElement.lang = lang;
  toggle.textContent = lang === "tr" ? "EN" : "TR";
  const dict = copy[lang];
  document.querySelectorAll("[data-i]").forEach((el) => {
    const key = el.getAttribute("data-i");
    if (dict[key]) el.textContent = dict[key];
  });
}

toggle.addEventListener("click", () => apply(lang === "tr" ? "en" : "tr"));
apply(lang);
