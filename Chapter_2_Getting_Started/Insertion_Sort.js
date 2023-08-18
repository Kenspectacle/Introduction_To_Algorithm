function insertionSort(nums) {
    let key = 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        key = nums[j];
        // insert nums[j] into the sorted sequence nums[0 ... j - 1];
        i = j - 1;
        while (nums[i] > key) {
            nums[i + 1] = nums[i];
            i = i - 1;
        }
        nums[i + 1] = key;
        console.log(nums);
    }
    return nums;
}

// let nums = [2,4,5,3,1];
let nums = [1,3,4,2,3];
console.log(insertionSort(nums));