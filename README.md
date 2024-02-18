# Welcome to Flights Service

## Project Setup

- Clone project to your local machine.
- Execute `npm install` on the same as of your root directory of your cloned project.
- Create a `.env` file in your root directory with the following variable
   - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the follwoing peice of json 
```
  "development": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "YOUR_DB_NAME",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }  
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

