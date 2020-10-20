--
-- ER/Studio Data Architect SQL Code Generation
-- Project :      FalaUFSv3.DM1
--
-- Date Created : Saturday, June 20, 2020 17:30:33
-- Target DBMS : PostgreSQL 9.x
--

-- 
-- TABLE: "Agrupamento" 
--

CREATE TABLE "Agrupamento"(
    id_agrupamento    uuid           NOT NULL,
    titulo            varchar(80)    NOT NULL,
    descricao         text,
    ativo             char(1)        NOT NULL,
    visivel           char(1)        NOT NULL,
    dt_inc            timestamp      NOT NULL,
    dt_alt            timestamp      NOT NULL
)
;



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
    dt_alt       timestamp       NOT NULL
)
;



-- 
-- TABLE: "Enquete" 
--

CREATE TABLE "Enquete"(
    id_enquete        uuid            NOT NULL,
    dt_venc           timestamp       NOT NULL,
    dt_inc            timestamp       NOT NULL,
    dt_alt            timestamp       NOT NULL,
    descricao         text,
    ativo             char(1)         NOT NULL,
    visivel           char(1)         NOT NULL,
    id_eixo           uuid,
    pergunta          varchar(300)    NOT NULL,
    id_agrupamento    uuid
)
;



-- 
-- TABLE: "Moderacao" 
--

CREATE TABLE "Moderacao"(
    id_tipo_moderacao    uuid         NOT NULL,
    id_opiniao           uuid         NOT NULL,
    dt_inc               timestamp    NOT NULL,
    dt_alt               timestamp    NOT NULL
)
;



-- 
-- TABLE: "Opiniao" 
--

CREATE TABLE "Opiniao"(
    id_opiniao    uuid         NOT NULL,
    comentario    text,
    negativos     integer      NOT NULL,
    positivos     integer      NOT NULL,
    visivel       char(1)      NOT NULL,
    dt_inc        timestamp    NOT NULL,
    dt_alt        timestamp    NOT NULL
)
;



-- 
-- TABLE: "Tipo_Moderacao" 
--

CREATE TABLE "Tipo_Moderacao"(
    id_tipo_moderacao    uuid           NOT NULL,
    titulo               varchar(30)    NOT NULL,
    descricao            varchar(80),
    dt_inc               timestamp      NOT NULL,
    dt_alt               timestamp      NOT NULL
)
;



-- 
-- TABLE: "Usuario" 
--

CREATE TABLE "Usuario"(
    id_usuario            uuid           NOT NULL,
    cpf                   varchar(11)    NOT NULL,
    ativo                 char(1)        NOT NULL,
    tipo                  char(1)        NOT NULL,
    email                 varchar(80)    NOT NULL,
    nome                  varchar(80)    NOT NULL,
    telefone_principal    varchar(20),
    senha                 varchar(20)    NOT NULL,
    dt_inc                timestamp      NOT NULL,
    dt_alt                timestamp      NOT NULL
)
;



-- 
-- TABLE: "Voto" 
--

CREATE TABLE "Voto"(
    id_voto          uuid         NOT NULL,
    dt_inc           timestamp    NOT NULL,
    id_enquete       uuid         NOT NULL,
    id_voto_valor    uuid         NOT NULL,
    id_usuario       uuid         NOT NULL,
    id_opiniao       uuid
)
;



-- 
-- TABLE: "Voto_Valor" 
--

CREATE TABLE "Voto_Valor"(
    id_voto_valor    uuid           NOT NULL,
    descricao        varchar(30)    NOT NULL,
    dt_inc           timestamp      NOT NULL,
    dt_alt           timestamp      NOT NULL
)
;



-- 
-- INDEX: "Ref213" 
--

CREATE INDEX "Ref213" ON "Enquete"(id_eixo)
;
-- 
-- TABLE: "Agrupamento" 
--

ALTER TABLE "Agrupamento" ADD 
    CONSTRAINT "PK16" PRIMARY KEY (id_agrupamento)
;

-- 
-- TABLE: "Eixo" 
--

ALTER TABLE "Eixo" ADD 
    CONSTRAINT "PK2" PRIMARY KEY (id_eixo)
;

-- 
-- TABLE: "Enquete" 
--

ALTER TABLE "Enquete" ADD 
    CONSTRAINT "PK4" PRIMARY KEY (id_enquete)
;

-- 
-- TABLE: "Moderacao" 
--

ALTER TABLE "Moderacao" ADD 
    CONSTRAINT "PK20" PRIMARY KEY (id_tipo_moderacao, id_opiniao)
;

-- 
-- TABLE: "Opiniao" 
--

ALTER TABLE "Opiniao" ADD 
    CONSTRAINT "PK18" PRIMARY KEY (id_opiniao)
;

-- 
-- TABLE: "Tipo_Moderacao" 
--

ALTER TABLE "Tipo_Moderacao" ADD 
    CONSTRAINT "PK19" PRIMARY KEY (id_tipo_moderacao)
;

-- 
-- TABLE: "Usuario" 
--

ALTER TABLE "Usuario" ADD 
    CONSTRAINT "PK1" PRIMARY KEY (id_usuario)
;

-- 
-- TABLE: "Voto" 
--

ALTER TABLE "Voto" ADD 
    CONSTRAINT "PK17" PRIMARY KEY (id_voto)
;

-- 
-- TABLE: "Voto_Valor" 
--

ALTER TABLE "Voto_Valor" ADD 
    CONSTRAINT "PK15" PRIMARY KEY (id_voto_valor)
;

-- 
-- TABLE: "Enquete" 
--

ALTER TABLE "Enquete" ADD CONSTRAINT "RefEixo13" 
    FOREIGN KEY (id_eixo)
    REFERENCES "Eixo"(id_eixo)
;

ALTER TABLE "Enquete" ADD CONSTRAINT "RefAgrupamento31" 
    FOREIGN KEY (id_agrupamento)
    REFERENCES "Agrupamento"(id_agrupamento)
;


-- 
-- TABLE: "Moderacao" 
--

ALTER TABLE "Moderacao" ADD CONSTRAINT "RefTipo_Moderacao40" 
    FOREIGN KEY (id_tipo_moderacao)
    REFERENCES "Tipo_Moderacao"(id_tipo_moderacao)
;

ALTER TABLE "Moderacao" ADD CONSTRAINT "RefOpiniao41" 
    FOREIGN KEY (id_opiniao)
    REFERENCES "Opiniao"(id_opiniao)
;


-- 
-- TABLE: "Voto" 
--

ALTER TABLE "Voto" ADD CONSTRAINT "RefEnquete33" 
    FOREIGN KEY (id_enquete)
    REFERENCES "Enquete"(id_enquete)
;

ALTER TABLE "Voto" ADD CONSTRAINT "RefVoto_Valor34" 
    FOREIGN KEY (id_voto_valor)
    REFERENCES "Voto_Valor"(id_voto_valor)
;

ALTER TABLE "Voto" ADD CONSTRAINT "RefUsuario35" 
    FOREIGN KEY (id_usuario)
    REFERENCES "Usuario"(id_usuario)
;

ALTER TABLE "Voto" ADD CONSTRAINT "RefOpiniao36" 
    FOREIGN KEY (id_opiniao)
    REFERENCES "Opiniao"(id_opiniao)
;


