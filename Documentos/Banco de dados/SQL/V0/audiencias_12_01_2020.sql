--
-- ER/Studio Data Architect SQL Code Generation
-- Project :      FalaUFS.DM1
--
-- Date Created : Sunday, January 12, 2020 22:55:31
-- Target DBMS : PostgreSQL 9.x
--

-- 
-- TABLE: "Agrupamento" 
--

CREATE TABLE "Agrupamento"(
    id_agrupamento    uuid            NOT NULL,
    visivel           char(1)         NOT NULL,
    titulo            varchar(300)    NOT NULL,
    descricao         text,
    ativo             char(1)         NOT NULL,
    dt_inc            timestamp       NOT NULL,
    dt_alt            timestamp       NOT NULL
)
;



-- 
-- TABLE: "Bairro" 
--

CREATE TABLE "Bairro"(
    id_bairro    uuid           NOT NULL,
    nome         varchar(80)    NOT NULL,
    id_cidade    uuid           NOT NULL,
    id_estado    uuid           NOT NULL
)
;



-- 
-- TABLE: "Centro" 
--

CREATE TABLE "Centro"(
    id_centro    uuid            NOT NULL,
    nome         varchar(300)    NOT NULL
)
;



-- 
-- TABLE: "Cidade" 
--

CREATE TABLE "Cidade"(
    id_cidade    uuid            NOT NULL,
    id_estado    uuid            NOT NULL,
    nome         varchar(300)    NOT NULL
)
;



-- 
-- TABLE: "Departamento" 
--

CREATE TABLE "Departamento"(
    id_departamento    uuid            NOT NULL,
    nome               varchar(300)    NOT NULL,
    sigla              varchar(20),
    id_centro          uuid            NOT NULL
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
    dt_inc       timestamp,
    dt_alt       timestamp
)
;



-- 
-- TABLE: "Endereco" 
--

CREATE TABLE "Endereco"(
    id_endereco    uuid            NOT NULL,
    logradouro     varchar(300),
    numero         varchar(10),
    cep            varchar(10),
    id_bairro      uuid            NOT NULL
)
;



-- 
-- TABLE: "Enquete" 
--

CREATE TABLE "Enquete"(
    id_enquete        uuid            NOT NULL,
    dt_venc           date,
    voto_unico        char(1)         NOT NULL,
    dt_inc            timestamp       NOT NULL,
    dt_alt            timestamp       NOT NULL,
    descricao         text,
    ativo             char(10),
    visivel           char(1)         NOT NULL,
    id_eixo           uuid,
    id_agrupamento    uuid,
    pergunta          varchar(300)    NOT NULL
)
;



-- 
-- TABLE: "Estado" 
--

CREATE TABLE "Estado"(
    id_estado    uuid           NOT NULL,
    nome         varchar(50)    NOT NULL,
    uf           char(2)        NOT NULL
)
;



-- 
-- TABLE: "Interacao" 
--

CREATE TABLE "Interacao"(
    "Id_Interacao"  uuid         NOT NULL,
    positivos       int4,
    negativos       int4,
    dt_inc          timestamp    NOT NULL,
    dt_alt          timestamp    NOT NULL,
    id_opiniao      uuid         NOT NULL,
    id_voto         uuid         NOT NULL,
    id_usuario      uuid         NOT NULL
)
;



-- 
-- TABLE: "Moderacao" 
--

CREATE TABLE "Moderacao"(
    id_tipo_moderacao    uuid         NOT NULL,
    dt_inc               timestamp    NOT NULL,
    dt_alt               timestamp    NOT NULL,
    id_opiniao           uuid         NOT NULL,
    id_voto              uuid         NOT NULL
)
;



-- 
-- TABLE: "Opiniao" 
--

CREATE TABLE "Opiniao"(
    id_opiniao    uuid         NOT NULL,
    visivel       char(1)      NOT NULL,
    negativos     int4,
    comentario    text         NOT NULL,
    positivos     int4,
    id_voto       uuid         NOT NULL,
    dt_inc        timestamp    NOT NULL,
    dt_alt        timestamp    NOT NULL,
    id_usuario    uuid
)
;



-- 
-- TABLE: "Tipo_Moderacao" 
--

CREATE TABLE "Tipo_Moderacao"(
    id_tipo_moderacao    uuid            NOT NULL,
    tipo                 varchar(50)     NOT NULL,
    descricao            varchar(300),
    dt_inc               timestamp       NOT NULL,
    dt_alt               timestamp       NOT NULL
)
;



-- 
-- TABLE: "Usuario" 
--

CREATE TABLE "Usuario"(
    id_usuario            uuid           NOT NULL,
    cpf                   varchar(11)    NOT NULL,
    ativo                 char(1)        NOT NULL,
    endereco_id           uuid           NOT NULL,
    tipo                  char(1)        NOT NULL,
    email                 varchar(80)    NOT NULL,
    nome                  varchar(80)    NOT NULL,
    telefone_principal    varchar(20),
    senha                 varchar(20)    NOT NULL,
    dt_inc                timestamp      NOT NULL,
    dt_alt                timestamp      NOT NULL,
    id_departamento       uuid           NOT NULL,
    id_centro             uuid           NOT NULL
)
;



-- 
-- TABLE: "Voto" 
--

CREATE TABLE "Voto"(
    id_voto           uuid         NOT NULL,
    pontos            int4         NOT NULL,
    dt_inc            timestamp    NOT NULL,
    dt_alt            timestamp    NOT NULL,
    id_usuario        uuid         NOT NULL,
    id_enquete        uuid         NOT NULL,
    id_agrupamento    uuid         NOT NULL
)
;



-- 
-- INDEX: "Ref1228" 
--

CREATE INDEX "Ref1228" ON "Bairro"(id_cidade, id_estado)
;
-- 
-- INDEX: "Ref1125" 
--

CREATE INDEX "Ref1125" ON "Cidade"(id_estado)
;
-- 
-- INDEX: "Ref1427" 
--

CREATE INDEX "Ref1427" ON "Endereco"(id_bairro)
;
-- 
-- INDEX: "Ref1021" 
--

CREATE INDEX "Ref1021" ON "Enquete"(id_agrupamento)
;
-- 
-- INDEX: "Ref213" 
--

CREATE INDEX "Ref213" ON "Enquete"(id_eixo)
;
-- 
-- INDEX: "Ref67" 
--

CREATE INDEX "Ref67" ON "Moderacao"(id_tipo_moderacao)
;
-- 
-- INDEX: "Ref12" 
--

CREATE INDEX "Ref12" ON "Opiniao"(id_usuario)
;
-- 
-- INDEX: "Ref316" 
--

CREATE INDEX "Ref316" ON "Opiniao"(id_voto)
;
-- 
-- INDEX: "Ref71" 
--

CREATE INDEX "Ref71" ON "Usuario"(endereco_id)
;
-- 
-- INDEX: "Ref414" 
--

CREATE INDEX "Ref414" ON "Voto"(id_voto)
;
-- 
-- INDEX: "Ref115" 
--

CREATE INDEX "Ref115" ON "Voto"(id_usuario)
;
-- 
-- TABLE: "Agrupamento" 
--

ALTER TABLE "Agrupamento" ADD 
    CONSTRAINT "PK10" PRIMARY KEY (id_agrupamento)
;

-- 
-- TABLE: "Bairro" 
--

ALTER TABLE "Bairro" ADD 
    CONSTRAINT "PK14" PRIMARY KEY (id_bairro)
;

-- 
-- TABLE: "Centro" 
--

ALTER TABLE "Centro" ADD 
    CONSTRAINT "PK19" PRIMARY KEY (id_centro)
;

-- 
-- TABLE: "Cidade" 
--

ALTER TABLE "Cidade" ADD 
    CONSTRAINT "PK12" PRIMARY KEY (id_cidade, id_estado)
;

-- 
-- TABLE: "Departamento" 
--

ALTER TABLE "Departamento" ADD 
    CONSTRAINT "PK18" PRIMARY KEY (id_departamento, id_centro)
;

-- 
-- TABLE: "Eixo" 
--

ALTER TABLE "Eixo" ADD 
    CONSTRAINT "PK2" PRIMARY KEY (id_eixo)
;

-- 
-- TABLE: "Endereco" 
--

ALTER TABLE "Endereco" ADD 
    CONSTRAINT "PK7" PRIMARY KEY (id_endereco)
;

-- 
-- TABLE: "Enquete" 
--

ALTER TABLE "Enquete" ADD 
    CONSTRAINT "PK4" PRIMARY KEY (id_enquete)
;

-- 
-- TABLE: "Estado" 
--

ALTER TABLE "Estado" ADD 
    CONSTRAINT "PK11" PRIMARY KEY (id_estado)
;

-- 
-- TABLE: "Interacao" 
--

ALTER TABLE "Interacao" ADD 
    CONSTRAINT "PK17" PRIMARY KEY (id_opiniao, id_voto, id_usuario, "Id_Interacao")
;

-- 
-- TABLE: "Moderacao" 
--

ALTER TABLE "Moderacao" ADD 
    CONSTRAINT "PK9" PRIMARY KEY (id_tipo_moderacao, id_opiniao, id_voto)
;

-- 
-- TABLE: "Opiniao" 
--

ALTER TABLE "Opiniao" ADD 
    CONSTRAINT "PK5" PRIMARY KEY (id_opiniao)
;

-- 
-- TABLE: "Tipo_Moderacao" 
--

ALTER TABLE "Tipo_Moderacao" ADD 
    CONSTRAINT "PK6" PRIMARY KEY (id_tipo_moderacao)
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
    CONSTRAINT "PK3" PRIMARY KEY (id_voto)
;

-- 
-- TABLE: "Bairro" 
--

ALTER TABLE "Bairro" ADD CONSTRAINT "RefCidade28" 
    FOREIGN KEY (id_cidade, id_estado)
    REFERENCES "Cidade"(id_cidade, id_estado)
;


-- 
-- TABLE: "Cidade" 
--

ALTER TABLE "Cidade" ADD CONSTRAINT "RefEstado25" 
    FOREIGN KEY (id_estado)
    REFERENCES "Estado"(id_estado)
;


-- 
-- TABLE: "Departamento" 
--

ALTER TABLE "Departamento" ADD CONSTRAINT "RefCentro35" 
    FOREIGN KEY (id_centro)
    REFERENCES "Centro"(id_centro)
;


-- 
-- TABLE: "Endereco" 
--

ALTER TABLE "Endereco" ADD CONSTRAINT "RefBairro27" 
    FOREIGN KEY (id_bairro)
    REFERENCES "Bairro"(id_bairro)
;


-- 
-- TABLE: "Enquete" 
--

ALTER TABLE "Enquete" ADD CONSTRAINT "RefEixo13" 
    FOREIGN KEY (id_eixo)
    REFERENCES "Eixo"(id_eixo)
;

ALTER TABLE "Enquete" ADD CONSTRAINT "RefAgrupamento21" 
    FOREIGN KEY (id_agrupamento)
    REFERENCES "Agrupamento"(id_agrupamento)
;


-- 
-- TABLE: "Interacao" 
--

ALTER TABLE "Interacao" ADD CONSTRAINT "RefOpiniao31" 
    FOREIGN KEY (id_opiniao)
    REFERENCES "Opiniao"(id_opiniao)
;

ALTER TABLE "Interacao" ADD CONSTRAINT "RefUsuario32" 
    FOREIGN KEY (id_usuario)
    REFERENCES "Usuario"(id_usuario)
;


-- 
-- TABLE: "Moderacao" 
--

ALTER TABLE "Moderacao" ADD CONSTRAINT "RefTipo_Moderacao7" 
    FOREIGN KEY (id_tipo_moderacao)
    REFERENCES "Tipo_Moderacao"(id_tipo_moderacao)
;

ALTER TABLE "Moderacao" ADD CONSTRAINT "RefOpiniao29" 
    FOREIGN KEY (id_opiniao)
    REFERENCES "Opiniao"(id_opiniao)
;


-- 
-- TABLE: "Opiniao" 
--

ALTER TABLE "Opiniao" ADD CONSTRAINT "RefUsuario2" 
    FOREIGN KEY (id_usuario)
    REFERENCES "Usuario"(id_usuario)
;

ALTER TABLE "Opiniao" ADD CONSTRAINT "RefVoto16" 
    FOREIGN KEY (id_voto)
    REFERENCES "Voto"(id_voto)
;


-- 
-- TABLE: "Usuario" 
--

ALTER TABLE "Usuario" ADD CONSTRAINT "RefEndereco1" 
    FOREIGN KEY (endereco_id)
    REFERENCES "Endereco"(id_endereco)
;

ALTER TABLE "Usuario" ADD CONSTRAINT "RefDepartamento34" 
    FOREIGN KEY (id_departamento, id_centro)
    REFERENCES "Departamento"(id_departamento, id_centro)
;


-- 
-- TABLE: "Voto" 
--

ALTER TABLE "Voto" ADD CONSTRAINT "RefUsuario15" 
    FOREIGN KEY (id_usuario)
    REFERENCES "Usuario"(id_usuario)
;

ALTER TABLE "Voto" ADD CONSTRAINT "RefEnquete30" 
    FOREIGN KEY (id_enquete)
    REFERENCES "Enquete"(id_enquete)
;


