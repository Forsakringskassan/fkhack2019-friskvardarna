-- Table: public.events

-- DROP TABLE public.events;

CREATE TABLE public.events
(
    id bigint NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    date date NOT NULL,
    location smallint NOT NULL,
    organizer integer NOT NULL,
    cancelled boolean NOT NULL,
    maxbookings smallint NOT NULL,
    CONSTRAINT events_pkey PRIMARY KEY (id),
    CONSTRAINT "EVENTS_ORTER_FK" FOREIGN KEY (location)
        REFERENCES public.locations (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.events
    OWNER to postgres;