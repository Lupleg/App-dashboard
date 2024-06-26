import React from "react";

function page() {
  return (
    <div className="page">
      //Hero by David
      <hero className="header">David codes</hero>
      <main className="main">
        // intro by David
        <section className="intro">
          <div className="intro-content">David codes</div>
        </section>
        // section from "5 stages of mentorship" by Melody
        <section className="content">
          <div className="content-wrapper">Melody codes</div>
        </section>
        // section from "5 steps of building a successful mentorship" by Joshua
        <section className="content">
          <div className="content-wrapper">Joshua codes</div>
        </section>
        // section from "Benefits to Mentees" by Elijah
        <section>
          <div>Elijah codes</div>
        </section>
        // section from "9 types of mentoring models" by Ropa
        <section>
          <div></div>
        </section>
        // section from "6 qualities of a great mentor" by Angela
        <section className="content">
          <div className="content-wrapper">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
              {" "}
              6 qualities of a great mentor
            </h1>
            <p className="text-center text-gray-600 mb-12">
              Good mentors are made,not born. A great mentor will have acquired
              the necessary life skills to guide their mentees to success. There
              are some common traits seen in mentors who inspire results and
              loyolty. Let's explore our top 6:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-gray-800 mb-4 ">
                  Patience
                </h2>
                <p className="text-gray-600">
                  A great mentor takes the time to understand their mentee's
                  unique challenges,motivations,and goals. They don't rush or
                  force them into decisions they aren't ready for. Insted,they
                  are patient with their mentees,employ active listening
                  techniquesand provide support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-gray-800 mb-4 ">
                  Empathy
                </h2>
                <p className="text-gray-600">
                  A successful mentor must empathize with their mentee and
                  understand where they are coming from regarding specific
                  issues. This allows them to provide advice tailored
                  specifically to their mentees's needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-gray-800 mb-4 ">
                  Knowledgeable
                </h2>
                <p className="text-gray-600">
                  Good mentors have a wealth of knowledge on various
                  topics,including career exploration,problem-solving
                  strategies,and industry trends. They use their experience to
                  provide helpful insights to benefit the mentee in the long
                  run.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-gray-800 mb-4 ">
                  Open-mindedness
                </h2>
                <p className="text-gray-600">
                  Good mentors have an open mind when it comes to new ideas and
                  approaches to problem-solving. They can think outside the box
                  to help their mentees find creative solutions that work best
                  for them.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-gray-800 mb-4 ">
                  Communication
                </h2>
                <p className="text-gray-600">
                  A good mentor should have excellent communication skills and
                  be able to effectively listen,provide feedback,and explain
                  complex conceptsin a way that is easy to understand. They
                  should also be patient when answering questions or explaining
                  difficult topics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-gray-800 mb-4 ">
                  Integrity
                </h2>
                <p className="text-gray-600 pl-10 pr-10">
                  A good mentor has the highest level of integrity. They must be
                  honest and fair in their dealings with the mentee and those
                  around them. A strong sense morality is a crucial
                  characteristics for any mentor;they will strive to put the
                  mentee's best interests at heart over anything else.
                </p>
              </div>
            </div>
          </div>
        </section>
        // section from "5 stages of mentorship" by Melody
        <section className="content">
          <div className="content-wrapper">
            <div className="section-end"></div>
          </div>
        </section>
        // section from "5 steps of building a successful mentorship" by Joshua
        <section className="content">
          <div className="content-wrapper">
            <div className="section-end"></div>
          </div>
        </section>
        // section from "Benefits to Mentees" by Elijah
        <section>
          <div>
            <div className="section-end"></div>
          </div>
        </section>
        // section from "9 types of mentoring models" by Ropa
        <section>
          <div></div>
        </section>
      </main>
    </div>
  );
}

export default page;
