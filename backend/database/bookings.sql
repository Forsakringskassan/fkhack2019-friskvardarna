-- Table: public.bookings

-- DROP TABLE public.bookings;

CREATE TABLE public.bookings
(
    id bigint NOT NULL,
    event bigint NOT NULL,
    "user" integer NOT NULL,
    tstamp timestamp(6) with time zone NOT NULL,
    CONSTRAINT bokningar_pkey PRIMARY KEY (id),
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