import { IShowJobProps } from "./ShowJob";

const LogoComponent = ({ job }: IShowJobProps) => {
  return (
    <>
      {job.logo_url ? (
        <a
          href={job.employer.url}
          target="_blank"
          title="Besök arbetsgivarens hemsida"
        >
          <img
            src={job.logo_url}
            alt="Arbetsgivarens logga"
            height={100}
            width={180}
            style={{ objectFit: "contain" }}
          />
        </a>
      ) : null}
    </>
  );
};

export default LogoComponent;
