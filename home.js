import React from "react";

export default function Home() {
  return (
    <>
      <div
        style={{
          maxWidth: "1500px",
          margin: "auto",
          padding: "20px",
        }}
        
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          
        />
        <div
          style={{
            backgroundColor: "lightblue",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <center style={{ fontWeight: "bolder" }}>Home</center>
          <hr></hr>
          <h1>Welcome to our page</h1>
           
          <p>
              A nursery is a place where plants are propagated and grown to a
              desired size. Mostly the plants concerned are for gardening,
              forestry, or conservation biology, rather than agriculture. They
              include retail nurseries, which sell to the general public;
              wholesale nurseries, which sell only to businesses such as other
              nurseries and commercial gardeners; and private nurseries, which
              supply the needs of institutions or private estates. Some will
              also work in plant breeding.
            </p>
          <img
            src="https://w0.peakpx.com/wallpaper/58/407/HD-wallpaper-flower-nursery-colorful-beautiful-forest-farm.jpg"
            width="100%"
            alt=""
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <div style={{ padding: "20px" }}>
            
           
          </div>
        </div>
      </div>
    </>
  );
}
