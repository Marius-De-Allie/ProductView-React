import React, { useState }from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// TODO select a more appropriate key for carousel imgs.
// TODO set currently selected image in array to main image.

const ProductImage = ({ imgUrl, name, manufacturer }) => {
  const arrOfImgs = [];
  for(let i = 0; i <= 6; i++ ) {
    arrOfImgs.push(imgUrl);
  }

  // Return a new array consisting of the 3 currently visible images in carousel.
  const getvisibleImgs = () => {
    let visImgArr;
    let visibleImgsArr = arrOfImgs.map((img, idx) => {
      if(idx <3) {
        // return an object with props for imgUrl and element index from original array.
        return {
          imgUrl,
          origIdx: idx
        }
      }
      return visImgArr;
    });
    return visibleImgsArr.filter(img => img !== undefined);
  };

  const [visibleImgs, setVisibleImgs] = useState(getvisibleImgs());
  const [selectedImg, setSelectedImg] = useState(visibleImgs[0]);

  const onFwClick = () => {

    // set visibleImgArr to next three elements in original image array.

    
    // get original id of last element in the array.
    const endIndex = visibleImgs[visibleImgs.length - 1].origIdx;
    console.log(endIndex)
    if(endIndex < arrOfImgs.length - 1) {
      // Update visibleImgsArr to next three images from original array.
      let newVisibleImgsArr = arrOfImgs.map((img, idx) => {
        let tempArr;
        // Add return next three images from original array.
        if(idx > endIndex && idx <= (endIndex + 3)) {
         
          return( {
            imgUrl,
            origIdx: idx
          })
        }
        return tempArr;
      });
      // newVisibleImgsArr.filter(img => img !== undefined);
      newVisibleImgsArr = newVisibleImgsArr.filter(img => img !== undefined);
      console.log(newVisibleImgsArr)
      setVisibleImgs(newVisibleImgsArr)
    }

  }

  const onBackClick = () => {
    // set visibleImgArr to previous three elements in original image array.

    // get original id of first element in the array.
    const startIndex = visibleImgs[0].origIdx;
    console.log(startIndex);

    if(startIndex >= 3) {
       // Update visibleImgsArr to prev three images from original array.
    let newVisibleImgsArr = arrOfImgs.map((img, idx) => {
      let tempArr;
      // Add return next three images from original array.
      if((idx < startIndex) && (idx >= startIndex - 3) && (idx => 0)) {
       
        return( {
          imgUrl,
          origIdx: idx
        })
      }
      return tempArr;
    });
      newVisibleImgsArr = newVisibleImgsArr.filter(img => img !== undefined);
      console.log(newVisibleImgsArr)
      setVisibleImgs(newVisibleImgsArr)
    }
  };

  const onImageClick = (image) => {
    console.log('IMAGE', image)
    setSelectedImg(image);
    


  };

  console.log('VIS IMGS', visibleImgs)
  
return (
  <section className="image-container">
      <div className="main-image">
        <img src={selectedImg.imgUrl} alt={`${name} by ${manufacturer}`} />
      </div>
      <div className="sec-imgs-container">
        <button 
          className="img-btns"
        >
          <FaChevronLeft className="img-arrows" onClick={onBackClick}/>
        </button>
        {visibleImgs.map((img, idx) => 
          (
            <div 
              key={idx} className="sec-imgs"
              onClick={() => onImageClick(img)}
            >
              <img src={img.imgUrl} alt={`${name} by ${manufacturer}`} />
              <p>{img.origIdx}</p>
            </div>
          )
        )}
        <button 
          className="img-btns"
          
        >
          <FaChevronRight className="img-arrows"  onClick={onFwClick}/>
        </button>
      </div>
    </section>
      
  );
};

export default ProductImage;
