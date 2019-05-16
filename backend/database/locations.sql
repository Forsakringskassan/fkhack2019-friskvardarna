-- Table: public.locations

-- DROP TABLE public.locations;

CREATE TABLE public.locations
(
    id smallint NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT orter_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.locations
    OWNER to postgres;