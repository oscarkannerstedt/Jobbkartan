export interface IJobs {
  hits: Array<{
    id: string;
    label: string;
    logo_url: string;
    headline: string;
    application_deadline: string;
    number_of_vacancies: number;
    description: {
      text: string;
      company_information: string;
    };
    salary_description: string;
    duration: {
      concept_id: string;
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
  }>;
  workplace_address: {
    region: string;
    country: string;
    street_address: string;
    city: string;
    coordinates: number[];
  };
  publication_date: string;
}
