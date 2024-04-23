import React, { useState } from 'react';
import '../App.css'; // Import CSS file from the parent directory
import logo from "../Assets/evp.png";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        mobileNumber: '',
        collegeName: '',
        year: '',
        alphaSkillSet: '',
        discoveryChannel: '',
        motivation: '',
        valueAddition: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here, perhaps sending the data to a server
        console.log(formData);
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="Your Number"
                        required
                    />
                    <input
                        type="text"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleInputChange}
                        placeholder="College Name"
                        required
                    />
                    {/* Radio buttons for alpha skill set */}
                    <fieldset>
                        <legend>What is your alpha skill set?</legend>
                        {["Leadership skills- showing how its done!🗣️", "Speaking skills- setting the stage on fire! 🔥", "Strategy skills- baniya Ka dimaag!  🧠", "Creative skills- making a needle look like hammer! 🔨", "Research skills- Baal ki khaal nikaldeyte! 🕵️", "Technical skills - if you think of it, I can build it!🧑‍💻", "Team building skills- finding the lost pieces of your puzzles 🧩", "Marketing skills- selling ice creams to Eskimos! ☃️"].map((skill, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="alphaSkillSet"
                                    value={skill}
                                    checked={formData.alphaSkillSet === skill}
                                    onChange={handleInputChange}
                                />
                                {skill}
                            </label>
                        ))}
                    </fieldset>
                    {/* Text input for discovery channel */}
                    <textarea
                        name="discoveryChannel"
                        value={formData.discoveryChannel}
                        onChange={handleInputChange}
                        placeholder="How did you get to know about EdVenture park?"
                        required
                    />
                    {/* Text input for motivation */}
                    <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="Why do you want to join us? / Why EdVenture park?"
                        required
                    />
                    {/* Text input for value addition */}
                    <textarea
                        name="valueAddition"
                        value={formData.valueAddition}
                        onChange={handleInputChange}
                        placeholder="What value can you add if selected as a campus lead?"
                        required
                    />
                    {/* Text input for other questions */}
                    <textarea
                        type="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        placeholder="Any questions for us?"
                        required
                    />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="content-container">
                {/* <h1>Application form- Campus Lead</h1> */}
                {/* Add your image here */}
                {/* <img src={logo} alt="logo of edventure park" /> */}

                <p>Filling this form is the first step to get into EdVenture Park! (Q1-23)
                    Campus leads are students of any college, they are the CEO of EdVenture park in their colleges and they are the bridge between idea holders and EdVenture park. <br></br><br></br>

                    Campus leads get to learn and work with early stage startups, they even organize and host one the best events in the city and they get the chance to meet the great personalities from the ecosystem. They also have the early excess to all the events/workshops/ sessions happening at EdVenture park. <br></br><br></br>

                    EdVenture park is a no invitation place, So we don't Assign any work to them, instead they pick up things/task/ responsibilities of their choice and uplift their skills.<br></br><br></br>

                    We have also designed amazing programs for them, one of which is <b>EdVantage program</b> which have different tracks, which targets specific skillsets like we had a session on  <i>personal finance</i> last time and this time we have session on <i>coding</i> , and will have  many such Indemand topics/tracks in future.<br></br><br></br>

                    And the other program is <b>Edtalk</b> , were in we talk about hot topics, it is designed to strengthen campus leads ability to demonstrate the power of words and knowledge. it basically helps them/ prepare them for any future campaigns.<br></br><br></br>

                    Campus leads are the ambassador of EdVenture park, they represent EdVenture park where ever they go</p>

            </div>
        </div>
    );
};

export default ContactForm;
