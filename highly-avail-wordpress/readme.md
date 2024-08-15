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
<p>In this project, I will show you how to configure WordPress to store and shared media files (pictures, videos, etc) on Amazon Simple Storage Service (Amazon S3). Amazon S3 is a managed storage service that provides an affordable, performant, and secure method for storing all kinds of data. Its more favorable with end users due to its pricing and pay as you go system. The S3 is a perfect function as it can hose media files and securely deliver them</p>

<p> My personal feedback about this lab is fairly tricky to work with specially the plug in. A lot of errors occured due which caused me to restart the project because I had an assumption that the reason why the Offload Media plugin could not connect to my s3 access key was diue to my IAM and S3 being in a different region. But I soon found out it wasnt the case. Eventually I was able to figure out the issue and finally run the plugin and do the testing. Attention to details is very important!</p>

<P> Lab - https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-2-using-amazon-s3-with-wordpress-to-securely-deliver-media-files/</P>

<p> Here are a list of problems that I tackled </p>
<html>
  <body>
    <ol>
      <li>Different regions on S3 and IAM- I assumed that this caused the error on Offload media</li>
      <li>Different region on Lightsail - I assumed that this caused the error on Offload media</li>
        <li>Denied access on Offload Media due to no adding #AmazonS3FullAccess on my IAM user policy</li>
  
    
  </body>

<h1> The culprit of this project</h1>

<p> As per the lab it statess that the IAM policy wil only consist of 1 JSON policy, but upon trying to access the plugin I found that my S3 bucket was not given access. Thats because you need to add another policy to the user and thats #AMAZONS3FULLACCESS. This will allow access for the plug in to connect to your S3 bucket </p>

  ![policies on IAM user - Copy](https://github.com/user-attachments/assets/526bb527-972a-469d-a96c-d712aa1fa89e)


<p> After finding out the problem I was finally able to connect to my S3 bucket ! </p>

  ![connecting plugin to bucket](https://github.com/user-attachments/assets/37e259b6-cd2a-4d6f-8798-5af3cbfd8b95)


 <h1> PLUG-IN TESTING </h1>

 ![upload of file on plugin](https://github.com/user-attachments/assets/5cb948f2-678c-4c79-9201-6a6ebfc6e407)

<h1> URL PASTED ON BROWSER</h1>

![img upload on plugin](https://github.com/user-attachments/assets/51782bf4-5f8d-491b-8ebf-afd9581df788)






  



