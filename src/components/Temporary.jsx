import React from 'react';

const customStyle = {
    display: "flex",
    width: "80vw",
    height: "84.6vh",
    margin: "auto",
    lineHeight:2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    fontSize:"20px"    
}

const Temporary = () => {
    return (
        <>
            <div style={customStyle}>
                <h1>Welcome to Library!</h1>
                <p> We are dedicated to revolutionizing the way libraries manage their collections and serve their communities. Our state-of-the-art system offers an intuitive interface for cataloging books, tracking loans, and managing memberships. With features designed to enhance user experience and streamline administrative tasks, we aim to make library management efficient and enjoyable. Join us in building a seamless and enriched library experience for everyone.</p>
            </div>
        </>
    );
};

export default Temporary;
