let pickColor = [];
let idItem = 0;

// Data color
const dataItem = [];

const changeColor = (id) => {
  pickColor = id;
  console.log(pickColor);
};

const testLog = () => {
  console.log('Connect');
};

const selectItem = (id) => {
  // const getNewColor = pickColor;
  // const newColor = document.getElementById(`${id}`);
  // newColor.className += ` ${getNewColor}`;
  // console.log(id);
  idItem = id;
  console.log('Id Item: ', idItem);
};

// MODAL
const onlyOne = (checkbox) => {
  if (pickColor.length >= 2) {
    pickColor = [];
  }
  const checkboxes = document.getElementsByName('check-color');
  checkboxes.forEach((item) => {
    if (item !== checkbox) {
      // pickColor.pop();
      item.checked = false;
    }
    if (item === checkbox) {
      // const data = [item.id, item.alt];
      pickColor.push(item.id, item.alt);
    }
  });

  console.log('picked color: ', pickColor);
};
