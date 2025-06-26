select * from customer

SELECT first_name || ' ' || last_name AS full_name FROM customer
SELECT DISTINCT create_date FROM customer
SELECT * FROM customer ORDER BY first_name DESC

select  film_id, title, description, release_year,rental_rate from film  ORDER by rental_rate asc



SELECT a.address, a.phone
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city = 'Texas';

select * from city WHERE city = 'Texas';

/*Q7*/

select * from film WHERE film_id = 15 OR film_id = 150

/*Q8*/
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Ali forever'
/*Q9*/

SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'AG%'
/*Q10*/
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10

/*Q11*/

SELECT  * FROM film ORDER BY rental_rate ASC OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY
/*Q12*/

SELECT 
  c.customer_id,
  c.first_name,
  c.last_name,
  p.amount,
  p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC

/*Q13*/

SELECT *
FROM film
WHERE film_id NOT IN (
  SELECT film_id
  FROM inventory)

/*Q14*/

SELECT 
  ci.city,
  co.country
FROM city ci
JOIN country co ON ci.country_id = co.country_id;

/*Q 15*/

SELECT 
  c.customer_id,
  c.first_name,
  c.last_name,
  p.amount,
  p.payment_date,
  p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id ASC

