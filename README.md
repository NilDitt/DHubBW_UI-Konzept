# DHubBW – UI Design Konzept (Static Prototype)

## Überblick

Dieses Repository ist ein reines **UI / Design Konzept** (Prototyp). Alle Inhalte sind **statisch und gehardcoded** – es gibt keinerlei Backend, API-Calls, Authentifizierung, Persistenz oder dynamische Datenverarbeitung. Ziel ist die visuelle und strukturelle Darstellung der späteren Plattform.

> Wichtig: Dies ist _kein_ produktives System und enthält bewusst keine Build-Tooling-, Framework- oder Datenlogik. Es dient ausschließlich als Grundlage für Diskussion, Usability-Feedback und spätere technische Umsetzung.

## Design-Prinzipien

### Unified Visual Identity

- **Konsistente Farbpalette**: Verwendung der DHBW-Farben (#121315, #1A1C1F, #C8102E)
- **Einheitliche Typografie**: Inter und Roboto als Hauptschriften
- **Kohärente Komponenten**: Standardisierte Buttons, Navigation und Layout

### Navigation & Routing

- **Zentrale Navigation**: Horizontale Hauptnavigation mit Icons und Labels
- **Active States**: Visuelle Hervorhebung der aktuell aktiven Seite
- **Mobile Responsive**: Ausklappbares Mobile-Menü für kleinere Bildschirme
- **Smooth Transitions**: Sanfte Übergänge zwischen den Seiten

### Profil & Branding

- **Einheitliches Logo**: UpdateLogo wird für alle Seiten verwendet
- **Konsistentes Profilbild**: Das Profilbild aus calendar_and_deadlines wird überall verwendet
- **Brand Consistency**: Einheitliche Header-Struktur über alle Bereiche

## Datei-Struktur

```
/
├── index.html                    # Hauptnavigation (Startdatei)
├── dashboard_overview/
│   └── code.html                 # Dashboard-Bereich (ohne Header)
├── calendar_and_deadlines/
│   └── code.html                 # Kalender & Deadlines (ohne Header)
├── files_management/
│   └── code.html                 # Dateiverwaltung (ohne Header)
├── polls_management/
│   └── code.html                 # Umfragenverwaltung (ohne Header)
├── groups_directory/
│   └── code.html                 # Gruppen-Verzeichnis (ohne Header)
└── admin/stuv_announcements/
    └── code.html                 # Admin-Bereich (ohne Header)
```

## Scope & Status

| Bereich                                                                             | Status          | Art                         |
| ----------------------------------------------------------------------------------- | --------------- | --------------------------- |
| Navigation / Layout                                                                 | Fertig          | Statisch (iframe)           |
| Seiten (Dashboard, Kalender, Dateien, Umfragen, Gruppen, Admin, Mensa, Q&A, Profil) | Layout fertig   | Inhalt beispielhaft / Dummy |
| Responsives Grundlayout                                                             | Teilweise       | Basis-Anpassungen vorhanden |
| Interaktion (Klick-Navigation)                                                      | Minimal         | Nur Iframe-Wechsel          |
| Daten / Backend                                                                     | Nicht vorhanden | Platzhalter                 |

## Limitierungen

- Keine echte Datenquelle (alle Einträge zu Mensa, Dateien, Kalender, Q&A etc. sind Beispiel-Daten)
- Kein State-Management / keine Speicherung von Änderungen
- Kein Build-Prozess, kein Bundling – reine statische HTML-Dateien
- Accessibility nur rudimentär betrachtet
- Performance / Code-Struktur nicht optimiert (Prototyp-Charakter)
- Sicherheitsaspekte (Auth, Rollen, Permissions) nicht implementiert

## Features (rein visuell)

### 🎯 Hauptnavigation (index.html)

- Zentrale Navigation mit Iframe-Integration
- Einheitliches Logo und Profilbild
- Saubere Trennung zwischen Navigation und Inhalten
- Alle Unterseiten ohne doppelte Header

### 📱 Optimierte Architektur

- **Zentrale Navigation**: Ein einziger Header in `index.html`
- **Saubere Unterseiten**: Alle Header-Duplikate entfernt
- **Nahtlose Integration**: Iframe-basierte Einbindung

### 📱 Responsive Design

- Desktop: Horizontale Navigation mit Icons
- Tablet: Kompakte Navigation
- Mobile: Collapsible Menu

### 🎨 Visual Enhancements

- Hover-Effekte auf Navigation
- Active States mit Background-Highlighting
- Notification Badges
- Smooth Animations

### 🔧 Technischer Rahmen

- Reines statisches HTML + Inline JavaScript für Navigation
- Tailwind CDN (kein eigenes Build / keine Purge-Konfiguration)
- Iframe-basierte Seitenintegration anstelle von echtem Routing
- Layout mittels Flexbox / Grid

## Architektur-Konzept

Alle Unterseiten werden über ein einzelnes `iframe` in `index.html` geladen. Das simuliert spätere Navigation / Routing, ohne echtes SPA- oder Server-Routing umzusetzen.

```text
index.html (Header / Navigation / Iframe-Container)
└── <iframe id="content-frame"> lädt jeweilige *code.html* Dateien
```

## Verwendung (Prototype Mode)

## Verwendung

### Starten

Einfach `index.html` direkt im Browser öffnen (lokal). Es sind **keine** Installations- oder Build-Schritte notwendig.

### Navigation

- **Desktop/Mobile**: Klicken Sie auf die Navigations-Tabs im Header von `index.html`

### Seiten (Design-Dummies)

1. **Dashboard** – Überblick, Zeitplan, Fälligkeitsboxen
2. **Dateien** – Beispielhafte Dateiliste (statisch)
3. **Kalender** – Statisch visualisierter Tagesbereich
4. **Umfragen** – Dummy-Listen / Platzhalter
5. **Gruppen** – Layout für Gruppenkacheln
6. **Admin** – Platzhalter für STUV-Ankündigungen
7. **Mensa** – Statischer Speiseplan (Beispieldaten)
8. **Q&A + Detailansicht** – Fragenliste & Artikelseite (statisch)
9. **Profil** – Formular- und Anzeige-Komponenten (ohne Speicherung)

## Design-Details

### Farb-Schema (DHBW Corporate)

```css
--dhbw-bg: #121315          /* Haupthintergrund */
--dhbw-panel: #1A1C1F       /* Panel-Hintergrund */
--dhbw-border: #2A2D31      /* Rahmen */
--dhbw-red: #C8102E         /* DHBW Rot (Primary) */
--dhbw-text-primary: #F2F2F5 /* Haupt-Text */
--dhbw-text-secondary: #A8ADB5 /* Sekundär-Text */
```

### Navigation States

- **Default**: Grauer Text, transparenter Hintergrund
- **Hover**: Weißer Text, leichter Hintergrund
- **Active**: Weißer Text, dunkler Hintergrund, Rounded

### Profil-Integration

- **Profilbild**: Aus `calendar_and_deadlines/code.html` übernommen
- **Logo**: UpdateLogo für Konsistenz
- **Position**: Rechts im Header, mit Notification-Badge

## Browser-Kompatibilität

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Geplante nächste Schritte (mögliche Weiterentwicklung)

1. Ablösung des Iframe durch echtes Routing (z. B. SPA Framework oder serverseitig)
2. Einführung eines Component-Systems (React / Vue / Svelte oder Web Components)
3. Anbindung an Backend / API (Authentifizierung, Datenhaltung)
4. State-Management (z. B. Zustand für User, Dateien, Fragen)
5. Internationalisierung (i18n)
6. Accessibility Review & Verbesserungen
7. Performance-Optimierung (Tailwind Build, CSS Purging)
8. Test-Setup (Unit / E2E)

## Hinweise für Entwickler:innen

Dieses Repo eignet sich als Diskussionsgrundlage für:

- Informationsarchitektur
- UI/UX Feedback
- Komponenten-Inventar
- Design Tokens (Farben, Typografie, Spacing)

Bitte Issues / Ideen klar markieren als: `idea`, `design`, `scope`, `backend-needed`.

---

**Stand:** Prototyp (Design-Fokus) – Nicht für Produktion geeignet.

**Entwickelt für DHubBW** | _Visuelles Fundament für spätere Umsetzung_
