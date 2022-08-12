## Wprowadzenie
TypeScript Apps to projekt Open Source będący docelowo zbiorem niedużych aplikacji napisanych w ReactJS
 
https://typescriptapps.netlify.app/

## Tech stack
React, NextJS, TypeScript, Chakra UI

## Instrukcja pracy z repozytorium

Pobranie repozytorium na lokalne środowisko 
```bash
git clone https://github.com/matt765/typescript-apps.git
```
Połączenie IDE ze zdalnym repozytorium
```bash
git remote add upstream https://github.com/matt765/typescript-apps.git
```
Stworzenie własnego brancha
```bash
git checkout -b NAZWA_BRANCHA
```
Instalacja bibliotek i ewentualne uruchomienie serwera na localhost:3000
```bash
npm i
npm run dev
```
Wypchnięcie brancha na zdalne repozytorium
```bash
git push -u origin NAZWA_BRANCHA
```
Następnym krokiem jest stworzenie Pull Requestu na Githubie. Po szybkim review branch zostanie zmergowany z masterem i trafi bezpośrednio na serwer live.

## Wskazówki dotyczące pisania kodu
- Konwencja projektu to komponenty funkcyjne z TypeScriptem, stylowane w Chakra UI
- Requesty do API możemy tworzyć z wykorzystaniem obecnego już hooka useFetch
- Pliki komponentów: nazwa.comp.tsx
- Pliki stylów: nazwa.styles.tsx - w Chakra UI zwykle pisze się style razem z komponentami ale czasem jak jest tego za dużo to można umieścić je w folderze styles tam gdzie jest nasz komponent.

## Foldery
- src/assets - obrazki i filmy
- src/components - większość kodu naszych aplikacji
- src/hooks - custom hooki
- src/pages - folder wymagany przez NextJS. Odpowiednik React Routera w CRA
- W razie potrzeb można jeszcze utworzyć foldery np. utils/services/interfaces

## Propozycje pomysłów na aplikacje:
- Konwerter walut
- Kalkulator
- Pobieranie danych z API https://github.com/public-apis/public-apis
- Organizer zadań
- Gra Kółko i krzyżyk
- Prognoza pogody
- Gra Snake
- Gra Hangman
- Stoper / Zegar
- Pomodoro App
- Edytor tekstu
- Katalog filmów
- Katalog książek
- Licznik kalorii / BMI
- Skracacz linków

## W planie:
- wersja mobilna
- aktualizacja Reacta do v18
- dodanie trybu nocnego i przełącznika z Chakra UI
- zabezpieczenia przed spamowaniem requestów do API

## Dokumentacje
- [Next.js](https://nextjs.org/docs)
- [React](https://pl.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) 
- [ChakraUI](https://chakra-ui.com/) 



