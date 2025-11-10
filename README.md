# DHubBW - Minimales Design Konzept

## Überblick
Dieses Projekt vereint alle DHubBW-Seiten in einem einheitlichen Design mit nahtloser Navigation zwischen den verschiedenen Bereichen.

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

## Features

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

### 🔧 Technical Features
- Pure JavaScript (keine externen Dependencies)
- Iframe-basierte Seitenintegration
- CSS Grid/Flexbox Layout
- Tailwind CSS für Styling

## Verwendung

### Starten
Öffnen Sie `index.html` in einem Webbrowser für die vollständige Erfahrung.

### Navigation
- **Desktop/Mobile**: Klicken Sie auf die Navigations-Tabs im Header von `index.html`

### Seiten
1. **Dashboard**: Hauptübersicht und wichtige Informationen
2. **Dateien**: Dateiverwaltung und -freigabe
3. **Kalender**: Termine und Deadlines
4. **Umfragen**: Umfragenerstellung und -verwaltung
5. **Gruppen**: Gruppenverwaltung und -kommunikation
6. **Admin**: Administrative Funktionen

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

## Zukünftige Erweiterungen
- [ ] Mobile responsive Navigation
- [ ] Dark/Light Mode Toggle
- [ ] Erweiterte Profile-Dropdown
- [ ] Breadcrumb Navigation
- [ ] Search Functionality
- [ ] Real-time Notifications

---

**Entwickelt für DHubBW** | *Minimales Design trifft maximale Funktionalität*