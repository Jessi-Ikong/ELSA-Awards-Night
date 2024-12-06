import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../App.css";

const Voting = () => {
    const [votes, setVotes] = useState(() => {
        const savedVotes = localStorage.getItem("votes");
        return savedVotes ? JSON.parse(savedVotes) : {};
    });
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const navigate = useNavigate(); // Hook for navigation

    const contestants = {
        "Artist Of The Year": ["Scophie"],
        "Best Dressed Executive": ["Comfort Bassey Udoh", "Etim, Eno-Obong Ephraim"],
        "Best Dressed Elsalite": ["Marvellous Amarachi Elizabeth", "Nwobodo Daniel", "Agantem Glory Nkpobor"],
        "Brand Of The Year": ["Lashedbynene- Jimmy Nelly", "Tailoredby_Veekee", "Cisca Photographer"],
        "Chef Of The Year": ["Kindness Umoh (Kelly)", "Marvellous Amarachi Elizabeth", "Nwobodo Daniel"],
        "Class Rep Of The Year": ["Benjamin Nkaiso (Benjow)"],
        "Comedian Of The Year": ["Broda Yellow"],
        "Content Creator Of The Year": ["Edet Regina Asuquo", "Treasure Sunday"],
        "Entrepreneur Of The Year": ["Mba Chinedu Martins", "Nkanu Divine (MBG)", "Eze Cynthia Chiamaka", "Ubong Sunday"],
        "Fashion Designer Of The Year": ["Blessing Udoette", "Grace Abang"],
        "Graphic Designer Of The Year": ["HRM, Akambe Trinity", "Victor Azibaolanari Josiah"],
        "Humanitarian Personality Of The Year": ["Kindness Umoh (Kelly)", "Obi Destiny Anthony", "Nwobodo Daniel"],
        "Journalist Of The Year": ["Samuel O. Umoh", "Akpan Salome"],
        "Most Eloquent Elsalite": ["Akintola Onisofe", "Obed Fortunate Joy", "Grace Abang"],
        "Model Of The Year": ["Eluu Peace Ifunaya", "Arelly Smart", "Beauty Edet", "Essien Angela Michael"],
        "Most Active Executive": ["Akpan Progress Luke", "Nita Ernest", "Blessing Udoette"],
        "Most Beautiful Elsalite": ["Nwadishi Hannah Phillip", "Marvellous Amarachi Elizabeth", "Effiok Purity Michael", "Bassey Favour Owum", "Eke Stephanie"],
        "Most Charismatic Elsalite": ["Esther Emmanuel Okon", "Kindness Umoh (Kelly)", "Queen Ugly"],
        "Most Handsome Elsalite": ["Obi Destiny Anthony"],
        "Most Influential Elsalite - Female": ["Sen. Blessing Enyim", "Cisca Photography"],
        "Most Informed Elsalite": ["Sen. Blessing Enyim", "Elite Baby", "Akpan Progress Luke"],
        "Most Polical Conscious Elsalite - Female": ["Sen. Blessing Enyim", "Eze Cynthia Chiamaka"],
        "Most Popular Elsalite ": ["Akpan Isaac Monday", "Benjamin Nkaiso (Benjow)", "Queen Ugly", "Sen. Blessing Enyim"],
        "Most Promising Elsalite ": ["Divine Ernest Ideba", "Orji Juliana", "Onyiyechi Joy"],
        "Most Reserved Elsalite - Female": ["Essien Angela Michael", "Nwadishi Hannah Phillip", "Wealthzion Alabi", "Umeokafor Goodness"],
        "Most Reserved Elsalite - Male": ["Obi Destiny anthony", "Ita Uduak Aniedi", "Charlie"],
        "Philanthropist Of The Year": ["Amarachi Marvellous Elizabeth", "Nwobodo Daniel"],
        "Photographer Of The Year": ["God'sfavour ITA", "Atiang Benedict", "Cisca Photography"],
        "Rookie Of The Year": ["Ugorji Glory Uzunma"],
        "Senator Of The Year": ["Sen. Blessing Enyim", "Grace"],
        "Sportsman Of The Year": ["Divine Ernest ideba", "Benjamin Nkaiso (Benjow)"],
        "Sportswoman Of The Year": ["Oham Rhoda Oham", "Obim Calista Eyare-Osowo", "Salome Akpan"],
        "Writer Of The Year": ["PD Victor"],
    };


    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        document.body.classList.toggle("light-mode", !darkMode);
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleMode = () => setDarkMode((prev) => !prev);

    const handleVote = (category, name) => {
        if (votes[category]) {
            alert(`You have already voted for "${votes[category]}" in this category.`);
            return;
        }
        const newVotes = { ...votes, [category]: name };
        setVotes(newVotes);
        localStorage.setItem("votes", JSON.stringify(newVotes));
        alert(`You voted for "${name}" in the "${category}" category.`);
    };

    const handleSubmit = () => {
        if (Object.keys(votes).length < Object.keys(contestants).length) {
            alert("Please complete voting in all categories.");
            return;
        }
        alert("Thank you for voting!");
        console.log("Votes submitted:", votes);

        setTimeout(() => {
            navigate("/submission-page"); // Redirect to SubmissionPage
        }, 2000);
    };

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning, Elsalite!";
        if (hour < 16) return "Good afternoon, Elsalite!";
        return "Good evening, Elsalite!";
    };

    return (
        <div className="app-container">
            <header className="header">
                <img src="src\assets\WhatsApp Image 2024-09-24 at 12.58.33_5acfdd88.jpg" alt="Logo Left" className="logo" />
                <h1 className="association-name">English And Literary Studies, Unical</h1>
                <img src="src\assets\images\WhatsApp Image 2024-12-04 at 19.57.25_98e36091.jpg" alt="Logo Right" className="logo" />
            </header>

            <section className="banner">
                <div className="greeting">{getGreeting()}</div>
                <button onClick={toggleMode} className="theme-toggle-btn">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </section>

            <main className="main-content">
                <h2>ELSA Awards Night Voting Portal, 2024.</h2>
                <p>Vote for your favorite contestants and make a difference!</p>

                <div className="categories">
                    {Object.keys(contestants).map((category) => (
                        <section key={category} className="category">
                            <h2 className="category-title">{category}</h2>
                            <div className="contestants">
                                {contestants[category].map((name) => (
                                    <div
                                        key={name}
                                        className="contestant"
                                        style={{ color: darkMode ? "#121212" : "#000" }} // Dynamic text color
                                    >
                                        <h3>{name}</h3>
                                        <button
                                            className={`vote-btn ${votes[category] === name ? "voted" : ""}`}
                                            onClick={() => handleVote(category, name)}
                                        >
                                            {votes[category] === name ? "Voted" : "Vote"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                    Submit Votes
                </button>

                <footer className="footer">
                    <p>&copy; 2024 Association Awards Night. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
};

export default Voting;
