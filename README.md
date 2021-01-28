Hello and welcome to my coding assignment!

Getting Started: 
1. Clone the Repo, whoo hoo step one complete!

2. Now its time to get you Postgres Sql Database up and running ... make sure you get the database configuration values for the following items:
    - user
    - host
    - database
    - password
    - port

3. Lets create a couple tables and seed them with a bit of data! Grab the file named "DbScripts.sql" and run each block seperatly, first creating the app_user table, then the relationship table, and finally the two insert blocks.

4. Create and configure a .env file in the root of the project, it needs to have the following values in order to configure the connection to the database
    - DB_USER=*usersname*
    - DB_HOST=*host*
    - DATABASE=*DataBaseName*
    - DB_PASSWORD=*password*
    - DB_PORT=*0000*

5. Lets open a terminal window and navigate to the root of this repo and run the following command $ npm install. This is going to build out the needed node pkgs for this project.

6. All Right!, big moment in the extisting terminal window run the command $ npm run server 
At this point nodemon should be up and running and you should see something like `app is listening on port 0000`.

7. Using a tool Like postman you should have be able to call a couple endpoints.
    - a GET request to - http://localhost:8080/api/users - will return the top 100 users
    - a GET request to - http://localhost:8080/api/users?page=0&limit=10 - enables pagination. page being the batch number and limit being the count.
    - a GET request to - http://localhost:8080/api/user/2/relationships - will return a list of "friends". Here the "2" indicates the users_id for the person in question.

8. Thats really it! Thanks for checking out the repo!