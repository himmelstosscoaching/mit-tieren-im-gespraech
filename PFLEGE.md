# Website pflegen – Anleitung für Steffi, Annette & Herbert

Die Seite **www.mit-tieren-im-gespraech.com** liegt als Code hier auf GitHub. Netlify baut sie daraus automatisch.
Jede gespeicherte Änderung auf GitHub ist nach etwa einer Minute online – **aber nur auf dem Hauptzweig `main`**.
Wenn Claude fragt oder vorschlägt, einen eigenen Branch anzulegen: „Nein, direkt auf main.“ Sonst bleibt die Seite alt.

## Der einfachste Weg: Claude bitten
Repo in Claude Code öffnen (oder den Projektordner) und sagen, was sich ändern soll – z. B. „Der Aufbaukurs kostet
jetzt 330 €“ oder „Neuer Basiskurs-Termin 14./15. März 2027“. Claude kennt die Regeln aus `CLAUDE.md`, ändert die
richtige Datei, prüft den Build und schiebt es hoch.

## Selbst ändern (nur Texte, Preise, Termine)
Zwei Dateien enthalten alles, was sich regelmäßig ändert:

| Was | Datei |
|---|---|
| Kurse: Beschreibung, Preis, Zeiten, **Termine** | `src/data/kurse.ts` |
| **Lernabende-Termine** (Format `'2027-08-13'`, vergangene verschwinden von selbst) | `src/data/kurse.ts`, bei `lernabende` → `termine` |
| Adresse, E-Mail, Telefon, Instagram | `src/data/site.ts` |

So geht's auf GitHub im Browser:
1. Datei anklicken → oben rechts auf den **Stift** (Edit).
2. Text **innerhalb der Anführungszeichen** ändern. Beispiel: `preis: 310,` → `preis: 330,` oder
   `'23.–25. Oktober 2026'` → `'6.–8. März 2027'`. Anführungszeichen, Kommas und Klammern unverändert lassen.
3. Oben rechts **Commit changes** → im Fenster nochmal **Commit changes**.
4. Nach ca. 1 Minute die Website neu laden.

Wenn etwas schiefgeht (Seite zeigt noch den alten Stand): Ein Zeichen fehlt vermutlich. Auf GitHub die Datei
öffnen, **History** anschauen, die letzte Änderung zurücknehmen – oder Claude bitten, es zu reparieren.

## Was NICHT selbst gemacht werden sollte
Seitentexte in `src/pages/`, Bilder, neue Abschnitte, Design. Das sind Code-Dateien – hier Claude fragen.
Bilderregel: Jedes Foto kommt auf der ganzen Website nur **einmal** vor.

## Kontaktformular
Anfragen kommen per E-Mail an steffi-himmelstoss@hotmail.de und liegen zusätzlich bei Netlify unter
Projekt → Forms. Spam-Schutz ist eingebaut.

## Domain & Hosting
Domain `mit-tieren-im-gespraech.com`: bei **INWX** (Konto Steffi). Hosting: **Netlify**, Team HSC-Coaching (Herbert).
Code: GitHub-Organisation **himmelstosscoaching**. Zertifikat (https) verlängert sich automatisch.
