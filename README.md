## Introduction
TypeScript Apps is an Open Source project  that is a collection of small applications written with React
 
https://typescriptapps.netlify.app/

## Tech stack
React, NextJS, TypeScript, Chakra UI

## How to join in?
Clone the repository to your local environment by typing the following command in the terminal in the IDE
```bash
git clone https://github.com/matt765/typescript-apps.git
```
Set up a connection between the editor and the remote repository, so that changes can be fetched and pushed
```bash
git remote add upstream https://github.com/matt765/typescript-apps.git
```
Create your branch, choosing a name that best describes your application idea. If possible, you could prefix it with the category it qualifies for. Examples: 'use-api/movies-library', 'game/tic-tac-toe'. The prefix is basically just for the record, as there are currently no plans to add categories to the portal 
```bash
git checkout -b BRANCH_NAME
```
Installing the libraries and running the server on localhost:3000
```bash
npm i
npm run dev
```
When we are done working on the code, we push our working branch to the remote repository. This can be done through the built-in functionality of code editors or with the following command. To be able to push accept collaboration invitation or use fork
```bash
git push -u origin BRANCH_NAME
```
Go to Github and create a Pull Request. After quick review the branch will be merged with master and will go directly to the live server.

## Tips on writing code
- Please stick to creating functional components with TypeScript
- The project has Eslint configured. It is worth to integrate Eslint plugin with your IDE   
- For styling we have Chakra UI. I recommend reading the documentation because it is a great and easy to use library 🙂 Design rather minimalistic but anything that looks decent will be fine
- Requests to API can be created using the already existing useFetch hook
- Component files: name.comp.tsx
- Styles files: name.styles.tsx - in Chakra UI we usually write styles together with components but sometimes if there is too much of it we can put it in styles folder where our component is.

## Folders
- src/assets - images and videos
- src/components - most of the applications logic
- src/hooks - custom hooks if you need them
- src/pages - folder required by NextJS. Equivalent of React Router in CRA
- If needed we can create folders like utils/services/interfaces

## Application ideas:
- Currency converter
- Calculator
- Using some API https://github.com/public-apis/public-apis 
- Task organizer
- Circle & Cross Game
- Weather forecast
- Snake Game
- Hangman Game
- Stopwatch / Clock
- Pomodoro App
- Text Editor
- Movie catalog
- Book catalog
- Calorie counter / BMI
- Link shortener
- 
## To do:
- mobile version
- updating React to v18
- adding night mode and a switch with Chakra UI
- protection against spamming API requests

## Docs
- [Next.js](https://nextjs.org/docs)
- [React](https://pl.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) 
- [ChakraUI](https://chakra-ui.com/) 

----

Polish version / Wersja polska

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




