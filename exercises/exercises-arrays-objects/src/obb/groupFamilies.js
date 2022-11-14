function groupFamilies(array) {
    const resultObj = {};
    for (let i = 0; i < array.length; i++) {
        if (resultObj.hasOwnProperty(array[i].surname) === false ) {
            resultObj[array[i].surname] = []
            resultObj[array[i].surname].push(array[i].name);
        } else {
            resultObj[array[i].surname].push(array[i].name);
        }
    }
    return resultObj;
}