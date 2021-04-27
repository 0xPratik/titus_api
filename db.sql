CREATE TABLE polkamusic.user (
song_name varchar(255) NOT NULL,
artist_name varchar(255) NOT NULL,
song_track varchar(255) NOT NULL,
song_album varchar(255) NOT NULL,            
song_url varchar(255) NOT NULL
);


INSERT INTO polkamusic.user (song_name, artist_name, song_track, song_album, song_url)
VALUES('Peaches','Justin Bieber,Daniel Caesar, Giveon','Justin Bieber','Justin Bieber','https://youtu.be/tQ0yjYUFKAE');


DELETE FROM polkamusic.user;

SELECT song_name, artist_name, song_track, song_album, song_url
FROM polkamusic.user;
