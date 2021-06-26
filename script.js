let pickColor = '';

const changeColor = (id) => {
  pickColor = id;
  console.log(pickColor);
};

const testLog = () => {
  console.log('Connect');
};

const selectColor = (id) => {
  const getNewColor = pickColor;
  const newColor = document.getElementById(`${id}`);
  newColor.className += ` ${getNewColor}`;
  console.log(id);
};