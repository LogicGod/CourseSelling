import React from 'react'

const Uiux = () => {
  return (
    <div className='relative top-[64px] lg:top-[90px] md:left-[30vw] md:w-[69vw] md:top-[80px] lg:left-[21vw] lg:w-[calc(100vw-23vw)]
        flex flex-col p-4 lg:p-8 md:p-4'>
            <div className= ' w-full p-4'>
                <h1 className='text-2xl md:text-3xl font-bold '>About UI/UX Design</h1>
                <div className='border-b-2 pt-1 w-[300px] md:w-[380px] lg:w-[370px]'></div>
            </div>
 
            <div className='flex flex-col gap-8 text-xl'>
                <p>
                    UI/UX design focuses on creating visually appealing and user-friendly interfaces that enhance user experience. It involves understanding user needs, designing intuitive navigation, and ensuring accessibility and usability. <br /> <br />
                    UI/UX design is essential for websites, mobile apps, and digital products. It requires knowledge of user research, wireframing, prototyping, usability testing, and design principles.
                </p>

                <div className='flex flex-col gap-4'>
                    <div>
                <h1 className='text-2xl lg:text-3xl font-bold '>Roadmap of UI/UX Design Series</h1>
                <div className='border-b-2 pt-1 w-[250px] md:w-[470px] lg:w-[550px]'></div>
                </div>

                <div>
                <ul class="flex flex-col gap-6">
  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Fundamentals (Weeks 1-4)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Introduction to UI/UX design</li>
      <li>Understanding user-centered design</li>
      <li>Basic principles of usability and accessibility</li>
      <li>Introduction to design tools: Figma, Adobe XD</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">User Research & Wireframing (Weeks 5-8)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Conducting user research and persona creation</li>
      <li>Competitor analysis and market research</li>
      <li>Wireframing techniques and tools</li>
      <li>Creating effective user flows</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Visual Design & Prototyping (Weeks 9-12)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Typography, color theory, and layout principles</li>
      <li>Prototyping and interaction design</li>
      <li>Designing for different screen sizes and platforms</li>
      <li>High-fidelity mockups and animations</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Usability Testing & Iteration (Weeks 13-16)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Conducting usability tests</li>
      <li>Analyzing feedback and improving designs</li>
      <li>Designing for accessibility and inclusivity</li>
      <li>Iterating based on user behavior and feedback</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Advanced UI/UX Concepts (Weeks 17-20)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Microinteractions and motion design</li>
      <li>Design systems and component libraries</li>
      <li>Cross-platform design considerations</li>
      <li>Emerging trends in UI/UX</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Case Studies (Weeks 21-24)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Case study: Redesigning a popular app</li>
      <li>Case study: Designing for accessibility</li>
      <li>Case study: Creating a design system</li>
      <li>Case study: Enhancing user engagement</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Final Project (Weeks 25-28)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Designing a complete UI/UX project</li>
      <li>Presenting the final design</li>
      <li>Creating a portfolio and case study</li>
      <li>Receiving feedback and final improvements</li>
    </ul>
  </li>
</ul>

<h3 class="mt-8 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Key Tools & Technologies:</h3>
<ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
  <li><strong>Design Tools:</strong> Figma, Adobe XD, Sketch</li>
  <li><strong>Prototyping:</strong> InVision, Axure</li>
  <li><strong>Collaboration:</strong> Miro, Notion</li>
  <li><strong>Testing:</strong> Hotjar, Google Analytics</li>
  <li><strong>Development Handoff:</strong> Zeplin, Avocode</li>
</ul>
                </div>
                </div>
            </div>
        </div>

  )
}

export default Uiux