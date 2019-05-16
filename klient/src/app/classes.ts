export class Booking {
    id: number;
    event: number;
    userid: number;
    tstamp: string;
}

// Event är ett reserverat namn
export class _Event {
    id: number;
    name: string;
    description: string;
    location: number;
    organizer: string;
    canceled: boolean;
    maxbookings: number;
    eventtime: string;
    eventdate: string;
    eventday: string;
    bookings: number;
    booked: boolean;
}
