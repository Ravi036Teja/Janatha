import React from "react";
import work from "../../Images/Work_7-removebg-preview.png";
import device from "../../Images/Devices-amico.png";
import addfile from "../../Images/Add files-cuate.png";
import CareerForm from "./CareerForm";

const Careers = () => {
  return (
    <div
      className="min-h-screen pt-28 w-full overflow-hidden bg-gray-100"
      id="career"
    >
      {/* Header Section */}
      <div className="mx-4 md:mx-20 space-y-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          JOIN OUR TEAM
        </h1>
        <p className="text-base md:text-xl text-gray-500 py-2">
          At Janatha Automobiles, we believe that our greatest strength lies in
          our people. We are passionate about fostering a work environment
          where creativity thrives, innovation is celebrated, and every
          individual’s contribution is valued. If you’re looking to grow your
          career with a team that’s as dynamic and forward-thinking as you are,
          you’re in the right place.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-20 my-8">
        <div className="p-4 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold">Who We Are</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900">
            Our Mission:
          </h2>
          <p className="text-base md:text-lg">
            To create impactful solutions that transform the way industries
            operate and lives are lived. Every day, we challenge the status quo,
            push boundaries, and aim for excellence in everything we do.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900">
            Our Culture:
          </h2>
          <ol className="space-y-2 text-base md:text-lg">
            <li>
              <span className="font-semibold">Innovative Spirit:</span> We
              embrace new ideas and continuously seek better ways to solve
              challenges.
            </li>
            <li>
              <span className="font-semibold">Collaborative Environment:</span>{" "}
              Teamwork is at the core of our success. We work together, share
              knowledge, and celebrate each other’s achievements.
            </li>
            <li>
              <span className="font-semibold">Commitment to Growth:</span> From
              ongoing professional development to leadership opportunities, we
              invest in our employees’ futures.
            </li>
            <li>
              <span className="font-semibold">Inclusive and Diverse:</span> We
              value diversity in all its forms, knowing that a variety of
              perspectives fuels creativity and drives success.
            </li>
          </ol>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={work}
            alt="work"
            className="w-full max-w-md md:max-w-lg px-4 py-8"
          />
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-20 my-8">
        <div className="flex justify-center items-center">
          <img
            src={device}
            alt="devices"
            className="w-full max-w-md md:max-w-lg px-4 py-8"
          />
        </div>
        <div className="space-y-4 p-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">
            Why Work With Us?
          </h1>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <span className="font-semibold">Exciting Projects:</span> Be a
              part of groundbreaking projects that make a real-world impact.
            </li>
            <li>
              <span className="font-semibold">Professional Development:</span>{" "}
              Access training, mentorship programs, and continuous learning
              opportunities.
            </li>
            <li>
              <span className="font-semibold">Competitive Benefits:</span> Enjoy
              comprehensive health plans, retirement contributions, flexible
              work schedules, and more.
            </li>
            <li>
              <span className="font-semibold">Work-Life Balance:</span> We
              understand the importance of balancing professional ambition with
              personal well-being.
            </li>
            <li>
              <span className="font-semibold">Community Engagement:</span> Get
              involved in local initiatives and make a positive impact beyond
              the workplace.
            </li>
          </ul>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-20 my-8">
        <div className="space-y-4 p-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">
            How to Apply
          </h1>
          <p className="text-base md:text-lg text-gray-500">
            Ready to take the next step in your career? We’d love to hear from
            you!
          </p>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <span className="font-semibold">Online Application:</span> Browse
              our current openings and submit your resume directly through our
              [application portal].
            </li>
            <li>
              <span className="font-semibold">Email Us:</span> Prefer a more
              personal approach? Send your resume and a cover letter to
              careers@JAPL.co.in.
            </li>
            <li>
              <span className="font-semibold">Connect with Us:</span> Follow our
              [LinkedIn/Twitter/Facebook] pages for updates on new opportunities
              and company news.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={addfile}
            alt="addfile"
            className="w-full max-w-md md:max-w-lg px-4 h-auto"
          />
        </div>
      </div>

      {/* Career Form Section */}
      <div className="mx-4 md:mx-20 my-8">
        <CareerForm />
      </div>
    </div>
  );
};

export default Careers;
