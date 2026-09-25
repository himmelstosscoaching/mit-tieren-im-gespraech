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
    termine: ['10./11. Oktober 2026', '14./15. November 2026', 'Weitere Termine 2027 folgen'],
  },
  {
    slug: 'aufbaukurs',
    stufe: 2,
    titel: 'Aufbaukurs',
    untertitel: 'Die vielen Möglichkeiten der Tierkommunikation',
    kurz: 'Wir vertiefen die Gespräche – auch mit kranken, verstorbenen oder vermissten Tieren – und öffnen den Blick für Krafttiere, Pflanzen und Energiearbeit.',
    beschreibung: [
      'Im Aufbaukurs geht es um die vielfältigen Möglichkeiten der Tierkommunikation. Wir vertiefen die Gespräche mit Tieren und beschäftigen uns auch mit kranken, verstorbenen oder vermissten Tieren.',
      'Krafttierarbeit, Gespräche mit Pflanzen und Energiearbeit sind ebenfalls Teil des Kurses.',
    ],
    voraussetzung: 'Teilnahme am Basiskurs oder entsprechende Vorkenntnisse in der Tierkommunikation.',
    dauer: 'Freitagabend bis Sonntag',
    zeiten: ['Freitag: 18–20:30 Uhr', 'Samstag und Sonntag: 10–16 Uhr'],
    preis: 310,
    termine: ['23.–25. Oktober 2026', 'Weitere Termine 2027 folgen'],
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
    ],
    voraussetzung: 'Teilnahme am Basis- und Aufbaukurs oder entsprechende Vorkenntnisse in der Tierkommunikation.',
    dauer: 'Fünf Tage (Mittwoch bis Sonntag)',
    zeiten: ['Mittwoch: 17–20 Uhr', 'Donnerstag bis Samstag: 11–17 Uhr', 'Sonntag: 10–13 Uhr'],
    preis: 560,
    termine: ['4.–7. Februar 2027 (Termin noch zu bestätigen)'],
  },
];

export const weitereAngebote = {
  jugendkurs: {
    titel: 'Basiskurs für Jugendliche',
    text: 'Ein eigenes Wochenende für junge Menschen, die mit Tieren im Gespräch sein wollen. Termin und Preis auf Anfrage.',
  },
  lernabende: {
    titel: 'Lernabende am Hof',
    text: 'Einmal im Monat treffen wir uns in Emmingen-Liptingen zu einem Abend rund um Tierkommunikation und Krafttierarbeit – kranke Tiere, verstorbene Tiere, Krafttierreisen, Energiearbeit und vieles mehr. Melde dich, wenn du dabei sein möchtest.',
  },
};
