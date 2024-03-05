import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const R036_ReactstrapBreadcrumbs = () => {
    return (
        <div>
        <div id="top">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
            </Breadcrumb>
            <div id="bottom" style={{marginTop:"1000px"}}>
                <span>bottom</span>
            </div>
        </div>
        </div>
    );
};

export default R036_ReactstrapBreadcrumbs;