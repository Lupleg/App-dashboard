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
              Mentoring Programs: Purpose, Benefits + How to Get Started
            </h2>
            <p>
              The purpose of mentoring is to grow by tapping into the knowledge
              and experience of someone further along than yourself. It's the
              best way to accelerate your development.
            </p>
            <Link href="#" className="hover:text-blue-600 max-w-[180px]">
              <h5 className="md:text-xl text-lg font-semibold">
                Mathew Reeves
              </h5>
              <p>CEO of Together</p>
            </Link>
            <p className="text-sm pt-2">Published on May 1, 2023</p>
            <div className="flex justify-between items-center w-full flex-wrap space-y-2">
              <p className="text-sm">Updated on October 11, 2023</p>
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
            <p>
              Mentorship has emerged as the <Link href="#" className="text-blue-700 underline"> #1 area of focus </Link>
              for L&D pros.
            </p>
            <p>
              Ranking above hybrid and flexible work, and even digital fluency
              transformation, mentoring programs are taking center stage for
              good reason.
            </p>
            <img
              src="https://cdn.prod.website-files.com/5ce11396d0cadb67eb2cac0e/6526b0338b219e27ab6e8ce2_9KduD1wRvamsmc1bG1thhrQ5Ratg66GifxNjObuMWGFrfv6HlfkvUyaoQuH_sCtJfbDjYn5qLQ7jnXRfi1bpJMwCARHJXJXhDCd437KzXbDtlPOuPg4RwsZYKqo-X9Iezikj7gIDrcTGs095qq64CBU.png"
              alt=""
            />

            <p>
              Mentoring programs greatly benefit both mentors and mentees. But
              they also align with organizational goals - from hiring and
              retention to improving the <Link href="#" className="text-blue-700 underline">outcomes of DEIB initiatives.</Link>
            </p>
            <p>
              And if you’re worried about what implementing a structured
              mentorship program will do to your L&D budget, don’t be.
            </p>

            <p>
              The return on investment of mentoring more than <Link href="#" className="text-blue-700 underline">pays itself</Link> back
              in turnover cost savings. That’s because <Link href="#" className="text-blue-700 underline">rentention rates</Link> for both
              mentors and mentees are significantly higher. In fact, a <Link href="#" className="text-blue-700 underline">5-year study bt Gartner</Link> (conducted at Sun Microsystems) found that
              retention rates were much higher — 22% more for mentees and 20%
              more for mentors who participated in the mentoring program vs.
              those who didn’t.
            </p>

            <p>
              These results are supported by a more recent 2019 survey by <Link href="#" className="text-blue-700 underline">CNBC and SurveyMonkey</Link> 40% of employees without a mentor considered
              quitting their jobs. And yet, a 2022 Mentoring in the Workplace
              report from HR.com found that 36% of organizations still don’t
              have a mentoring program in place. Clearly, there is room for
              improvement.
            </p>

            <p>
              If you're looking for ways to foster meaningful relationships,
              develop talent within your organization, and get the most out of
              every member of your team—it's time to dive into what mentoring
              programs can do for you.
            </p>

            <p>
              A quick shout out 👉 If you're trying to <Link href="#" className="text-blue-700 underline">start a mentoring program</Link>
              and are feeling overwhelmed at the idea of manually matching,
              managing hundreds of registrants, reporting on impact, and somehow
              doing your day job, you need to learn more about Together’s
              mentorship platform.
            </p>

            <ul className="list-disc pl-12 space-y-2">
              <li>
                Use our intelligent <Link className="text-blue-700 underline" href="#">pairing algorithm</Link> to match up hundreds of
                mentoring relationships in minutes. No spreadsheets required.
              </li>
              <li>
                Our straightforward registration process makes it easy to
                promote your program and keep on top of it all.
              </li>
              <li>
                The reporting suite gives you insight into how mentoring
                relationships are progressing and their impact on your
                organization.
              </li>
            </ul>
            <div className="max-w-[100%] max-h-[100%] w-[800px] h-[491px]">
              <iframe
                src="https://4467140.hs-sites.com/hs-web-interactive-4467140-119254955795"
                aria-label="Embedded CTA"
                title="Embedded CTA"
                allow="autoplay; fullscreen;"
                data-test-id="interactive-frame"
                className="h-full w-full rounded-[9px] go812842568 max-w-[100%] max-h-[100%] overflow-hidden"
              ></iframe>
            </div>

            <p className="md:text-4xl text-xl font-bold">
              What is the purpose of mentoring programs?
            </p>
            <p>
              According to the Mentoring in the Workplace 2022 report by HR.com,
              the primary purposes of mentoring programs, as identified by
              respondents, are:
            </p>
            <ul className="list-disc pl-12 space-y-2">
              <li>
                To develop leadership capability: Two-thirds of the respondents
                cited this as a purpose, emphasizing the significance of
                mentoring in cultivating leaders within organizations.
              </li>
              <li>
                To increase the skill levels of employees: An equal number of
                respondents (two-thirds) viewed mentoring as a means to enhance
                employee skills, indicating that beyond leadership, the general
                upskilling of employees is a central focus of mentoring
                initiatives.
              </li>
              <li>
                <b>To increase employee engagement:</b> Over half of the participants
                (63%) stated that a major goal of mentoring is to bolster
                <Link href="#" className="text-blue-700 underline">employee engagement</Link>, suggesting that mentoring not only aims at
                skill and leadership development but also plays a vital role in
                influencing the attitudes and work approaches of employees,
                making them more invested in their roles.
              </li>
            </ul>
            <p>When comparing organizational size, the report found:</p>
            <ul className="list-disc pl-12 space-y-2">
              <li>
                Smaller companies place a high emphasis on mentoring to increase
                employee skill levels (75%).
              </li>
              <li>
                Larger companies are more inclined towards mentoring to support
                diversity, equity, and
              </li>
            </ul>
            <p>
              While many organizations focus primarily on leadership development
              and enhancing employees' skills through mentoring, the <Link href="#" className="text-blue-700 underline">potential of mentoring programs</Link> extends beyond these areas and can yield
              benefits across multiple dimensions when utilized effectively.
            </p>

            <p className="md:text-4xl text-xl font-bold">
              What is mentorship? An evolving definition
            </p>
            <p>
              The concept of mentorship has been around for ages. The earliest
              nod to mentoring was probably in <Link href="#" className="text-blue-700 underline">Homers Odyssey</Link>
            </p>

            <p>
              In the workplace, mentoring started to <Link href="#" className="text-blue-700 underline">take off in the 70s.</Link> At
              that time, it was all about helping junior employees learn the
              ropes quickly. Since then, mentorship has evolved. It doesn’t
              always have to be a one-on-one scenario, and mentors don’t have to
              be senior employees — peer mentoring is just as valid and
              effective.
            </p>
            <p>
              And so it’s important we redefine mentorship before we dive into
              the nitty-gritty of what comprises a mentorship program.
            </p>
            <p>Here’s how a couple different sources view mentorship. </p>
            <ul className="list-disc pl-12 space-y-2">
              <li>
              <Link href="#" className="text-blue-700 underline">ATD</Link>: “Mentoring is a reciprocal and collaborative at-will
                relationship that most often occurs between a senior and junior
                employee for the purpose of the mentee’s growth, learning, and
                career development.”
              </li>
              <li>
              <Link href="#" className="text-blue-700 underline">NIH</Link>: “Mentorship is a professional, working alliance in which
                individuals work together over time to support the personal and
                professional growth, development, and success of the relational
                partners through the provision of career and psychosocial
                support.“
              </li>
            </ul>
            <p>
              Let's streamline our definition of mentorship to something easier
              to digest and remember:
            </p>
            <p>
              Mentorship is a relationship between two people where the mentor
              provides advice and guidance to their mentee to help them grow,
              learn, and develop professionally.
            </p>
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
        <section className="content">
          <div className="content-wrapper">Melody codes</div>
        </section>

        {/* section from "5 steps of building a successful mentorship" by Joshua */}
        <section></section>

        {/* section from "Benefits to Mentees" by Elijah */}
        <section>
          <div>Elijah codes</div>
        </section>

        {/* section from "9 types of mentoring models" by Ropa */}
        <section>
          <div></div>
        </section>

        {/* section from "6 qualities of a great mentor" by Angela */}
        <section>
          <div></div>
        </section>
      </main>
    </div>
  );
}

export default page;
