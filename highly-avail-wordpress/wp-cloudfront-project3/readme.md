
<h1> Part 3: Increasing security and performance using Amazon CloudFront</h1>

<p> This is part 3 of this project in this lab we will be adding Amazon Cloudfront. CloudFront is a content delivery network (CDN). It essentially caches content from your server on endpoints across the globe. When someone visits your site, they hit one of the CloudFront endpoints first. CloudFront determines if the requested content is cached.

 CloudFront determines if the requested content is cached. If so, CloudFront responds to the client with the requested information. If the content isn’t cached on the endpoint, it is loaded from the actual server and cached on CloudFront so subsequent requests can be served from the endpoint.

This process speeds up response time, because the endpoint is usually closer to the client than the actual server, and it reduces load on the server, because any request that CloudFront can handle is one less request your server needs to deal with.

</p>

![diagram](https://github.com/user-attachments/assets/d2d833bd-807c-4127-8190-ee647219d1aa)

<h1> Why use Cloudfront?</h1>

<p> Cloud front has content that is cached meaning if you visit a website the endpoint contains cached contnent. If the requested content iss already cached in the Cloudfront there will be no need to connect to the sesrver. This will provide faster response because the endpoint is usually closer to the client than the actual server. </p>

<h1> </h1>
