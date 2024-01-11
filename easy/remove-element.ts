function removeElement(nums: number[], val: number): number {
    for(let i = 0; i< nums.length; i++){
        const value = nums[i];
        if (value == val) {
            nums.splice(i, 1);
            i=-1;
        };
    };
    console.log(nums);
    return nums.length;
};

console.log(removeElement([3,2,2,3], 2));
console.log();
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log();

console.log(removeElement([3,3], 3));

