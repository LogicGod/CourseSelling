import React from 'react'

const Systemdes = () => {
  return (
    <div className='relative top-[64px] lg:top-[90px] md:left-[30vw] md:w-[69vw] md:top-[80px] lg:left-[21vw] lg:w-[calc(100vw-23vw)]
        flex flex-col p-4 lg:p-8 md:p-4'>
            <div className= ' w-full p-4'>
                <h1 className='text-2xl md:text-3xl font-bold '>About System Design</h1>
                <div className='border-b-2 pt-1 border-black w-[300px] md:w-[380px] lg:w-[370px]'></div>
            </div>
 
            <div className='flex flex-col gap-8 text-xl'>
                <p>
                    System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It involves creating scalable, reliable, and efficient systems that can handle large amounts of data and traffic. <br /> <br />
                    System design is crucial for building applications like social media platforms, e-commerce websites, streaming services, and more. It requires a deep understanding of distributed systems, databases, caching, load balancing, and microservices architecture.
                </p>

                <div className='flex flex-col gap-4'>
                    <div>
                <h1 className='text-2xl lg:text-3xl font-bold '>Roadmap of System Design Series</h1>
                <div className='border-b-2 pt-1 border-black w-[250px] md:w-[470px] lg:w-[550px]'></div>
                </div>

                <div>
                <ul class="flex flex-col gap-6">
  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Foundation Skills (Weeks 1-4)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Introduction to system design concepts</li>
      <li>Understanding scalability, reliability, and availability</li>
      <li>Basics of distributed systems</li>
      <li>Key principles of load balancing and caching</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Core System Design Concepts (Weeks 5-8)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Designing APIs and RESTful services</li>
      <li>Database design: SQL vs. NoSQL</li>
      <li>Microservices architecture</li>
      <li>Message queues and event-driven architecture</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Advanced System Design (Weeks 9-12)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Designing for scalability: sharding and partitioning</li>
      <li>Caching strategies: Redis, Memcached</li>
      <li>Content Delivery Networks (CDNs)</li>
      <li>Handling high traffic and data consistency</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Real-World System Design (Weeks 13-16)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Designing a URL shortening service</li>
      <li>Designing a social media platform</li>
      <li>Designing a video streaming service</li>
      <li>Designing an e-commerce platform</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Performance Optimization (Weeks 17-20)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Database indexing and optimization</li>
      <li>Latency reduction techniques</li>
      <li>Handling fault tolerance and disaster recovery</li>
      <li>Monitoring and logging systems</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Security and Compliance (Weeks 21-22)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Implementing authentication and authorization</li>
      <li>Data encryption and secure communication</li>
      <li>Compliance with GDPR and other regulations</li>
      <li>Handling DDoS attacks and security breaches</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Emerging Trends (Weeks 23-26)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Serverless architecture</li>
      <li>Edge computing</li>
      <li>Blockchain and decentralized systems</li>
      <li>AI/ML integration in system design</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Case Studies (Weeks 27-28)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Case study: Designing Twitter</li>
      <li>Case study: Designing Netflix</li>
      <li>Case study: Designing Uber</li>
      <li>Case study: Designing Airbnb</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Final Project (Weeks 29-30)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Designing a complete system from scratch</li>
      <li>Presenting and reviewing the design</li>
      <li>Implementing a prototype</li>
      <li>Final project evaluation and feedback</li>
    </ul>
  </li>
</ul>

<h3 class="mt-8 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Key Technologies:</h3>
<ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
  <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Cassandra</li>
  <li><strong>Caching:</strong> Redis, Memcached</li>
  <li><strong>Message Queues:</strong> Kafka, RabbitMQ</li>
  <li><strong>Cloud Services:</strong> AWS, Google Cloud, Azure</li>
  <li><strong>Load Balancing:</strong> NGINX, HAProxy</li>
  <li><strong>Monitoring:</strong> Prometheus, Grafana</li>
  <li><strong>DevOps:</strong> Docker, Kubernetes, CI/CD</li>
</ul>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Systemdes