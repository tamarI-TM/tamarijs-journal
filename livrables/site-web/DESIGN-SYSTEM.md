# Tamari's Journal — დიზაინ-სისტემა (Design System)

> ვებსაიტის ერთიანი ვიზუალური იდენტობა: ფერები, ფონტები, ზომები, ეფექტები, სტრუქტურა.
> **ეს არის ერთადერთი წყარო (single source of truth).** ყოველი ახალი გვერდი ამ წესებით აიგება, ნულიდან კი არა.
> ფაილების ადგილი: `livrables/site-web/` · ცოცხალი საიტი: **tamarisjournal.com** (+ tamarijs-journal.vercel.app)

---

## 0. ფილოსოფია / იდენტობა
- **Editorial luxury** სტილი: მშვიდი, ნაზი, ქართული ჟურნალის ესთეტიკა.
- ფონი ყოველთვის ღია (ivory), ტექსტი მუქი (charcoal), ერთადერთი აქცენტი — **taupe #B8AA98**.
- ბევრი ჰაერი (დიდი section padding), serif სათაურები, sans ტექსტი, mono მცირე იარლიყები.
- ფოტოები სუფთა (`object-fit: cover`), hover-ზე მსუბუქი zoom.

---

## 1. ფერები (styles.css `:root`)
| ცვლადი | მნიშვნელობა | გამოყენება |
|---|---|---|
| `--ivory` | `#FAF8F4` | მთავარი ფონი |
| `--ivory-2` | `#F6F6F6` | ალტერნატიული ფონი (`.band`) |
| `--charcoal` | `#2B2B2B` | ძირითადი ტექსტი, სათაურები |
| `--charcoal-70` | `rgba(43,43,43,.70)` | მეორეხარისხოვანი ტექსტი |
| `--charcoal-45` | `rgba(43,43,43,.45)` | მკრთალი ტექსტი (meta, dim) |
| `--beige` | `#D6C3A5` | eyebrow ხაზი, ლეოს ავატარის ფონი |
| `--taupe` | **`#B8AA98`** | **აქცენტი + ყველა hover ეფექტი** |
| `--taupe-soft` | `#C9BCA9` | რბილი taupe |
| `--line` | `rgba(43,43,43,.12)` | ბორდერები |
| `--line-soft` | `rgba(43,43,43,.07)` | რბილი ბორდერი |

---

## 2. ფონტები
| ცვლადი | ფონტი | გამოყენება |
|---|---|---|
| `--serif` | Noto Serif Georgian | სათაურები (h1–h4), წამკითხავი ტექსტი article-ში |
| `--sans` | Noto Sans Georgian | body ტექსტი, eyebrow, nav, ღილაკები |
| `--latin` | Cormorant Garamond | ლათინური დისფლეი ("Ritualis"), drop-cap ასოები |
| `--mono` | ui-monospace | იარლიყები (tag), meta, თარიღი, reading time |

- ბრენდის ტექსტი (nav brand „TAMARI'S JOURNAL", newsletter title) — ხშირად **Nunito** (inline, 33px nav-ში).

---

## 3. ტიპოგრაფიის მასშტაბი
| კლასი / ელემენტი | ზომა | line-height |
|---|---|---|
| `body` | 17px | 1.75 |
| `.display` | clamp(40px, 6.2vw, 88px) | 1.02 |
| `.h-xl` | clamp(32px, 4.4vw, 60px) | 1.08 |
| `.h-lg` | clamp(26px, 3vw, 40px) | 1.14 |
| `.h-md` | clamp(21px, 2.1vw, 28px) | 1.2 |
| `.lede` | clamp(19px, 1.7vw, 23px), weight 300, charcoal-70 | 1.7 |
| `.eyebrow` | 12.5px, letter-spacing 0.32em, **taupe**, UPPERCASE + 26px beige ხაზი | — |

**Article (წამკითხავი) სისტემა — `article.css`:**
| ელემენტი | ზომა |
|---|---|
| `.art-head h1` | clamp(34px, 5.2vw, 68px) |
| `.art-head__dek` (ქვესათაური) | clamp(19px, 2vw, 25px), italic serif, charcoal-70 |
| `.art-body p` / `.art-passage p` | clamp(18px, 1.35vw, 20px), lh 1.85, serif |
| `.art-lede` (+ `.drop` drop-cap) | clamp(20px, 1.7vw, 24px) |
| `.art-pull` (ციტატა) | clamp(25px, 3.2vw, 40px), italic serif |
| `.art-kicker` (სექციის იარლიყი) | 11.5px, letter-spacing 0.22em, taupe, UPPERCASE |

### ⭐ თამარის დადგენილი პრეფერენციები ზომებზე
- **ძირითადი წამკითხავი ტექსტი (აბზაცები): მაქს. 16px.**
- **Pull-quote: მაქს. 22px.**
- გრძელი ციტატა საჭიროების შემთხვევაში 2 ხაზად (`<br>`-ით), max-width მოხსნილი.
- სათაურები / ქვესათაურები — ცალკე განიხილება ყოველ ჯერზე (არ შეამცირო ავტომატურად).

---

## 4. განლაგება / სივრცე
- კონტენტის მაქს. სიგანე: `--maxw 1280px` (`.wrap`).
- გვერდითი padding: `--gutter clamp(22px, 5vw, 88px)`.
- სექციის ვერტიკალური padding: `clamp(70px, 11vw, 150px)` (`.section`).
- ალტერნატიული ფონი: `.band` → ivory-2.
- ანიმაციის ease: `cubic-bezier(0.22, 0.61, 0.36, 1)` (`--ease`).
- **reveal-on-scroll:** მთავარ ბლოკებს დაამატე `class="reveal"`, `site.js` ააქტიურებს.

---

## 5. ⭐ Hover ეფექტი — #B8AA98 (`--taupe`) — მთავარი წესი
**ყველა კლიკადი ელემენტი hover-ზე გადადის #B8AA98-ზე.** `transition: color/border .3s–.4s var(--ease)`.

| ელემენტი | hover ეფექტი |
|---|---|
| ტექსტი / სათაური-ბმული (jcard, story, project, `.video h4`, nav, footer) | `color: var(--taupe)` — ჩვეულებრივ მთელი ბარათის hover-ზე (`.card:hover h3`) |
| ღილაკი `.btn` | taupe outline: `background: transparent; color: var(--taupe); border-color: var(--taupe)` |
| `.btn--ghost` / `.link-more` | taupe ტექსტი + taupe ბორდერი |
| ჩიპი `.cat` | taupe **fill**: `background: var(--taupe); color: var(--ivory); border-color: var(--taupe)` |
| ბარათების ფოტო (`.jcard`, `.story`, `.project`, `.ig`) | მსუბუქი zoom: `transform: scale(1.045)` (img-ზე; `.ph { overflow:hidden }`) |

**მასშტაბი:** ეს #B8AA98 hover ვრცელდება **რედაქციულ გვერდებზე** (მთავარი, ჟურნალი, სტატიები, about). **გაყიდვების გვერდები** (გზამკვლევი, გადახდა — Claude Design verbatim port) ინარჩუნებენ თავიანთ designed CTA-ს (მაგ. `.btn--buy` ivory outline, `.guide-card` lift), მხოლოდ მცირე ბმულები (hero-links, FAQ) გადავიდა taupe-ზე.

---

## 6. ბარათის ნავიგაციის შაბლონი (დადგენილი)
- „გაიგე მეტი →" ღილაკის ნაცვლად — **სათაური თავად არის ბმული**.
- `<h3><a href="...">სათაური</a></h3>` + `.card h3 a { color: inherit; text-decoration: none }` + `.card:hover h3 { color: var(--taupe) }`.
- ფოტოც შეიძლება იყოს ბმული (`.jcard`-ის მსგავსად).

---

## 7. სტრუქტურა / კომპონენტები
- **NAV** (`.nav`): brand „TAMARI'S JOURNAL" (Nunito 33px), ენის გადამრთველი (ქარ / FR / EN), burger მენიუ. ქვე-გვერდებზე `nav--cover scrolled`.
- **HERO**: სტატიაზე — სრული ფოტო (`art-hero--cover`); პროექტის გვერდზე — ტექსტური (`.rit-hero`: eyebrow + დიდი Cormorant სათაური + ქვესათაური + byline).
- **SECTION**: `.section > .wrap`, თავი `.section-head` (eyebrow + h2).
- **Article სისტემა** (`article.css`) — **ახალი content-გვერდის ძირითადი შაბლონი:** `art-head`, `art-hero--cover`, `art-split` (ფოტო/ტექსტი, `--rev` შებრუნებადი), `art-passage` (ცენტრალური), `art-body` (680px), `art-lede` + `.drop`, `art-pull`, `art-kicker`, `art-stanza`, `art-fig`, `art-foot` (ავტორი + share + back).
- **ბარათები**: `.jcard` (ჟურნალი), `.story` (მთავარი), `.project` (პროექტები) — title-link + taupe hover.
- **byline**: ავატარი (წრე ინიციალით) + სახელი + ქვესათაური. ლეოს ავატარი: **36px, beige ფონი** (`.byline__av` inline override Ritualis-ზე).
- **Newsletter** (`.newsletter--letters`): „Journal Letters" + „Tamari's Journal" + ფორმა + „გამოწერის გაუქმება". verbatim index.html-დან.
- **FOOTER** (`.footer`): ivory-2 ფონი, 4 სვეტი, ბმულები hover-ზე taupe.

---

## 8. ახალი გვერდის აგების შაბლონი (checklist)
1. `<head>`: `styles.css` + `dir-a.css` + `responsive.css` (content-გვერდზე ასევე `journal.css` + `article.css` + `article-mogzauroba.css`). Google Fonts: Nunito, Cormorant Garamond, Noto Serif/Sans Georgian.
2. **NAV** — დააკოპირე არსებული გვერდიდან verbatim.
3. **HERO** — ფოტო ან ტექსტური.
4. **content** — article სისტემით (`art-passage`, `art-split`, `art-pull`, `art-fig`).
5. **Newsletter** — verbatim.
6. **FOOTER** — verbatim.
7. `<script src="site.js"></script>`.
8. `reveal` კლასები მთავარ ბლოკებზე.

---

## 9. წესები / კონვენციები
- **Claude Design-დან კოპირება verbatim** — ყველა inline სტილით, `clamp()`/კლასებით ჩანაცვლების გარეშე.
- NAV / Footer / Newsletter — ერთი და იგივე, verbatim დააკოპირე გვერდებს შორის.
- ბრენდის ლათინური ტექსტი — Nunito / Cormorant.
- მცირე იარლიყები (tag, meta, თარიღი) — mono, letter-spacing, UPPERCASE.
- ცვლილების შემოწმება: **Edge InPrivate** (ქეშის გარეშე).
- დეპლოი: commit → `push origin main` → **Vercel** ავტომატური deploy.
- ფრანგული commit message-ები (`modif:` / `ajout:` / ...), em dash-ის გარეშე.

---

## 10. ⭐ Responsive — desktop / ტაბლეტი / მობილური (სავალდებულო)
**ყოველი გვერდი ავტომატურად უნდა მუშაობდეს სამ ფორმატზე: კომპიუტერი, ტაბლეტი, მობილური.** არასდროს დატოვო გვერდი მხოლოდ desktop-ისთვის — responsive ნაგულისხმევია.

**მიდგომა:**
- **Fluid-first:** ტიპოგრაფია და სივრცე `clamp(min, vw, max)`-ით, რომ ყველა ეკრანზე გლუვად მოერგოს.
- **Media queries:** განლაგების ცვლილებებისთვის (grid-ის სვეტები, nav, art-split).
- `responsive.css` — გაზიარებული responsive ფაილი (ჩატვირთე ყველა გვერდზე). `article-mogzauroba.css` — article სისტემის responsive.

**ძირითადი breakpoint-ები:**
| ეკრანი | სიგანე | ცვლილება |
|---|---|---|
| desktop | > 1000px | სრული განლაგება |
| ტაბლეტი | ≤ 1000px / ≤ 880–900px | 3-სვეტიანი grid → 2; `art-split` იწყებს დაწყობას |
| დიდი მობილური | ≤ 680px | სვეტები იკრიფება, nav → burger |
| მობილური | ≤ 640px | 1 სვეტი; `art-pull`/`art-stanza` პატარავდება; `art-split` → 1 სვეტი (ფოტო ზემოთ) |
| პატარა მობილური | ≤ 480 / 440 / 320px | მინიმალური padding, ფონტების დაყვანა |

**წესები:**
- 3-სვეტიანი grid (`projects-grid--3`, related) → 2 (≤900px) → 1 (≤640px).
- `art-split` → ერთ სვეტად (≤880px), ფოტო ზემოთ.
- `videos-grid`, `future-list` → 1 სვეტი მობილურზე.
- nav → burger მენიუ მობილურზე.
- ფოტოები — ყოველთვის `width:100%` (არ გადაიჭიმოს / არ გადმოვარდეს).
- **ყოველი ცვლილება შეამოწმე ვიწრო ეკრანზეც** (ბრაუზერის ფანჯრის შევიწროება ან DevTools device mode: iPhone / iPad / Desktop).

---

## 11. კომპონენტების ზუსტი სპეცი (rendered values)
> ⚠️ ბევრი ზომა inline HTML override-ით განისაზღვრება (CSS base ≠ რენდერი). ქვემოთ მითითებულია **რეალური რენდერი**. ახალ გვერდზე ეს ბლოკები **verbatim დააკოპირე index.html-დან**.

### Newsletter (`.newsletter newsletter--letters`, `id="newsletter"`)
- **ფონი:** `rgb(250,247,243)` (inline HTML; `.newsletter--letters` base = `#F4EFE7`)
- **padding-block:** clamp(46px, 6vw, 84px) · `.news-inner` max-width 720px, ცენტრში
- **`.news-label`** („JOURNAL LETTERS"): sans, **12px**, weight 500, letter-spacing 0.34em, UPPERCASE, **taupe**, margin-bottom 24px
- **`.news-title`** („Tamari's Journal"): რენდერი = **Nunito 17px** (inline; base = serif clamp 33–56px)
- **`.news-sub`** (ქვესათაური): რენდერი = **12px** serif, charcoal-70, max-width 46ch
- **`.news-form`**: max-width 500px, flex, gap 10px · input: თეთრი ფონი (#fff), border `--line`, radius 4px, padding 15px 18px, sans 15px · focus: taupe border + glow `rgba(184,170,152,.16)`
- **`.btn`** („შემომიერთდი"): charcoal fill, radius 4px, padding 15px 30px · hover: translateY(-1px)
- **`.news-note`** („გამოწერის გაუქმება"): **12.5px**, charcoal-45
- მობილური (≤560px): ფორმა ვერტიკალურად

### Footer (`.footer`) — ⚠️ ღია (light) ვერსია `dir-a.css`-ით
- **მნიშვნელოვანი:** `styles.css`-ში footer **მუქია** (charcoal ფონი), მაგრამ `dir-a.css` ფარავს **ღია ვერსიით:** ფონი `--ivory-2`, ტექსტი charcoal, ბმულები charcoal-70 → **hover taupe**.
- **padding-block:** clamp(64px, 8vw, 110px) 40px
- **`.footer__top`**: grid `1.6fr repeat(3, 1fr)`, gap clamp(30–64px), ქვედა ბორდერი `--line`
- **`.footer__brand`** („TAMARI'S JOURNAL"): რენდერი = **Nunito 15px**, weight 500, letter-spacing 0.18em, UPPERCASE (inline + dir-a; base = latin 34px)
- **brand tagline** (`.footer__brand + p`): რენდერი = **12px**, charcoal-70, max-width 320px
- **`.footer__col h5`** (სვეტის სათაური: საიტი / სოციალური / ენა): sans, **12px**, weight 600, letter-spacing 0.2em, UPPERCASE, charcoal-45
- **`.footer__col a`** (ბმულები): რენდერი = **12px** (base 15px)
- **`.footer__bottom`**: flex, space-between · `.copy` (© 2026): mono 11.5px, charcoal-45 · `.footer__legal`: 12px, gap 26px
- მობილური (≤640px): `.footer__top` → 2 სვეტი, brand სრულ სიგანეზე

---

## 12. ⭐⭐ ზუსტი ტიპოგრაფია და კომპონენტები (მთავარი გვერდის მოდელი)
> სავალდებულო, მკაცრი სტანდარტი. **ყველა გვერდზე, ყველა სექციაში ერთნაირად დაიცავი.** მთავარი გვერდი (`index.html`) არის ზუსტი მოდელი. ახალი გვერდი ავტომატურად სამ ფორმატზე (ლეპტოპი / ტაბლეტი / მობილური).

### 12.1 ფონტების როლები — რომელი ფონტი რისთვის (მკაცრი წესი)
| როლი | ფონტი | სტილი |
|---|---|---|
| **სათაური** (h1 / h2 / h3) | **Noto Serif Georgian** (serif) | weight 500–600, line-height 1.1–1.2 |
| **ლათინური დისფლეი** (ბრენდი, „Ritualis", ფასი 49€) | **Cormorant Garamond**; nav brand = **Nunito** | weight 400–600 |
| **ქვესათაური / lede / dek** | Noto Sans Georgian (article-ში serif italic) | charcoal-70 |
| **ძირითადი ტექსტი** (p) | **Noto Sans Georgian** (sans) | line-height 1.75 |
| **Eyebrow / სექციის იარლიყი** | Noto Sans Georgian | UPPERCASE, ls 0.32em, **taupe** |
| **Meta / tag / თარიღი** | mono (ui-monospace) | UPPERCASE, ls, taupe / charcoal-45 |

### 12.2 ზომების მკაცრი მასშტაბი (რენდერი მთავარ გვერდზე)
| ელემენტი | ფონტი | ზომა |
|---|---|---|
| სექციის სათაური (h2) | serif | **33px** (დიდი სექცია 36px), lh ~1.1 |
| Hero tagline (`.hero__script`) | serif | 33px, lh 1.12 |
| Hero ქვე-იარლიყი (`.hero__cover-title`) | sans | clamp(14px, 1.4vw, 18px), ls 0.22em |
| ბარათის სათაური — story (`.h-md`) | serif | clamp(21px, 2.1vw, 28px) |
| ბარათის სათაური — project (h3) | serif | 33px |
| Intro lead (drop-cap-ით) | sans | **22px**; drop-cap ასო 78px, taupe |
| ქვესათაური / lede / dek | sans | **17px** (article dek 19–25px italic) |
| **ძირითადი ტექსტი (p)** | **sans** | **17px**, lh 1.75 — *article-ის წამკითხავი ტექსტი: 16px* |
| ფასი / სტატის რიცხვი | Cormorant | 26–28px, weight 600 |
| სტატის იარლიყი | sans | 10px, UPPERCASE, ls 0.14em, charcoal-45 |
| Meta („8 წუთი კითხვა") | mono | ~11px |

> ⚠️ ერთი წესი: **სათაური ყოველთვის serif, ტექსტი ყოველთვის sans, იარლიყი/meta mono.** ზომა არ გადაუხვიო ამ მასშტაბს ცალკეული გვერდის ახირებით.

### 12.3 NAV (`.nav`)
- `.nav__brand` („TAMARI'S JOURNAL"): **Nunito 33px**, inline.
- ვარიანტები: `nav--cover` (hero-ზე გამჭვირვალე, ღია ტექსტი), `scrolled` (ჩამოსქროლვისას მუქი ფონი); ქვე-გვერდზე `nav--cover scrolled` თავიდანვე.
- შიგთავსი: burger (მობილური), lang (ქარ / FR / EN), search ⌕, `nav__menu` ჯგუფებით.
- მენიუს ბმულები: hover → **taupe**.
- responsive: ≤600px lang იმალება, ნავიგაცია burger-ით.

### 12.4 HERO
- **Cover hero** (`.hero hero--cover`): სრული ფოტო (`.ph ph--dark` + `slot-fill`) + `hero__scrim` + ქვედა-მარცხნივ ტექსტი.
  - `.hero__script` — 33px serif tagline; `.hero__cover-title` — clamp(14–18px) ls 0.22em; `.hero__read` — ხაზიანი ბმული; `.hero__social` (მარჯვნივ), `.hero__scroll`.
- **ტექსტური hero** (პროექტის გვერდი, `.rit-hero`): ცენტრში eyebrow + დიდი Cormorant სათაური + ქვესათაური + byline.

### 12.5 ბარათები (cards) — ერთიანი შაბლონი
ყველა ბარათი: ფოტო (`.ph` + `slot-fill`) + tag + **სათაური-ბმული** + ტექსტი. **სათაური hover → taupe** (ბარათის hover-ზე).
- **`.story`** (მთავარი, 3 სვეტი): მთლიანი ბარათი `<a>`-ში; `story__cat` (12px taupe UPPERCASE) · h3 `.h-md` · p (17px) · `.meta` (mono).
- **`.project`** (3 სვეტი): ფოტო + tag + **h3-ბმული (33px)** + p; „გაიგე მეტი" ღილაკი მოხსნილია, ნავიგაცია სათაურზე.
- **`.jcard`** (ჟურნალის გვერდი): ფოტო-ბმული (**hover zoom** scale 1.045) + cat + h3-ბმული + excerpt + byline foot.

### 12.6 Article სისტემა (content-გვერდის შაბლონი)
დეტალები: სექციები 3 და 7. მოკლედ: `art-head` (h1 34–68px serif, dek 19–25px serif italic), `art-body`/`art-passage` (p **16px**), `art-pull` (**22px** italic), `art-kicker` (11.5px taupe), `art-split` (ფოტო/ტექსტი, `--rev`), `art-foot` (ავტორი + back).

### 12.7 Responsive — თითო კომპონენტი
- NAV → burger ≤680px; HERO → ფოტო/ტექსტი ეწყობა, სიმაღლე მცირდება.
- ბარათების grid (3 სვეტი) → 2 (≤900px) → 1 (≤640px); `art-split` → 1 სვეტი (≤880px).
- ⚠️ მთავარ გვერდზე სათაურები **ფლეტ 33px**-ია (inline), არა clamp. `responsive.css` არეგულირებს მობილურს. **ახალ გვერდზე სათაურებზე ჯობს clamp() (მაგ. `.h-xl` = clamp(32–60px)), რომ ავტომატურად მოერგოს**, და ყოველთვის შეამოწმე 3 ზომაზე (Desktop / iPad / iPhone).

### 12.8 Byline / ავტორი (წრე + სახელი) — ზუსტი სპეცი
წრეში ჩასმული ინიციალი + სახელი. **ლ = ლეო**, **თ = თამარი**. გვხვდება: სტატიის/ბლოგის **თავში** (`.art-head__meta`), **ბოლოში** (`.art-foot`), ან **ორივეგან**; ასევე ბარათების ფეხში (`.jcard__foot`).

| ვარიანტი | ავატარი (`.byline__av`) | სახელი | ქვესახელი / bio |
|---|---|---|---|
| **ბაზისური** (`.byline` — ბარათის ფეხი `.jcard__foot` / სტატიის თავი) | 42×42px წრე, ფონი `--ivory-2`, **serif 18px / 600**; gap 13px | `.byline__name` (ლეო / თამარი): **sans 13.5px / 600**, ls 0.02em, charcoal | `.byline__sub`: **mono 10.5px**, ls 0.06em, charcoal-45 — ბარათში „**X წთ · თარიღი**", სტატიის თავში „**ავტორი**" |
| **დიდი foot** (`.art-author` — ბოლო) | 60×60px წრე, **serif 26px**; gap 18px | `.art-author__name`: **serif 22px / 600**, charcoal | `.art-author__bio`: **14.5px**, charcoal-70, lh 1.55 |
| **Ritualis / პროექტი** (inline override) | 36×36px წრე, ფონი **beige `#D6C3A5`**, **serif 15px / 600**, border 1px `--line`; gap 9px | sans 13.5px / 600 | mono 10.5px („ავტორი") |

- **სტატიის თავის meta** (`.art-head__meta`): byline + სეპარატორი „•" + „X წთ საკითხავი" (mono) + თარიღი (mono).
- ავატარი **ყოველთვის სრულად მრგვალი** (`border-radius: 50%`), ინიციალი ცენტრში (`display:grid; place-items:center`). ფონი: ivory-2 (ან beige ლეოსთვის), ტექსტი charcoal.
- **მკაცრად დაიცავი ეს ზომები** ყველა გვერდზე, სადაც byline გამოჩნდება.

### 12.9 Drop cap (დიდი ასო აბზაცის დასაწყისში) — ზუსტი სპეცი
ინგ. **drop cap** / ფრ. *lettrine* / ქართ. „ინიციალი". აბზაცის **პირველი ასო გადიდებული**, `float: left`. ფერი ყოველთვის **taupe #B8AA98**. გამოიყენე მხოლოდ **შესავლის პირველ აბზაცზე** (ერთხელ გვერდზე).

| ვარიანტი | ფონტი | ზომა | დეტალები |
|---|---|---|---|
| **Article lede** (`.art-lede .drop`) | **`--latin`** (Cormorant; ქართულისთვის Noto Serif Georgian fallback) | **4.4em** (≈90–105px lede-ის მიმართ); მობილურზე 3.6em | weight 600, line-height 0.74, padding 8px 16px 0 0, **color taupe**, float left |
| **მთავარი გვერდის intro** (`.intro__lead` span, inline) | serif (default) | **78px** | color **#b8aa98**, float left, line-height 0.78, margin -6px 8px 0 0 |

- მასპინძელი ტექსტი (`.art-lede`): clamp(20–24px), line-height 1.68 (მობილურზე 18–22px).
- drop cap ფლანგავს ~3 ხაზს. ერთ აბზაცზე ერთი ასო, არასდროს ორი.

### 12.10 App-hero — მუქი split hero (აპლიკაციის გვერდი)
> პროდუქტის/აპლიკაციის გვერდის hero. მუქი, ორ სვეტად: ტექსტი მარცხნივ + ვიზუალი მარჯვნივ. მოდელი: გზამკვლევის hero.
- **`.app-hero`**: `background: var(--charcoal)`, ivory ტექსტი, padding-top clamp(140px,17vh,200px), padding-bottom clamp(64–110px), overflow hidden. `::before` — რბილი radial glow (taupe/beige, `rgba(214,195,165,.16)` + `rgba(184,170,152,.12)`).
- **`.app-hero__grid`**: grid `1fr 1.05fr` (ტექსტი / ვიზუალი), gap clamp(40–80px), align center.
- **`.app-hero__eyebrow`**: sans 12.5px, ls .32em, UPPERCASE, **taupe**, + beige ხაზი (30px), margin-bottom 28px.
- **`.app-hero h1`**: **Cormorant Garamond**, weight 600, ivory, **clamp(52px,7vw,92px)**, ls .04em (ლათინური ბრენდი, მაგ. „Ritualis").
- **`.app-hero__sub`**: sans 300, **16px**, lh 1.7, `rgba(250,248,244,.82)`, max-width 46ch.
- **`.app-hero__meta`**: mono 11.5px, UPPERCASE, ls .1em, `rgba(250,248,244,.6)`, `.dot` taupe (3 ფაქტი წერტილებით).
- **`.app-hero__cta`**: `.app-hero__soon` (bordered „App Store · Google Play", ivory ტექსტი, `border: 1px solid rgba(250,248,244,.38)`, radius 4px) + `.app-hero__soon-tag` („მალე", mono 11px). გაუშვებელი აპლიკაცია = coming soon.
- **`.app-hero__visual img`**: width 100%, height auto, radius 10px, shadow `0 30px 80px rgba(0,0,0,.45)`.
- **nav**: `nav nav--cover` (გამჭვირვალე, ღია ტექსტი მუქ hero-ზე; scroll-ზე გამყარდება `site.js`-ით, `header`-ის სიმაღლეზე). `scrolled` HTML-ში არ ჩასვა.
- **responsive** ≤880px: grid 1 სვეტი (ტექსტი → ვიზუალი), h1 clamp(46px,13vw,76px).

### 12.11 Features grid (ფუნქციების ბადე)
> აპლიკაციის ფუნქციების სია ბარათებად. ფონი `.band` (ivory-2), თავი `.section-head` ცენტრში (eyebrow + h2 33px serif).
- **`.rit-features`**: grid `repeat(3, 1fr)`, gap clamp(30–50px), margin-top clamp(44–68px).
- **`.rit-feature__ic`**: 46px წრე, ფონი ivory, border `--line`, **taupe** ხატულა (inline SVG, stroke 1.6, 22px), margin-bottom 18px.
- **`.rit-feature h3`**: **serif 20px / 600**, charcoal, lh 1.25.
- **`.rit-feature p`**: sans **16px**, lh 1.7, **charcoal-70**.
- **responsive**: 3 სვეტი → 2 (≤880px) → 1 (≤560px).

---

### 12.12 სტრუქტურული / how-to სტატია (ქვე-სათაურები + სიები)
> როცა სტატია არა თხრობითია (მოგზაურობა), არამედ სტრუქტურული (მეთოდი, სია, „X პრინციპი") — მაგ. `article-nabijebi.html`. იყენებს იმავე article-სისტემას (`art-body` / `art-passage`), დამატებით ქვე-სათაურებითა და სიებით (`article.css`-ში).
- **`.art-body h2` / `.art-passage h2`** (განყოფილების სათაური): serif 600, **clamp(24–30px)**, margin-top clamp(38–60px).
- **`.art-body h3` / `.art-passage h3`** (ქვე-პუნქტი, მაგ. „1. დაიწყე მარტივით"): serif 600, **clamp(19–22px)**, margin-top 1.9em.
- **სიები** (`ul` / `ol`): serif, ტექსტის იგივე ზომა, **taupe მარკერით** (`li::marker { color: var(--taupe) }`), padding-left ~1.35em. აქცენტისთვის პუნქტის დასაწყისში `<strong>`.
- ტექსტის ზომა: თამარის წესით **16px** (page-scoped `<style>`-ით: `.art-body p, li { font-size:16px }`, `.art-pull p { font-size:22px }`), lede clamp(19–21px) drop-cap-ით.
- ავტორი: **თამარი** (თ), მაგრამ ტექნიკური/AI თემა — **ლეო** (ლ).
- responsive ავტომატური (clamp), ისევე როგორც სხვა სტატიები.

### 12.13 ⭐⭐ თამარის სტანდარტული article `<head>` `<style>` (ყოველ ახალ სტატიაზე დააკოპირე)
> თამარის დადგენილი პრეფერენცია სტატიებისთვის (`article-ratom-gzamkvlevi.html`, `article-pirveli-30-dge.html`, `article-nabijebi.html`). **ყოველ ახალ სტატიაზე ჩასვი ეს ბლოკი `<head>`-ში**, რომ იგივე ცვლილებები აღარ დაგვჭირდეს.

**წესები:**
1. **წამკითხავი ტექსტი ერთგვაროვანი 16px** — აბზაცი, `li`, `art-stanza` **და** `art-lede` ერთი ზომაა. **ერთი მუქი ფერი** (`--charcoal`), „რბილი" ღია ფერი (`--stanza--soft`) არ იყოს.
2. ⚠️ **`!important` სავალდებულოა font-size-ზე.** `article-mogzauroba.css`-ს აქვს `@media(max-width:640px)` `!important` წესები, რომლებიც მობილურზე `.art-stanza`-სა და `.art-lede`-ს ზომას ზრდის (17–22px). თუ `!important` არ დაწერ, **მობილურზე ტექსტი სხვადასხვა ზომის გახდება**.
3. **ლეტრინი (drop cap) = `--taupe`**, ზომიერი **3.4em** (არა გადაჭარბებული), მხოლოდ პირველ აბზაცზე. თხრობით სტატიაში `<span class="drop">` `art-lede`-ში; how-to-ში `.intro-drop::first-letter` ჩვეულებრივ `<p>`-ზე. ქართული ასოსთვის ფონტი `'Noto Serif Georgian'`.
4. **განსხვავებული (განზრახ):** სათაური `h1`, ქვესათაური `dek`, სექციის სათაური `h2`, ციტატა `art-pull` — უფრო დიდი/serif/italic. ტექსტი „ძალიან დიდი ასოებით" არ იყოს: h1 ≈ clamp(26–40px), h2 ≈ clamp(21–26px).
5. **Hero ფოტო** — ვერტიკალური პორტრეტი ან შენობა: ცენტრში, ivory ფონზე, **სრულად (მოჭრის გარეშე)**, არა full-cover crop. კლასი `.hero-photo`/`.hero-portrait` (`max-width`, `max-height:~78vh`). **ფოტო შეკუმშე** (JPG ~1400px, <600KB) images-ში ჩასმამდე.

```html
<style>
  /* ტექსტი ერთგვაროვანი 16px + ერთი მუქი ფერი (!important — მობილურის გამო) */
  .art-body p, .art-passage p, .art-body li, .art-passage li,
  .art-body .art-lede, .art-body .art-stanza, .art-passage .art-stanza { font-size: 16px !important; line-height: 1.85; }
  .art-body .art-stanza, .art-passage .art-stanza { line-height: 1.95; }
  .art-body p, .art-passage p, .art-body li, .art-passage li, .art-body .art-lede,
  .art-body .art-stanza, .art-passage .art-stanza,
  .art-body .art-stanza--soft, .art-passage .art-stanza--soft { color: var(--charcoal); }
  /* ლეტრინი — taupe. თხრობითში: .art-lede .drop | how-to-ში: .intro-drop::first-letter */
  .art-body .art-lede .drop, .intro-drop::first-letter {
    float: left; font-family: 'Noto Serif Georgian', serif; font-weight: 600;
    font-size: 3.4em; line-height: 0.82; padding: 4px 12px 0 0; color: var(--taupe);
  }
  /* განსხვავებული: სათაური / ქვესათაური / სექცია / ციტატა */
  .art-head h1 { font-size: clamp(26px, 3.4vw, 40px); line-height: 1.18; }
  .art-head__dek { font-size: clamp(16px, 1.6vw, 20px); }
  .art-body h2, .art-passage h2 { font-size: clamp(21px, 2.2vw, 26px); }
  .art-pull p { font-size: 22px; max-width: 32ch; }
  /* Hero ფოტო — ცენტრში, სრულად */
  .hero-photo { display:block; width:auto; height:auto; max-width:min(780px,94%); max-height:80vh; margin:0 auto; border-radius:4px; }
  @media (max-width: 640px) { .hero-photo { max-width:100%; max-height:none; } }
</style>
```
- ბოლოს CTA (ემიგრაცია/გზამკვლევი თემაზე): `<a class="link-more" href="emigrantis-gzamkvlevi-safrangetshi.html">იხილე გზამკვლევი →</a>`.
- ყოველ ახალ სტატიას დაუმატე **ჟურნალის ბარათი** (`journal.html`, ყველაზე ზემოთ) + სწორი `data-cat`.

## 13. ღილაკები და ბმულები (ზუსტი სპეცი)
| ელემენტი | base | hover |
|---|---|---|
| **`.btn`** (მთავარი) | inline-flex, gap 12px, **sans 14px / 500**, ls 0.06em, padding **16px 30px**, radius **2px**, border 1px charcoal, **ფონი charcoal, ტექსტი ivory** | transparent ფონი, **taupe** ტექსტი + ბორდერი; ისარი `.arr` → translateX(4px) |
| **`.btn--ghost`** | transparent, charcoal ტექსტი, border `--line` | taupe ბორდერი + ტექსტი |
| **`.btn--light`** (მუქ სექციებზე) | ivory ფონი, charcoal ტექსტი | transparent, ivory ტექსტი |
| **`.link-more`** | **sans 12px / 500**, UPPERCASE, ls 0.14em, charcoal, border-bottom 1px `--line`, gap 9px | **taupe** ტექსტი + ბორდერი, gap → 13px |

## 14. ფოტოები (`.ph` + `.slot-fill`)
**პატერნი:** `<div class="ph" style="aspect-ratio:X"><img class="slot-fill" src="..." alt="..." style="object-fit:cover"></div>`
- **`.ph`**: position relative, overflow hidden, beige placeholder texture (`#E7DFD2` + დიაგონალური ხაზები). `.ph--dark` (`#45403A`) — hero/video. `.ph__label` ("ფოტო", mono 11.5px) — ცარიელი სლოტი.
- **`.slot-fill`**: `position:absolute; inset:0; width:100%; height:100%` + `object-fit:cover` (inline) → ფოტო ავსებს და იჭრება კონტეინერზე.

**Aspect-ratio ცხრილი (კონტექსტის მიხედვით):**
| კონტექსტი | aspect-ratio |
|---|---|
| hero cover (`.art-hero--cover`) | 100vh (min 620px) |
| hero figure (`.art-hero`) | 16/9 |
| story ბარათი (`.story .ph`) | 3/3.6 |
| jcard (`.jcard__media .ph`) | 3/2.1 |
| project (`.project .ph`) | 16/10 |
| art-split media | 4/5 |
| art-fig (inline) | 3/2 |
| feature-lead | 4/3.05 |
| video main / side | 16/9 · 16/11 |
| instagram (`.ig`) | 4/5 |

- **სრულ სიგანის banner** (მაგ. Ritualis-ის ფოტოები): aspect-ratio არ აიძულო, `width:100%; height:auto` (მოჭრის გარეშე, ბუნებრივი პროპორცია).

## 15. `<head>` boilerplate + ფერის იერარქია
**ყველა გვერდის `<head>` (copy-paste მზად):**
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>... · Tamari's Journal</title>
<link rel="stylesheet" href="styles.css" />
<link rel="stylesheet" href="dir-a.css" />
<link rel="stylesheet" href="responsive.css" />
<!-- content/article გვერდზე დამატებით: -->
<link rel="stylesheet" href="journal.css" />
<link rel="stylesheet" href="article.css" />
<link rel="stylesheet" href="article-mogzauroba.css" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Noto+Serif+Georgian:wght@400;500;600;700&family=Noto+Sans+Georgian:wght@300;400;500;600&display=swap">
```
`<body>`-ის ბოლოს: `<script src="site.js"></script>`. (Dancing Script მხოლოდ „Suivre" follow სექციისთვის.)

**ფერის იერარქია — რომელი ფერი რომელ ტექსტს:**
| ფერი | გამოყენება |
|---|---|
| `--charcoal` | სათაურები, ძლიერი ტექსტი |
| `--charcoal-70` | ძირითადი body ტექსტი, აღწერები |
| `--charcoal-45` | meta, caption, თარიღი, dim |
| `--taupe` | eyebrow, tag, აქცენტი, **hover**, drop cap |
| `--line` / `--line-soft` | ბორდერები, გამყოფები |
| `--ivory` / `--ivory-2` | ფონები |

## 16. გვერდის skeleton-ები
**Content / article გვერდი:**
```
head → NAV (verbatim) → art-hero--cover (ფოტო) → art-head (eyebrow + h1 + dek + meta byline)
→ art-fig (featured) → art-body: art-lede (drop-cap) + art-passage (p) → art-split (ფოტო/ტექსტი)
→ art-pull (ციტატა) → art-foot (byline + back) → Newsletter (verbatim) → Footer (verbatim) → site.js
```
**მარტივი content / პროექტის გვერდი:**
```
head → NAV → ტექსტური hero (.rit-hero: eyebrow + სათაური + ქვესათაური + byline)
→ art-passage / art-split (ტექსტი + ფოტო) → art-pull → art-foot → Newsletter → Footer → site.js
```
- ყოველთვის: `reveal` მთავარ ბლოკებზე, responsive შემოწმება 3 ზომაზე, ცვლილება Edge InPrivate-ში.
