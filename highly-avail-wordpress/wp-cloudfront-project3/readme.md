
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

 <p>But in order to request one we must first havea DNS (domain) and thats where I use Route53
  
 ![image](https://github.com/user-attachments/assets/b1b494c9-6f00-40eb-8921-0f33953164a8)

 
 Once I successfully obtain a certificate I can then configure from the wordpress to use the Cloudfront as destribution</p>

![image](https://github.com/user-attachments/assets/71e73aa8-4fb5-43cf-a915-0af5501973d7)

<p> Once I completed the the following I was able to request a certificate in ACM and the to create a record in Route53 </p>

![image](https://github.com/user-attachments/assets/4c2b17dc-b385-462b-a128-b3f0104a3c1c)
