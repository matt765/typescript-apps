## Wprowadzenie
TypeScript Apps to projekt Open Source będący docelowo zbiorem niedużych aplikacji napisanych w ReactJS. Z założenia cechuje go duża dowolność w zakresie pomysłów na aplikacje.
 
https://typescriptapps.netlify.app/

## Tech stack
React, NextJS, TypeScript, Chakra UI

## Instrukcja pracy z repozytorium

Klonujemy repozytorium na lokalne środowisko wpisując poniższe polecenie w terminal w IDE
```bash
git clone https://github.com/matt765/typescript-apps.git
```
Ustawiamy połączenie edytora ze zdalnym repozytorium, aby możliwe było pobieranie i pushowanie zmian
```bash
git remote add upstream https://github.com/matt765/typescript-apps.git
```
Tworzymy swój branch, wybierając angielskojęzyczną nazwę która najlepiej odda wybrany pomysł na aplikację. Jeśli to możliwe, dobrze jest ją poprzedzić kategorią do której się kwalifikuje. Przykłady: 'use-api/movies-library', 'game/tic-tac-toe'. Przedrostek w zasadzie tylko dla porządku, bo na razie nie ma planów dodawania kategorii na portalu.
```bash
git checkout -b NAZWA_BRANCHA
```
Instalacja bibliotek i ewentualne uruchomienie serwera na localhost:3000
```bash
npm i
npm run dev
```
Gdy zakończymy pracę nad kodem, wypychamy nasz roboczy branch na zdalne repozytorium. Można to robić przez wbudowane funkcjonalności edytorów kodu lub poniższą komendą
```bash
git push -u origin NAZWA_BRANCHA
```
Wchodzimy na Github i tworzymy Pull Request. Po szybkim reviewc branch zostanie zmergowany z masterem i trafi bezpośrednio na serwer live.

## Wskazówki dotyczące pisania kodu
- Trzymajmy się proszę komponentów funkcyjnych z TypeScriptem
- W projekcie jest skonfigurowany Eslint. Warto zintegrować wtyczkę Eslinta ze swoim IDE 
- Do stylowania mamy bibliotekę Chakra UI. Polecam poczytac dokumentację bo to świetna i prosta w obsłudze biblioteka :slightly_smiling_face: Design raczej minimalistyczny ale tu duża dowolność
- Requesty do API możemy tworzyć z wykorzystaniem obecnego już hooka useFetch
- Pliki komponentów: nazwa.comp.tsx
- Pliki stylów: nazwa.styles.tsx - w Chakra UI zwykle pisze się style razem z komponentami ale czasem jak jest tego za dużo to można umieścić je w folderze styles tam gdzie jest nasz komponent.

## Foldery
- src/assets - obrazki i filmy
- src/components - większość kodu naszych aplikacji
- src/hooks - custom hooki jeśli jest taka potrzeba
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

## Linki do dokumentacji wybranych technologii
- [Next.js](https://nextjs.org/docs)
- [React](https://pl.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) 
- [ChakraUI](https://chakra-ui.com/) 




