function twoSum(nums: number[], target: number): number[] {
    let hashMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement)!, i];
        }
        hashMap.set(nums[i], i);
    }
    return [];
};
