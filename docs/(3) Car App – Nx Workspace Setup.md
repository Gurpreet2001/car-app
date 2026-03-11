Dieses Dokument beschreibt Schritt 3 des Projekts: das initiale Nx Workspace Setup.

Ziel dieses Schritts ist es:

ein funktionierendes Nx Monorepo zu erstellen

eine erste Angular Frontend App (web) zu erzeugen

die Grundlage für Frontend Features, Backend API und Shared Libraries zu schaffen

grundlegende Frontend Tooling (Tailwind + DaisyUI) einzurichten

3 Ziel von Schritt 3

Nach diesem Schritt soll ein lauffähiger Nx Workspace existieren, der:

den Projektnamen car-app verwendet

den Package Manager npm verwendet

den Workspace Type integrated verwendet

eine Angular App web enthält

ein E2E Projekt web-e2e enthält

TailwindCSS + DaisyUI für das UI bereitstellt

später Platz für eine Backend App api bietet

eine klare Trennung zwischen apps/ und libs/ vorbereitet

3.1 Warum Nx

Für dieses Projekt wird ein Nx Monorepo verwendet.

Nx hilft dabei:

mehrere Anwendungen in einem Repository zu verwalten

gemeinsame Libraries sauber zu strukturieren

Frontend und Backend logisch zu trennen

Feature-basierte Architektur zu ermöglichen

Tests, Builds und Linting zentral zu steuern

3.2 Grundprinzip des Monorepos
apps/

In apps/ liegen startbare Anwendungen.

apps/
  web
  web-e2e
  api

web → Angular Frontend

web-e2e → Cypress End-to-End Tests

api → Spring Boot Backend (später)

libs/

In libs/ liegen wiederverwendbare Bausteine.

libs/
  web/
    auth/
    cars/
    admin/
    ui/
  shared/
    models/

Wichtige Regel:

apps/ bleiben möglichst klein

Features und Logik liegen in libs/

3.3 Entscheidungen für das Workspace Setup
Projektname
car-app
Package Manager
npm
Workspace Type
integrated

Begründung:

zentrale Konfiguration

klare Monorepo Struktur

geringerer Overhead als package-based

3.4 Erwartete Zielstruktur

Nach dem Setup:

car-app/
  apps/
    web/
    web-e2e/
  libs/
  docs/
  package.json
  nx.json
  tsconfig.base.json

Später erweitert sich die Struktur zu:

car-app/
  apps/
    web/
    web-e2e/
    api/
  libs/
    web/
      auth/
      cars/
      admin/
      ui/
    shared/
      models/
  docs/
3.5 Angular App im Workspace

Die erste Anwendung ist das Angular Frontend.

Name:

web

Grundidee:

apps/web enthält nur App-Start und Routing

Features kommen später in libs/web/*

Beispiele:

apps/web/src/main.ts
apps/web/src/app/app.routes.ts

Features später:

libs/web/cars/
libs/web/auth/
libs/web/admin/
3.6 Angular Setup Entscheidungen
Option	Entscheidung
Routing	Yes
Standalone	Yes
SSR	No
Builder	esbuild
Unit Tests	Jest
E2E Tests	Cypress
3.7 CLI Setup – Nx Workspace

Nx Workspace erzeugen:

npx create-nx-workspace@latest car-app \
  --directory=. \
  --preset=angular-monorepo \
  --workspaceType=integrated \
  --appName=web \
  --packageManager=npm \
  --routing=true \
  --style=scss \
  --bundler=esbuild \
  --unitTestRunner=jest \
  --e2eTestRunner=cypress \
  --ssr=false \
  --standaloneApi=true \
  --nxCloud=skip \
  --skipGit
3.8 Workspace testen

Angular Dev Server starten:

npx nx serve web

Browser:

http://localhost:4200
3.9 TailwindCSS installieren (v4)

Im Workspace Root:

npm install -D tailwindcss @tailwindcss/postcss postcss
3.10 DaisyUI installieren
npm install daisyui
3.11 PostCSS konfigurieren

Datei erstellen:

.postcssrc.json

Inhalt:

{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
3.12 Tailwind + DaisyUI aktivieren

Datei:

apps/web/src/styles.scss

Inhalt:

@import "tailwindcss";
@plugin "daisyui";
3.13 Test UI

Beispiel in Angular:

<button class="btn btn-primary">
  Hello DaisyUI
</button>
3.14 Git Workflow

Branch:

feature/nx-workspace-setup

Commit:

chore: create nx workspace
feat: add angular web application
feat: install tailwindcss and daisyui
Ergebnis von Schritt 3

Nach Abschluss dieses Schritts existiert:

ein funktionierendes Nx Monorepo

eine Angular Frontend App

Cypress E2E Tests

TailwindCSS + DaisyUI

klare Grundlage für Feature Libraries

Der nächste Schritt ist die Frontend Architektur innerhalb des Monorepos.
