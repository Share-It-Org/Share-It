# README ShareIt

This open source repository contains the code for ShareIt: A community-based sharing economy app that allows users to collectively use products, goods, and services. ShareIt makes it possible for people to connect with their neighbors and access shared goods and services.
## Installation Steps

1. clone repository
2. `npm install` to download dependencies
3. create .env file and add SQL database URL
3. `npm start` to run the app in development mode
4. `npm run build` followed by `npm run client` to run the app in production mode 

## Tour of the App

Login Page: 

  ![](./Frontend/Images/login_screenshot.png)

Homepage Page: 
- conditional rendering of interactive map

  ![](./Frontend/Images/homepage_screenshot.png)

Profile Page:
- view items you are borrowing
- view items you are lending
- request back items you are lending

  ![](./Frontend/Images/profile_screenshot.png)

Item Description Modal: 

  ![](./Frontend/Images/itempage_screenshot.png)

## Techstack:
- React
- Node/Express
- SQL

Why React? 
The React framework provides the potential to:
- combine UI and behavior in components
- create a lightweight and efficient app to save CPU and battery power
- require minimal configuration for testing

Why Express?
Express is a great framework for apps with the potential to: 
- scale up and handle multiple user requests on the app 
- require real-time reactivity by leveraging the non-blocking Express servers
- allow millions of users to upload images and access images

