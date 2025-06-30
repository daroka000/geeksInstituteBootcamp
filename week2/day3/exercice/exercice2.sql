
select * from language
select * from film
/*q1*/
SELECT language_id FROM language WHERE name = 'French'

UPDATE film
SET language_id = 5
WHERE film_id = 2


/*q2*/
/* foreign keys (references)  in table  customer is :customer_id*/

/*q3*/

select * from customer_review
drop table customer_review
/* drop table customer_review its an easy step*/

/*q4*/
select * from rental
SELECT COUNT(*) as  rentals_are_still_outstanding
FROM rental
WHERE return_date IS NULL

/*q5*/
SELECT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30

/*Q6*/

SELECT f.title AS title_film
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' 
  AND a.last_name = 'Monroe'
  AND f.description ILIKE '%sumo%'

SELECT title
FROM film
WHERE length < 60
  AND rating = 'R'

  SELECT DISTINCT f.title
FROM rental r
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'

SELECT DISTINCT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC








