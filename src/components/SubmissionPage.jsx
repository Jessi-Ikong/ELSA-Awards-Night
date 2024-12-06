import React from "react";

const SubmissionPage = () => {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    };

    const contentStyle = {
        backgroundColor: "#ffffff",
        color: "#333333",
        padding: "30px",
        borderRadius: "15px",
        width: "100%",
        maxWidth: "500px",
    };

    const titleStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#6a11cb",
        marginBottom: "15px",
    };

    const messageStyle = {
        fontSize: "16px",
        marginBottom: "20px",
        lineHeight: "1.6",
        color: "#555555",
    };

    const buttonStyle = {
        backgroundColor: "#2575fc",
        color: "#ffffff",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "10px",
        cursor: "pointer",
        textTransform: "uppercase",
        transition: "all 0.3s ease",
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: "#6a11cb",
        transform: "scale(1.05)",
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1 style={titleStyle}>🎉 Thank You for Voting! 🎉</h1>
                <p style={messageStyle}>
                    Your votes have been successfully submitted. We appreciate your participation!
                </p>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    onClick={() => (window.location.href = "/")}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default SubmissionPage;
