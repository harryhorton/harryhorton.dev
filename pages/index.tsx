import { GetServerSideProps } from "next";
import Image from "next/image";
import { EmailIcon } from "../components/icons/email";
import { GithubIcon } from "../components/icons/github";
import { LinkedInIcon } from "../components/icons/linkedin";
import { PhoneIcon } from "../components/icons/phone";
import { Skills, stringsToSkills } from "../components/Skills";
import { bio } from "../data/bio";
import { skills } from "../data/skills";
import { jobHistory } from "../data/work-history";
import profilePic from "../public/profile-pic.jpeg";

const socialStyles = "fill-slate-600 h-5 w-5 inline-block mr-3";

export type HomeSsrProps = {
  isResume: boolean;
  phone: string;
  email: string;
};

export const getServerSideProps: GetServerSideProps<
  HomeSsrProps,
  { resume: any }
> = async (context) => {
  console.log(context.query);
  const isResume = Boolean(context.query?.resume);
  return {
    props: {
      isResume,
      phone: (isResume && process.env.PHONE) || "phone number",
      email: (isResume && process.env.EMAIL) || "email@email.com",
    },
  };
};

export default function Home({ isResume, phone, email }: HomeSsrProps) {
  return (
    <article className="container max-w-screen-md mx-auto p-3">
      <div className="flex">
        {!isResume && (
          <Image
            src={profilePic}
            alt="photo of harry"
            width={300}
            height={335}
            className="rounded-full mr-10 w-72 h-72 object-cover"
          />
        )}

        <div className="">
          <section className="mb-6">
            <h1 className="text-3xl mb-3">
              <span className="block">Harry Horton</span>
              <span className="text-gray-500 text-2xl block">
                Software Engineer
              </span>
            </h1>
            <p className="mb-3">{bio}</p>
            <ul>
              {isResume && (
                <>
                  <li className="flex mb-1">
                    <EmailIcon className={socialStyles} />
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {email}
                    </a>
                  </li>
                  <li className="flex mb-1">
                    <PhoneIcon className={socialStyles} />
                    <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
                      {phone}
                    </a>
                  </li>
                </>
              )}
              <li className="flex mb-1">
                <GithubIcon className={socialStyles} />
                <a
                  href="http://github.com/harryhorton"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  github.com/harryhorton
                </a>
              </li>
              <li className="flex mb-1">
                <LinkedInIcon className={socialStyles} />
                <a
                  href="https://www.linkedin.com/in/john-harrison-horton/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/john-harrison-horton
                </a>
              </li>
            </ul>
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
