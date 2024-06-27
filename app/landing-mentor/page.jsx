import Link from "next/link";
import React from "react";
import { MdAlarmOn } from "react-icons/md";

function page() {
  return (
    <div className="page">
      {/*Hero by David*/}
      <hero className="w-full">
        <div className="flex items-center bg-gray-200 justify-center space-y-6 md:px-8 w-full flex-wrap py-12 px-4">
          <img
            src="https://cdn.prod.website-files.com/5ce11396d0cadb67eb2cac0e/61bbb1a994ba540287b5abe3_Purpose%20of%20a%20mentor.jpg"
            alt="hero image"
            className="lg:w-[50%] md:w-full mt-4"
          />
          <div className="flex flex-col space-y-2 pl-6 lg:w-[50%] md:w-full">
            <div>MENTORSHIP</div>
            <h2 className="md:text-4xl text-xl font-bold mt-4 pr-12">
              Frontend Mentorship: A Comprehensive Guide
            </h2>
            <p>
              Front-end mentorship provides personalized guidance to accelerate
              your growth in HTML, CSS, and JavaScript, equipping you with
              essential skills to excel in web development.
            </p>
            <h5>Mark Sikaundi</h5>
            <p>
              CEO of{` `}
              <Link href="#" className="text-green-700">
                Lupleg
              </Link>
            </p>

            <p className="text-sm pt-2">Published on Jun 26, 2024</p>
            <div className="flex justify-between items-center w-full flex-wrap space-y-2">
              <p className="flex items-center text-sm">
                <MdAlarmOn />
                19 mins read time
              </p>
            </div>
          </div>
        </div>
      </hero>
      <main className="">
        {/* intro by David */}
        <section className="w-full flex justify-center">
          <div className="flex flex-col py-8 space-y-4 w-[90%] md:w-[70%] lg:w-[60%]  justify-start ">
            <h2>What is Frontend Mentorship?</h2>
            <p>
              Frontend mentorship is a professional relationship where an
              experienced developer (mentor) guides a less experienced developer
              (mentee) in mastering frontend technologies, best practices, and
              career development. The mentorship can cover various aspects of
              frontend development, including HTML, CSS, JavaScript, frameworks
              like React or Angular, responsive design, and more.
            </p>

            <h2>Benefits of Mentorship</h2>

            <ul className="list-disc list-inside">
              <li>
                Personalized Guidance: Tailored to your learning pace and goals.
              </li>
              <li>
                Expert Feedback: Receive constructive feedback on your projects.
              </li>
              <li>
                Industry Insights: Stay updated with best practices and current
                trends.
              </li>
            </ul>

            <div>
              <h2>Curriculum Overview</h2>

              <sm>Our program covers:</sm>
              <ul className="list-disc list-inside">
                <li>
                  HTML5 and CSS3 Fundamentals: Learn to structure and style web
                  pages effectively.
                </li>
                <li>
                  JavaScript and Modern Frameworks: Dive into JavaScript
                  programming and explore popular frameworks like React and
                  Vue.js for building dynamic web applications.
                </li>
                <li>
                  UI/UX Design Principles: Understand user interface design and
                  user experience principles to create intuitive and visually
                  appealing websites.
                </li>
              </ul>

              <h2>Tools and Resources for Frontend Mentorship</h2>
              <ul className="list-disc list-inside">
                <li>
                  Online Learning Platforms: Codecademy, freeCodeCamp, Udemy,
                  Coursera.
                </li>
                <li>
                  Code Repositories: GitHub, GitLab for collaborative projects
                  and code reviews.
                </li>
                <li>
                  Communication Tools: Slack, Discord, Microsoft Teams for
                  regular communication.
                </li>
                <li>
                  Project Management: Trello, Asana for tracking progress and
                  setting milestones.
                </li>
                <li>
                  Code Editors: Visual Studio Code, Sublime Text for writing and
                  debugging code.
                </li>
              </ul>
              <img src="#"></img>
            </div>

            <div>
              <h2>Success Stories/Testimonials</h2>
              <p>
                Discover the impact of our mentorship program through real-world
                success stories.
              </p>

              <h3>Sarah B., Program Graduate</h3>
              <p>
                "Thanks to the mentorship program, I gained confidence in my
                coding abilities and landed a job as a frontend developer at a
                tech startup."
              </p>
              <img src="#"></img>
            </div>

            <div className="container">
              <h1>Enroll to get started 👇</h1>
              <form>
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" />
                <label>Email</label>
                <input type="email" placeholder="Email" />
                <label>Submit</label>
              </form>
            </div>

            <h1>
              Check our youtube video to know more about our mentorship 👇{" "}
            </h1>
            <div className="">
              <iframe
                src="https://www.youtube.com/embed/49i8_20r3DU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""
                className="w-full h-[400px] overflow-hidden"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
