-- Database: hotel_soft

-- DROP DATABASE hotel_soft;

CREATE DATABASE hotel_soft
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Peru.1252'
    LC_CTYPE = 'Spanish_Peru.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.cliente

-- DROP TABLE public.cliente;

CREATE TABLE public.cliente
(
    id_cliente integer NOT NULL,
    tipo_cliente character varying(7) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_cliente_01 PRIMARY KEY (id_cliente, tipo_cliente)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default; 

-- Table: public.empresa

-- DROP TABLE public.empresa;

CREATE TABLE public.empresa
(
    id_empresa integer NOT NULL DEFAULT nextval('empresa_id_empresa_seq'::regclass),
    nombre_comercial character varying(200) COLLATE pg_catalog."default",
    razon_social character varying(200) COLLATE pg_catalog."default",
    ruc character varying(15) COLLATE pg_catalog."default",
    telefono character varying(15) COLLATE pg_catalog."default",
    celular character varying(15) COLLATE pg_catalog."default",
    correo_empresa character varying(150) COLLATE pg_catalog."default",
    direccion character varying(200) COLLATE pg_catalog."default",
    lalitud character varying(100) COLLATE pg_catalog."default",
    longitud character varying(100) COLLATE pg_catalog."default",
    flg_acti character varying(1) COLLATE pg_catalog."default",
    CONSTRAINT pk_empresa_01 PRIMARY KEY (id_empresa),
    CONSTRAINT ck_flg_acti CHECK (flg_acti::text = ANY (ARRAY['1'::character varying, '0'::character varying]::text[]))
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.habitacion

-- DROP TABLE public.habitacion;

CREATE TABLE public.habitacion
(
    id_habitacion integer NOT NULL DEFAULT nextval('habitacion_id_habitacion_seq'::regclass),
    desc_habitacion character varying(50) COLLATE pg_catalog."default",
    id_tipo_habitacion integer,
    id_piso integer,
    nom_pers_regi character varying(100) COLLATE pg_catalog."default",
    fecha_regi timestamp without time zone,
    flg_acti character varying(1) COLLATE pg_catalog."default",
    detalle_habitacion character varying(250) COLLATE pg_catalog."default",
    CONSTRAINT pk_habitacion_01 PRIMARY KEY (id_habitacion),
    CONSTRAINT fk_habitacion_piso_01 FOREIGN KEY (id_piso)
        REFERENCES public.piso (id_piso) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_habitacion_tipo_habitacion_01 FOREIGN KEY (id_tipo_habitacion)
        REFERENCES public.tipo_habitacion (id_tipo_habitacion) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT ck_flg_acti CHECK (flg_acti::text = ANY (ARRAY['1'::character varying, '0'::character varying]::text[]))
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.persona

-- DROP TABLE public.persona;

CREATE TABLE public.persona
(
    id_persona integer NOT NULL DEFAULT nextval('persona_id_persona_seq'::regclass),
    nom_persona character varying(60) COLLATE pg_catalog."default",
    ape_pate_pers character varying(60) COLLATE pg_catalog."default",
    ape_mate_pers character varying(60) COLLATE pg_catalog."default",
    tipo_documento character varying(1) COLLATE pg_catalog."default",
    nro_documento character varying(15) COLLATE pg_catalog."default",
    correo_pers character varying(150) COLLATE pg_catalog."default",
    foto_persona character varying(60) COLLATE pg_catalog."default",
    clave character varying(16) COLLATE pg_catalog."default",
    sexo character varying(1) COLLATE pg_catalog."default",
    pais_procedencia character varying(5) COLLATE pg_catalog."default",
    fecha_nacimiento date,
    flg_acti character varying(1) COLLATE pg_catalog."default",
    CONSTRAINT pk_persona PRIMARY KEY (id_persona),
    CONSTRAINT ck_flg_acti CHECK (flg_acti::text = ANY (ARRAY['1'::character varying, '0'::character varying, NULL::character varying]::text[]))
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.piso

-- DROP TABLE public.piso;

CREATE TABLE public.piso
(
    id_piso integer NOT NULL DEFAULT nextval('piso_id_piso_seq'::regclass),
    desc_piso character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT ck_piso_01 PRIMARY KEY (id_piso)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.reserva

-- DROP TABLE public.reserva;

CREATE TABLE public.reserva
(
    _id_cliente integer NOT NULL,
    correlativo integer NOT NULL,
    _id_habitacion integer,
    _id_tipo_reserva integer,
    tiempo_x_reserva integer,
    fecha_inicio timestamp without time zone,
    hora_inicio time without time zone,
    fecha_registro timestamp without time zone,
    id_pers_regi integer,
    nom_pers_regi character varying COLLATE pg_catalog."default",
    estado_reserva character varying(15) COLLATE pg_catalog."default",
    CONSTRAINT pk_reserva_01 PRIMARY KEY (_id_cliente, correlativo),
    CONSTRAINT fk_reserva_habitacion_01 FOREIGN KEY (_id_habitacion)
        REFERENCES public.habitacion (id_habitacion) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_reserva_tipo_reserva_01 FOREIGN KEY (_id_tipo_reserva)
        REFERENCES public.tipo_reserva (id_tipo_reserva) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.tipo_habitacion

-- DROP TABLE public.tipo_habitacion;

CREATE TABLE public.tipo_habitacion
(
    id_tipo_habitacion integer NOT NULL DEFAULT nextval('tipo_habitacion_id_tipo_habitacion_seq'::regclass),
    desc_tipo_habitacion character varying(100) COLLATE pg_catalog."default",
    detalle character varying(250) COLLATE pg_catalog."default",
    CONSTRAINT ck_tipo_habitacion_01 PRIMARY KEY (id_tipo_habitacion)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.tipo_reserva

-- DROP TABLE public.tipo_reserva;

CREATE TABLE public.tipo_reserva
(
    id_tipo_reserva integer NOT NULL,
    desc_tipo_reserva character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT pk_tipo_reserva PRIMARY KEY (id_tipo_reserva)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


INSERT INTO tipo_habitacion
 (desc_tipo_habitacion, detalle)
 VALUES
 ('Simple', 'Simple'),
 ('Doble', 'Doble'),
 ('Junior Suites','Junior Suites'),
 ('Suites','Suites'),
 ('Matrimonial','Matrimonial');


INSERT INTO tipo_reserva
(id_tipo_reserva,desc_tipo_reserva)
VALUES
(1,'Por hora'),
(2,'Por día'),
(3,'Por mes'),
(4,'Indefinido');

INSERT INTO piso
(desc_piso)
VALUES
('Piso 001'),
('Piso 002'),
('Piso 003');

INSERT INTO habitacion
VALUES
(desc_habitacion, id_tipo_habitacion,id_piso,flg_acti)
('Habitación 101',1,1,'1'),
('Habitación 102',1,1,'1'),
('Habitación 103',1,1,'1'),
('Habitación 104',1,1,'1'),
('Habitación 105',1,1,'1'),
('Habitación 106',1,1,'1'),
('Habitación 107',1,1,'1'),
('Habitación 108',1,1,'1'),
('Habitación 109',1,1,'1'),
('Habitación 110',1,1,'1'),
('Habitación 201',1,2,'1'),
('Habitación 202',1,2,'1'),
('Habitación 203',1,2,'1'),
('Habitación 204',1,2,'1'),
('Habitación 205',1,2,'1'),
('Habitación 206',1,2,'1'),
('Habitación 207',1,2,'1'),
('Habitación 208',1,2,'1'),
('Habitación 209',1,2,'1'),
('Habitación 210',1,2,'1'),
('Habitación 301',1,3,'1'),
('Habitación 302',1,3,'1'),
('Habitación 303',1,3,'1'),
('Habitación 304',1,3,'1'),
('Habitación 305',1,3,'1'),
('Habitación 306',1,3,'1'),
('Habitación 307',1,3,'1'),
('Habitación 308',1,3,'1'),
('Habitación 309',1,3,'1'),
('Habitación 310',1,3,'1');


CREATE OR REPLACE FUNCTION func_01__get_data_inicial()
    RETURNS jsonb
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
    -- Constants
	__MSJ_ERROR          CONSTANT CHARACTER VARYING DEFAULT 'Hubo un error';
	__FLG_ACTI           CONSTANT CHARACTER VARYING DEFAULT '1';
    ---------------------------------------------------------
    __msj_excep       CHARACTER VARYING;
	__result          JSONB;
	__combo_type_room JSONB;
	__combo_floor     JSONB;
	__combo_room      JSONB;

BEGIN
	-- arm room combo
		SELECT ARRAY_TO_JSON(ARRAY_AGG(tab))
		  INTO __combo_room
		  FROM (SELECT * FROM habitacion ORDER BY id_habitacion) tab;
	
	-- arm type room combo
		SELECT ARRAY_TO_JSON(ARRAY_AGG(tab))
		  INTO __combo_type_room
		  FROM (SELECT * FROM tipo_habitacion ORDER by desc_tipo_habitacion) tab;
	
	-- arm floor combo
		SELECT ARRAY_TO_JSON(ARRAY_AGG(tab))
		  INTO __combo_floor
		  FROM (SELECT * FROM piso ORDER by desc_piso) tab;
		  
	-- answer
		__result := JSONB_BUILD_OBJECT(
			'data' , JSONB_BUILD_OBJECT(
				'combo_room'      , __combo_room,
				'combo_type_room' , __combo_type_room,
				'combofloor'      , __combo_floor
			)
		);
RETURN __result;
EXCEPTION
   WHEN SQLSTATE 'HOTEL' THEN
        __result = JSONB_BUILD_OBJECT('status', 400, 'msj' , SQLERRM);
        RETURN __result;
   WHEN OTHERS THEN
        GET STACKED DIAGNOSTICS __msj_excep = PG_EXCEPTION_CONTEXT;
        __result := JSONB_BUILD_OBJECT('msj', __MSJ_ERROR ,'status', 500, 'stack_error' , CONCAT(SQLERRM, ' - ', __msj_excep));
        RETURN __result;  
END;
$BODY$;
