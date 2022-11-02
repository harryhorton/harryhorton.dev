import Image from "next/image";
import { Bars } from "../components/bars";
import { Skills, stringsToSkills } from "../components/Skills";
import { Skill, skills } from "../data/skills";
import { jobHistory } from "../data/work-history";
import profilePic from "../public/profile-pic.jpeg";

const tagColor: Record<Skill["type"], string> = {
  language: "bg-sky-600",
  concept: "bg-sky-600",
  framework: "bg-sky-600",
  platform: "bg-sky-600",
  protocol: "bg-sky-600",
  tool: "bg-sky-600",
};

export default function Home() {
  return (
    <article className="container mx-auto p-3">
      <div className="flex">
        <Image
          src={profilePic}
          alt="photo of harry"
          width={300}
          height={335}
          className="rounded-full w-72 h-72 object-cover shadow-"
        />

        <div className="px-12">
          <section className="mb-6">
            <h1 className="text-3xl mb-3">
              <span className="block">Harry Horton</span>
              <span className="text-gray-500 text-2xl block">
                Software Engineer
              </span>
            </h1>
            <p>
              As a full-stack web application developer, Harry has experience
              building real-time data streaming, highly secure intelligence
              applications, global web and mobile apps used by millions of
              users, and much more. He enjoys building beautiful applications
              that solve critical business and operational needs. As the lead
              developer on i911.com, he's written code that literally saves
              lives and is used across the US in emergency situations.
            </p>
          </section>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl mb-3">Skills</h2>
        <Skills skills={skills} />
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-4">Work History</h2>
        {jobHistory.map((job) => (
          <section className="mb-10" key={job.name}>
            <h3 className="text-xl mb-1 font-semibold">{job.name}</h3>
            <div className="flex justify-between items-center">
              <div className="flex space-x-3 mb-2">
                <span className="block mb-2">
                  {job.from} - {job.to ?? "Current"}
                </span>
                {job.role && <span className="block">{job.role}</span>}
              </div>
              <div className="flex space-x-3 mb-2">
                {job.location && <span className="block">{job.location}</span>}
                {job.type === "contract" && (
                  <span className="block">Contractor</span>
                )}
                {job.remote && (
                  <span className="block bg-gray-300 rounded px-2 text-gray-600">
                    Remote
                  </span>
                )}
              </div>
            </div>

            {job.description && (
              <span className="block mb-6 ml-6">{job.description}</span>
            )}
            {job.stack && (
              <div className="block mb-6 ml-6">
                <Skills skills={stringsToSkills(job.stack)} />
              </div>
            )}
            <div className="ml-6">
              <ul className="list-disc pl-4">
                {job.details?.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </section>
    </article>
  );
}
