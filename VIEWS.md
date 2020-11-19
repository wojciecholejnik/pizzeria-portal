# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - kazda kolumna = 1 stoli
    - kazdy wiersz = 30 minut
    - ma przypominac widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sa rózne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umozliwia edycje i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyzszej, bez poczatkowej informacji
- `/tables/events/:id`
  - analogicznie do powyzszej, bez eventów
- `/tables/events/new`
  - analogicznie do powyzszej, dla eventów bez poczatkowej informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach rózne rodzaje informacji (status, czas od ostatniej aktywnosci)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/waiter/order/:id`
  - jak powyzsza

# Widok kuchni

- `/kitchen`
  - wyświetlać listę zamówień w kolejności ich złozenia
  - lista musi zawierac
    - nr solika lub zamówienia zdalnego
    - pełne inforacje dot. zamówionych dań
  - na liście musi byc mozliwosc oznaczenia zmówienia jak zrealizowane
