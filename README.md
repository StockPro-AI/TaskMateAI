# 🤖 TaskMateAI

> **KI-gestützte Plattform für Aufgaben- & Projektmanagement**  
> AI-powered task & project management SaaS with smart prioritization, automation & real-time analytics.

[![GitHub stars](https://img.shields.io/github/stars/StockPro-AI/TaskMateAI?style=social)](https://github.com/StockPro-AI/TaskMateAI)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Docker](https://img.shields.io/badge/docker-ready-brightgreen.svg)](docker-compose.yml)

---

## ✨ Features

- 🧠 **KI-gesteuerte Priorisierung** – Intelligente Vorschläge für Fokus-Blöcke & Task-Reihenfolge
- 🔄 **Anpassbare Workflows** – Kanban, Roadmaps, Sprint-Planning & wiederkehrende Checklisten
- ⚡ **Echtzeit-Kollaboration** – Live-Updates, Mentions & kontextbezogene Diskussionen
- 📊 **Real-Time Analytics** – Performance-Dashboards, Durchlaufzeiten & Bottleneck-Erkennung
- 🌐 **Modern SaaS Design** – Responsiv, Dark-Mode, elegante UI mit Fokus auf UX
- 🐟 **One-Click Docker Setup** – Lokale Entwicklung in Sekunden

---

## 🚀 Quick Start

### Option 1: Windows One-Click Starter (empfohlen)

1. **Docker Desktop installieren**  
   [Download Docker Desktop](https://www.docker.com/products/docker-desktop)

2. **Repository klonen**
   ```bash
   git clone https://github.com/StockPro-AI/TaskMateAI.git
   cd TaskMateAI
   ```

3. **Starten**
   Doppelklick auf `start.bat` – fertig! 🎉

### Option 2: Manuell mit Docker Compose

```bash
git clone https://github.com/StockPro-AI/TaskMateAI.git
cd TaskMateAI
docker-compose up -d
```

➡️ **Zugriff:** http://localhost:8080

### Option 3: Direkt im Browser (ohne Installation)

Einfach `index.html` in deinem Browser öffnen – keine Installation nötig!

---

## 📚 Dokumentation

### Projektstruktur

```
TaskMateAI/
├── index.html          # Haupt-Landing-Page
├── styles.css          # Modern SaaS Styling
├── script.js           # Interaktive Features & KI-Assistent (Mock)
├── docker-compose.yml  # One-Click Docker Setup
├── start.bat           # Windows Launcher
└── README.md           # Diese Datei
```

### Architektur

- **Frontend:** Vanilla HTML5, CSS3 (Custom Properties), ES6+ JavaScript
- **Design-System:** Warme Neutraltöne, Petrol-Akzent, Responsive Grid
- **Fonts:** Work Sans (Body), Instrument Serif (Display)
- **Container:** Nginx Alpine (lightweight, production-ready)

---

## 🛠️ Entwicklung

### Lokale Entwicklung

```bash
# Mit einem einfachen HTTP-Server
python -m http.server 8000
# oder
npx serve .
```

### Docker stoppen

```bash
docker-compose down
```

---

## 🎯 Roadmap

- [ ] Backend-API (Node.js/Express oder Python/FastAPI)
- [ ] Echte KI-Integration (OpenAI GPT-4, Anthropic Claude)
- [ ] User Authentication & Workspace-Management
- [ ] Datenbank-Integration (PostgreSQL)
- [ ] GitHub/Jira/Slack Integrationen
- [ ] Mobile App (React Native)

---

## 🤝 Contributing

Beiträge sind willkommen! Bitte erstelle einen Fork und reiche einen Pull Request ein.

1. Fork das Projekt
2. Erstelle deinen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

---

## 📝 Lizenz

MIT License – siehe [LICENSE](LICENSE) Datei für Details.

---

## 👤 Autor

**StockPro-AI**  
GitHub: [@StockPro-AI](https://github.com/StockPro-AI)

---

## ⭐ Support

Wenn dir TaskMateAI gefällt, gib dem Projekt einen Stern! ⭐

---

<div align="center">
  <sub>Built with ❤️ for modern teams</sub>
</div>
