# Tamari's Journal — დიზაინ-სისტემა (Design System)

> ვებსაიტის ერთიანი ვიზუალური იდენტობა: ფერები, ფონტები, ზომები, ეფექტები, სტრუქტურა.
> **ეს არის ერთადერთი წყარო (single source of truth).** ყოველი ახალი გვერდი ამ წესებით აიგება, ნულიდან კი არა.
> ფაილების ადგილი: `livrables/site-web/` · ცოცხალი საიტი: tamarijs-journal.vercel.app

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
| ფოტო (`.jcard__media`, `.ig`) | მსუბუქი zoom: `transform: scale(1.045–1.055)` |

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
