# Online shop | PERN

Online shop app made with PERN + JS

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Mobx](https://mobx.js.org/) - State management library
- [Axios](https://axios-http.com/ru/) - Axios is a simple promise based HTTP client for the browser and node.js.
- [React Router](https://reactrouter.com/) - Library for general routing & navigation
- [React-bootstrap](https://react-bootstrap.netlify.app/) - UI library.

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster.
- [PostgreSQL](https://www.postgresql.org/) - Opens-source SQL database to store data.
- [Sequelize](https://sequelize.org/) - Sequelize is a modern ORM for Postgres.
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests.
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords.
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file.

## Features

- Authentication (login/register w/ username & password)
- CRUD projects, with ability to add goods
- Sort goods by various parameters like price.
- Filter products by types/brands.
- Basket
## Screenshots

#### Desktop/Tablet

![Desktop-2](https://github.com/4KUY/PERN_shop/blob/main/screenshots/screenshot-2.png)
![Desktop-3](https://github.com/4KUY/PERN_shop/blob/main/screenshots/screenshot-3.png)
![Desktop-4](https://github.com/4KUY/PERN_shop/blob/main/screenshots/screenshot-4.png)
![Desktop-1](https://github.com/4KUY/PERN_shop/blob/main/screenshots/screenshot-1.jpeg)


## Usage

#### Env variable:

Change a .env file in server directory `server/.env` and fix the following :

```
PORT = "Your PORT"
DB_USER = "Your DB_USER"
DB_PASSWORD = "Your DB_PASSWORD"  
```

#### Server:

Run backend development server:

```
cd server
npm install
npm run migration
npm run dev
```

#### Client:

Open client/.env & change "REACT_APP_API_URL" variable to `http://localhost:"Your PORT"`

Run client development server:

```
cd client
npm install
npm start
```
