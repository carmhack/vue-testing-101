# Vue Testing 101

Nella repository sono presenti:
- Pinia (State Manager), insieme a pinia/testing
- axios (API)
- vitest (test runner)
- jsdom (environment per vitest)
- cypress (e2e test)

Nel package.json sono presenti i comandi per unit test (tramite Vitest UI), coverage ed e2e.

## Unit Test
### Hello
Un componente semplice con due ref:
- msg
- inputMsg

E' presente un h1 che stampa msg, un input con v-model su inputMsg e un pulsante. Al click sul pulsante msg viene valorizzato con inputMsg.

Testiamo che:
- il componente viene renderizzato correttamente
- al click sul pulsante cambia il testo nell'h1

### Advanced
Il componente renderizza un array di oggetti che rappresentano delle pagine della nostra webapp (N.B. non è presente vue router).

Riceve una prop isAuthenticated che, se true, renderizza un link aggiuntivo che porta sulla rotta /admin.

Testiamo che:
- viene renderizzato il link homepage
- non viene renderizzato, di default, il link verso /admin
- se isAuthenticated è true, viene renderizzato il link verso /admin

### API
Il componente APITest gestisce una chiamata verso PokeAPI. In particolare, gestisce l'offset che permette così di andare avanti e indietro con le pagine e visualizzare una lista di nomi di pokemon sempre diversa.

E' presente un watch che al cambio dell'offset effettua una nuova chiamata API con il valore aggiornato.

Testiamo che:
- Al mount del componente viene chiamato axios 1 sola volta e con l'url corretto
- La lista di pokemon ha 15 elementi e il primo contiene come testo "bulbasaur"

### Store
Lo store gestisce un counter, un valore massimo e una percentuale di completamento.
In particolare, la percentuale è un computed basato su counter e max.
La funzione increment aggiunge 1 al counter.

Testiamo che:
- il counter in partenza è a 0
- il counter cambia se chiamiamo increment()
- la percentuale viene aggiornata correttamente

Testiamo anche un componente che utilizza lo store (ProgressTest). In particolare il componente mostra la percentuale e ha un pulsante che chiama la funzione increment dello store.

Testiamo che:
- mostra la percentuale 0 all'avvio
- al click sul pulsante viene chiamata la funzione increment dello store

