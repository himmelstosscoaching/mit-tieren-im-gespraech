// Kurse, Preise, Termine — hier pflegen. Termine als Text, so wie sie gelesen werden sollen.
export type Kurs = {
  slug: 'basiskurs' | 'aufbaukurs' | 'profikurs';
  titel: string;
  untertitel: string;
  kurz: string;               // Teaser (Startseite, Übersicht)
  beschreibung: string[];     // Absätze auf der Kursseite
  voraussetzung: string;
  dauer: string;
  zeiten: string[];
  preis: number;
  termine: string[];
  stufe: number;
};

export const kurse: Kurs[] = [
  {
    slug: 'basiskurs',
    stufe: 1,
    titel: 'Basiskurs',
    untertitel: 'Dein Einstieg in die Tierkommunikation',
    kurz: 'Du lernst, was Tierkommunikation bedeutet, und führst schon am ersten Wochenende deine ersten Gespräche – auch mit deinem eigenen Tier.',
    beschreibung: [
      'Der Basiskurs ist dein Einstieg in die Tierkommunikation. Hier lernst du, was Tierkommunikation bedeutet und welche Möglichkeiten sie dir eröffnet.',
      'Im Mittelpunkt stehen viele praktische Übungen und echte Gespräche mit Tieren. Wir probieren die verschiedenen Möglichkeiten aus – Bilder, Gefühle, Worte – und finden heraus, welcher Zugang für dich am besten funktioniert.',
      'Außerdem führen wir gemeinsam ein Gespräch mit mindestens einem deiner eigenen Tiere. Bring dafür ein Foto mit.',
    ],
    voraussetzung: 'Keine Vorkenntnisse nötig.',
    dauer: 'Ein Wochenende (Samstag und Sonntag)',
    zeiten: ['Samstag und Sonntag: 11–17 Uhr'],
    preis: 250,
    termine: ['14./15. November 2026', '5./6. Dezember 2026', 'Weitere Termine 2027 folgen'],
  },
  {
    slug: 'aufbaukurs',
    stufe: 2,
    titel: 'Aufbaukurs',
    untertitel: 'Die vielen Möglichkeiten der Tierkommunikation',
    kurz: 'Wir vertiefen die Gespräche – auch mit kranken, verstorbenen oder vermissten Tieren – und öffnen den Blick für Krafttiere, Pflanzen und Steine.',
    beschreibung: [
      'Im Aufbaukurs geht es um die vielfältigen Möglichkeiten der Tierkommunikation. Wir vertiefen die Gespräche mit Tieren und beschäftigen uns auch mit kranken, verstorbenen oder vermissten Tieren.',
      'Krafttierarbeit und Gespräche mit Pflanzen und Steinen sind ebenfalls Teil des Kurses.',
    ],
    voraussetzung: 'Teilnahme am Basiskurs oder entsprechende Vorkenntnisse in der Tierkommunikation.',
    dauer: 'Freitagabend bis Sonntag',
    zeiten: ['Freitag: 18–20:30 Uhr', 'Samstag und Sonntag: 10–16 Uhr'],
    preis: 310,
    termine: ['15.–17. Januar 2027', 'Weitere Termine 2027 folgen'],
  },
  {
    slug: 'profikurs',
    stufe: 3,
    titel: 'Profikurs',
    untertitel: 'Dein Weg in die berufliche Tierkommunikation',
    kurz: 'Fünf Tage, in denen es um dich geht: deine Stärken, deine Art zu sprechen – und alles, was wichtig ist, wenn du Tiergespräche selbst anbieten möchtest.',
    beschreibung: [
      'Im Profikurs geht es darum, was wichtig ist, wenn du selbstständig Tiergespräche anbieten möchtest.',
      'Hier geht es um dich: Wir bereiten dich bestmöglich auf deinen Weg in die berufliche Tierkommunikation vor und finden gemeinsam deine Stärken heraus.',
      'Wir führen unterschiedliche Gespräche mit Tieren und probieren aus, was mit der Fähigkeit der Telepathie noch alles möglich ist.',
      'Außerdem ist die Energiearbeit Teil des Kurses.',
    ],
    voraussetzung: 'Teilnahme am Basis- und Aufbaukurs oder entsprechende Vorkenntnisse in der Tierkommunikation.',
    dauer: 'Fünf Tage (Mittwoch bis Sonntag)',
    zeiten: ['Mittwoch: 17–20 Uhr', 'Donnerstag bis Samstag: 11–17 Uhr', 'Sonntag: 10–13 Uhr'],
    preis: 560,
    termine: ['4.–7. Februar 2027 (Termin noch zu bestätigen)'],
  },
];

export const kombi = { preis: 990, einzeln: kurse.reduce((s, k) => s + k.preis, 0) };

export const weitereAngebote = {
  jugendkurs: {
    titel: 'Basis- und Aufbaukurs für Jugendliche',
    text: 'Jugendliche gehen oft viel weniger verkopft an Tierkommunikation heran – für viele ist sie ganz normal. In eigenen Gruppen lernen sie, bewusst mit Tieren im Gespräch zu sein. Wer beide Stufen gemacht hat, kann später in den Profikurs weitergehen.',
  },
  lernabende: {
    titel: 'Lernabende am Hof',
    text: 'Wenn du bei mir einen Kurs gemacht hast, kannst du einmal im Monat zu den Lernabenden am Hof kommen. Hier üben wir weiter – rund um Tierkommunikation und Krafttierarbeit: kranke Tiere, verstorbene Tiere, Krafttierreisen, Energiearbeit und vieles mehr. Jeder Abend hat ein eigenes Thema.',
    // Termine im Format JJJJ-MM-TT. Vergangene Termine werden beim Bauen der Seite automatisch ausgeblendet.
    termine: ['2026-10-09', '2026-11-13', '2026-12-11', '2027-01-08', '2027-02-12', '2027-03-12', '2027-04-09', '2027-05-14', '2027-06-11', '2027-07-09'],
    info: 'Zweiter Freitag im Monat, 19–20:30 Uhr · in der Gruppe · 50 € pro Abend, Fünferkarte 200 € (40 € pro Abend)',
  },
};
