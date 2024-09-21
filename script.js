const calculateBtn = document.getElementById("calculate");
const resultElement = document.getElementById("result");
const resultValueElement = resultElement.querySelector("p");

const getInputValue = (id) => parseFloat(document.getElementById(id).value) || 0;
const getSelectValue = (id) => document.getElementById(id).value;

const ftToIn = (num) => num * 12;
const ydToIn = (num) => num * 36;
const cmToIn = (num) => num * 0.3937;
const mToIn = (num) => num * 39.37;

const convertToInches = (value, unit) => {
    switch(unit) {
        case "ft": return ftToIn(value);
        case "yd": return ydToIn(value);
        case "cm": return cmToIn(value);
        case "m": return mToIn(value);
        default: return value; // 默认为英寸
    }
};

const boardFootCal = (length, width, thickness, boards) => {
    return Math.floor(width * length * thickness / 144 * boards);
};

calculateBtn.addEventListener("click", () => {
    const length = convertToInches(getInputValue("length"), getSelectValue("lengthSelect"));
    const width = convertToInches(getInputValue("width"), getSelectValue("widthSelect"));
    const thickness = convertToInches(getInputValue("thickness"), getSelectValue("thicknessSelect"));
    const boards = getInputValue("boards");

    const result = boardFootCal(length, width, thickness, boards);

    resultValueElement.textContent = result.toFixed(2);
    resultElement.classList.remove("hidden");
});