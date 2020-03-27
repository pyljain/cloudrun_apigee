# Building external facing APIs using Cloud Run and Apigee

Cloud Run offers a fully managed serverless experience on the Google Cloud Platform (GCP), autoscaling based on demand with a scale to zero model when the Cloud Run service is not serving any requests. It is well suited for the deployment of stateless, containerised services that can securely connect to the wider GCP platform using IAM controls.

Apigee is Google’s cross platform API Management platform that lets you design, secure, analyze and manage APIs at scale.

Cloud Run services can be secured using IAM permissions; in that you control the internal and external audience that are accorded access to your Cloud Run services using GCP service accounts and associated IAM permissions thereof. Cloud Run enforces certificate based authentication necessitating the calling service and/or user to provide a Google ID Token (JWT based authentication using the oAuth 2.0 protocol) to gain access to the Cloud Run service/s.

Oftentimes, enterprises have a wide array of applications that need to consume such API based services; these applications may support varying authentication mechanisms such as API key based auth, basic auth, oAuth 2.0 protocols and SAML. Additionally, your enterprise may also need to enforce application specific policies to rate limit, meter, augment requests from each of these consuming applications. 

Along similar lines, your enterprise’s partner ecosystem that needs to consume API services on Cloud Run may also have differing levels of maturity in that they may support different messaging protocols, transport protocols, be capable of only authenticating using a subset of auth. mechanisms et cetera.

