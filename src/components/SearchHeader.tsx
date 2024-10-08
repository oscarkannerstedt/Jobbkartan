import {
	FormInputSearchVariation,
	FormInputType,
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutColumnsElement,
	LayoutColumnsVariation,
	LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
	DigiFormInputSearch,
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiLayoutContainer,
} from '@digi/arbetsformedlingen-react';
import '../styles/searchHeader.css';
// import { useNavigate } from "react-router-dom";
import { DigiFormInputSearchCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { jobContext } from '../services/jobContext';
import { useContext } from 'react';
import { JobMap } from './JobMap';
import PaginationContext from '../contexts/PaginationContext';
// import ScreenSizeContext from '../contexts/ScreenSizeContext';

interface ISearchHeaderProps {
	onSearch: (searchTerm: string) => void;
}

export const SearchHeader = ({ onSearch }: ISearchHeaderProps) => {
	// const navigate = useNavigate();
	const context = useContext(jobContext);
	const paginationContext = useContext(PaginationContext);
	const zoomLevel = 4.5;

	// const sizeContext = useContext(ScreenSizeContext);

	// if (!sizeContext) {
	// 	throw new Error(
	// 		'SomeComponent must be used within a ScreenSizeProvider'
	// 	);
	// }

	// const { isDesktop } = sizeContext;

	const handleSearchSubmit = async (
		event: DigiFormInputSearchCustomEvent<string>
	) => {
		event.preventDefault();

		const term = event.detail;

		if (context) {
			await context.fetchJobs(term);
			onSearch(term);
		}

		if (paginationContext) {
			paginationContext.setCurrentPage(1);
		}

		// navigate(`/annonser`, { state: { searchTerm: term } });
	};

	return (
		// <div id='search-header'>
		<DigiLayoutBlock
			afVariation={LayoutBlockVariation.TRANSPARENT}
			afContainer={LayoutBlockContainer.FLUID}
			id='search-header'
		>
			{/* {isDesktop ? ( */}
			<DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC}>
				<DigiLayoutColumns
					afElement={LayoutColumnsElement.DIV}
					afVariation={LayoutColumnsVariation.TWO}
					className='column-layout'
				>
					<DigiLayoutContainer className='container-content'>
						<div className='search-title'>
							<h1 className='search-bar-heading'>Jobbkartan</h1>
							<p className='search-bar-text'>
								Lediga jobb för hela sverige
							</p>
						</div>
						<DigiFormInputSearch
							afLabel='Sök på ett eller flera ord'
							afVariation={FormInputSearchVariation.MEDIUM}
							afType={FormInputType.SEARCH}
							afButtonText='Sök'
							afLabelDescription='Skriv t.e.x frontend örebro'
							onAfOnSubmitSearch={handleSearchSubmit}
							id='search'
						></DigiFormInputSearch>
					</DigiLayoutContainer>
					<DigiLayoutContainer>
						<div className='map-container'>
							<JobMap zoomLevel={zoomLevel}></JobMap>
						</div>
					</DigiLayoutContainer>
				</DigiLayoutColumns>
			</DigiLayoutContainer>
			{/* ) : (
				<DigiLayoutContainer
					afVariation={LayoutContainerVariation.STATIC}
				>
					<DigiLayoutColumns
						afElement={LayoutColumnsElement.DIV}
						afVariation={LayoutColumnsVariation.TWO}
						className='column-layout'
					>
						<DigiLayoutContainer className='container-content'>
							<div className='search-title'>
								<h1 className='search-bar-heading'>
									Jobbkartan
								</h1>
								<p className='search-bar-text'>
									Lediga jobb för hela sverige
								</p>
							</div>
							<DigiFormInputSearch
								afLabel='Sök på ett eller flera ord'
								afVariation={FormInputSearchVariation.MEDIUM}
								afType={FormInputType.SEARCH}
								afButtonText='Sök'
								afLabelDescription='Skriv t.e.x frontend örebro'
								onAfOnSubmitSearch={handleSearchSubmit}
								id='search'
							></DigiFormInputSearch>
						</DigiLayoutContainer>
						<DigiLayoutContainer>
							<div className='map-container'>
								<JobMap zoomLevel={zoomLevel}></JobMap>
							</div>
						</DigiLayoutContainer>
					</DigiLayoutColumns>
				</DigiLayoutContainer>
			)} */}
		</DigiLayoutBlock>
		// </div>
	);
};
