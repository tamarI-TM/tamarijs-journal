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
