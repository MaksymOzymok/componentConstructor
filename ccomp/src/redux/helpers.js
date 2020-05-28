
export const getNewArr = (arr,objectId,newData)=> {
    let searchedObj = arr.filter(component => component.id === objectId)[0];
    let newObj = {
        id : objectId,
        type : searchedObj.type,
        value : searchedObj.value,
        options : searchedObj.options,
        range: searchedObj.range
    };
    newObj[newData.type] = newData.value;
    return arr.map(item => {
        if (item.id === objectId) {
            return newObj;
        } else return item;
    });
};