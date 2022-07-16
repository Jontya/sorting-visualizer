export function quickSortAnimations(array){
    const animations = [];
    if (array.length <= 1) {
        return array;
    }

    quickSort(array, 0, array.length - 1, animations);
    return animations;
}

function quickSort(array, low, high, animations){
    if(low >= high){
        return;
    }
    let partitioningIndex = partition(array, low, high, animations);
    quickSort(array, low, partitioningIndex -1, animations);
    quickSort(array, partitioningIndex + 1, high, animations);
}

function partition(array, low, high, animations){
    let pivot = array[high];
    let i = (low - 1);
    
    for(let j = low; j <= high - 1; j++){
        if(array[j] < pivot){
            i++;
            animations.push([i, j, array[i], array[j], false]);
            animations.push([i, j, array[i], array[j], true]);

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    animations.push([i + 1, high, array[i+1], array[high], false]);
    animations.push([i + 1, high, array[i+1], array[high], true]);

    let temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;

    return (i + 1);
}



