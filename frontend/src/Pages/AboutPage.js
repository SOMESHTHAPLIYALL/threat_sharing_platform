import React from "react";
import Header from "../Components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="bg-blue-100 min-h-screen">
        <div className="content p-4">
          <div className="headingImage flex items-center gap-20">
            <div className="heading flex flex-col gap-4">
              <h1 className="font-bold text-6xl mt-10">
                Welcome To ThreatTacker
              </h1>
              <p className="w-[900px] font-semibold text-xl ml-10">
                At ThreatTacker, we are dedicated to providing comprehensive
                information about various threats and their effective solutions.
                Our platform serves as a valuable resource for individuals and
                organizations seeking to enhance their understanding of
                potential risks and mitigate them effectively. In today's
                ever-evolving landscape, the ability to identify, comprehend,
                and address threats is paramount. Whether it's cybersecurity
                vulnerabilities, environmental hazards, health crises, or
                geopolitical instabilities, our platform strives to furnish
                users with a comprehensive understanding of diverse threats
                prevalent in various spheres of life.What sets us apart is our
                unwavering dedication to providing reliable, up-to-date
                information that empowers our users to make informed decisions
                in mitigating risks. Through meticulously curated content, we
                endeavor to equip individuals and organizations with the
                necessary insights, tools, and strategies to navigate through
                challenging scenarios effectively.
              </p>
            </div>
            <div className="image">
              <img
                className="h-96 w-96 rounded-xl"
                src="https://th.bing.com/th/id/OIP.D8YS75p3xGzB4PWbnPV6QwHaE8?rs=1&pid=ImgDetMain"
              />
            </div>
          </div>
          <div className="section2 flex items-center gap-20 mt-10">
            <div className="headingImage flex items-center gap-20">
              <div className="image">
                <img
                  className="h-[400px] w-[500px]  rounded-xl"
                  src="https://lirp.cdn-website.com/dd2f2f75/dms3rep/multi/opt/Microsoft+Threat+Intelligence+Info+From+Akins+IT-1920w.jpeg"
                />
              </div>
              <div className="heading flex flex-col gap-4">
                <h1 className="font-bold text-6xl mt-10">What we offer</h1>
                <p className="w-[900px] font-semibold text-xl ml-10">
                  1.Threat Identification: Explore a wide range of threats,
                  including cybersecurity threats, natural disasters, health
                  emergencies, and more. Gain insights into the characteristics,
                  impact, and prevalence of each threat.
                  <br></br>
                  <br></br>
                  2.Solution Strategies: Access expert guidance on mitigating
                  threats through proactive measures and effective response
                  strategies. Learn about best practices, tools, and resources
                  to protect yourself, your business, and your community.
                  <br></br>
                  <br></br>
                  3.Alerts: Will always alert you whether the same type of
                  threat has occured in past or not
                  <br></br>
                  <br></br>
                  4.Educational Resources: Dive into our curated collection of
                  articles, guides, tutorials, and case studies designed to
                  deepen your knowledge and empower you to take informed actions
                  against threats.
                  <br></br>
                  <br></br>
                  5.Community Engagement: Join our community forum to connect
                  with like-minded individuals, share experiences, ask
                  questions, and collaborate on finding solutions to common
                  threats.
                </p>
              </div>
            </div>
          </div>
          <div className="section3 flex items-center gap-20 mt-10">
            <div className="headingImage flex items-center gap-20">
              <div className="heading flex flex-col gap-4">
                <h1 className="font-bold text-6xl mt-10">
                  Why Choose ThreatTacker
                </h1>
                <p className="w-[900px] font-semibold text-xl ml-10">
                  1.Reliable Information: Our content is thoroughly researched,
                  verified, and regularly updated to ensure accuracy and
                  relevance.
                  <br></br>
                  <br></br>
                  2.Empowerment: We believe in empowering individuals and
                  organizations with the knowledge and tools necessary to
                  address threats confidently and effectively.
                  <br></br>
                  <br></br>
                  3.Accessibility: Our website is user-friendly and accessible
                  to all, regardless of prior knowledge or expertise in threat
                  management.
                </p>
              </div>
            </div>
            <div className="image">
              <img
                className="h-[400px] w-[500px]  rounded-xl"
                src="https://ramincrediblesolution.com/wp-content/uploads/2021/08/WHY-US01.png"
              />
            </div>
          </div>
          <div className="section4 mt-10 flex justify-center items-center">
            <div className="headingImage flex items-center gap-20">
              <div className="heading flex flex-col gap-4">
                <h1 className="font-bold text-6xl mt-10">Get Started Today</h1>
                <p className=" font-semibold text-xl ml-10">
                  Start exploring our website to stay informed, prepared, and
                  resilient in the face of various threats. Whether you're an
                  individual seeking personal protection or a business owner
                  looking to safeguard your assets, Threat Solutions Hub is here
                  to support you every step of the way. Join us in building a
                  safer, more secure future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
