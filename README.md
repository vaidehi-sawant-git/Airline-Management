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
and then execute  
`npx sequelize db:migrate`

## DB Design
- Airplane Table 
- Flight Table
- Airport Table
- City Table

- A Flight belongs to a Airplane but one Airplane can be used in multiple Flights.
- A City can many Airports but an Airport can have only one City.
- One Airport can have many Flights, but a Flight can have only one Airport. 

## Tables
### City -> id,name,created_at,updated_at
### Airport -> id,name,address,city_id,created_at,updated_at
    Relationship -> City has many airports, Airport belongs to one City(one to many)
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
npx sequelize seed:generate --name add-airports //seeder file creation
npx sequelize db:seed:all

```