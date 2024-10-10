import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	LinkVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLinkExternal,
} from "@digi/arbetsformedlingen-react";
import LogoComponent from "../LogoComponent";
import QualificationsCard from "./QualificationsCard";
import { IShowJobProps } from "../../models/IShowJobProps";
import MapAndApplyNowCards from "./MapAndApplyNowCards";

const RenderJobDetails = ({ job }: IShowJobProps) => {
	const { municipality, street_address, postcode, city, region } =
		job.workplace_address || {};
	return (
		<>
			<DigiLayoutBlock
				afVariation={LayoutBlockVariation.PRIMARY}
				afContainer={LayoutBlockContainer.STATIC}
				className="job-container"
			>
				<LogoComponent job={job} />
				<h1>{job.headline}</h1>
				<h2>{job.employer.name}</h2>
				<h3>{job.occupation.label}</h3>
				<h3>Kommun: {municipality ? municipality : "Ospecifierad ort"}</h3>
				<DigiLayoutBlock
					className="employment-information-container"
					afContainer={LayoutBlockContainer.NONE}
				>
					<p>Antal tjänster: {job.number_of_vacancies}</p>
					<span>Omfattning: {job.working_hours_type.label}</span>
					<span>Varaktighet: {job.duration.label}</span>
					<span>Anställningsform: {job.employment_type.label}</span>
				</DigiLayoutBlock>
				<QualificationsCard job={job} />
				<h2>Om jobbet</h2>
				<div
					dangerouslySetInnerHTML={{
						__html: job.description.text_formatted,
					}}
				/>
				<h2>Om Anställningen</h2>
				<h3>Lön</h3>
				<p>
					<strong>{job.salary_description}</strong>
				</p>
				<p>
					<strong>Lönetyp:</strong> {job.salary_type.label}
				</p>
				<h2>Var ligger arbetsplatsen?</h2>
				<h3>Postadress</h3>
				{street_address && postcode && city ? (
					<address>
						<div>{street_address}</div>
						<div>
							{postcode} {city}
						</div>
					</address>
				) : (
					<p>
						Arbetsplatsen ligger i kommunen <strong>{municipality}</strong> i{" "}
						<strong>{region}</strong>.
					</p>
				)}
				<h2>Om arbetsgivaren</h2>
				<p>{job.employer.name}</p>
				<h2>Kontakt</h2>
				{job.employer.workplace} <br />
				{job.employer.url && (
					<DigiLinkExternal
						afHref={job.employer.url}
						afTarget="_blank"
						afVariation={LinkVariation.SMALL}
					>
						{job.employer.url}
					</DigiLinkExternal>
				)}
				<p>{job.employer.email}</p>
				<p>{job.employer.phone_number}</p>
				{job.application_contacts.length > 0 && (
					<>
						{job.application_contacts.map((contact, index) => (
							<div key={index}>
								<strong>{contact.name}</strong>
								<br />
								<strong>{contact.description}</strong> <br />
								<strong>
									<a href={`mailto:${contact.email}`}>{contact.email}</a>
								</strong>{" "}
								<br />
								<strong>
									{" "}
									<a href={`tel:${contact.telephone}`}>{contact.telephone}</a>
								</strong>{" "}
								<br />
								<strong>{contact.contact_type}</strong>
							</div>
						))}
					</>
				)}
			</DigiLayoutBlock>

			<MapAndApplyNowCards job={job} />
		</>
	);
};

export default RenderJobDetails;
