function twoSum(nums: number[], target: number): number[] {
    const nMap = new Map();
    const retArr:number[] = []
   for(let i = 0; i < nums.length; i++){
    const item = target - nums[i];
    if(nMap.has(item)){
        retArr.push(nMap.get(item));
        retArr.push(i);
        break;
    }
    nMap.set(nums[i], i);
   }
  return retArr; 
};



console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));