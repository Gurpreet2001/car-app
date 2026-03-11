Dieses Dokument beschreibt Schritt 3 des Projekts: das initiale **Nx Workspace Setup**.

Ziel dieses Schrittes ist es, das Monorepo sauber zu initialisieren und die Grundstruktur für Frontend, Backend und Libraries festzulegen.

---

# 3 Ziel von Schritt 3

Nach diesem Schritt soll ein lauffähiger Nx Workspace existieren, der:

- den Projektnamen `car-app` verwendet
- den Package Manager `npm` verwendet
- den Workspace Type `integrated` verwendet
- eine erste Angular App `web` enthält
- später Platz für eine Backend App `api` bietet
- eine saubere Trennung zwischen `apps/` und `libs/` vorbereitet

---

# 3.1 Warum Nx

Für dieses Projekt wird ein **Nx Monorepo** verwendet.

Nx hilft dabei:

- mehrere Apps in einem Repository zu verwalten
- gemeinsame Libraries sauber zu strukturieren
- Frontend und Backend logisch zu trennen
- Wachstum des Projekts besser kontrollieren zu können

---

# 3.2 Grundprinzip des Monorepos

Im Projekt gelten diese Regeln:

## apps/

In `apps/` liegen **startbare Anwendungen**.

```text
apps/
  web
  api