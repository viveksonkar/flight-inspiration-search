# Flight Inspiration Search Exercise

This is a SPA build in Angular, which demonstrate the integration with FlightInspirationSearch api provided by Amadeus.

The application has following functionality -

- Automatically Authentication user based on the API key and Client Secret provided by Amadeus using grant type - Client Credentials
- Once authenticated, the retrieved token is then appended in each subsequent call to Rest endpoint. This is done by using Angular HTTP_INTERCEPTORS referred to as TokenInterceptor in authorization package

## Search Functionality

Launching the application will take you to the advance search page, where you can perform search based on following fields -

- Origin
- Departure date
- Journey Type - One Way or Return
- Filter on Max Price

## Installation

To run application needs node_modules to be installed. To do the same do to root directory where package.json is present. Run following command

Use the node package manager [npm](https://www.npmjs.com/get-npm) to install node package manager.

```bash
npm install
```

Once done, the run below command to start he application - 

```bash
ng serve
```

#Note - you should have angular cli installed [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Angular Feature Used 
- NgRx for State Management (Action, Reducer, Selector, Effects, Store  )
- Angular Material v10 ( Autocomplete, Select, DatePicker, Slider)
- Angular v10
- Moment date library
- Angular Routing Module
- HTTP_INTERCEPTORS