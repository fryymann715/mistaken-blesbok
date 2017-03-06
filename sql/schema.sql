CREATE TABLE "book" (
"id"  SERIAL NOT NULL ,
"title" VARCHAR NOT NULL DEFAULT 'NULL' ,
PRIMARY KEY ("id")
);

CREATE TABLE "author" (
"id"  SERIAL NOT NULL ,
"name" VARCHAR NOT NULL DEFAULT 'NULL' ,
PRIMARY KEY ("id")
);

CREATE TABLE "genre" (
"id"  SERIAL NOT NULL ,
"name" VARCHAR NOT NULL DEFAULT 'NULL' ,
PRIMARY KEY ("id")
);

CREATE TABLE "book_genre" (
"book_id" INTEGER NOT NULL ,
"genre_id" INTEGER NOT NULL
);

CREATE TABLE "book_author" (
"book_id" INTEGER NOT NULL ,
"author_id" INTEGER NOT NULL
);

ALTER TABLE "book_genre" ADD FOREIGN KEY ("book_id") REFERENCES "book" ("id");
ALTER TABLE "book_genre" ADD FOREIGN KEY ("genre_id") REFERENCES "genre" ("id");
ALTER TABLE "book_author" ADD FOREIGN KEY ("book_id") REFERENCES "book" ("id");
ALTER TABLE "book_author" ADD FOREIGN KEY ("author_id") REFERENCES "author" ("id");
