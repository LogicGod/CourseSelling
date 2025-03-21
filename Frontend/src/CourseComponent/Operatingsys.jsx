import React from 'react'

const Operatingsys = () => {
  return (
    <div className='relative top-[64px] lg:top-[90px] md:left-[30vw] md:w-[69vw] md:top-[80px] lg:left-[21vw] lg:w-[calc(100vw-23vw)]
        flex flex-col p-4 lg:p-8 md:p-4'>
            <div className= ' w-full p-4'>
                <h1 className='text-2xl md:text-3xl font-bold '>About Operating Systems</h1>
                <div className='border-b-2 pt-1 border-black w-[300px] md:w-[380px] lg:w-[370px]'></div>
            </div>
 
            <div className='flex flex-col gap-8 text-xl'>
                <p>
                    An operating system (OS) is system software that manages computer hardware and software resources and provides common services for computer programs. It acts as an intermediary between users and the computer hardware. <br /> <br />
                    Operating systems are essential for devices ranging from personal computers and smartphones to servers and embedded systems. Understanding OS concepts helps in optimizing performance, managing resources, and ensuring security.
                </p>

                <div className='flex flex-col gap-4'>
                    <div>
                <h1 className='text-2xl lg:text-3xl font-bold '>Roadmap of Operating System Series</h1>
                <div className='border-b-2 pt-1 border-black w-[250px] md:w-[470px] lg:w-[550px]'></div>
                </div>

                <div>
                <ul class="flex flex-col gap-6">
  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Introduction to OS (Weeks 1-4)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>What is an Operating System?</li>
      <li>Types of Operating Systems</li>
      <li>OS Structure and Components</li>
      <li>Process Management Basics</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Process Management (Weeks 5-8)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Processes and Threads</li>
      <li>CPU Scheduling Algorithms</li>
      <li>Inter-Process Communication</li>
      <li>Synchronization and Deadlocks</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Memory Management (Weeks 9-12)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Memory Allocation Strategies</li>
      <li>Virtual Memory and Paging</li>
      <li>Segmentation</li>
      <li>Memory Protection and Security</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">File Systems and Storage (Weeks 13-16)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>File System Concepts</li>
      <li>Disk Management and Scheduling</li>
      <li>RAID and Fault Tolerance</li>
      <li>Data Integrity and Recovery</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Security and Protection (Weeks 17-20)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>User Authentication and Access Control</li>
      <li>Encryption in Operating Systems</li>
      <li>Malware and Threat Prevention</li>
      <li>Security Policies and Compliance</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Networking and Distributed Systems (Weeks 21-22)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Networking Basics in OS</li>
      <li>Distributed Systems and Clusters</li>
      <li>Remote Procedure Calls (RPCs)</li>
      <li>Cloud Computing and Virtualization</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Emerging Trends (Weeks 23-26)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Microkernel vs. Monolithic OS</li>
      <li>Real-Time Operating Systems (RTOS)</li>
      <li>Containerization and Docker</li>
      <li>AI and Machine Learning in OS</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Case Studies (Weeks 27-28)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Case study: Windows OS</li>
      <li>Case study: Linux OS</li>
      <li>Case study: macOS</li>
      <li>Case study: Android & iOS</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Final Project (Weeks 29-30)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Designing a Custom OS</li>
      <li>Kernel Development</li>
      <li>Implementing a File System</li>
      <li>Final Project Evaluation and Feedback</li>
    </ul>
  </li>
</ul>

<h3 class="mt-8 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Key Technologies:</h3>
<ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
  <li><strong>Operating Systems:</strong> Linux, Windows, macOS, Unix</li>
  <li><strong>File Systems:</strong> NTFS, EXT4, APFS, FAT32</li>
  <li><strong>Virtualization:</strong> VMware, VirtualBox, Hyper-V</li>
  <li><strong>Security:</strong> SELinux, AppArmor</li>
  <li><strong>Cloud OS:</strong> Kubernetes, OpenStack</li>
  <li><strong>Debugging Tools:</strong> GDB, strace, dtrace</li>
  <li><strong>System Monitoring:</strong> top, htop, Prometheus</li>
</ul>
                </div>
                </div>
            </div>
        </div>

  )
}

export default Operatingsys