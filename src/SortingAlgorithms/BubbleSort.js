export function bubbleSortAnimations(array){
    const animations = [];
    if (array.length <= 1) {
        return array;
    }

    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < ( array.length - i -1 ); j++){
            if(array[j] > array[j+1]){
                animations.push([j, j+1, array[j], array[j+1], false]);
                animations.push([j, j+1, array[j], array[j+1], true]);

                let temp = array[j]
                array[j] = array[j + 1]
                array[j+1] = temp
            }
        }
    }
}