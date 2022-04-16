## Wprowadzenie
TypeScript Apps to projekt Open Source będący docelowo zbiorem aplikacji implementujących różne rozwiązania możliwe do wykonania z wykorzystaniem javascriptowej biblioteki ReactJS. Z założenia cechuje go duża dowolność w zakresie pomysłów na aplikacje. Główne cele projektu to nauka  TypeScriptu i pracy w zespole

## Tech stack
React, NextJS, TypeScript, Chakra UI

## Instrukcja pracy z repozytorium
Dla osób które nie mają większego doświadczenia z gitem ;)
1. Akceptacja zaproszenia - wchodzimy na główną stronę repozytorium, na górze ekranu powinien być widoczny przycisk 'View invitation' > Accept
2. Klonujemy repozytorium na lokalne środowisko wpisując poniższe polecenie w terminal w IDE
```bash
git clone https://github.com/matt765/typescript-apps.git
```
3. Ustawiamy połączenie edytora ze zdalnym repozytorium, aby możliwe było pobieranie i pushowanie zmian
```bash
git remote add upstream https://github.com/matt765/typescript-apps.git
```
4. Tworzymy swój branch, wybierając angielskojęzyczną nazwę która najlepiej odda wybrany pomysł na aplikację. Jeśli to możliwe, dobrze jest ją poprzedzić kategorią do której się kwalifikuje. Przykłady: 'use-api/movies-library', 'game/tic-tac-toe'. Przedrostek w zasadzie tylko dla porządku, bo na razie nie ma planów dodawania kategorii na portalu.
```bash
git checkout -b NAZWA_BRANCHA
```
5. Instalacja bibliotek i ewentualne uruchomienie serwera na localhost:3000
```bash
npm i
npm run dev
```
6. Mamy już swój branch, możemy rozpocząc pracę nad kodem. Czasami zdarza się, że w trakcie naszej pracy ktoś wrzuci na branch 'master' kod, który może mieć konfilkt z tym co mamy u siebie. Dlatego warto od czasu do czasu lub chociaż przed wypchnięciem brancha wpisać poniższe polecenia, które spowodują pobranie zmian ze zdalnego brancha 'master' na lokalny 'master' i połączenie ich z naszym branchem roboczym, umożliwiając rozwiązanie ewentualnych konfliktów. Jednak ze względu na specyfikę projektu raczej nie będzie się to zdarzać, bo prawdopodobnie każdy developer będzie miał swoje pliki/aplikacje które nie będą konfliktować z innymi
```bash
git checkout master
git pull
git checkout NAZWA_BRANCHA
git rebase master
```
7. Gdy zakończymy pracę nad kodem, wypychamy nasz roboczy branch na zdalne repozytorium. Można to robić przez wbudowane funkcjonalności edytorów kodu lub poniższą komendą
```bash
git push -u origin NAZWA_BRANCHA
```
Jeśli swój branch już wcześniej wypchnęliśmy i dorzucamy poprawki to wystarczy wpisać:
```bash
git push
```
8. Wchodzimy na Github i tworzymy Pull Request. Można wrzucić linka na wspólną konwersację
9. W Pull Request mogą pojawić się komentarze ze wskazówkami co można poprawić. Na koniec branch zostanie zmergowany z masterem i trafi bezpośrednio na serwer live.

## Wskazówki dotyczące pisania kodu
- Staramy się trzymać aktualnej konwencji, ale jak ktoś ma jakieś sugestie to śmiało proszę pisać
- W projekcie jest skonfigurowany Eslint, narzucający pewne standardy pisania kodu. Warto zintegrować wtyczkę Eslinta ze swoim IDE
- Tworzymy komponenty funkcyjne z TypeScriptem
- Przed wypchnięciem brancha dobrze jest usunąć zakomentowany kod i puste pliki jeśli takie się trafią
- Stylowanie piszemy z użyciem Chakra UI. Polecam poczytac dokumentację bo to świetna i prosta w obsłudze biblioteka ;) Design raczej minimalistyczny ale tu duża dowolność
- Requesty do API możemy tworzyć z wykorzystaniem obecnego już hooka useFetch
- Pliki komponentów: nazwa.comp.tsx
- Pliki stylów: nazwa.styles.tsx - w Chakra UI zwykle pisze się style razem z komponentami ale czasem jak jest tego za dużo to można umieścić je w folderze styles tam gdzie jest nasz komponent.

## Foldery
- src/assets - obrazki i filmy
- src/components - tu umieszczamy większość kodu naszych aplikacji
- src/hooks - custom hooki jeśli jest taka potrzeba
- src/pages - folder wymagany przez NextJS. Każdy plik to oddzielna podstrona. Jest to odpowiednik React Routera w CRA
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

Jeśli ktoś ma doświadczenie w programowaniu, ma sugestie co do funkcjonalności aplikacji, workflow, designu, chce uczestniczyć w Code Review lub ma jakieś pytania to proszę pisać :) 


