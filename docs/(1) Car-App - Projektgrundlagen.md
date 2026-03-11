
Dieses Dokument definiert die grundlegenden Entscheidungen für das Projekt **car-app**.  
Alle folgenden Implementierungen orientieren sich an diesen Regeln.

---

# 1 Projektdefinition

## 1.1 Projektname

**Projektname:** `car-app`

Verwendung im Projekt:

|Kontext|Name|
|---|---|
|Git Repository|`car-app`|
|Nx Workspace|`car-app`|
|Frontend App|`web`|
|Backend App|`api`|
|Docker Projekt|`car-app`|

---

# 1.2 MVP Funktionen

Das Minimum Viable Product soll folgende Funktionen enthalten.

## Customer

Ein normaler Benutzer kann:

- sich einloggen
    
- eine Übersicht aller Autos sehen
    
- eine Detailansicht eines Autos sehen
    
- ein Auto kaufen
    

## Admin

Ein Administrator kann:

- sich einloggen
    
- Autos verwalten (RESTful CRUD)
    
- Bestellungen sehen
    

Bestellungen enthalten mindestens:

- Käufer
    
- Auto
    
- Status
    

Mögliche Status:

- `OPEN`
    
- `PAID`
    
- optional später `CANCELLED`
    

---

# 1.3 Rollen

Das System verwendet genau zwei Rollen.

```text
CUSTOMER
ADMIN
```

Regeln:

- Rollen werden immer **in Großbuchstaben** geschrieben
    
- Rollen werden als **Enum** implementiert
    
- Rollen werden sowohl im Backend als auch im Frontend verwendet
    

---

# 1.4 Tech Stack

Das Projekt basiert auf einem modernen Fullstack-Setup.

|Bereich|Technologie|
|---|---|
|Monorepo|Nx 22|
|Frontend|Angular 21|
|Backend|Spring Boot 4|
|Java|Java 21 LTS|
|Datenbank|PostgreSQL 18|
|Container|Docker / Docker Compose|
|API Testing|Postman|
|Frontend Testing|Cypress|
|Backend Build|Maven|

Empfohlene lokale Versionen:

```text
Node.js 22 LTS
Java 21
Docker
Git
```

---

# 1.5 Namenskonventionen

## Allgemeine Regeln

|Element|Konvention|
|---|---|
|Ordner|kebab-case|
|Dateien|kebab-case|
|Klassen|PascalCase|
|Interfaces|PascalCase|
|Variablen|camelCase|
|Funktionen|camelCase|
|Konstanten|UPPER_SNAKE_CASE|
|Datenbank|snake_case|
|Rollen|UPPER_SNAKE_CASE|

---

## Beispiele

### Ordner

```text
apps/web
apps/api
libs/web/auth
libs/shared/models
```

### Angular Dateien

```text
login-page.component.ts
car-list.component.ts
auth.service.ts
```

### Angular Klassen

```text
LoginPageComponent
CarListComponent
AuthService
```

---

### Java Packages

```text
com.carapp.api.auth
com.carapp.api.car
com.carapp.api.order
```

### Java Klassen

```text
AuthController
CarController
OrderService
JwtAuthenticationFilter
```

---

### Datenbank

Tabellen:

```text
users
cars
orders
```

Spalten:

```text
created_at
updated_at
buyer_user_id
```

---

### REST API

Beispiele:

```text
GET /api/cars
GET /api/cars/{id}

POST /api/auth/login

GET /api/admin/orders

POST /api/admin/cars
PUT /api/admin/cars/{id}
DELETE /api/admin/cars/{id}
```

---

# 1.6 Git Konventionen

## Branch Struktur

```text
main
feature/*
```

Beispiele:

```text
feature/auth-backend
feature/auth-frontend
feature/car-list
feature/admin-orders
```

Regeln:

- niemals direkt auf `main` entwickeln
    
- jedes Feature in einem eigenen Branch
    
- kleine, verständliche Commits
    
- nur lauffähigen Code committen
    

---

## Dateien die nicht committed werden

```text
node_modules
dist
target
.env
logs
.idea
.vscode
```

Diese werden über `.gitignore` ausgeschlossen.

---

# 1.7 Commit Konvention

Das Projekt verwendet **Conventional Commits**.

## Format

```text
type: kurze beschreibung
```

---

## Commit Typen

|Typ|Bedeutung|
|---|---|
|feat|neues Feature|
|fix|Fehlerbehebung|
|refactor|Code umstrukturieren|
|test|Tests hinzufügen oder ändern|
|docs|Dokumentation|
|chore|Setup / Konfiguration|
|build|Build System|
|ci|CI/CD Änderungen|

---

## Beispiele

```text
chore: initialize repository
chore: create nx workspace
feat: add angular web application
feat: add spring boot api
feat: implement login endpoint
feat: add car list page
test: add car list e2e tests
docs: add project setup guide
```

---

# Ergebnis von Schritt 1

Nach diesem Schritt sind folgende Dinge definiert:

- Projektname
    
- MVP Scope
    
- Rollenmodell
    
- Tech Stack
    
- Namenskonventionen
    
- Git Workflow
    
- Commit Konvention
    

Diese Regeln gelten für das gesamte Projekt und verhindern spätere Strukturprobleme.