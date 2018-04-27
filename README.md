# sms-frontend

.env file 
ACCESS_TOKEN


hit submit form (front end)
post /photos/:id
  goes to MONGODB photos for that Car ID and deletes everything for it in DB 
  goes to dropbox folder for that CarID and gets all fileBlobs
  saves blobs to DB
  
get /photos/:id
  goes to MONGODB for the car ID and downloads all photos for car 

