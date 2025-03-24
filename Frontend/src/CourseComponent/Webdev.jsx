import React from 'react'
import {useRecoilValue } from 'recoil'
import { Theme } from '../componants/Statevariable'


const Webdev = () => {
const theme = useRecoilValue(Theme);

    return (
        <div className={` relative top-[64px] lg:top-[90px] md:left-[30vw] md:w-[69vw] md:top-[80px] lg:left-[21vw] lg:w-[calc(100vw-23vw)]
        flex flex-col p-4 lg:p-8 md:p-4`}>
            <div className= ' w-full p-4'>
                <h1 className='text-2xl md:text-3xl font-bold '>About Web Development</h1>
                <div className='border-b-2 pt-1 w-[300px] md:w-[380px] lg:w-[370px]'></div>
            </div>
 
            <div className='flex flex-col gap-8 text-xl'>
                <p>
                    Web development is the process of building and maintaining websites and web applications. It involves creating the visual elements users see and interact with in their browsers (front-end development), as well as the behind-the-scenes functionality and infrastructure (back-end development). <br /> <br />
                    Web development can range from creating simple static websites with a few pages to developing complex web applications like e-commerce platforms, social networks, or content management systems.
                    Modern web development often involves using frameworks and libraries (like React, Angular, or Vue for front-end; Express, Django, or Laravel for back-end), version control systems (like Git), and various tools for testing, optimization, and deployment.
                </p>

                <div className='flex flex-col gap-4'>
                    <div>
                <h1 className='text-2xl lg:text-3xl font-bold '>Roadmap of Web Development Series</h1>
                <div className='border-b-2 pt-1 w-[250px] md:w-[470px] lg:w-[550px]'></div>
                </div>

                <div>
                <ul class="flex flex-col gap-6">
  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Foundation Skills (Weeks 1-4)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>HTML5 fundamentals: structure, semantic elements, forms</li>
      <li>CSS3: layouts, flexbox, grid, responsive design</li>
      <li>JavaScript basics: syntax, DOM manipulation, events</li>
      <li>Git version control and GitHub basics</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Front-End Development (Weeks 5-8)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Advanced JavaScript: ES6+, promises, async/await</li>
      <li>React.js framework: components, props, state, hooks</li>
      <li>UI libraries: Bootstrap or Tailwind CSS</li>
      <li>Form validation and user authentication patterns</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Back-End Fundamentals (Weeks 9-12)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Node.js and Express.js basics</li>
      <li>RESTful API design principles</li>
      <li>Database design: MongoDB or PostgreSQL</li>
      <li>User authentication implementation (JWT, OAuth)</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">E-Commerce and Payment Systems (Weeks 13-16)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Payment gateway integration (Stripe, PayPal)</li>
      <li>Shopping cart functionality</li>
      <li>Order processing workflows</li>
      <li>Subscription management systems</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Course Delivery Features (Weeks 17-20)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Video content hosting and streaming</li>
      <li>Content protection mechanisms</li>
      <li>Progress tracking for students</li>
      <li>Quiz and assessment functionality</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">User Experience & Interface (Weeks 21-22)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>UX principles for educational platforms</li>
      <li>Dashboards for students and instructors</li>
      <li>Notification systems</li>
      <li>Mobile responsiveness optimization</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Advanced Features (Weeks 23-26)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Real-time communication (chat, comments)</li>
      <li>Analytics implementation</li>
      <li>Search functionality and filters</li>
      <li>Performance optimization techniques</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Testing & Deployment (Weeks 27-28)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Unit and integration testing</li>
      <li>Security best practices</li>
      <li>CI/CD pipeline setup</li>
      <li>Cloud deployment (AWS, Google Cloud, or Azure)</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Marketing & SEO (Weeks 29-30)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>SEO optimization for course content</li>
      <li>Social sharing integration</li>
      <li>Email marketing system connection</li>
      <li>Affiliate program structure (optional)</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Maintenance & Scaling (Week 31-32)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Monitoring and logging systems</li>
      <li>Database optimization</li>
      <li>Caching strategies</li>
      <li>Load balancing and scaling solutions</li>
    </ul>
  </li>
</ul>

<h3 class="mt-8 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Key Technologies:</h3>
<ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
  <li><strong>Front-end:</strong> React.js, Redux, Tailwind/Bootstrap</li>
  <li><strong>Back-end:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB/PostgreSQL</li>
  <li><strong>Authentication:</strong> JWT, Firebase Auth</li>
  <li><strong>Payment:</strong> Stripe API, PayPal SDK</li>
  <li><strong>Hosting:</strong> AWS S3, Cloudfront, Netlify/Vercel</li>
  <li><strong>Media:</strong> AWS S3, Cloudinary</li>
  <li><strong>DevOps:</strong> Docker, GitHub Actions</li>
</ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Webdev