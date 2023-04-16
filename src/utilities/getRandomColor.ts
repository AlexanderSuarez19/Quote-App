function getRandomColor():string{
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    return randomColor;
}

export default getRandomColor;