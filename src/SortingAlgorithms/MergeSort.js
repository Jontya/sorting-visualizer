export function mergeSortAnimations(array){
    const animations = [];

    if (array.length <= 1) {
        return array;
    }

    const auxArray = array.slice();

    mergeSort(array, 0, array.length -1, auxArray, animations);
    return animations;
}

function mergeSort(array, start, end, auxArray, animations){
    if(start === end){
        return;
    }
    const middle = Math.floor((start + end) / 2);

    mergeSort(auxArray, start, middle, array, animations);
    mergeSort(auxArray, middle + 1, end, array, animations);
    merge(array, start, middle, end, auxArray, animations);
}

function merge(array, start, middle, end, auxArray, animations){
    let k = start;
    let i = start;
    let j = middle + 1;
    while(i <= middle && j <= end){
        animations.push([i, j, ]);
        animations.push([i, j]);
        if(auxArray[i] <= auxArray[j]){
            animations.push([k, auxArray[i]]);
            array[k++] = auxArray[i++];
        }
        else{
            animations.push([k, auxArray[j]]);
            array[k++] = auxArray[j++];
        }
    }
    while(i <= middle){
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxArray[i]]);
        array[k++] = auxArray[i++];
    }
    while(j <= end){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxArray[j]]);
        array[k++] = auxArray[j++];
    }
}

