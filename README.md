# TinyOrganics Challenge

https://tinyo-challenge-frontend.herokuapp.com/   

## Description
I The backend was built with Django and the frontend was built with React. I used SASS to style (i just like stickingn as close vanilla css when I can but on a larger project I would have just used a library to save time ). I did not implement Redux because it was a small project so a little prop drilling was no problem. 

## Added feature
I've added a new feature which goal is to compare Tiny Organics products with other brands. Since Tiny Organics products do not contain any added Sugar or Salt I choose to find a good food api that shows how much Sodium and Sugar are in other baby foods and if they are additives. I went with https://spoonacular.com/food-api So far I've rendered products from popular brands from their api on the /compare page. I've also obtained Sodium and Sugar amounts. I'm planning adding levels of high, medium, low compared to the recommended amount for infants. Of course, I will also being adding this data to the Customer table in the DB. I am going to give the Class a foreign key that will attach to the Customer Class. Before sending this data to the DB I will have a confirmation on the Model that the customer purchases this for their child. 

## Getting Started

### Installing
Frontend -> Run npm install to install all dependencies

Backend -> In root directory run pip install pipenv -> pipenv shell -> pipenv install django ->  pip install -r requirements.txt -> pip freeze > requirement.txt -> python manage.py migrate 


### Executing program
Frontend. cd into /frontend then run npm start to start up dev server on port 3000

Backend -> In root directory python manage.py runserver to spin up dev server on port 8000


```


