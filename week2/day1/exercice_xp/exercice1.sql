create table items ( id SERIAL PRIMARY key , nom varchar (100), price int )
create table customers ( id SERIAL PRIMARY key , nom varchar (100), prenom varchar(100) )

select * from items 
select * from customers 

insert into items( nom,price ) values ('Small Desk', 100),('Large desk' ,300),(' Fan ',80 )
insert into customers (nom,prenom ) values ('Greg ', 'jones'),(' Sandra' ,'jones'),('Scott  ','Scott'),('Trevor','green'),('Melanie','johnson')

select * from items
select * from items where price>80
select * from items where price<=300
select * from customers where nom='Smith'
select * from customers where nom='John'
select * from customers where prenom !='Scott'