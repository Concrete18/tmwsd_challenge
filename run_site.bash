create_db () {
    psql CREATE USER tmwsd_dev WITH PASSWORD 'password' SUPERUSER;
    psql CREATE DATABASE tmwsd WITH OWNER tmwsd_dev;

    npx sequelize model:generate --name Message --attributes title:string,content:string
    npx sequelize seed:generate --name seed_message

    npx sequelize db:create
    npx sequelize db:migrate
    npx sequelize db:seed:all
}

reset_db () {
    npx sequelize db:seed:undo:all
    npx sequelize db:migrate:undo:all
    npx sequelize db:drop
    npx sequelize db:create
    npx sequelize db:migrate
    npx sequelize db:seed:all
}

if [ $1 == 'create_all' ]; then
    npm i
    create_db
    node app.js
elif [ $1 == 'create_db' ]; then
    create_db
elif [ $1 == 'migrate' ]; then
    npx sequelize db:seed:undo:all
    npx sequelize db:migrate:undo:all
    npx sequelize db:migrate
    npx sequelize db:seed:all
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
