import React from "react";

function WebFooter(){

    const footerStyle = {
        backgroundColor: '#5314BA',
        color: '#fff',
        padding: '20px',
      };
    
      const headerStyle = {
        textAlign: 'center',
        marginBottom: '10px',
        fontWeight: 'bold',
        paddingBottom:'20px'
      };
    
      const contentStyle = {
        marginLeft:'175px',
        marginRight:'175px',
        paddingBottom:'100px',
      };
    



    return (
    <footer style={footerStyle}>
        <div style={headerStyle}>
            <h2>About Us</h2>
        </div>
        <div style={contentStyle}>
            Welcome to Radiology Archive, where we believe that every individual should have easy access to their own 
                health information. Our mission is to revolutionize the way you interact with your medical imagery, providing 
                you with the tools and expertise to take charge of your healthcare decisions easy.
            
        </div>
    </footer>
        )
}
export default WebFooter;