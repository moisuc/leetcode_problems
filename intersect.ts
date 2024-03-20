function intersect(nums1: number[], nums2: number[]): number[] {
  let map = new Map<number, number>();
  let result = new Array<number>();
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], (map.get(nums1[i]) as number) + 1);
    } else {
      map.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i]) && (map.get(nums1[i]) as number) > 0) {
      result.push(nums2[i]);
      map.set(nums2[i], (map.get(nums1[i]) as number) - 1);
    }
  }
  return result;
}
