import React from 'react'

function Androiddev() {
  return (
    <div className='relative top-[64px] lg:top-[90px] md:left-[30vw] md:w-[69vw] md:top-[80px] lg:left-[21vw] lg:w-[calc(100vw-23vw)]
        flex flex-col p-4 lg:p-8 md:p-4'>
            <div className= ' w-full p-4'>
                <h1 className='text-2xl md:text-3xl font-bold '>About Android Development</h1>
                <div className='border-b-2 pt-1  w-[300px] md:w-[380px] lg:w-[370px]'></div>
            </div>
 
            <div className='flex flex-col gap-8 text-xl'>
                <p>
                    Android development is the process of creating applications for devices running the Android operating system. It involves designing user interfaces, implementing functionality, and ensuring compatibility across a wide range of devices. <br /> <br />
                    Android development can range from building simple utility apps to complex applications like social media platforms, e-commerce apps, or gaming apps. Modern Android development often involves using frameworks and tools like Android Studio, Kotlin, Jetpack Compose, and various libraries for networking, database management, and testing.
                </p>

                <div className='flex flex-col gap-4'>
                    <div>
                <h1 className='text-2xl lg:text-3xl font-bold '>Roadmap of Android Development Series</h1>
                <div className='border-b-2 pt-1  w-[250px] md:w-[470px] lg:w-[550px]'></div>
                </div>

                <div>
                <ul class="flex flex-col gap-6">
  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Foundation Skills (Weeks 1-4)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Introduction to Android Studio and setup</li>
      <li>Kotlin basics: syntax, data types, control flow</li>
      <li>XML for designing user interfaces</li>
      <li>Git version control and GitHub basics</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Core Android Development (Weeks 5-8)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Activities, Fragments, and Intents</li>
      <li>RecyclerView and Adapters</li>
      <li>Material Design principles</li>
      <li>Handling user input and navigation</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Advanced Android Concepts (Weeks 9-12)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Networking with Retrofit and OkHttp</li>
      <li>Room Database for local storage</li>
      <li>Dependency injection with Hilt</li>
      <li>Background tasks with WorkManager</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">UI/UX and Animations (Weeks 13-16)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Jetpack Compose for modern UI development</li>
      <li>Animations and transitions</li>
      <li>Custom views and canvas drawing</li>
      <li>Accessibility and localization</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Testing and Debugging (Weeks 17-20)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Unit testing with JUnit and Mockito</li>
      <li>UI testing with Espresso</li>
      <li>Debugging and profiling tools</li>
      <li>Continuous Integration with GitHub Actions</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Publishing and Monetization (Weeks 21-22)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Preparing apps for release</li>
      <li>Google Play Store submission process</li>
      <li>In-app purchases and subscriptions</li>
      <li>Ad integration with AdMob</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Advanced Features (Weeks 23-26)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Push notifications with Firebase Cloud Messaging</li>
      <li>Offline-first architecture</li>
      <li>Security best practices</li>
      <li>Performance optimization techniques</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Emerging Technologies (Weeks 27-28)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Integration with Wear OS</li>
      <li>Building for foldable devices</li>
      <li>Augmented Reality (AR) with ARCore</li>
      <li>Machine Learning with ML Kit</li>
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
  <li><strong>Programming Language:</strong> Kotlin, Java</li>
  <li><strong>UI Framework:</strong> Jetpack Compose, XML</li>
  <li><strong>Database:</strong> Room, SQLite</li>
  <li><strong>Networking:</strong> Retrofit, OkHttp</li>
  <li><strong>Dependency Injection:</strong> Hilt</li>
  <li><strong>Testing:</strong> JUnit, Espresso</li>
  <li><strong>Cloud Services:</strong> Firebase, Google Play Services</li>
  <li><strong>DevOps:</strong> GitHub Actions, CI/CD</li>
</ul>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Androiddev