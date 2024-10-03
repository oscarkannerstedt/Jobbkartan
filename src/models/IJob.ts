export interface IJob {
  id: string;
  label: string;
  logo_url?: string | null;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: {
    text_formatted: string;
    company_information: string;
  };
  employment_type: {
    label: string;
  };
  salary_type: {
    label: string;
  };
  salary_description: string;
  duration: {
    concept_id: string;
    label: string;
  };
  working_hours_type: {
    label: string;
  };
  scope_of_work: {
    min: number;
    max: number;
  };
  employer: {
    phone_number: string;
    email: string;
    url: string;
    organization_number: string;
    name: string;
    workplace: string;
  };
  application_details: {
    information: string;
    reference: string;
    email: string;
    via_af: boolean;
    url: string;
    other: string;
  };
  access_to_own_car: boolean;
  driving_license_required: boolean;
  driving_license: [
    {
      label: string;
    }
  ];
  workplace_address: {
    municipality?: string | null;
    region: string;
    country: string;
    street_address: string;
    postcode: string;
    city: string;
    coordinates: number[];
  };
  must_have: {
    skills: [
      {
        label: string;
      }
    ];
    languages: [
      {
        label: string;
      }
    ];
    work_experiences: [
      {
        label: string;
      }
    ];
    education: [
      {
        label: string;
      }
    ];
    education_level: [
      {
        label: string;
      }
    ];
  };
  nice_to_have: {
    skills: [
      {
        label: string;
      }
    ];
    languages: [
      {
        label: string;
      }
    ];
    work_experiences: [
      {
        label: string;
      }
    ];
    education: [
      {
        label: string;
      }
    ];
    education_level: [
      {
        label: string;
      }
    ];
  };

  application_contacts: [
    {
      name: string;
      description: string;
      email: string;
      telephone: string;
      contact_type: string;
    }
  ];
  publication_date: string;
  occupation: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
}
