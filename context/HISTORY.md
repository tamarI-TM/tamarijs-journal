# Workspace History

> სესიებისა და მნიშვნელოვანი გადაწყვეტილებების ქრონოლოგიური ჟურნალი.
> უახლესი ზემოთ. ავტომატურად განახლდება Claude-ის მიერ.

---

## 2026-08-06

### Smokido — Partage-ის refonte („Ma semaine" ბარათი) + Progrès/icon polish

- **ახალი გაზიარების ბარათი „Ma semaine avec Smokido":** კვირის 4 რეალური სტატისტიკა (cigarettes évitées · économies · envies remplacées · série), export **Story 9:16 + Carré 1:1** clear/dark, სუფთა Canvas-რენდერით (aperçu = რეალურად ექსპორტირებული სურათი). Story/Carré + „Ma semaine"/„Ma victoire" selector-ები; ძველი milestone ბარათი შენარჩუნებულია.
- **ერთიანი icon system** (lucide monoline, ბრენდის ფერებში): cigarette-off · **ფულის ტომარა €-ით** (გოჭის ნაცვლად) · leaf · flame. ერთი ფოთოლი „Smokido"-ს გვერდით. მინუსის ნიშანი მოხსნილი („105 cigarettes évitées").
- **i18n:** `share.weekly` 7-ვე ენაზე (მრავლობითი one/few/many, RU/KA სწორად), COPY-SYSTEM-ის ტონით.
- **Progrès:** „Regarde le chemin parcouru" ბარათი → ბრენდის მუქი მწვანე, ღია (თეთრი) წარწერებით; „Tes bénéfices après l'arrêt complet" → subtle ცისფერი დეგრადე; 🌱 emoji მოხსნილი share-სათაურიდან (7 ენა).
- **App icon:** `public/icon-512.png` თავიდან შეიქმნა — ბრენდის მუქი მწვანე „შუშისებრი" ფონი (reflets/vignette), Puff უცვლელი. Generator: `scripts/gen-app-icon.mjs`.
- **ტესტები:** `partage-shots.mjs` (18 checks), `weekly-i18n-check.mjs`. Commit `73f013b` (smokido repo).

---

## 2026-08-06

### Smokido — ახალი monetization სტრატეგია: subscription + Premium ეკრანი

- **სტრატეგიული გადაწყვეტილება:** Smokido გადავიდა **ერთჯერადი შესყიდვიდან (ძველი 14,90 € „à vie") auto-renewable subscription-ზე**. სამი ფორმულა, ყველა **7-დღიანი უფასო საცდელი პერიოდით**, ავტომატური განახლებით (თუ საცდელის დასრულებამდე არ გააუქმებ):
  - თვიური: **5,99 €/თვე**
  - ტრიმესტრული: **9,99 €/3 თვე** (≈3,33 €/თვე) — ლურჯი badge „Le plus populaire", **default-ად არ არის არჩეული**
  - წლიური: **29,99 €/წელი** (≈2,50 €/თვე) — **მთავარი ფორმულა**: ოქროსფერი კონტური, badge „Meilleure offre", **default არჩეული**, აქტიური coche
- **ახალი Premium ეკრანი** (`PremiumScreen.tsx`, route `/premium`), იხსნება Profil-ის Premium ბარათიდან. CTA „Essayer gratuitement pendant 7 jours" ბრენდის მუქ მწვანეში; ღილაკის ქვეშ trial-mentions. სრული clear/dark, `--sk-*` ტოკენებით. i18n `premiumScreen.*` 7-ვე ენაზე.
- **ძველი ცნობების წაშლა:** 14,90 € / „paiement unique" / „accès à vie" ამოღებულია Settings-ის ბარათიდან, i18n-იდან და `SMOKIDO_ARCHITECTURE.md`-იდან.
- **Coach:** მისალმების ბარათი (მასკოტით) გადავიდა ბრენდის მუქ მწვანეზე, თეთრი ტექსტით.
- **ჯერ სად ვართ:** რეალური IAP flow ჯერ არ არის (CTA toast-ს აჩვენებს). შემდეგი: App Store subscription group + Google Play subscriptions (Capacitor).

---

## 2026-08-04

### Smokido — Onboarding refonte premium + dark mode სრული + projections გვerდი

- **ცოცხალი მასკოტი (blink)** ენის არჩევისა და onboarding-ის ყველა ეკrანზე. საერთო `usePuffBlink` hook + `BlinkingPuff` / `OnbHeaderMascot` კომპონენტები (დუბლიკატის გარეშე).
- **ახალი ეკრანები (11-ბიჯიანი flow):** „კოლოფის ზომა" + „ფასი" ციფრული კლავიატурით → ახალი `cigarettesParPaquet` პარამეტrი (default 20) ჩაანაცვლა hardcoded `/20` ფულის გამოთვლებში (Progrès/Économies/Coach), Réglages-შიც შესწორებადი; „Si tu arrêtes complètement" projection; 4 ამბავი-ეკრანი (Et si tu arrêtais autrement / Change à ton rythme / J'ai fumé / Remplacer).
- **UI premium/minimal:** prénom + ველები უბორდერო/გამჭვირვალე (iOS თეთრი მართკუთხედის fix), ცარიელი საწყისი მნიშვნელობა, ერთიანი ტიპოგრაფიული იერარქია (prénom 22px = ეტალონი, არცერთი რიცხვი მასზე დიდი), ერთგვაროვანი ფონი (თეთრი ზოლის გარეშე), ენების სია iOS-ისებურ minimal სტრიქონებად (ბარათების/ბორდერების გარეშე).
- **Dark mode სრული:** `--onb-*` ტოკენების ფენა (light უცვლელი, dark ეკვივალენტი) — ფონი, ტექსტი, მასკოტი, ველები, კლავიატура, ბარათები, footer, safe area, ფინალი, welcome რიტუალი. ახალი **„Système / Clair / Sombre" თემა** (default Système, ტელეფონს მიჰყვება; pre-paint flash-ის გარეშე), Réglages → „Apparence" სექცia. Dark კონტroლები (ღილაკი/progress/ისარი) ბრენდის მუქ მწვანეზე.
- **Progrès:** „Regarde le chemin parcouru" ბარათი ეკ­რანის ბოლოში; ახალი **/projections** გვერდი (Cigarettes évitées / Argent économisé / Temps récupéré, per jour/semaine/mois/an), **რეალური სტატისტიკისგან მკაფიოდ გამიჯნული**.
- **ხარისხი:** ყოველ ცვლილებაზე tsc + build + i18n parity (7 ენა) PASS, ეტაპობრივი commit+push. თამარის შეფასება: „ძაააან კარგია".

---

## 2026-08-03/04 (Smokido — ცოცხალი მასკოტები + ნავიგაციის fluidity)

### Smokido — Puff-ის დახამხამება ყველა ეკრანზე + ნავიგაცია/resume fix (ყველა commit push-ული, ბოლო `de5084c`)

**🙂 მასკოტების გასწორება (Remplacer + Créer):** ორივე ეკრანზე Puff გადავიდა ერთიან `HeaderMascot`-ზე — მთავარი გვერდის ზუსტი ზომა/პოზიცია (`absolute right-12 top-0`, `w-[104px]`) + breathing. მთავარი გვერდიც იმავე კომპონენტზე გაერთიანდა.

**👁️ ნამდვილი დახამხამების სისტემა (frame-swap, PNG 3D-ს „ქუთუთო" არ აქვს):** `HeaderMascot`-ს დაემატა `animate` პროპი — `"blink"` (ორთვალა), `"wink"` (ცალთვალა), `"none"`. ყოველ ~6 წმ მოკლედ (150/220ms) გადადის თვალდახუჭულ კადრზე, **იგივე ჩარჩოზე** (256×199, fit:fill) რომ არ „ახტეს".
- 🆕 `puff-blink.png` — თამარის მოწოდებული 3D კადრი (ორივე თვალი დახუჭული), trim + ნორმალიზება. Home/Remplacer/Créer = ორთვალა blink.
- **Conseil:** სტატიკური wink → ცოცხალი **ცალთვალა (მარჯვენა) wink**; `puff-wink.png` 256×199-ზე ნორმალიზდა.
- **J'ai fumé (SmokedScreen):** სევდიანი Puff ახლა ახამხამებს — 🆕 `puff-sad.png` (გახელილი, base) + `puff-sad-blink.png` (დახუჭული), ორივე თამარის კადრებიდან, ერთ ჩარჩოზე.
- **mon profil (Settings):** განიერი `smokido-3d` → სტანდარტული Puff (happy↔blink), თანმიმდევრული დანარჩენ აპთან.
- AI Coach: **განზრახ დავტოვეთ დახამხამების გარეშე** (smokido-3d სხვა რენდერია, თვალდახუჭული twin არ იყო; თამარმა თქვა „არ გვინდა").

**🔀 Créer ta propre activité:** „Enregistrer mon activité" ღილაკი აიწია (Combien de temps-ის მიყოლებით), სამოტივაციო Puff-ბარათი ჩავიდა გვერდის ბოლოში.

**🚀 ნავიგაცია „très fluide" + resume fix (2 მთავარი საკითხი, თამარმა დააყენა):**
- **preload:** router `defaultPreload:"intent"` (+delay 0) → route იტვირთება შეხებისთანავე, თითქმის მყისიერი გადასვლა.
- **resume-ზე ბოლო ეკრანი:** iOS standalone PWA გაღვიძებაზე `start_url`-ზე („/") ბრუნდებოდა → `__root.tsx` ინახავს ბოლო path-ს (`smokido:lastPath`) და აბრუნებს იქ, სადაც იყო (12სთ ფანჯარა).
- **თეთრი ფლაშის fix (Profile→Accueil):** `index.tsx` `null`-ს აბრუნებდა phase-ის დადგენამდე (ცარიელი კადრი) → ახლა თემის ფონიანი placeholder + phase სინქრონულად (hydration-ის შემდეგ). SSR/hydration დაცული.

**რჩება (შემოთავაზებული, თამარის გადასაწყვეტი):** მუდმივი გარსი (AppShell layout-route რეფაქტორი, სრული fluidity) + Service Worker (მყისიერი offline გახსნა, gaghვიძების თეთრი ციმციმის მოსპობა).

**ხარისხი:** ყოველ ცვლილებაზე build PASS, ცალკე commit+push. თამარის შეფასებები: „ძააან კარგია", „გენიალურია".

---

## 2026-08-02 (გაგრძელება — dark mode სრული + premium polish)

### Smokido — Dark mode 100% (ყველა ეკრანი) + ერთიანი ატმოსფერო + ბრენდული დახვეწა (`commits 63aea73…5e228ed`, push-ული)

**🌘 Dark mode — სრულად დასრულდა (ყველა ეკრანი):** Conseils, Paramètres, Language, Économies, Santé, Habitudes, Évitées, Série, Insights, Remplacer, J'ai fumé, Coach, Créer, Partage, ActivityTimer, MiniTimer, „Détail de la semaine". მეთოდი: თითო ეკრანის `const C={}` hex + Tailwind `bg-white`/`text-neutral-*`/`bg-[#pastel]` → `--sk-*` ტოკენებზე (Node სკრიპტებით). Recharts SVG ღერძები `useTheme()`-ით. Partage სისტემის თემიდან → აპის toggle-ზე. **შენარჩუნებული accent-ები ორივე თემაზე:** მწვანე CTA gradient-ები, ოქროს Premium, წითელი destructive, chart ფერები.

**🌫️ ერთიანი ატმოსფერული ფონი (Apple Weather/Health):** dark `--sk-bg` = ვერტიკალური subtle gradient (ზედა ~30% ნაზი მწვანე glow → base #14201A). 🆕 `AmbientGlow` კომპონენტი (dark-only ზედა მწვანე halo) ყველა ეკრანზე. `--sk-sky` dark = glow (Home/Progression/Timer). „depth without a visible background."

**💛 Money → ოქრო:** ნარინჯისფრიდან #EAB308/#F6C945 (Apple Wallet), WeeklyStats + Progress tile + Économies.

**✨ Premium polish:** Premium ბარათი რბილი ოქრო + „✨ À vie" badge; MiniTimer dark elevated card; Wellness category chip-ები Smokido-ს ფერებზე (🟩🟡🩷🟦🟣 პასტელი, `--sk-cat-*`); Wellness featured tip; ActivityTimer 7 დეტალი (dynamic Puff phrases, „Bravo" completion, breathe/blink/leaf-spin, softer particles) + „Abandonner" → „Quitter la session" (ნეიტრალური); Remplacer touchable cards (gradient+glow+haptic), duration pill, „Respire" ring breathe+glow; Créer name card + touchable icon tiles + **ასაკეცი icon grid** („Voir plus/moins") + `music2` დუბლიკატის მოშორება; „Cette semaine" + craving card = მუქ-მწვანე ბრენდული ბარათები.

**🎨 ახალი 3D იკონები:** სიგარეტი (ანთებული, 2×), ყავა, კუჭი (après repas), მონეტების ქილა, გოჭი, ლოტოსი (Méditer), ყურსასმენი (Écouter, ×2 asset). თითოს flood-fill/trim/square, გამჭვირვალე.

**🎉 Micro-celebrations გაძლიერდა:** priority 1-4, haptic tiers (soft/medium/rigid), paliers 90/180/365, 100% day (end-of-day), `?celeb` test panel (7 ენა).

**Puff სტანდარტიზაცია:** 🆕 `HeaderMascot` — Home-ის ზუსტი პოზიცია/ზომა Progress + Wellness-ზე.

**ხარისხი:** ყოველ ცვლილებაზე tsc + build PASS, ცალკე commit+push. თამარის შეფასება: „ზღაპრული და გენიალური აპი".

---

## 2026-08-02

### Smokido — Mode sombre (infra + Accueil + Progression) + système de micro-célébrations + polish premium (`commits …6522247`, push-ული)

**🌘 Dark mode — ინფრასტრუქტურა (ერთხელ, ყველა ეკრანს):** ახალი **`--sk-*` სემანტიკური ტოკენების ფენა** `styles.css`-ში (light + dark = „თბილი ნახშირისფერი-მწვანე", თამარის არჩევანი). 🆕 `useTheme.ts` (module-store, `.dark` კლასი `<html>`-ზე, `localStorage 'smokido-theme'`). Pre-paint script `__root.tsx`-ში (ღიას ციმციმის გარეშე). Settings-ის toggle ამუშავდა (ადრე „Скоро"). `.dark` base ნეიტრალები navy→მწვანე hue 155. AppShell/BottomNav უკვე ტოკენებზე იყო.

**კონვერტირებული ეკრანები:** ✅ **Accueil** (+ WeeklyStats, StickyTopBar) · ✅ **Progression** (ProgressionScreen, ProgressHero, ProgressCalendar). Recharts გრაფიკები თემაზე ადაპტირებული (SVG-ში CSS var არ მუშაობს → `useTheme`-ით კონკრეტული ფერი). ⏳ **დარჩა: Conseils, Paramètres, + ქვე-ეკრანები** (Économies, Santé, Habitudes, Évitées, Série, Insights, Remplacer, Fume, Coach, Créer, Partage) — იგივე ტოკენებით.

**🚬 ახალი სიგარეტის აიქონი** — რეალისტური, ანთებული (თამარმა მოაწოდა); თეთრი ფონი flood-fill-ით (threshold 237). Accueil/Économies/Évitées.

**✨ Premium polish:** Puff სუნთქვა+თვალის დახამხამება; Accueil+Progression Progress Ring = **Apple Fitness glow + endpoint dot**; Progression: „Tes activités"=ლურჯი vs „Insights"=იისფერი; Ton parcours ფერადი glow თითო tile; Weekly graph მიმდინარე დღის halo; Health recovery თითო ორგანო ცოცხალი (pulse/lent/glow/fade); „Temps de vie regagné" → **victory moment** (დიდი ხე+halo+ციფრი); Calendar **„journée parfaite"** (0 სიგარეტი, ორმაგი რგოლი); 30-day graph **goal line** ეტიკეტით; Puff mood ყოველ დღე იცვლება.

**🎉 Micro-celebrations სისტემა (ცალკე UX ქვესისტემა):** 🆕 `lib/celebrations.ts` (store + priority 1-4 + once/day guard + baseline anti-retroactif + haptic tiers soft/medium/rigid + reduced-motion respect) · 🆕 `CelebrationOverlay.tsx` (ფოთლები/ნაპერწკლები/glow, ~1.4წმ) · `CelebrationWatcher` (AppShell) action-ზე ისვრის. Triggers: პირველი Replace, streak 3/7/14/30/90/180/365, ახალი record (მხოლოდ reset-ის შემდეგ, არა spam), 100% day (end-of-day, გუშინდელი გახსნაზე). 🆕 `CelebrationDebug` პანელი `?celeb` URL-ით (prod-ზეც). ტექსტები 7 ენაზე (`celebrations.*`).

**ხარისხი:** ყოველ პარტიაზე tsc + build PASS, ეტაპობრივი commit+push თამარის დადასტურებით. თამარის შეფასება: „Premium Wellness app", „App Store Featured დონე".

---

## 2026-08-01

### Smokido — MILESTONE: მრავალენოვანი ლოკალიზაცია სრულია (EN master → ES/IT/RU native) (`commits …4b6231f`, push-ული)

**კონცეფცია:** ინგლისური გახდა **MASTER ენა** — დაწერილია მშობლიურად, US UX-writing სტილში (Headspace/Calm/Duolingo/Apple Health), არა ფრანგულიდან თარგმნილი. ყოველი სხვა ენა EN-master-იდან გამოდის, მაგრამ **მშობლიურად**, არა სიტყვასიტყვით — თითოეული ენა ცალკე პროდუქტივით.

**დასრულებული ენები (18 მოდული თითო):**
- 🇬🇧 **English (master)** — Style Guide v1.0 გაყინული COPY-SYSTEM.md §5-ში. Signature: *ride it out · every win counts · keep going · one step at a time · smoke-free · swap · break the link*. წესი „less I" (Puff = თანამგზავრი, არა chatbot).
- 🇪🇸 **Español (Castilian)** — signature „Déjalo pasar", „Cada día sin fumar cuenta", „Sigue así".
- 🇮🇹 **Italiano** — signature „Lasciala passare", „Ogni giorno senza fumo conta", „Continua così", „Ce la fai".
- 🇷🇺 **Русский** — **735/735 key, 0 ფრანგული ნარჩენი.** „ты" informal; signature „Пусть пройдёт" (არა „Переживи это"); brand „Каждый день без сигарет — это победа", „Так держать", „Решать тебе". **მთავარი ტექნიკა: სქესობრივად ნეიტრალური** მომხმარებლის ზმნებისთვის (იმპერსონალური „выполнено {{pct}}%", „Случайное нажатие?" და არა გენდერული „Нажал").
- 🇫🇷 **Français** — voix polish უკვე დასრულებული (source). 🇬🇪 **ქართული** — 746/746 სინქრონი დადასტურებული.

**🇩🇪 გერმანული გამორთულია** picker-იდან (`languages.ts` `enabled:false`) თამარის თხოვნით.

**workflow:** Claude drafts native screen-by-screen → Tamari reviews table-ში (თითო მოდული 10/10 მიკრო-tweak-ებით) → apply Node script-ით → build → commit+push. Signature „ride out" თითო ენაზე ცალკე: EN „Ride it out" · ES „Déjalo pasar" · IT „Lasciala passare" · RU „Пусть пройдёт". „AI Coach" title ყველა ენაში შენარჩუნებულია.

**ხარისხი:** ყოველ ბატჩზე build PASS; ბოლოს EN↔RU key-parity script (735=735, missing/extra 0, non-Cyrillic leak scan) PASS.

---

## 2026-07-31

### Smokido — Activités éditables + 21 nouvelles catégories + thème vert foncé + fix série + carillon de fin (`commits eb0b1e2…6a426d9`, push-ული)

**⋮ მენიუ preset აქტივობებზე** (`ReplaceScreen.tsx`): 9 ინტეგრირებულ აქტივობას დაემატა „Modifier la durée" (5-45წთ picker) · „Supprimer" · „Restaurer les activités". **i18n-safe** — preset-ის სახელი/იკონი i18n-ში რჩება, მხოლოდ დრო/დამალვა ცალკე localStorage-ში (`presetDurations`, `hiddenPresets`). წაშლა ყოველთვის შექცევადია.

**9 preset-იკონი „Créer ma propre activité" picker-ში** — მომხმარებელს არჩევანი (გოგო/ბიჭი/სხვა ვიზუალი). „music" id-კონფლიქტი → „music2".

**21 ახალი აქტივობის კატეგორია** (54 cat-იკონი სულ): Plage, Faire de la musique, Routine beauté, Balade nature, Vélo, Sortie entre amis, Un verre entre amis, Jeux de société, S'occuper des fleurs, Vacances, Ski, Pizza, Sushi, Croissant, Petit-déjeuner, Khatchapouri, Khinkali, Tennis, Fête, Anniversaire, Mariage — ChatGPT იკონები, flood-fill გამჭვირვალობა, sharp compress.

**მუქი მწვანე თემა** (#006B54) Remplacer + Créer ეკრანებზე: სიტყვა „cigarette", envie-წრის ზოლი, „Ajouter"-ის ტექსტი/პლიუსი/კონტური, „J'ai résisté" ღილაკი, Créer-ის accent-ები + save ღილაკი + title accent „activité". ღია mint ფონები/დეკორ. ფოთლები უცვლელი.

**🐛 „Série actuelle" fix** (`HomeScreen.tsx`): მთავარი გვერდი settings-ზე დაფუძნებულ streak-ს ითვლიდა (მხოლოდ ყოველდღიური „j'ai fumé"-ზე იზრდებოდა, გამოტოვებაზე 1-ზე ბრუნდებოდა). ახლა იყენებს log-ზე დაფუძნებულ `currentStreak`-ს (ზედიზედ დღეები მიზნის ქვემოთ) — Progrès-თან თანხვედრილი, სწორად იზრდება.

**🔔 ტაიმერის დასრულების ჩაიმი**: ნაზი 2-ნოტიანი „cloche zen" (Web Audio, ფაილის გარეშე — 🆕 `sound.ts`), expanded+mini ორივე რეჟიმში (`useActivityComplete`). Settings toggle „Son de fin d'activité" (default on). **iOS fix:** `unlockAudio()` აქტივობის გაშვების tap-ზე (Web Audio მხოლოდ gesture-ში იხსნება) — ტელეფონზე დადასტურდა რომ ისმის.

**ხარისხი:** ყოველ ეტაპზე tsc + build + Playwright (⋮ edit/delete/restore, streak 1/3/5j, sound toggle+completion, no-overlap, console-clean) PASS. ეტაპობრივი commit+push თამარის დადასტურებით.

---

## 2026-07-28

### Smokido — აქტივობის timer-ის Mini-lecteur (მთავარ გვერდზე წვდომა აქტივობის დროს) (`commit 2417603`, push-ული)

**პრობლემა:** როცა აქტივობა (კითხვა/სეირნობა…) აქტიური იყო, Accueil tab მხოლოდ სრულ timer-ს აჩვენებდა — მთავარ კონტენტს ვერ ხვდებოდი.

**გადაწყვეტა (music-player-ის სტილში):** timer ეკრანზე **„Réduire" ღილაკი** (ChevronDown, ზედა-მარცხნივ) → იკეცება, ჩანს მთავარი გვერდი. **Mini-ბარი** bottom nav-ის ზემოთ (აქტივობის იკონი + სახელი + პროგრესის ზოლი + დარჩენილი დრო), ხილული **ყველა tab-ზე** სანამ აქტივობა მიდის; **დაჭერით** ისევ იშლება სრულ ეკრანად.

**არქიტექტურა:** 🆕 `useTimerMinimized.ts` (module-level global store, `useSyncExternalStore`, SSR-safe) · 🆕 `useActivitySession.ts` (`useActivityComplete` — logReplaced+clearActivity+confetti+toast, გამოყენებული ორივე რეჟიმში) · 🆕 `MiniTimer.tsx`. AppShell-ში `showMini = activeActivity && !(pathname==="/" && !minimized)` — ზუსტად ერთი ticker აქტიურია (double-completion-ის გარეშე). ახალი აქტივობის დაწყებაზე `minimized=false`. Timer/countdown/navigation ლოგიკა უცვლელი.

**ხარისხი:** tsc + build + Playwright (Réduire→mini→expand→tab-switch→**completion minimized-ში**→no-overlap 320/390/430, mini↔nav 10px) PASS, console 0.

---

## 2026-07-27

### Smokido — Onboarding polish + Ton parcours გვერდები + Session/Timer premium redesign + 24 ახალი აქტივობის იკონი (`commits 5e8bd4f…388b00d`, push-ული)

**🚀 Onboarding საბოლოო ეკრანი:** ყველა ბლოკი ერთ ეკრანზე დაეტია (min-h-0 flexbox fix მობილურ Safari-სთვის, ღილაკი ბოლომდე; spacing-ის კომპაქტიზაცია; მასკოტი 196px→150px ოთხივე გვერდზე ერთნაირად). სათაურების **ერთიანი typography** — ახალი shared `.onb-title` class (reference: „Intervalle entre chaque cigarette ?", 22px/800/1.14), ოთხივე main title-ზე. CTA fade დაემატა და მერე მოიხსნა (თამარს არ მოეწონა).

**📊 „Ton parcours" ჰარმონიზაცია:** 4 ფილიდან მხოლოდ Économies-ს ჰქონდა გვერდი → ახლა **ოთხივე clickable**. 2 ახალი გვერდი: **Cigarettes évitées** (`/evitees` — დიდი რიცხვი, ეკვივალენტები, 7-დღიანი bar-გრაფიკი) და **Ta série** (`/serie` — მიმდინარე+საუკეთესო streak, 4-კვირიანი კალენდარი). Santé → არსებული `/sante`. „Ton parcours" + „Résumé du mois" ბარათები **თანაბარი სიმაღლის** (h-full + auto-rows-fr).

**⏱️ Session/Timer ეკრანის premium redesign** (`ActivityTimer.tsx`): დიდი activity ბარათი (ილუსტრაცია დიდი ფორმატით, მწვანე ფოთოლ-chip + „N წუთი" badge), ბარათი+წრე+Puff ერთ ჯგუფად ბოლოში, დახვეწილი წრე (თხელი ღია track + lavender arc), sparkles + ფოთლები + ყლორტი, refined encouragement capsule, ghost `Abandonner`. Timer/countdown ლოგიკა **უცვლელი**. mockup-ს ზუსტად მოერგო (თამარის light ვერსია; dark ცალკე task-ად გადაიდო).

**🎨 აქტივობის იკონები:** 4 preset იკონი შეიცვალა (წყალი/რესპირაცია/ხილი/წიგნი). „Créer ma propre activité" — **9 → 33 კატეგორია** (24 ახალი: yoga×2, meditation, stretching, musculation, music, swim, nap, coffee, selfcare, goals, footing, todo, knitting, teeth, laptop, favorite, dogwalk, baking, gaming, writing, ინსპ. და სხვ.). ყველა იკონი ChatGPT-დან: ქართული-პათი→ASCII (PowerShell -LiteralPath), თეთრი ფონი edge flood-fill-ით გამჭვირვალე, trim+resize+palette-compress (sharp), 46-133KB.

**⚠️ ცნობილი ხარვეზები (მომავალი გასაწმენდი):** labels „décalé"-ს გამო ზოგი შიდა id/asset-სახელი შეუსაბამო (label სწორია, უხილავია); „Yoga" 2-ჯერ ჩანს; ვიზუალურად იკონები ვერ დამემოწმებინა (image-ლიმიტი) → თამარმა ტელეფონზე ამოწმებდა.

**✅ ხარისხი:** ყოველ ეტაპზე `tsc --noEmit` + `build` + Playwright (responsive 320/375/390/430, overlap/clipping/console-clean gates) PASS. ყველა ცვლილება ეტაპობრივად თამარის დადასტურებით და push-ით.

---

## 2026-07-26

### Smokido — Web notifications (რეალური) + shared settings sync bug fix + permission-denied UX + Playwright regression suite (`commit 5365db2`)

**🔔 Web notification service + reminder logic:** ახალი `src/lib/notifications.ts` — ერთი აბსტრაქციის ფენა ყველა notification-ისთვის (web ახლა, Capacitor-ready `window.Capacitor.Plugins` bridge-ით, npm-პაკეტის დაყენების გარეშე). AppShell-ის watcher-ები (interval, encouragements, **ახალი rappelSoir საღამოს შეჯამება 21:00**) refactor-დ სერვისზე. Settings-ში დაემატა master toggle + „Envoyer un test" ღილაკი. dev-only debug ლოგები + `?testreminder` (2წთ ტესტი), production bundle-იდან grep-ით დადასტურებულად ამოღებული (`import.meta.env.DEV`).

**🌍 7-ენოვანი i18n:** notification-ის ყველა ტექსტი (activityDone/interval/encouragements/rappelSoir/test/blocked) გატანილი fr/en/es/it/de/ru/ka-ში. hardcoded ფრანგული (ძველი `ENCOURAGEMENTS` მასივი) აღმოიფხვრა — მრავალენოვნების წესი დაცული.

**🐛 Shared settings synchronization bug (აღმოჩნდა Playwright-ით, გასწორდა):** `useSmokidoData()` თითო კომპონენტს ცალკე `useState` ჰქონდა — Settings-ში toggle-ის გამორთვა watcher-ს **ვერ სწვდებოდა**, notification-ები reload-მდე გრძელდებოდა. გასწორდა module-level listener registry-ით (SSR-safe: მხოლოდ React setters, server-ზე ცარიელი, useEffect-ით client-only). + `initLanguage` გადავიდა `__root`-ში (deep-link ენა).

**🚫 Permission-denied UX:** denied ან master-off → child toggles + test ღილაకი disabled (reduced opacity, არჩევანი შენარჩუნებული); მუდმივი წითელი „Notifications bloquées" panel + მოკლე toast „Permission refusée"; denied-ზე `requestPermission()` აღარ იძახება (ბრაუზერი დიალოგს არ ხსნის).

**✅ ხარისხის gate:** Playwright **14/14 PASS** (8 notif + 3 SSR-safety + 4 UX; devDependency-ად, prod deps უცვლელი). TypeScript `--noEmit` PASS, production `build` PASS. **Blocked UX ხელით ვიზუალურად დადასტურდა (PASS).**

**⚠️ ხელით არ დადასტურებულა (3 OS-level ტესტი):** რეალური OS notification-ის გამოჩენა, 2-წუთიანი reminder-ის ხილული მიღება, master-OFF-ის შემდეგ reminder-ის არმოსვლა — dev-server-ზე ხელით ვერ ჩატარდა.

**🔜 ღია ამოცანები (store-wrap ეტაპისთვის):** native Capacitor notifications (npm install + cap sync + real device); **SSR/static index.html ბლოკერი** — აპი TanStack Start + Cloudflare SSR-ია, static `index.html` არ გამოაქვს, Capacitor webDir-ს კი სჭირდება → ცალკე native-build ამოცანა.

---

## 2026-07-25

### Smokido — Onboarding refonte + Habitudes გვერდი + კვირის კურბი (navigable) + 3D header მასკოტები + Language ეკრანი (`commits 444a020…41d2e36`, push-ული)

**☁️ 3D header მასკოტები (`444a020`):** ყველა გვერდის თავში 3D transparent ღრუბელი — Accueil/Progrès/Remplacer/Créer activité (happy), Wellness „Prends soin de toi" (wink), J'ai fumé (sad). ბარათების პატარა მასკოტები SVG cartoon-ად რჩება. 📌 წესი: header = 3D, cards = SVG. Transparent PNG-ს fotor bg-remover-ით ვამზადებთ (თეთრი-ფონიანი export არ გამოდგება).

**🎨 Onboarding სრული refonte (`128ae34`):** 4-ვე ეკ­რანზე 3D მასკოტი (ზომა/პოზიცია ჰარმონიზებული — კონტენტი `justify-start`, მასკოტი ერთ სიმაღლეზე); „Continuer" ღილაკი, prénom-ის კანti, progress bar (ერთი გლუვი bar წყვეტილების ნაცვლად), interval ეკრანი → **მუქი მწვანე** (#006B54); interval ეკრანი კომპაქტური; **უკან ღილაკი** დაემატა; ღია ფონი; 🌱 მოშორდა „Tu vas y arriver".

**📈 „Progression de la semaine" (`128ae34`):** ღია ბაცი მწვანე კურბი, **სავსე** (დაწყებამდე დღეები = 0%, „ადრე ვეწეოდი", ფულში არ ითვლება); **გადიდებადი modal** (tap → enlarge, X/backdrop); **‹ › კვირის ნავიგაცია** (კალენდარზე გადაადგილება, თარიღების დიაპაზონი, logs-იდან რეალური). ცრუ „Cette semaine" ღილაკი და „objectif" სექცია მოშორდა.

**🌿 Habitudes გვერდი (`eeb72c3`, route `/habitudes`):** Insights-ის სტილში, ღია იისფერი ფონი — ჯანსაღი აქტივობები (30დღ) სიხშირით დალაგებული, 🥇🥈🥉, trophy იკონი. შესასვლელი: Home „Habitudes" ბარათი + Résumé du mois tile.

**💸 Économies + finitions:** „Argent dépensé" rose ბარათი (`7f74b6e`); Santé/Économies **კონტექსტური უკან-დაბრუნება** (Home ↔ Progrès history-ით, `704a719`); Home „victoire" trophy იკონი; html/body base ღია ნეიტრალური (მომწვანო ხაზი ბოლოში მოშორდა).

**🌍 Language ეკრანი (`41d2e36`):** 3D მასკოტი, ღია ფონი (სახელის ეკრანივით), „Smokido" მუქი მწვანე, **უდროშო თანამედროვე ენების სია** (კოდ-ბეჯები FR/EN/…, მუქი მწვანე აქცენტი).

### Smokido — კვირის ბაგის ფიქსი, „Recommencer" ღილაკი, მთავარი ბარათები ცოცხალი, Hero მუქი მწვანე (`commit 544bf6d`, push-ული)

**🐛 კვირის გამოთვლის ბაგი (`544bf6d`):** „argent économisé cette semaine", „temps regagné" და კვირის მრუდი ითვლიდნენ **დაწყების თარიღამდე** დღეებსაც (სადაც ჩანაწერი არ არის → baseline „დაზოგილად" ემატებოდა) → კვირა > total (მაგ. 104€ vs 14€, რაც შეუძლებელია). გასწორდა: გამოთვლა შემოისაზღვრა `journeyStart`-ით; დაწყებამდე დღეები მრუდზე `null` (აღარ ჩანს ყალბი 100%). თამარმა შენიშნა reset-ის შემდეგ.

**🔵 „Recommencer mon parcours" (Réglages):** ახალი `storage.resetProgress()` — შლის ჩანაწერებს (logs) + აქტიურ აქტივობას, აყენებს dateDebut/appStartDate = დღეს, ანულებს streak-ს, **პარამეტრებს ინახავს** (სახელი, ღერების რაოდ., ფასი). ძველი „Réinitialiser" (სრული wipe → onboarding) ცალკე რჩება. ორივე ცალკე ღილაკი, confirm-ით.

**📊 მთავარი ეკრანის 4 ბარათი ცოცხალი (`WeeklyStats`):** hardcoded ("47/87%/73€/5h42m") → რეალური მონაცემი (remplacées semaine, healthScore, moneySavedWeek, lifeRegainedWeek). ⚠️ **ფერადი sparkline მრუდი ფიქსირებული/დეკორაციად დარჩა** (თამარის მკაფიო მოთხოვნა — ციფრი ცოცხალი, მრუდი უცვლელი). თითო ბარათი დაჭერადი → Progrès/Santé/Économies.

**🎨 Progrès Hero რგოლი:** „sans tabac aujourd'hui" ბარათი მუქ მწვანე გრადიენტად (#0B6E54→#033D2C), ციფრები თეთრი, რგოლი პიტნისფერი (mint) მუქ ფონზე; % ზომა 42→36px.

**🔗 Home „Temps" ბარათი → Résumé du mois:** „Temps" ბარათი ახლა `/progression#resume-mois`-ს ხსნის და პირდაპირ „Résumé du mois" სექციაზე ჩამოასქროლებს (section `id` + `scroll-mt-24`; ProgressionScreen mount-ზე კითხულობს hash-ს, 250ms დაყოვნებით recharts განლაგებისთვის).

**🌳 „Temps regagné" → „Habitudes" (ფილოსოფია: მავნე ჩვევა → კარგი ჩვევა):** ორივე ადგილას გადაკეთდა — Home-ის მე-4 ბარათი და „Résumé du mois"-ის tile. **ვიზუალი/იისფერი უცვლელი**, მხოლოდ შინაარსი: label „Habitudes", value = განსხვავებული ჯანსაღი აქტივობების რაოდენობა (Home = კვირა, tile = თვე; `progressStats.month.habits` დაემატა), პიქტოგრამა **ხე** (Trees, იისფერი — მავნე ჩვევის ჩანაცვლების მეტაფორა). Home ბარათი „Résumé du mois"-ის Habitudes tile-ს უკავშირდება.

**🎨 Santé იკონების გასუფთავება:** 6-ვე health იკონს (Rythme cardiaque, Oxygénation, Fonction pulmonaire, Goût et odorat, Énergie, Économie de santé) ჰქონდა თეთრი ფონი → flood-fill + morphological close-ით მოშორდა (ორიგინალი ფაილებიდან, transparent).

**🎨 „J'ai fumé" trigger იკონები (ზომა/ცენტრირება):** sm-stress-ს მარცხენა კიდეზე თეთრი ზოლი ჰქონდა → flood-fill; sm-coffee/sm-meal/sm-alcohol/sm-other ვიზუალურად პატარად ჩანდა (თხელი ელემენტები, ცარიელი ზღვარი) → trim + display scale (`ICON_SCALE`: meal/coffee/alcohol ×1.22, habitude ×1.08) SmokedScreen + Insights-ში.

**☁️ „J'ai fumé" ახალი მასკოტი:** SVG Puff (sad) → **3D transparent PNG ღრუბელი** (ყლორტით, sad). 📌 გაკვეთილი: თეთრი-ფონიანი export **ვერ გასუფთავდება** ავტომატურად (თეთრი მასკოტი თეთრ ფონზე — ღრუბელი „იჭმევა", ქვედა მწვანე ფონი გამოსჭვივის). საჭიროა **ნამდვილი transparent PNG** (fotor bg-remover მუშაობს). SVG Puff sad გამომეტყველებაც დაიხვეწა (fallback).

---

## 2026-07-24

### Smokido — Économies + Santé (refonte) + Insights/Déclencheurs (`commits a74974a, 12a06bd`, push-ული)

**💰 Économies ეკრანი (`a74974a`, route `/economies`):** დანაზოგის ეკრანი — „Argent économisé cette semaine" + „Total économisé" + „paquets non achetés", 2 transparent 3D იკონი (ქილა მონეტებით + piggy bank). იხსნება Progrès-ის „Argent économisé" tile-იდან (`›` chevron ნიშნით). დაემატა `moneySavedWeek` progressStats-ში.

**❤️ Santé ეკრანი refonte (`a74974a`, route `/sante`):** mockup-ზე გადაკეთდა — „Tes bénéfices actuels" (5 ბენეფიტი, სტატუსი Amélioré/En cours ავტომატურად დროზე დამოკიდებული: 20min/8h/48h/3j/2sem) + „Économie de santé" ბარათი. **6 transparent 3D იკონი** (გული, oxygénation, ფილტვები, goût/odorat, énergie, გული+ECG). ძველი richer ვერსია (organs progress-bars, timeline) ჩაანაცვლა.

**✨ Insights/Déclencheurs ეკრანი (`12a06bd`, route `/insights`):** **ცოცხალი `raison` მონაცემი** (რომელიც აქამდე იწერებოდა „J'ai fumé"-ში, მაგრამ არსად ჩანდა) → Déclencheurs tab (8 იკონი ყოველთვის ჩანს, სიხშირით დალაგებული) + **Conseil personnalisé** (auto №1 trigger-ზე) + Moments tab (რისკის საათები, 30დღ). შესასვლელი ბარათი Progrès-ში (წრესა და „Ton parcours"-ს შორის, 3D დიაგრამის იკონით). ⚠️ Progrès-იდან ძველი „Moments" სექცია მოშორდა (დუბლიკატი). **Émotions tab გადაიდო** (ჯერ ემოციის ველი არ გვაქვს). არქიტექტura: 4 tab უცვლელი.

**🎮 მინუტორი — custom აქტივობის იკონები:** ActivityTimer ახლა „Créer ton activité"-ის 9 კატეგორიის 3D იკონს აჩვენებს (ახალი `iconId` ველი `ActiveActivity`-ში), ემოჯის ნაცვლად.

**🎨 ვიზუალური დახვეწა:** „Bravo!" streak badge-ში 🏆 3D თასი (თეთრი ფონი flood-fill-ით მოშორებული); ათვლის წრიდან 3 ფოთოლი მოშორდა; მასკოტის ფოთლები halo-დ დაბალანსდა (მარცხ./თავზე/მარჯ.).

### Smokido — „Remplacer" v2 (mockup) + Parcours Santé + AI Coach (`commits 2b6f9f5, ca1859d, e0952c6`, push-ული)

**„Remplacer cette cigarette" redesign (`2b6f9f5`):** ეკრანი გადაკეთდა თამარის mockup-ზე (light v2): header „cigarette" მწვანე აქცენტით + subtitle + Puff მასკოტი; **„Ton envie va passer" ბარათი** ცოცხალი წრიული მინუტორით **5:00→0:00**; „Choisis une activité saine"; მთავარი ღილაკი **„J'ai résisté à cette envie"** (logs resisted + confetti + Home); მოტივაციური ბარათი. **შენარჩუნდა:** ჩვენი 3D იკონები, „Ajouter ma propre activité", bottom nav. **მოშორდა** ძველი tabs (Tous/Favoris/Récents). ასევე გასწორდა custom აქტივობის ⋮ მენიუს bug (slide-up stacking context → z-index backdrop-ზე მაღლა).

**Parcours Santé ეკrani (`ca1859d`, route `/sante`):** health recovery ეკრანი — Puff ბარათი, **Temps sans cigarette** (რეალური „X jours, Y heures" appStartDate-იდan), 4 ორგანოს აღდგენა (Cœur/Poumons/Cerveau/Sommeil, რეალური % progressStats-იდan) პროგრეს-ბარებით, დასაკეცი **timeline** (20min→1an ✓-ებით), Prochaines étapes (1/3/12 თვე). ⚠️ **არქიტექტura: 4 tab უცვლელი** — ეკრანი Progrès-ის „Récupération santé → Tout voir"-იდan იხსნება (არა მე-5 tab).

**AI Coach ეკrani (`e0952c6`, route `/coach`):** chat UI — მისალმების ბარათი, 4 action (Motivation/Conseils/Plan/Analyse), საუბრის bubbles (Coach/user + typing ანიმაცia), quick chips, შეყვანის ველი. **📌 გადაწყვეტილება: UI + მართული პასუხები** (არა ნამდვილი API ჯერ) — keyword-ით ცნობს თემას (envie/stress/motivation/plan), მოგვიანებით გადავა Claude API-ზე (მხოლოდ `coachReply`). იხსნება „Conseils" ეკრანის ზედა ბარათიდან. **4 tab უცვლელი** (არა მე-5 „Coach" tab).

**📌 პერმანენტული:** თამარი აგზავნის reference mockup-ებს ეკრანებისთვის; ჩვენ light-first (dark mode გადადებული); ყოველი ახალი ეკრანი = route + AppShell (4 tab) + სრული i18n (FR+EN real, 5 = FR ასლი); სექციები რომლებიც mockup-ზე მე-5 tab-ია (Santé, Coach) → ქვე-გვერდებად, ღილაკიდan (არქიტექტურის „max 4 tab" წესი).

---

## 2026-07-23

### Smokido — ეკრანი „Remplacer" (route /remplacer) + 4 საძირკვლის დოკუმენტი

**დოკუმენტაცია (მუდმივი, GitHub-ზე):** შეიქმნა `README.md` (შესასვლელი კარი), `SMOKIDO_PRODUCT_BIBLE.md` (სული/ფილოსოფია), `SMOKIDO_ARCHITECTURE.md` (ჩონჩხი: Home/Progress/Wellness/Profile), `SMOKIDO_DESIGN_SYSTEM.md` (24 სექცია ვიზუალი), `SMOKIDO_ENGINEERING_GUIDELINES.md` **v2.0** (Part II: workflow, git, review, AI collab...). პრიორიტეტი კონფლიქტისას: Bible > Architecture > Design System > Engineering.

**„Remplacer" ეკრანი (`commit c5ae3ff`):** გადაკეთდა modal-იდან **სრულ ეკრანად** — route `/remplacer` (AppShell-ში). ⚠️ **მთავარი: reference mockup-ის ცენტrალური „+" ნავიგაცია არასწორი იყო** → გამოყენებულია **არსებული `BottomNav`** (4 tab, „+"-ის გარეშე), Accueil რჩება აქტიური `/remplacer`-ზე. შიგთავsi: header, კითხვა, segmented control (Tous/Favoris/Récents), 3×3 აქტივობის ბადე (reference-ის 9 აქტივობა + იკონები `icons/replace.tsx`), „Ajouter ma propre activité". სრული i18n (7 ენა), light+dark tokens. Home CTA → navigate `/remplacer`; ძველი ReplaceModal წაიშალა. აქტივობის არჩევა → timer Accueil-ზე (flow უცვლელი).

**„Créer ta propre activité" ეკrani (`commit 05b59ca`):** მეორადი flow „Remplacer"-იდan („+ Ajouter ma propre activité"). route `/activite` **AppShell-ის გარეშe → BottomNav არ არის** (მხოლოდ back arrow → /remplacer), არა tab, არა „+". სრული ფორმა: სახელი (max 40), 3×3 კატეგორიის იკონები (single select), ხანგრძლივობა (dropdown 2-60წთ), მიზეზი (textarea max 120), სიხშირe (segmented), Puff message, „Enregistrer mon activité". Home-ის ვიზუალი (theme tokens, light+dark), სრული i18n (createActivity.* 7 ენა), ლოკალურ storage-ში ინახება (`smokido:customActivities`).

### Smokido — Progress ეკრანის სრული premium redesign + activity 3D იკონები (`commits e3c658c, 550ca27`, push-ული)

**Progress ეკრანი (`e3c658c`):** ავიგო Apple Health-ის სტილის **Hero dashboard** (`ProgressHero.tsx`) — % sans tabac რგოლი (#006B54), „Ton parcours" (4 tile), კვირის AreaChart (gradient fill + ღია წერტილები), achievement (ერთადერთი Puff), Récupération santé (Cœur/Poumons/Cerveau/Sommeil), Temps de vie regagné, Résumé du mois. **ყველა მეტრიკა რეალურ ფორმულაზეა** (`progressStats.ts`): cig évitées, argent (packPrice/20), temps de vie (11წთ/cig), health recovery (saturating curves — გული 3დღე, ძილი 14, ტვინი 30, ფილტვები 90), health score. დაემატა **სიგარეტის კოლოფის ფასის პარამეტრი** Réglages-ში (default 12€). ქვედა ნაწილი გადაკეთდა v2-ზე (8 stat ბარათი lucide იკონებით, Moments de la journée იკონებით) + **ახალი Calendrier** (`ProgressCalendar.tsx`, tracked/partiel/aucun). ⚠️ **გადაწყვეტილება: light-first** (dark mode გადაიდო, Home-ის მსგავსად). მთელი ეკრანის ფონი — ნაზი vertical gradient.

**Détail semaine (`/progres-semaine`) + activités (`550ca27`):** week detail გვerდი გადაკეთდა v2 + სრული i18n. **ActivityTimer** — v2 premium (glass tile, იისფერი პასტელ რგოლი #D6CCFB→#B7A6F7, Puff, i18n); ⚠️ რგოლის გეომეტრია და მინუტორი უცვლელი (თამარის მოთხოვნა). **9 activity იკონი → პრემიუმ 3D PNG** (თეთრი ფონი flood-fill-ით მოშორებული sharp-ით): eau, marche, respiration, lotus, lecture, musique + 3 ახალი აქტივობა (chewing-gum→**fruit**, appeler→**sport**, étirements→**tisane**). **Créer une activité: 9 ახალი კატეგორია** (cardio/dessin/rangement/douche/relaxation/jardinage/cuisine/appel/étudier, `icons/categories.tsx` საერთო მოდული).

**🐞 Bug fix (`550ca27`):** custom აქტივობები ინახებოდა localStorage-ში მაგრამ **არსად იკითხებოდა** → ახლა ჩანს „Remplacer" ბადეზე + დაემატა **რედაქტირება/წაშლა** (⋮ მენიუ, edit → prefill).

**📌 workflow:** node `C:\Program Files\nodejs\node.exe` (bash PATH-ში არ არის); asset detour = sharp flood-fill სკრიპტი; ყოველი ცვლ. მოწმდება `tsc --noEmit` + `npm run build`; locale-ები node-ით ივსება (FR+EN real, სხვა 5 = FR ასლი).

---

## 2026-07-22

### Smokido — 📌 მუდმივი წესი: MULTILINGUAL-FIRST

**პერმანენტული სტანდარტი** (ასევე `livrables/SMOKIDO/smokido/DEVELOPMENT.md`-ში):
- ყოველი ახალი ეკრანი თავიდანვე i18n-ით იგება. **არასდროს** hardcoded ტექსტი კომპონენტში.
- ყველა label, title, button, message, toast, notification, empty state, error → **`t("...")`**.
- ყოველი ახალი key ემატება **ყველა** locale ფაილს: fr, en, es, de, it, ru, ka. დროებითი placeholder ნებადართულია, **გამოტოვებული key არა**.
- ეკრანი დასრულებულად არ ითვლება, სანამ მთელი ხილული ტექსტი i18n-ზე არ არის მიბმული.
- არსებული hardcoded ეკრანები თანდათან მიგრირდება. ეხება ყველა ეკრანს, modal-ს, onboarding ნაბიჯს, notification-ს, reusable კომპონენტს.

---

## 2026-07-22

### Smokido — i18n foundation განხორციელდა ✅

**ბიბლიოთეკა:** **i18next + react-i18next** (React-ის სტანდარტი; pluralization, ცვლადები, Intl date/number/currency, ზედმეტი dependency-ის გარეშე). TanStack/Vite-თან იდეალურად ჯდება.

**შექმნილი ფაილები:**
- `src/i18n/config.ts` — i18next init + persistence + device detection helpers
- `src/i18n/languages.ts` — ცენტrალური კონფიგი (code, nativeName, flag, enabled, DEFAULT=fr)
- `src/i18n/locales/{fr,en,es,de,it,ru,ka}.json` — იდენტური keys; **FR + EN ნამდვილი**, დანარჩენი დროებით FR-ის ასლი
- `src/components/LanguageScreen.tsx` — ენის არჩევის premium ეკრანი (first-launch + Réglages)

**გამართული:**
- პირველ გაშვებაზე: device-language detection (fallback FR) → ენის ეკრანი → onboarding (`routes/index.tsx`)
- persistence: `localStorage` (`smokido:lang` + `smokido:langChosen`), restart-ზე აღდგება
- **Réglages → „🌍 Language"** ხელახლა ხსნის; ცვლილება მთელ აპლიკაციას მაშინვე ანახლებს (restart-ის გარეშე)
- ახალი ენა = მხოლოდ ახალი JSON + 1 ხაზი `languages.ts`/`config.ts`-ში (UI-ს ცვლილების გარეშე)

**მიგრირებული t()-ზე (hardcoded strings აღარაა):** BottomNav, HomeScreen, Onboarding (4 ეკრანი), WeeklyStats, LanguageScreen.

**ჯერ მიგრირებელი (hardcoded დარჩა):** ConseilsScreen, ProgressionScreen, SettingsScreen (Language ღილაკის გარდა), ReplaceModal, ActivityTimer, AppShell (notifications).

**⚠️ თარგმანი ჯერ არ კეთდება** — მხოლოდ არქიტექტura; ნამდვილი თარგმანები UI-ს დასრულების შემდეგ. სესია ერთხელ გაითიშა მუშაობისას, მაგრამ ფაილები შენარჩუნდა და აღდგა (HTTP 200, კომპილაცია სუფთა).

---

## 2026-07-22

### Smokido — i18n (მრავალენოვანი) არქიტექტურის გეგმა 📋

**სტატუსი:** გეგმა/spec — **ჯer არ ხორციელდება.** თამარმა მოიტანა დეტალური პრომპტი Smokido 2.0-ის internationalization-ისთვis.

**მთავარი პრინციპი (თამარის ხაზგასმა):** ➡️ i18n არქიტექტura უნდა ჩაიდოს **თავიდანვე** (არა ბოლოს), რომ ყოველი ახალი ეკრანი ავტომატურად თავსებადი იყოს ყველა ამჟამინდელ და მომავალ ენასთან. **თარგმნა ახლა არ ხდება** — მხოლოდ საძირკველი ეწყობა; რეალური თარგმანები მას შემდეგ, რაც მთელი UI/UX დასრულდება.

**მოთხოვნები:**
- ყველა ხილული ტექსტი translation ფაილებიდან (`t("home.replaceCigarette")`), **არასდროს** hardcoded strings კომპონენტებში.
- სტრუქტura: `/locales/{fr,en,es,de,it,ru,ka}.json` — იდენტური keys ყველა ფაილში, nested (მაგ. `home.dailyGoal`).
- **ენის არჩევის ეკრანი** პირველ გაშვებაზე: Puff + „Choose your language" + 7 ენა დროშებით + Continue; არჩეული ენა = **mint premium კაფსula** (Smokido სტილი).
- მხარდაჭერილი ენები: **FR, EN, ES, DE, IT, RU, KA (ქართული)**. ახალი ენა = მხოლოდ ახალი JSON ფაილი, UI-ს ცვლილების გარეშე; მასშტაბირებადი 20+ ენამდე (PT, NL, PL, TR, AR, JA…).
- **Profil**-ში → „🌍 Language" → ხელახლა ხსნის ენის ეკრანს; ცვლილება მთელ აპლიკაციას მაშინვე ანახლებს.
- **Persistence:** არჩეული ენა ლოკალურად ინახება, restart-ზე აღდგება.
- **Device language:** პირველ გაშვებაზე თუ ჯer არ არჩეულა → ტელეფონის ენა (თუ მხარდაჭერილია), თორემ default = **FR**. ხელით შეცვლა ყოველთვის შესაძლებელი.
- **Responsive ტექსტი:** DE/RU/KA უფრო გრძელია ვიდრე FR — **არა** fixed-width; ყველა კომპონენტმა უნდა უძლოს გრძელ თარგმანს.

**შემდეგი ნაბიჯი:** i18n foundation-ის აწყობა (locales + t() + language screen + persistence + device detection), მერე ეკრანების გაგრძელება უკვე t()-ით.

---

## 2026-07-21 / 2026-07-22

### Smokido v2 — Home + Onboarding სრული premium redesign

**კონტექსტი:** ლეომ Lovable-ში ბაგები გაასწორა, თამარმა ახალი კოდი გადმოწერა. **Lovable პაუზაზე**, მუშაობა პირდაპირ კოდში (`livrables/SMOKIDO/smokido`, `npm run dev` → localhost:8081). ცვლილებები ცოცხლად მოწმდება ტელეფონზეც (192.168.1.170:8081, იმავე WiFi). ⚠️ PWA service worker ქეშავს — ტელეფონზე „clear site data" საჭიroა განახლებისთვის.

**გარემო + git:** დაყენდა **Node.js LTS v24** + npm; skill-ები (**shadcn/ui**, Anthropic **frontend-design**). სმოკიდოს შეექმნა **საკუთარი git-repo** → GitHub **`tamarI-TM/smokido` (private)**. commit-ები: `e6cc68e` (base+home), `9a551e8` (home tweaks+stats), `ddcd2c6` (onboarding).

**Home ეკრანი v2:** glassmorphism, ცის გრადიენტი, პალიტრა #22C55E/#B8F3CF/#FFE99A; წრიული progress ring; streak (3D ალის PNG იკონი, ფონი #FAF5F5); „Tu peux fumer maintenant" ნაზი ციმციმი; ბრენდის ფერი **#006B54** (ღილაკი/ring/ციფრი); „J'ai fumé" ↔ „Remplacer" გადანაცვლდა; „J'ai fumé"-ს ახალი 3D სიგარეტის PNG (თეთრი ფონი flood-fill-ით მოცილდა). დაემატა **4-ბარათიანი WeeklyStats სექცია** (Remplacées/Santé/Argent/Temps) reusable `MiniSparkline`-ით (placeholder მონაცემები, მოგვიანებით რეალურს დაუკავშირდება).

**Onboarding v2 — ოთხივე ეკრანი:**
- საერთო: premium ატმოსფერული ფონი (ერთიანი mint გრადიენტი, ღრუბლები, ფოთლები Puff-თან ახლოს, ნაწილაკები); reusable **`OnboardingButton`** (mint→green, disabled/active, ისრით, light+dark).
- ეკრანი 1 (სახელი): გადიდებული Puff, name field custom profile icon-ით.
- ეკრანი 2 (სიგარეტები/დღე): premium number ბარათი **−/+ ღილაკებით**, დახვეწილი slider, encouragement ბარათი.
- ეკრანი 3 (ინტერვალი): **2×2 selection ბარათები** checkmark-ით; achievement summary ბარათი; **Puff-ის რეაქციები** (30min→ღიმილი, 1h→wink, 1h30→cheer, 2h→ოქროს ✨ 0.7წმ).
- ეკრანი 4 (celebration): journey dashboard (Rythme/Durée ფერად icon-ებით), motivation ბარათი (coral), და **„ritual" ანიმაცია** „Commencer"-ზე (ფოთლების აფრქვევა + „✨ Bienvenue dans Smokido" → რბილი გადასვლა მთავარ ეკრანზე).

**⚠️ ღია (მასკოტი):** ღრუბელი ჯერ **SVG Puff-ია** (placeholder). თამარის reference-ებზე 3D Pixar ღრუბელია — საჭიroა **გამჭვირვალე PNG** ჩასანაცვლებლად (Claude 3D რენდერს SVG-ით ვერ აკეთებს). ერთდროულად გააუმჯობესებს Home-საც და Onboarding-საც.

**რჩება:** 3D Puff PNG; WeeklyStats-ის რეალურ მონაცემებზე მიბმა (სიგარეტის ფასი + „ჯანმრთელობის ქულის" ფორმულა); v2-ის გავრცელება დანარჩენ ეკრანებზე (Progrès/Conseils/Réglages/Profil); მონეტიზაცია (ერთჯერადი unlock = In-App Purchase).

---

## 2026-07-19

### სმოკიდო — ლეოს აპლიკაცია: ანალიზი და სტორებისთვის სტრატეგია

**კონტექსტი:** თამარმა მოიტანა ლეოს აპლიკაცია **Smokido** — სიგარეტის *თანდათანობითი შემცირების* (არა მკვეთრი თავის დანების) აპლიკაცია. მიზანი: გავაუმჯობესოთ დიზაინი და ფუნქციები, დავამატოთ მონეტიზაცია და გამოვაქვეყნოთ **App Store + Play Store**.

**აპლიკაციის კონცეფცია:** მომხმარებელი ირჩევს რამდენ სიგარეტს ეწევა დღეში, მიზანი ავტომატურად მცირდება −1 კვირაში, 0-მდე. მოქმედებები: „J'ai fumé" / „Remplacer une cigarette" (15წთ აქტივობით ჩანაცვლება). ინტერვალის ტაიმერი, streak, კვირის გრაფიკი, რჩევები, PDF ექსპორტი. Duolingo-ს სტილი, ღრუბლის მასკოტი „Puff". ინტერფეისი ფრანგულად.

**ტექნიკა:** React 19 + Vite + TanStack + Tailwind v4 + shadcn/ui. მონაცემები მხოლოდ localStorage-ში (backend/ანგარიშები არ არის). გაკეთდა **Lovable**-ით. მდებარეობა: `livrables/SMOKIDO/smokido/`.

**მიღებული გადაწყვეტილებები:**
- **მონეტიზაცია = ერთჯერადი unlock** (non-consumable). აპლიკაციაში → **Apple/Google In-App Purchase**, **არა Stripe** (Apple კრძალავს ციფრული პროდუქტისთვის). Stripe მხოლოდ მაშინ, თუ ვებსაიტზეც გავყიდით.
- **სტორებამდე გზა:** ვებ-აპლიკაცია → **Capacitor**-ით ვაქცევთ ნეიტივ აპად (iOS + Android). Apple Developer 99$/წელი + Google Play 25$ ერთხელ. თამარს **Mac აქვს** → iOS build შესაძლებელია. საჭიroა Privacy Policy, ხატულა, screenshots.
- **სამუშაო პროცესი: Lovable პაუზაზე** — Claude მუშაობს პირდაპირ კოდში (ერთადერთი „წყარო"), git-ით. ლეოს მიმდინარე ბაგ-ფიქსი Lovable-ში **ბოლო** ცვლილებაა; ამის მერე Lovable-ს არავინ ეხება.
- **დიზაინი:** მასკოტი **Puff** რჩება გმირად (თამარს ძალიან მოსწონს). მის ირგვლივ ავაშენებთ ერთსტილიან **SVG იკონკების ოჯახს** — Claude დახატავს, ჩაანაცვლებს ყველა ემოჯს (👋, 🌱, 🎉, აქტივობების emoji).

**შემდეგი ნაბიჯი:** ლეო ასრულებს 2-3 ბაგის გასწორებას Lovable-ში → თამარი გადმოწერს ახალ კოდს → Claude იწყებს ოპტიმიზაციას (ემოჯების აუდიტი, დიზაინი, unlock, სტორები).

**ღია საკითხი:** free vs premium ფუნქციების ხაზი (რა უფასოა, რა unlock-ის მიღმა).

---

## 2026-07-13

### მთავარი გვერდის დახვეწა — favicon, Google site name, hero intro ანიმაცია

**კონტექსტი:** ინსპირაცია — **sincerelyjules.com** (თამარმა მოიწონა მისი გახსნის სტილი და Google-ის შედეგის იერი).

**გაკეთდა:**
- **favicon** შეიქმნა (`favicon.svg`) — თეთრი წრე, თხელი მუქი კიდე, შავი „T" ინიციალი. დაემატა **ყველა გვერდზე** (ბრაუზერის ჩანართი + Google). commits `6e1ef05`, `87daa27`, `a6fb0c3`.
- **Google site name → „Tamari Maisashvili"** (`og:site_name` + schema WebSite `name`; ბრენდი „Tamari's Journal" → `alternateName`). მიზანი: Google-ის შედეგში ზედა ხაზზე თამარის სახელი + წრე „T"-თი. commit `981816f`.
- Search Console-ში **მთავარი გვერდის ხელახლა ინდექსაცია** მოთხოვნილი (ცვლილებების დასაჩქარებლად).
- **Hero intro ანიმაცია (splash)** — გვერდის გახსნისას:
  - ღია ივუარის ფარდა (`rgba(250,248,244,.87)` = 87%) მთელ ეკრანზე.
  - ცენტrში: **«** ბრჭyali (charcoal) + **DREAM / BELIEVE / ACHIEVE** ერთმანეთის ქვეშ (Cormorant Garamond serif, taupe, uppercase).
  - **~3 წამში** ნაზად ქრება და hero (ვერსალის ბაღები) ჩანს; `prefers-reduced-motion` პატივსცემული.
  - CSS-only: page-scoped `<style>` + overlay `<body>`-ს თავში. ჩნდება ყოველ გახსნაზე. commits `27716f9` → `9aeeeec`.
  - ⚙️ ადვილი შესაცვლელი: სიტყვები, ფერი, ზომა, ხანგრძლივობა, opacity — ყველა ერთ `<style>` ბლოკშია `index.html`-ში.
- ⚠️ ძველი hero-ტექსტი („ორი თაობა...") **არ შეცვლილა** — intro ცალკე ფენაა ზემოთ, ადვილად მოსახსნელი.

---

## 2026-07-11

### SEO / référencement Google — tamarisjournal.com

**მიზანი:** საიტი Google-მა იპოვოს, დააინდექსოს და სახელით/ბრენდით ძებნისას გამოჩნდეს.

**ტექნიკური საფუძველი (გაკეთდა):**
- meta description + Open Graph + canonical დაემატა 4 მთავარ გვერდზე (მთავარი, ჟურნალი, about, გზამკვლევის გაყიდვის გვ.). 16 სტატიას უკვე ჰქონდა.
- `sitemap.xml` შეიქმნა (20 საჯარო გვერდი); `robots.txt` შეიქმნა (Allow + sitemap).
- გადახდის გვერდი (`გადახდა.html`) → `noindex`.
- schema.org სტრუქტურული მონაცემები (JSON-LD: Person + WebSite) მთავარ გვერდზე — „Tamari Maisashvili" + sameAs (Instagram/TikTok/YouTube/Facebook).
- commits: `919bdd9` (meta/sitemap/robots), `58070d5` (verification file), `1d04f65` (schema.org).

**Google Search Console:**
- property დაემატა: `https://tamarisjournal.com` (URL prefix).
- დადასტურდა **Fichier HTML** მეთოდით (`googleb44d31740f065856.html` root-ში). ⚠️ **ეს ფაილი არ წაიშალოს** (თორემ დადასტურება დაიკარგება).
- `sitemap.xml` გაიგზავნა → „Opération effectuée", **20 გვერდი აღმოჩენილი**.

**რჩება / შემდეგ:**
- დაინდექსება რამდენიმე დღე/კვირას სჭირდება (ახალი property).
- ~1 კვირაში შემოწმდეს Search Console → Pages (რამდენი დაინდექსდა).
- (არჩევითი) მთავარი გვერდის ხელით ინდექსაცია: „Inspection de l'URL → Demander l'indexation".
- სოც. ბიო-ბმულები `tamarisjournal.com`-ზე — თამარს უკვე დამატებული აქვს.

**📌 წესი:** ახალი გვერდის დამატებისას — დაუმატე meta description + OG და ჩაამატე `sitemap.xml`-ში.

---

## 2026-07-09

### Git-ის ინსტალაცია მეორე კომპიუტერზე + Ritualis-ის გვერდის დროებით მოხსნა

**კონტექსტი:** თამარის ძირითადი კომპიუტერის კვების შნური 2 დღის წინ გაფუჭდა, ამიტომ სესია მეორე კომპიუტერიდან გაგრძელდა. ამ მანქანაზე Git დაინსტალირებული არ იყო, ამიტომ GitHub-თან წვდომა ჯერ არ არსებობდა.

**გაკეთდა:**
- **Git დაინსტალდა** მეორე კომპიუტერზე (`winget install --id Git.Git`, ვერსია 2.55.0). `.git/config`-ში ჩაშენებული token ცოცხალი აღმოჩნდა, `git fetch`/`push` მუშაობს.
- ⚠️ **უსაფრთხოების ღია საკითხი (ისევ):** remote URL-ში plaintext token (`ghp_...`) კვლავ ჩაშენებულია. სჯობს როტაცია + Git Credential Manager.
- **Ritualis-ის გვერდი დროებით მოიხსნა საიტიდან** (ლეოს თხოვნით, სანამ აპლიკაცია App Store-ზე არ ავა):
  - `ritualis.html` გავიდა `livrables/site-web/`-იდან → `livrables/_hidden/` (გამოქვეყნებული საქაღალდის გარეთ, დაცული, git-ისტორია შენარჩუნებული `git mv`-ით)
  - `index.html` (მთავარი): Ritualis-ის ბარათი ჯერ მოიხსნა, მერე დაბრუნდა **ფიქტიურად** (სათაური უბრალო ტექსტი, ბმულის გარეშე); „გზა / La Voie" ბარათი მოიხსნა; ბადე დროებით 2-სვეტიანი (`projects-grid`, `--3`-ის გარეშე)
  - `article-ritualis-istoria.html`: „გაიცანი Ritualis →" CTA მოიხსნა (სტატია დარჩა)
  - HTML-ში ყველგან დარჩა კომენტარები, თუ როგორ დაბრუნდეს ყველაფერი App Store-ის შემდეგ
- გამოქვეყნდა: commit `81a3fbc` → push → Vercel auto-deploy

**ღია საკითხები:**
- **LED Face Mask / Beauty device** — `context/import/`-ში ახალი პროდუქტის დოკუმენტები (ინვოისი, მომწოდებელი, მარკეტინგი, Facebook სცენარი), ჯერ კონტექსტში აღურიცხავი. დასაზუსტებელია: ახალი ბიზნეს-მიმართულებაა (ონლაინ მაღაზიის პირველი პროდუქტი?)
- `livrables/site-web/article-mogzauroba.html` — ახალი სტატია, ჯერ დაუკომიტებელი
- GitHub token-ის როტაცია/Credential Manager

### Lemon Squeezy — გაყიდვის სისტემა ცოცხლად (go-live)

**კონტექსტი:** ბუტიკი Lemon Squeezy-მ დაადასტურა (identity Actif). დღეს სრული end-to-end გაშვება და ტესტირება.

**გაკეთდა:**
- **სატესტო ყიდვა (Test Mode)** წარმატებული — მთელი ფლოუ (ყიდვა → ელფოსტა → „წვდომა მასალებზე" → მასალების გვერდი) მუშაობს. აიფონით, საიტიდან.
- **Calendly-ს დროის სარტყელი გასწორდა** (ამერიკული → Europe/Paris); დამადასტურებელი ელფოსტა სწორ დროს აჩვენებს (14h00 CET).
- **პროდუქტების გამიჯვნა დადასტურდა:** 49€ (გზამკვლევი+ბონუსი) · 69€ (+ვიდეო) · 119€ (+კონსულტაცია).
- **პროდუქტები Test → Live Mode** („Copy to Live Mode"); საიტი ცოცხალ ბმულებზე გადავიდა: 49€→`95a9c93c`, 69€→`dfd1e393`, 119€→`ea444ec5` (`გადახდა.html`, commit `4d6aa86`).
- **ძველი golden-skin ინფო გასუფთავდა** LS-ში (description → „Vente de produits numériques (guide PDF éducatif et cours en ligne)").
- **2FA ჩაირთო** (backup კოდები შენახული); **საგადასახადო ინფო გაიგზავნა** („Soumis"); ბანკი დაკავშირებული (`**** 0788`). „Action requise" = მხოლოდ 2FA (გაყიდვას არ აფერხებდა).

**⚠️ ბაგი და გამოსწორება — PDF „Access Denied":**
- ცოცხალ რეჟიმში PDF-ის გადმოწერა აბრუნებდა `AccessDenied`-ს (ელფოსტის ახალი ბმულიდანაც).
- **მიზეზი:** ფაილების სახელებში ქართული ასოები + ფრჩხილები + ჰარეები → signed download URL-ის კოდირება ტყდებოდა. (ვიდეო/კონსულტაცია — მარტივი ბმულები — მუშაობდა; ფაილები LS-ში სწორად იყო ატვირთული.)
- **გამოსწორება:** ფაილები გადაერქვა ლათინურ სახელებზე (`Guide-Emigrant-France.pdf`, `Bonus-OQTF-IRTF.pdf`) და ხელახლა აიტვირთა სამივე ცოცხალ პროდუქტზე. ✅ გადმოწერა მუშაობს.
- **📌 წესი:** Lemon Squeezy-ზე ფაილები ყოველთვის **ლათინური (ASCII) სახელით**, სპეც-სიმბოლოების გარეშე.

**შედეგი:** გაყიდვის სისტემა სრულად ცოცხალია, მზადაა რეალური კლიენტებისთვის.
**რჩება:** სატესტო 100% კუპონის (`E3NDE0NW`) წაშლა; (არჩევითი) 1 რეალური ფასიანი ყიდვა + refund.

### ახალი ბიზნესი — Skincare აპარატი (CONTEXT.md განახლდა, commit `6fcfba0`)
- ახალი ფიზიკური პროდუქტის მიმართულება: **microcurrent/EMS სახის აპარატი** (JK-818, rose gold; JK Future / ჩინეთი) + Made in France გამტარი შრატი ერთ ნაკრებად, razor & blades მოდელით. აპარატის ნიმუში შეძენილია (2026-07-06, CE+RoHS მიღებული).
- **golden-skin** = 2 წლის წინანდელი ძველი skincare საიტი (ცალკე); ძველი Stripe მაშინდელია, ამ ბიზნესს არ სჭირდება (და Lemon Squeezy-ს ფიზიკური პროდუქტისთვის ვერ გამოვიყენებთ).
- **აქტიური ამოცანა:** ფრანგული (Made in France) გამტარი შრატის მომწოდებლის მოძიება (low MOQ, microcurrent-თან თავსებადი). ცალკე გვერდი + ცალკე გადახდის პლატფორმა.

### 💡 ახალი ბიზნეს იდეა — ონლაინ მაღაზია: შინაური ცხოველების აქსესუარები (შემდეგ სესიაზე)
- თამარს სურს ონლაინ მაღაზიის დაწყება **ძაღლებისა და კატების აქსესუარებით.**
- მომწოდებელს ეძებს **Alibaba**-ზე; უკვე აქვს რამდენიმე კარგი პროდუქტი ნაპოვნი, ძიება გრძელდება.
- **შემდეგი ნაბიჯი:** სანდო, კარგი ფურნისორის (მომწოდებლის) მოძიება და შემოწმება.
- ⏭️ **სრული მუშაობა შემდეგ სესიაზე** — თამარს სჭირდება სრული დახმარება (პროდუქტის არჩევა, მომწოდებლის შემოწმება, მაღაზიის/გვერდის აწყობა, გადახდის სისტემა).
- შენიშვნა: ეს მე-3 ბიზნეს მიმართულებაა — ცალკეა ციფრული გზამკვლევისა (Lemon Squeezy) და skincare აპარატისგან.
- ⏭️ **შემდეგი სესიის დღის წესრიგი** (თამარი ჯერ ვერ მოიცალა): თამარი გააზიარებს **Alibaba-ზე უკვე ნაპოვნ პროდუქტებს** → ერთად შევხედავთ → **სტრატეგია დავსახავთ:** 1) რომელი პროდუქტებით დაიწყოს, 2) რომელი ბაზარი, 3) რომელი პლატფორმა (ფიზიკურია → Shopify/Wix). დაწყების ფრაზა: **„ცხოველების ონლაინ მაღაზია დავიწყოთ"**.
---

## 2026-07-01

### გაყიდვის სისტემა აეწყო (Lemon Squeezy + Calendly + YouTube)

**არჩეული stack:**
- **Lemon Squeezy** — გადახდა + PDF/ბონუსის ავტომატური მიწოდება (Merchant of Record → EU დღგ). საკომისიო ~5% + 0.50€, ყოველთვიური გადასახადის გარეშე.
- **Calendly** — VIP 45წთ კონსულტაცია (→ Google Meet)
- **YouTube unlisted** — ვიდეო ლექციები (playlist)
- **Vercel საიტი** — vitrine + გაყიდვის გვერდი

**გაკეთდა:**
- Lemon Squeezy მაღაზია (`tamarisjournal`) + **3 პროდუქტი**:
  - 49€ ძირითადი (გზამკვლევი + ბონუსი)
  - 69€ სრული (+ ვიდეო ლექციები — YouTube playlist „Links"-ში)
  - 119€ VIP (+ Calendly კონსულტაცია „Links"-ში)
  - თითოს confirmation modal + „წვდომა მასალებზე" ღილაკი (→ შეკვეთის გვერდი, ცარიელი link)
- Calendly „VIP კონსულტაცია" event, 45წთ, Google Meet
- **`გადახდა.html` მთლიანად გადაკეთდა:** ყალბი ბარათის/საკონტაქტო ფორმა წაიშალა, ჩაჯდა 3 პაკეტის ბარათი რეალური **Lemon Squeezy checkout**-ით (lemon.js overlay) + trust badges
- გამოქვეყნდა: commit `f80a835`

**რა დარჩა (გაშვებამდე):**
- ⚠️ Lemon Squeezy მაღაზიის **აქტივაცია** (ბიზნესის მონაცემები + payout/ბანკი) — რეალური გადახდებისთვის
- სატესტო ყიდვა end-to-end (ყიდვა → მიწოდება → refund)
- ბონუსის სახელის გათანაბრება (LS „დეპორტი/OQTF/IRTF" vs გვერდზე „მიგრაციული პაქტი")
- იურიდიული გვერდები (წესები, refund policy, კონფიდენციალურობა)

---

## 2026-06-27

### საკუთარი დომენი — tamarisjournal.com
- თამარმა Vercel-ზე შეიძინა და დააკავშირა დომენი **tamarisjournal.com**
- საიტი ახლა ცოცხალია საკუთარ დომენზე (SSL ავტომატური); `tamarijs-journal.vercel.app` ისევ აქტიურია
- WebFetch-ით დადასტურდა, რომ საიტი სრულად იხსნება tamarisjournal.com-ზე
- კონტექსტი განახლდა: DESIGN-SYSTEM live URL + მეხსიერება (project-site-vercel)

---

## 2026-06-26

### Ritualis-ის გვერდის გაუმჯობესება + დიზაინ-სისტემის სრულყოფა

**Ritualis (`ritualis.html`):**
- ახალი **მუქი split hero** (ტექსტი მარცხნივ + აპლიკაციის ვიზუალი მარჯვნივ), გზამკვლევის hero-ს მოდელით
- **ფუნქციების სექცია** — 6 ქართული ბარათი ხატულებით (ბუსტ-რეჟიმი, თვალყური ადევნე ყველაფერს, ყოველდღიური გამოწვევა, დააგროვე და აიწიე დონეზე, სერიის ძალა, იზეიმე გამარჯვებები)
- 2 ახალი ვიზუალი (`ritualis-hero.png`, `ritualis-features.png`); ძველი ფოტოები (ritualis-1/2.jpg) წაიშალა, PHOTO 2 მოიხსნა
- CTA: „App Store · Google Play — მალე"

**დიზაინ-სისტემა (`DESIGN-SYSTEM.md`):**
- დაემატა ზუსტი სპეცები: byline, drop cap, ღილაკები, ფოტოები (aspect-ratios), `<head>` boilerplate, ფერის იერარქია, გვერდის skeleton-ები, app-hero, features grid
- hover ეფექტი #B8AA98 გავრცელდა ყველა რედაქციულ გვერდზე (article share, journal ფილტრები/more, guide ბმულები); გაყიდვების CTA უცვლელი

**ახალი ბრძანება:** `/gverdi` — გვერდის აგება DESIGN-SYSTEM.md-ის მკაცრი დაცვით

**სხვა:** მთავარ გვერდზე ფოტოს hover-zoom (stories + projects); გზამკვლევის ბოლო სექციის შესწორება (6px → 17px)

---

## 2026-06-23 / 2026-06-24

### Ritualis-ის გვერდი, საიტის hover სისტემა და დიზაინ-სისტემა

**Ritualis-ის გვერდი (`ritualis.html`), სრული გადაკეთება:**
- ბლოგის სტილიდან საიტის სარედაქციო article-სტრუქტურაზე გადაყვანა (`art-*`): drop-cap შესავალი, ცენტრალური პასაჟები, pull-quote, ავტორის foot
- byline გასწორდა: „Indie Developer ·" მოიხსნა, დარჩა „ლეო / ავტორი". hero-ის ქვესათაური და ბოლო ციტატა ადგილები გაცვალეს (დუბლირება მოიხსნა)
- ტექსტის ზომები: ძირითადი აბზაცები 16px, pull-quote 22px (2 ხაზზე)
- ორივე მარკეტინგული ფოტო (`ritualis-1/2.jpg`) სრულ სიგანეზე banner-ად, გვერდითა ტექსტი შესავალში გაერთიანდა
- დაემატა „Journal Letters / Tamari's Journal" newsletter სექცია (index.html-დან verbatim). CTA გამარტივდა (მხოლოდ ღილაკები)
- გამოქვეყნდა: commit `516bbc6`

**საიტის hover სისტემა (#B8AA98 = `--taupe`):**
- ყველა კლიკადი ელემენტი hover-ზე #B8AA98-ზე გადადის: ღილაკები (taupe outline), `link-more`, footer-ის ბმულები, follow handle
- მთავარ გვერდზე ბარათების ნავიგაცია გადაკეთდა: „გაიგე მეტი" ღილაკის ნაცვლად სათაური გახდა ბმული (taupe hover). projects, vlogs (h4), თემები (`.cat` fill), მომავლის სივრცე (`.fp`)
- გამოქვეყნდა: commit `f3b505b`

**დიზაინ-სისტემა + ავტომატიზაცია:**
- შეიქმნა `livrables/site-web/DESIGN-SYSTEM.md`: ფერები, ფონტები, ტიპოგრაფიის მასშტაბი, hover წესი, სტრუქტურა/კომპონენტები, ახალი გვერდის checklist, responsive წესი (desktop / ტაბლეტი / მობილური)
- შეიქმნა `/Tamari` ბრძანება (`.claude/commands/Tamari.md`): დიზაინის მუდმივი წესის DESIGN-SYSTEM.md-ში ჩასაწერად, რომ ერთი და იგივე ორჯერ არ ითქვას
- CLAUDE.md-ში დაემატა მითითება დიზაინ-სისტემასა და `/Tamari`-ზე
- გამოქვეყნდა: commit `e1a8c2e`

**ტექნიკური:**
- byline-ის inline ჩასწორებები (36px beige ავატარი) შენარჩუნდა article-ის base CSS-ზე
- ცვლილებების შემოწმება Edge InPrivate-ში (ლოკალური ფაილის ქეშის ასარიდებლად)

**ღია საკითხები:**
- 9 ახალი სურათი + წაშლილი `intro-bonsai-book.jpg` ჯერ დაუკომიტებელია
- GitHub remote-ის URL-ში ჩაშენებული token (უსაფრთხოება, სჯობს credential-manager-ით ჩანაცვლდეს)

---

## 2026-06-19 / 2026-06-20

### Tamari's Journal ვებსაიტი — სრული Sales Funnel

**გაკეთდა:**
- სრული სტატიკური ვებსაიტი აიგო `livrables/site-web/`-ში: `index.html`, `about.html`, `journal.html`, სტატიების გვერდები
- `emigrantis-gzamkvlevi-safrangetshi.html` — "ემიგრანტის გზამკვლევი საფრანგეთში"-ის გაყიდვების გვერდი Claude Design-იდან სკრუპულუზურად გადმოტანილია: dark hero, 3D წიგნის მოდელი, კონტენტის accordion, შეთავაზება, ავტორი, FAQ, sticky buy bar
- `გადახდა.html` — გადახდის გვერდი Claude Design-იდან გადმოტანილია: 3 პაკეტი (49€ / 69€ / 119€), კონტაქტის ფორმა, ბარათი/PayPal, შეკვეთის summary, trust strip
- CSS/JS ინტეგრაცია: `guide.css` FAQ accordion სტილებით, `site.js` accordion ლოგიკით
- `index.html`-ზე გზამკვლევის პრომო სექცია დაემატა (ტექსტი მარცხნივ + წიგნის ყდა მარჯვნივ)
- ყველა CTA ღილაკი (`შეიძინე`, sticky bar) `გადახდა.html`-ზე მიბმულია
- სურათები Claude Design-იდან ჩამოტვირთულია: `guide-cover.jpg`, `intro-bonsai-book.jpg`

**ტექნიკური გადაწყვეტილებები:**
- ყველა inline სტილი Design-ის bundle-იდან verbatim დაკოპირდა
- CSS `grid-template-rows: 0fr → 1fr` ხრიკი FAQ accordion-ის სიმრბილისთვის
- Nav scroll threshold hero-ს სიმაღლეზე (`heroEl.offsetHeight`) მორგებულია

**GitHub-ზე ატვირთვის გეგმა:**
- თამარს GitHub-ის უფასო ანგარიში აქვს, repo ჯერ შექმნილი არ არის
- გეგმა: public repo → GitHub Pages უფასოდ → `livrables/site-web/` ან root-ზე გადატანა

---

## 2026-06-09

### Jarvis-ის საწყისი ინსტალაცია
- Workspace პერსონალიზებულია თამარი მაისაშვილი-ციხელაშვილისა და ლეო იასარევიჩისთვის
- მდებარეობა: ვილერბანი (ლიონი), საფრანგეთი
- პროფილი: დამოუკიდებელი პროფესიონალი + მეწარმე (თამარი) / indie developer + მეწარმე (ლეო)
- თამარის ძირითადი საქმიანობა: ფრანგულ-ქართული თარჯიმანი + ციფრული პროდუქტები
- ლეოს ძირითადი საქმიანობა: Ritualis აპლიკაცია + AI/SaaS კვლევა
- მოკლევადიანი მიზნები: გზამკვლევის ვებსაიტი + Sales Funnel (თამარი), Ritualis-ის გაშვება (ლეო)
- გრძელვადიანი ხედვა: ციფრული ეკოსისტემა, TrottiLink, Ritualis საერთაშორისო მასშტაბით
- პრიორიტეტი: მარკეტინგი/გაყიდვები (თამარი), პროდუქტის განვითარება (ლეო)
- კომუნიკაციის სტილი: კონტექსტის მიხედვით

### კომუნიკაციის ენის წესი დადგენილია
- თამართან კომუნიკაცია — ქართულად (კომფორტული და ბუნებრივი ენა)
- ლეოსთან კომუნიკაცია — ფრანგულად (მშობლიური ენა)
- ენა ავტომატურად შეირჩევა იმის მიხედვით, თუ ვინ წერს
