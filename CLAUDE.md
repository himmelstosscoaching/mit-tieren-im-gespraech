# Mit Tieren im Gespräch – Website von Steffi Himmelstoß

Astro-5-Website (statisch, kein Framework-CSS) für **Stephanie-Sophia „Steffi“ Himmelstoß**, Tierkommunikatorin auf einem
Hof in Emmingen-Liptingen bei Tuttlingen. Angebot: Tiergespräche am Telefon + Kurse (Basis 250 € / Aufbau 310 € /
Profikurs 560 €), Lernabende, Krafttierarbeit. Live: https://www.mit-tieren-im-gespraech.com (Netlify, Team HSC-Coaching).

## Arbeiten
- `npm install` · `npm run dev` (http://localhost:4321) · `npm run build` (muss vor jedem Push fehlerfrei sein).
- **Immer direkt auf `main` arbeiten und pushen.** Netlify baut ausschließlich `main`; ein eigener Branch geht nie online
  (Vorfall 29./30.09.2026: vier Commits auf `ueberarbeitung-2026-09`, Seite blieb drei Tage alt). Falls doch ein Branch
  entstanden ist: `git checkout main && git merge <branch> && git push`.
- Deploy: Push auf `main` → Netlify baut automatisch. Falls das nicht greift: `npx netlify-cli deploy --prod --dir=dist --no-build`.
- Für Menschen ohne Code-Erfahrung: siehe `PFLEGE.md`.

## Wo was liegt
| Inhalt | Datei |
|---|---|
| Kurse, Preise, Zeiten, Termine, weitere Angebote | `src/data/kurse.ts` |
| Adresse, E-Mail, Telefon, Instagram, Claim | `src/data/site.ts` |
| Seiten (Start, Tiergespräch, Kurse, Kursseiten, Über mich, Kontakt, Impressum, Datenschutz) | `src/pages/` |
| Bausteine (Hero-Slider, Zitat-Banner, Ablauf-Schritte, FAQ, Kurskarte, Mobile-CTA, Header/Footer) | `src/components/` |
| Design-System (Farben, Schrift, Abstände, Mobile-Regeln) | `src/styles/global.css` |
| Fotos (werden beim Build automatisch zu AVIF/WebP verkleinert) | `src/assets/img/` |
| Netlify-Konfiguration | `netlify.toml` |

## Regeln
- **Sprache:** Deutsch, die Website **duzt** konsequent. Ton: warm, klar, kurze Sätze, keine Ausrufezeichen-Häufung.
- **Name:** „Stephanie-Sophia Himmelstoß“ (so schreibt Steffi selbst). Kurzform „Steffi“.
- **Tierkommunikation wird auf ihren eigenen Begriffen behandelt** – keine ungefragten Skepsis-Hinweise oder Disclaimer.
- **Jedes Foto genau einmal** auf der ganzen Website. Neue Fotos: max. 2400 px, Metadaten entfernen, in `src/assets/img/`
  mit sprechendem Namen; alte Verwendung prüfen (`grep -r "img/<name>" src/pages`).
- Zitat-Banner mit `placeholder`-Prop zeigen „Zitat-Vorschlag“ – sobald Steffi eigene Sätze liefert, Prop entfernen.
- Kontaktformular ist ein Netlify-Form (`name="kontakt"`), Benachrichtigung an steffi-himmelstoss@hotmail.de. Feldnamen nicht umbenennen.
- Impressum/Datenschutz enthalten Platzhalter in eckigen Klammern – vor Ergänzung Rücksprache mit Steffi.
- Nach Änderungen: `npm run build`, kurz mobil (375 px) und Desktop ansehen, dann committen und pushen.

## Offen (Stand 2026-09-29)
Telefonnummer, weitere Kundenstimmen, Original des
Hängestuhl-Fotos ohne Text, ein Porträtfoto, Impressum-Angaben, Schriften selbst hosten (derzeit Google Fonts).
