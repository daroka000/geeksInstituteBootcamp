CREATE table student( id SERIAL PRIMARY key ,
last_name varchar(20),
first_name varchar(20),
birth_date date )

select * from student

INSERT INTO student ( first_name,last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');
select * from student
select first_name, last_name from student
select first_name,last_name from student where id=2
select * from student where last_name= 'Benichou' AND first_name = 'Marc';
select * from student where last_name ='Benichou' OR first_name ='Marc'
select * from student where first_name like  '%a%'

select * from student where first_name like 'a%'
select * from student where first_name like  '%a'

SELECT * FROM student
WHERE first_name LIKE '%a_';
SELECT * FROM  student WHERE ID IN (1,3)
select *  from student where birth_date >='1/01/2000'