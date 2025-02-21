# Intelliveer Event Management

## Overview

Intelliveer Event Management is a web application designed to help users manage and organize events efficiently. The application allows users to add, view, edit, and delete events. Events are stored in **local storage**, meaning data persists even after page refresh, but users need to manually add events to see data.

## Features

- Add new events with title, date, and location
- View events in a tabular list
- Edit or delete existing events
- Search events by title or location
- Filter events by date
- View events in a calendar format
- Data is stored in **local storage** for persistence
- Responsive and easy-to-navigate UI

## Technologies Used

- **Angular** for frontend framework
- **Angular Material** for UI components
- **Local Storage** for data persistence
- **GitHub Pages** for deployment

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/sushgiri-7/intelliveer-event-management.git
   ```
2. Navigate to the project folder:
   ```sh
   cd intelliveer-event-management
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   ng serve
   ```
5. Open the browser and go to:
   ```
   http://localhost:4200
   ```

## Deployment on GitHub Pages

To deploy the latest changes to GitHub Pages:

1. Build the project:
   ```sh
   ng build --base-href /intelliveer-event-management/
   ```
2. Deploy to GitHub Pages:
   ```sh
   npx angular-cli-ghpages --dir=dist/intelliveer-event-management
   ```
3. Your application will be live at:
   ```
   https://sushgiri-7.github.io/intelliveer-event-management/
   ```

## Usage Notes

- Since data is stored in **local storage**, users need to **add events manually** for data to appear.
- To clear saved events, clear the browser's local storage.

### 📌 Important: If you don't see any data, **please add events manually** as it uses local storage.

# IntelliveerEventManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
