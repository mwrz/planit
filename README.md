# Planit - plan your day effectively
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

Application created for managing your daily tasks using integration with TickTick and Google Calendar.

The plan is to create an application that will allow you to add TickTick tasks to Google Calendar with drag & drop.

## Run the application locally

- To run it locally, you need to create a TickTick account and create a new project on `https://developer.ticktick.com/manage`.
- The `OAuth redirect URL` should be `http://localhost:3000`.
- Then copy your `client ID` and `client secret` to `.env` file of this project and pass them as `REACT_APP_TICKTICK_CLIENT_ID` and `REACT_APP_TICKTICK_AUTH_TOKEN`.
- Storing the secret in the `.env file` is _not_ a good option for security reasons. For now it's a temporary solution for local development - later a server will be added to store them.

⚠️ Currently the application needs to be run in a browser with CORS turned off because of lack of control over TickTick API response headers. This is another reason why there is a need for adding a server.

To run the application just type `npm start` in a terminal and open `http://localhost:3000` to view it in a browser.

## Roadmap

Currently the application only integrates with the TickTick API.

Next step will be to add integration with Google Calendar. List of planned tasks can be found in the [issues](https://github.com/mwrz/planit/issues).

## Libraries and APIs used:

- [MUI](https://mui.com/material-ui/)
- [styled-components](https://styled-components.com/)
- [TickTick API](https://developer.ticktick.com/docs#/openapi)

<br>

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._
