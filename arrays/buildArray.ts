function buildArray(nums: number[]): number[]{
    let ans: number[]=[];
    for (let i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]]);
    }
    return ans;
}

