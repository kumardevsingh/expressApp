only for dummy not use in project 
some commands to remember 

to build an image:
docker build -t node-app-image .

to deploy 
 docker run  -v %cd%:/app -v /app/node_modules -p 5000:5000 -d --name node-app node-app-image  

 to remove image
 docker rm node-app -f