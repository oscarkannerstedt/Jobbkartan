import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  afTotalResult: number;
  onPageChange: (page: number) => void;
}

const NavigationPagination = ({
  totalPages,
  currentPage,
  afTotalResult,
  onPageChange,
}: IPaginationProps) => {
  const itemsPerPage = 10;
  const afCurrentResultStart = (currentPage - 1) * itemsPerPage + 1;
  const afCurrentResultEnd = Math.min(
    currentPage * itemsPerPage,
    afTotalResult
  );

  const handlePageChange = (
    event: DigiNavigationPaginationCustomEvent<number>
  ) => {
    onPageChange(event.detail);
  };

  return (
    <DigiNavigationPagination
      afTotalPages={totalPages}
      afInitActivePage={currentPage}
      onAfOnPageChange={handlePageChange}
      afTotalResults={afTotalResult}
      afCurrentResultStart={afCurrentResultStart}
      afCurrentResultEnd={afCurrentResultEnd}
      afLimit={6}
    />
  );
};

export default NavigationPagination;
