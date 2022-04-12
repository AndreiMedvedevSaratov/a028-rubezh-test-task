import React, { useState } from 'react';
import styles from "./PaginationControl.module.css";
import cn from "classnames";

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../Store/Events';

let PaginationControl = ({ totalItemsCount, pageSize, portionSize = 20, onPageChanged }) => {
	const dispatch = useDispatch();
	const currentPage = useSelector((state) => state.events.currentPage);

	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;


	return (
		<div className={cn(styles.paginator)}>
		{portionNumber > 1 &&
			<button
				onClick={() => { setPortionNumber(portionNumber - 1) }}
				className={cn(styles.paginatorButton)}
			>PREV</button>}

		{pages
			.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
			.map((page) => {
				return <span className={cn({
					[styles.selectedPage]: currentPage === page
				}, styles.pageNumber)}
					key={page}
					onClick={(e) => {
						dispatch(setCurrentPage(page));
					}}
				>{page}</span>
			})}
		{portionCount > portionNumber &&
			<button
					onClick={() => { setPortionNumber(portionNumber + 1) }}
					className={cn(styles.paginatorButton)}
			>NEXT</button>}

		</div>
	)
}

export default PaginationControl;