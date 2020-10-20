--
-- ER/Studio Data Architect SQL Code Generation
-- Project :      FalaUFSv1.DM1
--
-- Date Created : Tuesday, January 21, 2020 21:58:43
-- Target DBMS : PostgreSQL 9.x
--

-- 
-- TABLE: "Usuario" 
--

CREATE TABLE "Usuario"(
    id_usuario            uuid           NOT NULL,
    cpf                   varchar(11)    NOT NULL,
    ativo                 char(1)        NOT NULL,
    tipo                  char(1)        NOT NULL DEFAULT '2',
    email                 varchar(80)    NOT NULL,
    nome                  varchar(80)    NOT NULL,
    telefone_principal    varchar(20),
    senha                 varchar(20)    NOT NULL,
    dt_inc                timestamp      NOT NULL DEFAULT now(), 
    dt_alt                timestamp      NOT NULL DEFAULT now(),
    CONSTRAINT "PK1" PRIMARY KEY (id_usuario)
	
)
;



