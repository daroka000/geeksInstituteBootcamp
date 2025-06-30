SELECT * from language
SELECT * from film

/*q3*/

SELECT 
    f.title, 
    f.description, 
    l.name AS language
FROM film f
JOIN language l ON f.language_id = l.language_id

/*q4*/
SELECT 
    f.title, 
    f.description, 
    l.name AS language
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id

/*q5*/
create table new_film ( id serial primary key , name varchar(20))

INSERT INTO new_film (name)
VALUES 
    ('Fast and Furious'),
    ('Inception'),
    ('Avatar'),
    ('Titanic'),
    ('The Matrix')
 SELECT * from new_film

 create table customer_review(review_id serial primary key ,
 film_id  integer not null references new_film(id) on delete cascade ,
 language_id integer not null references language (language_id),
 title varchar(100),
score INTEGER CHECK (score BETWEEN 1 AND 10),
review_text text ,
last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP)

/*q6*/

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 

(1, 1, 'Amazing Action!', 9, 'Fast and Furious was thrilling from start to finish.'),
(2, 2, 'Visually Stunning', 8, 'Inception offers a mind-bending experience.')
/*q7*/
select * from new_film
select * from customer_review
delete from new_film WHERE id=1
 

 /*Si un film est supprimé de new_film, toutes les critiques associées dans customer_review
  seront supprimées automatiquement, grâce à la clause ON DELETE CASCADE*/
