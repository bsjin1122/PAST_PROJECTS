import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
const R50_ReactstrapPagination = () => {
    const pagination = (type) => {
        alert("Go " + type);
    }
    return (
        <div>
            {/* first, previous, next, last */}
           <Pagination size="lg" aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first onClick={(e)=> pagination("previous")}></PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink  onClick={(e)=> pagination("1")}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink  onClick={(e)=> pagination("2")}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last onClick={(e)=> pagination("last")}></PaginationLink>
            </PaginationItem>
           </Pagination>
        </div>
    );
};

export default R50_ReactstrapPagination;