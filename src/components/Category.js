import React from 'react'
import JobCard from './JobCard';

function Category () {
    return (
        <div id='category'>
            <h1 id='header'>Job Type</h1>
            <label id='label'>select categories</label>
            <select name="job-type" id="job-type" form="job-category-form">
                <option value="all">All</option>
                <option value="tech">Tech</option>
                <option value="entertainment">Entertainment</option>
                <option value="freelance">Freelance</option>
            </select>
            <JobCard/>
        </div>
    )
}

export default Category;