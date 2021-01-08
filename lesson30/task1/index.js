const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgEl = document.createElement('img');
    imgEl.src = imgSrc;
    imgEl.setAttribute('alt', 'lake landscape');

    const containerEl = document.querySelector('.page');
    containerEl.append(imgEl);

    const onImgLoad = () => {
      const { width, height } = imgEl;
      resolve({ width, height });
    };

    imgEl.addEventListener('load', onImgLoad);
    imgEl.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return p;
};

//test call
const src =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
const resultPromise = addImage(src);
resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));
