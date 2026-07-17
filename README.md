user-service is creating user, showing user detail and input tasks, it will be written in javascript
task-service is showing the tasks of specific user, it will be written in spring-boot
only one database will be used for now

-----------

Base URL:
/service

------------

user-service er api:

POST /add/user
Request Body:
{
    "name": "Sami Sarwar",
    "studentId": "12345"
}

POST /add/task
Request Body:
{
    "studentId": "12345",
    "task": "Learn Docker"
}

GET /show/user
Response:
{
    "name": "Sami Sarwar",
    "studentId": "12345"
}

----------------

task-service er API

GET /show/task
Response:
{
    "name": "Sami Sarwar",
    "studentId": "12345",
    "tasks": [
        "Learn Docker",
        "Learn Microservices",
        "Deploy on AWS"
    ]
}