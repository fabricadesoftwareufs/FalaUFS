--
-- ER/Studio Data Architect SQL Code Generation
-- Project :      FalaUFSv2.DM1
--
-- Date Created : Tuesday, January 28, 2020 00:12:01
-- Target DBMS : PostgreSQL 9.x
--

-- 
-- TABLE: "Eixo" 
--

CREATE TABLE "Eixo"(
    id_eixo      uuid            NOT NULL,
    logo         varchar(700),
    visivel      char(1)         NOT NULL,
    titulo       varchar(80)     NOT NULL,
    descricao    text,
    ativo        char(1)         NOT NULL,
    dt_inc       timestamp       NOT NULL,
    dt_alt       timestamp       NOT NULL,
    CONSTRAINT "PK2" PRIMARY KEY (id_eixo)
)
;



-- 
-- TABLE: "Enquete" 
--

CREATE TABLE "Enquete"(
    id_enquete    uuid            NOT NULL,
    dt_venc       timestamp       NOT NULL,
    dt_inc        timestamp       NOT NULL,
    dt_alt        timestamp       NOT NULL,
    descricao     text,
    ativo         char(1)         NOT NULL,
    visivel       char(1)         NOT NULL,
    id_eixo       uuid,
    pergunta      varchar(300)    NOT NULL,
    CONSTRAINT "PK4" PRIMARY KEY (id_enquete)
)
;





-- 
-- INDEX: "Ref213" 
--

CREATE INDEX "Ref213" ON "Enquete"(id_eixo)
;
-- 
-- TABLE: "Enquete" 
--

ALTER TABLE "Enquete" ADD CONSTRAINT "RefEixo13" 
    FOREIGN KEY (id_eixo)
    REFERENCES "Eixo"(id_eixo)
;


