-- Table: public.bookings

-- DROP TABLE public.bookings;

CREATE TABLE public.bookings
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    event bigint NOT NULL,
    "user" integer NOT NULL,
    tstamp timestamp(6) with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT bokningar_pkey PRIMARY KEY (id),
    CONSTRAINT "BOOKINGS_UNIQUE" UNIQUE (event, "user")
        INCLUDE(event, "user"),
    CONSTRAINT "BOKNINGAR_EVENTS_FK" FOREIGN KEY (event)
        REFERENCES public.events (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "BOKNINGAR_USERS_FK" FOREIGN KEY ("user")
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.bookings
    OWNER to postgres;