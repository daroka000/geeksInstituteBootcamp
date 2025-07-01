create table Customer(id serial primary key , first_name varchar (20) not null, last_name varchar(20) NOT NULL) 

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE,  
        FOREIGN KEY (customer_id)
        REFERENCES customer(id)
        ON DELETE CASCADE
)
/*q2*/
insert into Customer (first_name,last_name) values ('John', 'Doe'),
('Jerome','Lalu'),
('Lea', 'Rive')
select * from Customer

/*q3*/
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES
(TRUE, (SELECT id FROM Customer WHERE first_name = 'John')),

(FALSE, (SELECT id FROM Customer WHERE first_name = 'Jerome'))
 select * from customer_profile
/*q4*/
select * from customer_profile
SELECT c.first_name
FROM Customer c
JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE


/*PART II*/

/*q1*/
Create table Book( book_id SERIAL PRIMARY KEY, title varchar(50) NOT NULL, author  varchar(50)NOT NULL)
/*q2*/
insert into Book(title,author) values('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')
select * from Book
/*q3*/
create table Student (student_id SERIAL PRIMARY KEY, name varchar(50) NOT null UNIQUE, age INT CHECK (age <= 15))
/*q4*/
insert into Student(name,age) values ('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)
/*q5*/
select * from Library
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE
)
/*q6*/
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
(
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'John'),
  '2022-02-15'
),
(
  (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  '2021-03-03'
),
(
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'Lera'),
  '2021-05-23'
),
(
  (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  '2021-08-12'
)

/*q7*/
select * from Library
SELECT s.name , b.title 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id

SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland'

delete from Student WHERE name='Bob'

/*All records in the Library table that reference Bob's student_id are automatically deleted*/





