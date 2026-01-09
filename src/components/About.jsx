import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-t flex from-black to-indigo-950 mb-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-extrabold inline border-b-4 border-gray-500 font-new text-white">
            About
          </p>
        </div>

        <p className="text-xl mt-20 font-new text-white leading-relaxed">
          I am a motivated Cybersecurity enthusiast with hands-on experience in
          network security, log analysis, and threat detection. I have worked
          with tools such as Splunk, Wazuh, Nmap, Burp Suite, Nessus, and Kali
          Linux to analyze security events and identify potential risks.
        </p>

        <br />

        <p className="text-xl font-new text-white leading-relaxed">
          Through self-built lab environments and practical projects, I have
          gained exposure to SOC operations, OWASP Top 10 testing, vulnerability
          assessment, and basic incident response. I am actively transitioning
          into a security-focused role and eager to contribute to defensive
          security teams while continuously improving my skills.
        </p>
      </div>
    </div>
  )
}

export default About
