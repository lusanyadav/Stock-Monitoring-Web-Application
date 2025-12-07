import React from 'react'

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
    return (
    <div className="container">
        <div className="row p-5">
                
            <div className="col p-5 mt-5">
                <h1>{productName} </h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}> Try demo</a>
                    <a href={learnMore} style={{marginLeft: "50px", textDecoration:"none"}} > Learn more</a>
                </div>
            </div>
            <div className="col p-5">
                <img src={imageURL} />
            </div>
        </div>
    </div>
    );
}

export default RightSection;