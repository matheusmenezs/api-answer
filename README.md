# System "PD Answer" for collecting feedback from members.

Initial step: 

1. Clone the repository: Run in terminal `git@github.com:matheusmenezs/api-answer.git`


Steps to run this project:

2. Run `npm i` command


Configure database connection (Optional):

* Note: There is already a default setting for database connection in the files, but these settings can be changed.

3. Setup postgres container settings inside `docker-compose.yml` file
4. Setup database settings inside `ormconfig.json` file


Start the container:

5. Run `docker-compose up -d` command


Create the database connection 

* Note: In this case, Dbeaver was used. Connection settings are based on `docker-compose.yml` file

6. ![Captura de tela de 2022-03-30 14-20-58](https://user-images.githubusercontent.com/64173311/161044815-b7f99ce0-4d94-4d0b-8d44-8e43eeaa3d34.png)


Import this file into Insomnia:

7. [Insomnia.zip](https://github.com/matheusmenezs/api-answer/files/8388936/Insomnia.zip)


Start application: 

8. Run `npm start` command



