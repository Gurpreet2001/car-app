Dieses Dokument beschreibt Schritt 2 des Projekts: das initiale Repository- und Git-Setup.  
  
Ziel dieses Schrittes ist es, ein sauberes, versioniertes Projekt zu starten, bevor Code geschrieben wird.  
  
---  
  
# 2 Repository Setup  
  
## 2.1 Projektordner erstellen  
  
Der Projektordner entspricht dem Repository-Namen.  
  
```bash  
mkdir car-app  
cd car-app
```

---

## 2.2 Git Repository initialisieren

Initialisierung des Git-Repositories.

```bash  
git init
```

Danach setzen wir den Hauptbranch.

```bash  
git branch -M main
```

---

## 2.3 Grundstruktur des Projekts

	Die initiale Struktur soll minimal bleiben.

car-app/  
  docs/  
  .gitignore  
  .editorconfig  
  README.md

---

# 2.4 .gitignore

Die `.gitignore` verhindert, dass generierte oder lokale Dateien im Repository landen.

Beispiel:
```markdown

# Created by https://www.toptal.com/developers/gitignore/api/java,angular,maven,gradle,macos,intellij,git
# Edit at https://www.toptal.com/developers/gitignore?templates=java,angular,maven,gradle,macos,intellij,git

### Angular ###
## Angular ##
# compiled output
dist/
tmp/
app/**/*.js
app/**/*.js.map

# dependencies
node_modules/
bower_components/

# IDEs and editors
.idea/

# misc
.sass-cache/
connect.lock/
coverage/
libpeerconnection.log/
npm-debug.log
testem.log
typings/
.angular/

# e2e
e2e/*.js
e2e/*.map

# System Files
.DS_Store/

### Git ###
# Created by git for backups. To disable backups in Git:
# $ git config --global mergetool.keepBackup false
*.orig

# Created by git when using merge tools for conflicts
*.BACKUP.*
*.BASE.*
*.LOCAL.*
*.REMOTE.*
*_BACKUP_*.txt
*_BASE_*.txt
*_LOCAL_*.txt
*_REMOTE_*.txt

### Intellij ###
# Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf

# AWS User-specific
.idea/**/aws.xml

# Generated files
.idea/**/contentModel.xml

# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml

# Gradle
.idea/**/gradle.xml
.idea/**/libraries

# Gradle and Maven with auto-import
# When using Gradle or Maven with auto-import, you should exclude module files,
# since they will be recreated, and may cause churn.  Uncomment if using
# auto-import.
# .idea/artifacts
# .idea/compiler.xml
# .idea/jarRepositories.xml
# .idea/modules.xml
# .idea/*.iml
# .idea/modules
# *.iml
# *.ipr

# CMake
cmake-build-*/

# Mongo Explorer plugin
.idea/**/mongoSettings.xml

# File-based project format
*.iws

# IntelliJ
out/

# mpeltonen/sbt-idea plugin
.idea_modules/

# JIRA plugin
atlassian-ide-plugin.xml

# Cursive Clojure plugin
.idea/replstate.xml

# SonarLint plugin
.idea/sonarlint/

# Crashlytics plugin (for Android Studio and IntelliJ)
com_crashlytics_export_strings.xml
crashlytics.properties
crashlytics-build.properties
fabric.properties

# Editor-based Rest Client
.idea/httpRequests

# Android studio 3.1+ serialized cache file
.idea/caches/build_file_checksums.ser

### Intellij Patch ###
# Comment Reason: https://github.com/joeblau/gitignore.io/issues/186#issuecomment-215987721

# *.iml
# modules.xml
# .idea/misc.xml
# *.ipr

# Sonarlint plugin
# https://plugins.jetbrains.com/plugin/7973-sonarlint
.idea/**/sonarlint/

# SonarQube Plugin
# https://plugins.jetbrains.com/plugin/7238-sonarqube-community-plugin
.idea/**/sonarIssues.xml

# Markdown Navigator plugin
# https://plugins.jetbrains.com/plugin/7896-markdown-navigator-enhanced
.idea/**/markdown-navigator.xml
.idea/**/markdown-navigator-enh.xml
.idea/**/markdown-navigator/

# Cache file creation bug
# See https://youtrack.jetbrains.com/issue/JBR-2257
.idea/$CACHE_FILE$

# CodeStream plugin
# https://plugins.jetbrains.com/plugin/12206-codestream
.idea/codestream.xml

# Azure Toolkit for IntelliJ plugin
# https://plugins.jetbrains.com/plugin/8053-azure-toolkit-for-intellij
.idea/**/azureSettings.xml

### Java ###
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*

### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon


# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### macOS Patch ###
# iCloud generated files
*.icloud

### Maven ###
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
# https://github.com/takari/maven-wrapper#usage-without-binary-jar
.mvn/wrapper/maven-wrapper.jar

# Eclipse m2e generated files
# Eclipse Core
.project
# JDT-specific (Eclipse Java Development Tools)
.classpath

### Gradle ###
.gradle
**/build/
!src/**/build/

# Ignore Gradle GUI config
gradle-app.setting

# Avoid ignoring Gradle wrapper jar file (.jar files are usually ignored)
!gradle-wrapper.jar

# Avoid ignore Gradle wrappper properties
!gradle-wrapper.properties

# Cache of project
.gradletasknamecache

# Eclipse Gradle plugin generated files
# Eclipse Core
# JDT-specific (Eclipse Java Development Tools)

### Gradle Patch ###
# Java heap dump
*.hprof

# End of https://www.toptal.com/developers/gitignore/api/java,angular,maven,gradle,macos,intellij,git

```

---

# 2.5 .editorconfig

`.editorconfig` sorgt für konsistente Formatierung im Team.

```bash
root = true  
  
[*]  
charset = utf-8  
indent_style = space  
indent_size = 2  
end_of_line = lf  
insert_final_newline = true  
trim_trailing_whitespace = true  
  
[*.java]  
indent_size = 4
```


---

# 2.6 README.md

Das README beschreibt das Projekt auf oberster Ebene.

```bash
Minimaler Inhalt:

# Car App  
  
Fullstack Car Marketplace Application.  
  
Tech Stack:  
  
- Angular  
- Spring Boot  
- PostgreSQL  
- Nx Monorepo
```

---

# 2.7 docs Struktur

Alle Architektur- und Setup-Dokumente liegen im `docs` Ordner.

docs/  
  01-project-foundation.md  
  02-repository-setup.md

Später folgen weitere Dokumente wie:

03-nx-workspace.md  
04-frontend-architecture.md  
05-backend-architecture.md  
06-database-design.md

---

# 2.8 Erster Commit

Nachdem die Grundstruktur erstellt wurde, erfolgt der erste Commit.

git add .  
  
git commit -m "chore: initialize repository"

Dieser Commit enthält ausschließlich:

- Projektstruktur
    
- Dokumentation
    
- Git Konfiguration
    

---

# Ergebnis von Schritt 2

Nach Abschluss dieses Schrittes existiert:

- ein initialisiertes Git Repository
    
- eine saubere Projektgrundstruktur
    
- erste Projektdokumentation
    
- ein nachvollziehbarer erster Commit

`CLI Breakdown:`

```bash

echo "# car-app" >> README.md   
git init // Repo Initiieren
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Gurpreet2001/car-app.git
git push -u origin main

git checkout -b chore/init-setup
touch .editorconfig // Inhalt copy-paste
touch .gitignore // Inhalt copy-paste
mkdir docs // Inhalt copy-paste
```

Der nächste Schritt besteht darin, das **Nx Monorepo zu initialisieren**.
