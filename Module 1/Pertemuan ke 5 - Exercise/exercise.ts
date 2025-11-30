// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// ===== With Sort
const minMaxWithSort = (numbers : number []) => {
    numbers.sort((a, b) => a - b);

    // Math.max
    // Math.min

    console.log(numbers);

    const lowest = numbers[0];
    const highest = numbers[numbers.length - 1];
    const average = numbers.reduce((acc, curr) => acc + curr) / numbers.length;

    return {
        lowest,
        highest,
        average,
    };
};

const minMaxNumber = [12, 5, 23, 18, 4, 45, 32];
console.log(minMaxNumber.length);

console.log(minMaxWithSort(minMaxNumber));

// === Without Sort
function minMaxWithoutSort(numbers: number[]) {
    const lowest = Math.min(...numbers);
    const highest = Math.max(...numbers)
    const average = numbers.reduce((acc, curr) => acc + curr) / numbers.length;

    return {
        lowest,
        highest,
        average
    }
}

console.log(minMaxWithoutSort(minMaxNumber));

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
function concatString(array: string[]) {
    console.log(array.length);
    return array.slice(0, -1).join(", ") + ", dan " + array[array.length - 1]
};

const concatData = ["Apple", "Banana", "Cherry", "Data"];
console.log(concatString(concatData));

// 3. Write a function from a given array of numbers and return the second smallest number
const secondSmallNumber = (numbers : number[]) => {
    return numbers.sort((a, b) => a - b)[1];
};
const secondSmallNumberData = [5, 3, 1, 7, 2, 6];
console.log(secondSmallNumber(secondSmallNumberData));

// 4.Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
/*
    1. Menentukan parameter -> array1 dan array2
    2. Mapping salah satu array untuk menghasilkan array baru
    3. Dalam mapping jumlahkan array(value) yg di map dengan array lainnya sesuai dengan index sekarang
    4. Jangan lupa return
*/
const calculateEachElement = (array1: number[], array2: number[]) => {
    return array1.map((value, index) => value + array2 [index]);
};
const arrayData1 = [1, 2, 3]
const arrayData2 = [3, 2, 1]
console.log(calculateEachElement(arrayData1, arrayData2));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
function addUniqueElement(array: number[], newElement: number[]) {
    const newArr = array;

    if (!array.includes(newElement)) {
        newArr.push(newElement);
    }

    return newArr;

    // return array.includes(newElement) ? array : [...array, arrayData.push(newElement)]
}

const arrayData = [1, 2, 3, 4]
console.log(addUniqueElement(arrayData, 4));
