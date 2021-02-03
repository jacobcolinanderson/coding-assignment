CREATE TABLE public.app_user
(
    user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT app_user_key PRIMARY KEY (user_id)
)

CREATE TABLE public.relationship
(
    relationship_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    primary_user_id integer NOT NULL,
    secondary_user_id integer NOT NULL,
    CONSTRAINT relationship_key PRIMARY KEY (relationship_id),
    CONSTRAINT fk_primary_user FOREIGN KEY (primary_user_id)
        REFERENCES public.app_user (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_secondary_user FOREIGN KEY (secondary_user_id)
        REFERENCES public.app_user (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

insert into app_user(first_name, last_name) 
values
('Ned', 'Stark'),
('Bran', 'Stark'),
('Rickon', 'Stark'),
('Sansa', 'Stark'),
('Robb', 'Stark'),
('Arya', 'Stark'),
('John', 'Snow'),
('Benjen', 'Stark'),
('Catelyn', 'Stark'),
('Tywin', 'Lannister'),
('Kevan', 'Lannister'),
('Cersei', 'Lannister'),
('Jamie', 'Lannister'),
('Tyrion', 'Lannister'),
('Lancel', 'Lannister'),
('Robert', 'Boratheon'),
('Joffrey', 'Boratheon'),
('Mrycella', 'Boratheon'),
('Tommen', 'Boratheon'),
('Stannis', 'Boratheon')

insert into relationship(primary_user_id, secondary_user_id)
values
(1,3),
(2,1),
(2,3),
(2,4),
(3,5),
(3,6),
(4,1),
(4,11),
(5,12),
(6,8),
(7,3),
(8,14),
(8,9),
(9,13),
(10,7),
(10,13),
(11,20),
(11,10),
(12,16),
(13,14),
(13,6),
(14,15),
(14,3),
(15,11),
(16,17),
(16,7),
(17,12),
(18,14),
(19,2),
(20,1)
