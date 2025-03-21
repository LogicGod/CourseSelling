import React from 'react'

const Cybersecurity = () => {
  return (
    <div className='relative top-[64px] lg:top-[90px] md:left-[30vw] md:w-[69vw] md:top-[80px] lg:left-[21vw] lg:w-[calc(100vw-23vw)]
        flex flex-col p-4 lg:p-8 md:p-4'>
            <div className= ' w-full p-4'>
                <h1 className='text-2xl md:text-3xl font-bold '>About Cybersecurity</h1>
                <div className='border-b-2 pt-1 border-black w-[300px] md:w-[380px] lg:w-[370px]'></div>
            </div>
 
            <div className='flex flex-col gap-8 text-xl'>
                <p>
                    Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It involves securing data, preventing unauthorized access, and ensuring the confidentiality, integrity, and availability of information. <br /> <br />
                    Cybersecurity is crucial for businesses, governments, and individuals to defend against cyber threats such as hacking, malware, phishing, and data breaches. It requires a deep understanding of network security, encryption, threat detection, and ethical hacking.
                </p>

                <div className='flex flex-col gap-4'>
                    <div>
                <h1 className='text-2xl lg:text-3xl font-bold '>Roadmap of Cybersecurity Series</h1>
                <div className='border-b-2 pt-1 border-black w-[250px] md:w-[470px] lg:w-[550px]'></div>
                </div>

                <div>
                <ul class="flex flex-col gap-6">
  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Introduction to Cybersecurity (Weeks 1-4)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Understanding cybersecurity fundamentals</li>
      <li>Types of cyber threats and attacks</li>
      <li>Basic security principles and best practices</li>
      <li>Introduction to encryption and authentication</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Network Security (Weeks 5-8)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Firewalls and intrusion detection systems</li>
      <li>Virtual Private Networks (VPNs)</li>
      <li>Securing wireless networks</li>
      <li>Network penetration testing</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Application Security (Weeks 9-12)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Secure coding practices</li>
      <li>Web application security: SQL injection, XSS</li>
      <li>Vulnerability assessment and patch management</li>
      <li>Threat modeling and risk assessment</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Ethical Hacking (Weeks 13-16)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Introduction to penetration testing</li>
      <li>Exploiting vulnerabilities and ethical hacking tools</li>
      <li>Social engineering attacks and prevention</li>
      <li>Red teaming and blue teaming exercises</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Cloud Security (Weeks 17-20)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Securing cloud infrastructure</li>
      <li>Identity and access management (IAM)</li>
      <li>Data protection in cloud environments</li>
      <li>Cloud compliance and regulations</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Cybersecurity Incident Response (Weeks 21-22)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Detecting and responding to cyber incidents</li>
      <li>Forensic investigation techniques</li>
      <li>Disaster recovery and business continuity</li>
      <li>Incident response planning</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Emerging Threats & Trends (Weeks 23-26)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Ransomware and advanced persistent threats (APTs)</li>
      <li>AI and machine learning in cybersecurity</li>
      <li>Cybersecurity in IoT and smart devices</li>
      <li>Zero Trust security model</li>
    </ul>
  </li>

  <li>
    <strong class="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Case Studies & Real-World Scenarios (Weeks 27-28)</strong>
    <ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
      <li>Case study: Securing a financial institution</li>
      <li>Case study: Preventing a data breach</li>
      <li>Case study: Defending against DDoS attacks</li>
      <li>Case study: Cybersecurity in healthcare</li>
    </ul>
  </li>
</ul>

<h3 class="mt-8 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Key Technologies:</h3>
<ul class="flex flex-col gap-2 pl-5 text-sm sm:text-base md:text-lg">
  <li><strong>Firewalls:</strong> Palo Alto, Cisco ASA, pfSense</li>
  <li><strong>Intrusion Detection:</strong> Snort, Suricata</li>
  <li><strong>Endpoint Security:</strong> CrowdStrike, Symantec</li>
  <li><strong>SIEM Solutions:</strong> Splunk, IBM QRadar</li>
  <li><strong>Cloud Security:</strong> AWS Security Hub, Azure Sentinel</li>
  <li><strong>Penetration Testing:</strong> Metasploit, Burp Suite</li>
  <li><strong>Compliance:</strong> GDPR, HIPAA, ISO 27001</li>
</ul>
                </div>
                </div>
            </div>
        </div>

  )
}

export default Cybersecurity