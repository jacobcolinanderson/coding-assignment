create table migration (
  migration_id integer primary key generated by default as identity,
  filename text not null,
  created_at timestamp with time zone default current_timestamp
);