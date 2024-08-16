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


