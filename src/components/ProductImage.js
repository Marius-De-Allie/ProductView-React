import React from 'react';
// TODO select a more appropriate key for carousel imgs.
// TODO set currently selected image in array to main image.

const ProductImage = ({ imgUrl, name, manufacturer }) => {
  const arrOfImgs = [];
  for(let i = 0; i <= 6; i++ ) {
    arrOfImgs.push(imgUrl);
  }
  
return (
    <section className="image-container">
        <div className="main-image">
          <img src={imgUrl} alt={`${name} by ${manufacturer}`} />
        </div>
        <div className="sec-images">
          <p>placeHolder left arrow</p>
          {arrOfImgs.map((img, idx) => 
            (
              <div key={idx}>
                <img src={img} alt={`${name} by ${manufacturer}`} style={{width: '100px', height: '75px'}}/>
              </div>
            )
          )}
          <p>placeHolder right arrow</p>

        </div>
      </section>
  );
};

export default ProductImage;
