create table parks (
    id serial primary key,
    name varchar(200),
    address varchar(200),
    street varchar(200),
    city varchar(200),
    state varchar(50),
    picture varchar(500)    -- NEVER try to store images in your database
                            -- instead, store a URL  
    -- parks have many reviews
    -- but I don't put a foreign key here.
    -- That FK goes in the reviews table.
);

create table users (
    id serial primary key,
    first_name varchar(100), -- "varchar" is equivalent to "character varying"
    last_name varchar(100),  -- "varying" just means that it won't be filled with spaces
    email varchar(200),
    password varchar(200)
);

create table reviews (
    id serial primary key,
    score integer,
    content text,
    -- a single review belongs to a single restaurant
    park_id integer references parks(id),
    -- a single review belongs to a single user
    user_id integer references users(id)
);


insert into parks (name, address, street, city, state, picture)
    values ('Brook Run Skate Park', '4770', 'N Peachtree Rd', 'Dunwoody', 'GA', 'brook-run-skate-park.jpg'),
    ('Historic Fourth Ward Skatepark', '830', 'Willoughby Way NE', 'Atlanta', 'GA', 'historic-fourth.jpg'),
    ('McKoy Skatepark', '1000', 'Adams St', 'Decatur', 'GA', 'mckoy-park.jpg'),
    ('Arthur Langford, Jr. Skatepark', '1614', 'Arthur Langford Jr Pl SW', 'Atlanta', 'GA', 'arthur-langford.jpg'),
    ('Kennesaw Skatepark', '3140', 'Old 41 Hwy NW', 'Kennesaw', 'GA', 'kennesaw-park.jpg'),
    ('Duncan Creek Skate Park', '3700', 'Braselton Hwy', 'Buford', 'GA', 'duncan-creek.jpg')

