# Link Roulette!

Just roll with it.

A very simple application that takes in an array of links and generates a link that redirects to one of those links at random.

## How?

The application just encodes the values of the inputs in base64 (`btoa`), joins them with `&` and appends them to the base URL as a hash.

If the entry URL contains a hash, the application picks the parts (split by `&`), picks an element at random and attempts to parse it (`atob`). If it is successful, the user is redirected to that page.

Did I already say it was very simple?
