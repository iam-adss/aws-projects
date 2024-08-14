<h1> Deploying a highly available WordPress site on Amazon Lightsail (4 series project) </h1>

<p> This will be a series of 4 different projects that starts off as a Wordpress site and using the Amazon Lighsail to deploy. The project will consist of different instance and will cahllenge you to understand various services services that AWS provides

The project link will be provided below 
</p>

https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-1-implementing-a-highly-available-lightsail-database-with-wordpress/

<h1> Part 1: Implementing a highly available Lightsail database with WordPress </h1>

<p> For this project we will be deploying a highly available wordpress website on Amazon Lightsail. I selected Lightsail to host my wordpress as it provides simplified networking and security options, strong storage and backup solutions.Although its not cloud like EC2 instance for its a VPS, but its still admired by end users and customers due to its fixed pricing compare to EC2

 Where WordPress stores your data varies depending on the type of data. At the most basic level, WordPress is a PHP application running on a web server and database. The web server is the instance that you create in Lightsail, and includes WordPress software and the MySQL database. The following diagram shows the Lightsail VPC architecture.
</p>
  
<html>
  <body>
    <ol>
      <li>Amazon Lightsail VPC - security that provieds private isolate space    </li>
      <li>Lightsail instance - virtual server </li>
        <li>MySQL - a database thats comes with the Lightsail instance </li>
    </ol>
    </body>
</html>

![image](https://github.com/user-attachments/assets/7b930483-b8b2-4f27-ac1c-889bb38b9a29)


<h1> Admin dashboard </h1>

![wordpress page damin dashboard](https://github.com/user-attachments/assets/f1deaac3-df35-4061-961e-2b74290e9cca)


<h1> Web </h1>

![website sample page](https://github.com/user-attachments/assets/2f82f2ef-afa1-4cb7-bda8-b3a7ee1a8291)



<h1>Part 2: Using Amazon S3 with WordPress to securely deliver media files</h1>
<p>In this post, I will show you how to configure WordPress  to store shared media files (pictures, videos, etc) on Amazon Simple Storage Service (Amazon S3). Amazon S3 is a managed storage service that provides an affordable, performant, and secure method for storing all kinds of data.</p>
