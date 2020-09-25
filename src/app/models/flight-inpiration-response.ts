export class FlightInpirationRecord{
    type: string;
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    price: Price;
    links: Links;
}

export class FlightInpirationResponse{
    data: FlightInpirationRecord[];
}

export class Price{
    total: string;
}

export class Links{
    flightDates: string;
    flightOffers: string
}