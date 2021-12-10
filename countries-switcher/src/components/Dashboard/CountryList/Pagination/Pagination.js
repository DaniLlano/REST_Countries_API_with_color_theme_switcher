import React, { useContext } from "react";
import styles from "../../../../contexts/AppContext";

const scroll = (scrollTo) => {
    scrollTo.current.scrollIntoView({behavior: "smooth"});
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const onSetCurrentPage = (
    setCurrenPage,
    currentPage, pageNumberChangingStatus, 
    scrollTo
) => {
    switch (pageNumberChangingStatus) {
        case INCREMENT: {
            scroll(scrollTo);
            setCurrenPage(currentPage + 1);
            break;
        }
        case DECREMENT: {
            scroll(scrollTo);
            setCurrenPage(currentPage - 1);
            break;
        }
        default:
            break;
    }
};

// supplementary components
const paginationOfFirstAndLastPage = (
    currentPage,
    totalPages,
    setCurrentPage,
    scrollTo
) => {
    return (
        <>
            <button
                onClick={currentPage + 1 === totalPages
                ? () => {
                   setCurrentPage(0); 
                } : undefined}
                className={ currentPage === 0 ? styles.isActive : undefined}
            >
                1
            </button>
            <button
                onClick={ currentPage + 1 === 1
                    ? () => {
                        setCurrentPage(totalPages - 1);
                        scroll(scrollTo);
                    }
                    : undefined
                }
                className={currentPage + 1 === totalPages ? styles.isActive : undefined}
            >
                {totalPages}
            </button>
        </>
    );
};

const paginationForSecondAndOneBeforeLastPage = (
    currentPage,
    totalPages,
    setCurrentPage,
    scrollTo
) => {
    return (
        <>
            <button
                onClick={() => {
                    setCurrentPages(totalPages - 1);
                    scroll(scrollTo);
                }}
            >
                {totalPages}
            </button>
        </>
    );
};

const paginationMiddleSectionCreator = (
    currentPage,
    totalPages,
    setCurrentPage,
    scrollTo
) => {
    if (totalPages === 1) {
        return <button className={styles.isActive}>1</button>
    }
    switch (currentPage + 1) {
        case 1:
        case totalPages: {
            return paginationOfFirstAndLastPage (
                currentPage,
                totalPages,
                setCurrentPage,
                scrollTo
            );
        }
    }
}