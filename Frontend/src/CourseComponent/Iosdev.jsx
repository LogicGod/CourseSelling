import React from 'react'

const Iosdev = () => {
  return (
    <div className='relative top-[64px] lg:top-[90px] md:left-[30vw] md:w-[69vw] md:top-[80px] lg:left-[21vw] lg:w-[calc(100vw-23vw)]
        flex flex-col p-4 lg:p-8 md:p-4'>
            <div className= ' w-full p-4'>
                <h1 className='text-2xl md:text-3xl font-bold '>About iOS Development</h1>
                <div className='border-b-2 pt-1 w-[300px] md:w-[380px] lg:w-[370px]'></div>
            </div>
 
            <div className='flex flex-col gap-8 text-xl'>
                <p>
                    iOS development is the process of creating applications for devices running Apple's iOS operating system, such as iPhones and iPads. It involves designing user interfaces, implementing functionality, and ensuring compatibility across Apple's ecosystem. <br /> <br />
                    iOS development can range from building simple utility apps to complex applications like social media platforms, e-commerce apps, or gaming apps. Modern iOS development often involves using frameworks and tools like Xcode, Swift, SwiftUI, and various libraries for networking, database management, and testing.
                </p>

                <div className='flex flex-col gap-4'>
                    <div>
                <h1 className='text-2xl lg:text-3xl font-bold '>Roadmap of iOS Development Series</h1>
                <div className='border-b-2 pt-1 w-[250px] md:w-[470px] lg:w-[550px]'></div>
                </div>

                <div>
                <ul class="flex flex-col gap-6">
  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Foundation Skills (Weeks 1-4)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Introduction to Xcode and setup</li>
      <li>Swift basics: syntax, data types, control flow</li>
      <li>SwiftUI for designing user interfaces</li>
      <li>Git version control and GitHub basics</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Core iOS Development (Weeks 5-8)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Views, ViewControllers, and Navigation</li>
      <li>TableViews and CollectionViews</li>
      <li>Auto Layout and constraints</li>
      <li>Handling user input and gestures</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Advanced iOS Concepts (Weeks 9-12)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Networking with URLSession and Alamofire</li>
      <li>Core Data for local storage</li>
      <li>Dependency injection with Swinject</li>
      <li>Background tasks with Grand Central Dispatch (GCD)</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">UI/UX and Animations (Weeks 13-16)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>SwiftUI for modern UI development</li>
      <li>Animations and transitions</li>
      <li>Custom views and drawing with Core Graphics</li>
      <li>Accessibility and localization</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Testing and Debugging (Weeks 17-20)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Unit testing with XCTest</li>
      <li>UI testing with XCTest</li>
      <li>Debugging and profiling tools</li>
      <li>Continuous Integration with GitHub Actions</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Publishing and Monetization (Weeks 21-22)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Preparing apps for release</li>
      <li>App Store submission process</li>
      <li>In-app purchases and subscriptions</li>
      <li>Ad integration with AdMob</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Advanced Features (Weeks 23-26)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Push notifications with APNs</li>
      <li>Offline-first architecture</li>
      <li>Security best practices</li>
      <li>Performance optimization techniques</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Emerging Technologies (Weeks 27-28)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Integration with watchOS</li>
      <li>Building for iPadOS and macOS</li>
      <li>Augmented Reality (AR) with ARKit</li>
      <li>Machine Learning with Core ML</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Maintenance and Scaling (Weeks 29-30)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Monitoring app performance</li>
      <li>Handling user feedback and updates</li>
      <li>Scaling for large user bases</li>
      <li>Database optimization and caching</li>
    </ul>
  </li>
</ul>

<h3 class="mt-8 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Key Technologies:</h3>
<ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
  <li><strong>Programming Language:</strong> Swift, Objective-C</li>
  <li><strong>UI Framework:</strong> SwiftUI, UIKit</li>
  <li><strong>Database:</strong> Core Data, Realm</li>
  <li><strong>Networking:</strong> URLSession, Alamofire</li>
  <li><strong>Dependency Injection:</strong> Swinject</li>
  <li><strong>Testing:</strong> XCTest</li>
  <li><strong>Cloud Services:</strong> Firebase, CloudKit</li>
  <li><strong>DevOps:</strong> GitHub Actions, CI/CD</li>
</ul>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Iosdev