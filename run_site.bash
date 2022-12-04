
create_db () {
    npx dotenv sequelize db:seed:undo:all
    npx dotenv sequelize db:migrate:undo:all
    npx dotenv sequelize db:drop
    npx dotenv sequelize db:create
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
}

reset_db () {
    npx dotenv sequelize db:seed:undo:all
    npx dotenv sequelize db:migrate:undo:all
    npx dotenv sequelize db:drop
    npx dotenv sequelize db:create
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
}

if [ $1 == 'create' ]; then
    npm i
    CREATE USER tmwsd_dev WITH PASSWORD 'password' SUPERUSER;
    CREATE DATABASE tmwsd WITH OWNER tmwsd_dev;

    npx sequelize model:generate --name Message --attributes title:string,content:string
    npx sequelize seed:generate --name seed_message

    npx dotenv sequelize db:create
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all

    node app.js
elif [ $1 == 'migrate' ]; then
    npx dotenv sequelize db:seed:undo:all
    npx dotenv sequelize db:migrate:undo:all
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
elif [ $1 == 'clear' ]; then
    clear
    node app.js
elif [ $1 == 'reset' ]; then
    reset_db
elif [ $1 == 'restart' ]; then
    reset_db
    clear
    node app.js
else
    echo "Unknown arg given. $1 is invalid."
fi
