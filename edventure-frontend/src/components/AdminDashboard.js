import React, { useState, useEffect } from 'react';
import '../App.css'; // Import CSS file from the parent directory

const AdminDashboard = () => {
    const [submissions, setSubmissions] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/submissions')
            .then(response => response.json())
            .then(data => setSubmissions(data))
            .catch(error => console.error('Error fetching submissions:', error));
    }, []);

    return (
        <div className="admin-dashboard">
            <div className="submission-list">
                <h2>Campus Leads Applications</h2>
                {submissions.map((submission, index) => (
                    <div 
                      key={index} 
                      className="submission-summary" 
                      onClick={() => setSelectedSubmission(submission)} >
                        { console.log(submission)}
                        <p>{submission.name} ({submission.email})
                       </p>
                    </div>
                ))}
            </div>
            <div className="submission-details">
                {selectedSubmission ? (
                    <>
                        <h2>Detail View</h2>
                        <p>Email: {selectedSubmission.email}</p>
                        <p>Name: {selectedSubmission.name}</p>
                        <p>Mobile Number: {selectedSubmission.mobileNumber}</p>
                        <p>College Name: {selectedSubmission.collegeName}</p>
                        <p>Year: {selectedSubmission.year}</p>
                        <p>Alpha Skill Set: {selectedSubmission.alphaSkillSet}</p>
                        <p>Discovery Channel: {selectedSubmission.discoveryChannel}</p>
                        <p>Motivation: {selectedSubmission.motivation}</p>
                        <p>Value Addition: {selectedSubmission.valueAddition}</p>
                        {/* If the submission includes 'questions', display them */}
                        {selectedSubmission.questions && <p>Questions: {selectedSubmission.questions}</p>}
                    </>
                ) : (
                    <p>Select a submission to view details</p>
                )}https://github.com/mohammedobaidraza/chef
            </div>
        </div>
    );
};

export default AdminDashboard;
