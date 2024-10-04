# AWS Projects

## Introduction
In this repository I will showcase my experience with AWS Cloud Computing through a list of projects. I am a big fan of the cloud and the scalability it offers. With a very secured system the Cloud is one of the most used system in todays world. I chose to use Amazon's service as it offers a more detailed material into Cloud computing.

🔎 For more info about the projects see it here

 [Higly Available Wordpress Website 4-part](/highly-avail-wordpress/readme.md)

  [Stastic S3 Website Hosting](/static-website-s3/Readme.md)

## Background
The total architecture of the Wordpress project is broken down into 4 main parts. I progressively upgrade the architecture by adding more services to make the Wordpress function better with security, database, storage, and many more. 

The S3 will consist of a very simple website hosting along with a JSON policy to allow operation. 

## Tools I Used

List of AWS services and how I utilized them accordingly 

-  S3 - Amazing storage capabilities with and a very common service used in the architecture
-  LighSail - Created my Wordpress Website as it offers Wordpress services in a fixed rate
- EC2 - Virtual machine and very powerful the backbone of my architecture 
-  RDS - Relational Database 
-  Route53 - A service that offers domain for my website also a frequently used service 
-  CloudFront - Determines if a requested is cached 
-  Load Balancer - Helps guide traffic for a lot of instance request for the EC2 

## The Analysis

# Part 1: Implementing a highly available Lightsail database with WordPress 

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

<p> My personal feedback about this lab is fairly tricky to work with specially the plug in. A lot of errors occured which caused me to restart the project because I had an assumption that the reason why the Offload Media plugin could not connect to my s3 access key was diue to my IAM and S3 being in a different regions. But I soon found out it wasnt the case. Eventually I was able to figure out the issue and finally run the plugin and do the testing. Attention to details is very important!</p>

<P> Lab - https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-2-using-amazon-s3-with-wordpress-to-securely-deliver-media-files/</P>

<p> List of problems that I tackled and conducted problem solving  </p>
<html>
  <body>
    <ol>
      <li>Different regions on S3 and IAM- I assumed that this caused the error on Offload media</li>
      <li>Different region on Lightsail - I assumed that this caused the error on Offload media</li>
        <li>Denied access on Offload Media due to no adding #AmazonS3FullAccess on my IAM user policy</li>
  
    
  </body>

<h1> The culprit of this project</h1>

<p> As per the lab it statess that the IAM policy wil only consist of one JSON policy, but upon trying to access the plugin I found that my S3 bucket was not given access. Thats because you need to add another policy to the user and thats #AMAZONS3FULLACCESS. This will allow access for the plug in to connect to your S3 bucket </p>

  ![policies on IAM user - Copy](https://github.com/user-attachments/assets/526bb527-972a-469d-a96c-d712aa1fa89e)


<p> After finding out the problem I was finally able to connect to my S3 bucket ! </p>

  ![connecting plugin to bucket](https://github.com/user-attachments/assets/37e259b6-cd2a-4d6f-8798-5af3cbfd8b95)


 <h1> PLUG-IN TESTING </h1>

 ![upload of file on plugin](https://github.com/user-attachments/assets/5cb948f2-678c-4c79-9201-6a6ebfc6e407)

<h1> URL PASTED ON BROWSER</h1>

![img upload on plugin](https://github.com/user-attachments/assets/51782bf4-5f8d-491b-8ebf-afd9581df788)




<h1> Part 3: Increasing security and performance using Amazon CloudFront</h1>

<p> This is part 3 of this project in this lab we will be adding Amazon Cloudfront. CloudFront is a content delivery network (CDN). It essentially caches content from your server on endpoints across the globe. When someone visits your site, they hit one of the CloudFront endpoints first. CloudFront determines if the requested content is cached.

 CloudFront determines if the requested content is cached. If so, CloudFront responds to the client with the requested information. If the content isn’t cached on the endpoint, it is loaded from the actual server and cached on CloudFront so subsequent requests can be served from the endpoint.

This process speeds up response time, because the endpoint is usually closer to the client than the actual server, and it reduces load on the server, because any request that CloudFront can handle is one less request your server needs to deal with.

</p>

![diagram](https://github.com/user-attachments/assets/d2d833bd-807c-4127-8190-ee647219d1aa)

<h1> Benefits of Cloudfront?</h1>

<p> Cloud front has content that is cached meaning if you visit a website the endpoint contains cached contnent. If the requested content iss already cached in the Cloudfront there will be no need to connect to the sesrver. This will provide faster response because the endpoint is usually closer to the client than the actual server. </p>

<p> Lab - https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-3-increasing-security-and-performance-using-amazon-cloudfront/ </p>

<h1> Requesting a certficate </h1>

<p> The goal now is to configure Cloudfront to work with my Lightsail wordpress but the following must be met</p>

<p> We must first request a certificate from ACM</p>

![image](https://github.com/user-attachments/assets/0851a597-1541-4ebf-94ae-92ff843afa85)

 <p>But in order to request one we must first have a DNS (domain) and thats where I use Route53
  
 ![image](https://github.com/user-attachments/assets/b1b494c9-6f00-40eb-8921-0f33953164a8)


 <h1> IMPORTANT </h1>

 
 <p>Once I successfully obtain a certificate I can then configure from the wordpress to use the Cloudfront as destribution</p>

<p>  I completed the the following above and  I was able to request a certificate in ACM and the to create a record in Route53, I had to be extra careful as i found the validation of the certificate was taking too long. I found that you need to manually press on "create in Route 53" in order for the validation to go thru  </p>

![image](https://github.com/user-attachments/assets/0b95c190-6827-46a7-b5d7-59ef08731d17)


![image](https://github.com/user-attachments/assets/4c2b17dc-b385-462b-a128-b3f0104a3c1c)

<h1> Creating the SSL certificate</h1>

<P> I personally had a hard time following up with this as the lab was layout was svery different from the current AWS console. Even so after trial and error I was able to manage and create a SSL ceertificate </P>

![SSL certificate custom](https://github.com/user-attachments/assets/0e55db69-7cba-419a-be7b-159e43027491)

<h1> Linking domain to Lightsail and web update</h1>

<p> Now I wanted to change the Wordpress domain to my own domain which was "adriane-aws.com" I was able to do this by taking the IP from Lightsail and linking it to my Route53 Wizard. As you can see on the photo below the type "A" column has a value of the IP address </p>

![routing ip from Lightsail to Route53](https://github.com/user-attachments/assets/535f318d-09a4-4941-bd21-a24b4a42aa0d)

<h1> WEB </h1>
<p> This is what my web looks like as you can see the updated domain and heading
</p>


![web with new domain](https://github.com/user-attachments/assets/a2a8c248-dd3d-40c8-a390-e94c1d89565c)


<h1> Conclusion </h1>

<p> What have I accomplished so far? </p>
<html>
  <body>
    <ol>
      <li> We know Cloudfront the distributes to my s3 bucket acting as a cached. With this it would offer faster response time and less stress on the server</li>
      <li>Route 53 provided me with a domain that I used to obtain a ACM cert and a domian to host the web URL </li>
        <li>ACM which housess a domain, CNAME name and a CNAME value</li>
    </ol>
    
  </body>





![image](https://github.com/user-attachments/assets/6793741a-ade9-43c0-92ee-01b63e619fdd)

![image](https://github.com/user-attachments/assets/8975dcde-5557-4f55-ae10-4e40eb0eb3ab)


<h1>Part 4: Increasing performance and scalability with a Lightsail load balancer</h1>

<p>In this project I will apply a Lightsail load balancer into my Highly available Wordpress. This Lab will allow me to deploy new instances from those snapshots and place them into the load balancer</p>

<h1>Load Balancer</h1>

<p>A load balancer accepts incoming web traffic and routes it to one or (usually) more servers. Having multiple servers allows you to scale the number of incoming requests your site can handle, as well as allowing your site to remain responsive if a web server fails. The following diagram shows the solution architecture, which features multiple front-end WordPress servers behind a Lightsail load balancer, a highly available Lightsail database, and uses S3 alongside CloudFront to deliver your media content securely.</p>

![image](https://github.com/user-attachments/assets/d980e689-a99e-42ee-b87b-3042a0f4bf96)

<p> Lab - https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-4-increasing-performance-and-scalability-with-a-lightsail-load-balancer/ </p>



<h1> Addring load balancer inside Lightsail </h1>

<p> After adding the load balancer I ensure to check the Region as I find it giving me issues in the passed if not selected properly. As ypu can see a DNS formed, the load balancer is also trying to connect to the instance and most importantly its conducting a health check </p>

![load balancer target instance](https://github.com/user-attachments/assets/a6d8bd68-ed6d-409b-b493-70666d3723d1)

<p> Balancer suggest that the instance passed the health check</p>

![image](https://github.com/user-attachments/assets/ae643af9-d06f-4d8c-89ce-df5d1aadaebd)

<p> Just like in CLoudfront I need to obtain a certificate for this Domain along with CNAME name  </p>

![image](https://github.com/user-attachments/assets/5d91c7de-59c1-4ef7-b4e8-65495066a71f)


## Conclusion

AWS Cloud computing is a completely different beast. Its very scalable and its services are cost saver for consumers looking to migrate into the Cloud. 

I really wanted to learn the cloud as I believe that its the future of tech. 



