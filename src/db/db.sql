
drop table if exists "users";
create table users(
  id serial PRIMARY KEY,
  user_name varchar(32) not null UNIQUE,
  user_password varchar(16) not null,
  user_firstName varchar(36) not null,
  user_lastName varchar(36) not null,
  user_status boolean not null DEFAULT true,
  user_role varchar(15) not null DEFAULT 'user'
);

drop table if exists "products";
create table products(
  products_id serial PRIMARY KEY,
  product_name varchar not null,
  product_catagories varchar not null,
  product_price numeric not null,
  product_available int not null,
  product_image varchar not null
);



INSERT INTO users(user_name,user_firstName,user_lastName,user_role, user_password)
    VALUES ('John_9677','Johnson','Smith','admin', 'John1234');
INSERT INTO users(user_name,user_firstName,user_lastName, user_password)
    VALUES ('Anvar5321','Anvar', 'Karimov', 'qwerty123');




INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Spicy seasoned seafood noodles',2.29, 20, 'https://i.ibb.co/VvMXDVh/dxcfvgb.png','hot dishes');

INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Salted Pasta with mushroom sauce',2.69, 11, 'https://i.ibb.co/ncvWx1F/image-1.png','hot dishes');


INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Beef dumpling in hot and sour soup',2.99, 16, 'https://i.ibb.co/wB6r4gz/image-4.png','hot dishes');


INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Healthy noodle with spinach leaf',3.29, 22, 'https://i.ibb.co/PgKXRRR/image-5.png','hot dishes');


INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Hot spicy fried rice with omelet',3.49, 13, 'https://i.ibb.co/MfzNJtw/image-6.png','hot dishes');


INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Spicy instant noodle with special omelette',3.59, 17, 'https://i.ibb.co/MfzNJtw/image-6.png','hot dishes');


INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Healthy noodle with spinach leaf',3.29, 22, 'https://i.ibb.co/74hY6h7/image-8.png','hot dishes');


INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Hot spicy fried rice with omelet',3.49, 13, 'https://i.ibb.co/kB3S9TR/qwe.png','hot dishes');

INSERT INTO products(product_name,product_price,product_available, product_image, product_catagories)
  VALUES ('Spicy instant noodle with special omelette',3.59, 17, 'https://i.ibb.co/FH76qzF/ty.png','hot dishes');




