import React, {useState, useEffect} from "react";
import JobCard from './JobCard';


function Category () {

    const [jobs, setJobs] = useState([])

useEffect(() => {
    fetch("http://localhost:9292/job_listings")
    .then((r) => r.json())
    .then((jobs) => {
        setJobs(jobs);
    });
}, []);

    return (
        <div id='category'>
            <h1 className="main-title">Category</h1>
            <h1 id='header'>Job Type</h1>
            <label id='label'>select categories</label>
            <select name="job-type" id="job-type" form="job-category-form">
                <option value="all">All</option>
                <option value="tech">Tech</option>
                <option value="entertainment">Entertainment</option>
                <option value="freelance">Freelance</option>
            </select>

            <div className="job-list card">
                {jobs.map((job, id) => {
                return (<JobCard key={id} 
                    title = {job.title}
                    body = {job.body}
                    date = {job.date}
                ></JobCard>);
                })}
            </div>
        </div>
    )
}

export default Category;