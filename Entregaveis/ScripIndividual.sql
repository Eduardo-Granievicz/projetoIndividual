create database csgo;

use csgo;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
    skinFav varchar(50),
	senha VARCHAR(50),
    fkPatente int,
    foreign key (fkPatente) references patente(idPatente)
);

create table patente(
idPatente int primary key auto_increment,
nomePatente varchar(45)
) auto_increment = 20;

select count(idUsuario) as metrica from usuario;

create table patente;

select * from patente;

select * from usuario;

drop database csgo;