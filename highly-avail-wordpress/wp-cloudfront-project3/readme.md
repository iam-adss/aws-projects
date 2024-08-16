
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

<P> I personally had a hard time following up withj this as the lab was layout was svery different from the current AWS console. Even so after trial and error I was able to manage and create a SSL ceertificate </P>

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


