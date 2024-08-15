                  
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


