import React from 'react'

function LeftSection(
    {   imageURL,
        productName,
        productDescription,
        tryDemo,
        learnMore,
        googlePlay,
        appStore }
) {
    return (
      <div className="container">
        <div className="row p-5">
          <div className="col p-5">
            <img src={imageURL} />
        </div>
                
          <div className="col p-5 mt-5">
            <h1>{productName} </h1>
            <p>{productDescription}</p>
            <div>
                <a href={tryDemo} style={{textDecoration:"none"}}> Try demo</a>
                <a href={learnMore} style={{marginLeft: "50px", textDecoration:"none"}} > Learn more</a>
            </div>
            <div className='mt-4'>
                <a href={googlePlay} style={{textDecoration:"none"}}> <img src='media/images/googlePlayBadge.svg'/> </a>
                <a href={appStore} style={{marginLeft: "50px"}}> <img src='media/images/appstoreBadge.svg'/> </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftSection;