/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, x) {
    let n=arr.length
    function start(arr,x){
        let l=0
        let h=n-1
        let ans=-1
        while (h>=l) {
            let mid=(l+h)//2
            if (arr[mid]==x){
                ans=mid
                h=mid-1
            }
            else if (arr[mid]<x) {
                l=mid+1
            }else{
                h=mid-1
            }
        }
        return ans
    }    
    function end(arr,x){
        let l=0
        let h=n-1
        let ans=-1
        while (h>=l) {
            let mid=(l+h)//2
            if (arr[mid]==x){
                ans=mid
                l=mid+1
            }
            else if (arr[mid]<x) {
                l=mid+1
            }else{
                h=mid-1
            }
        }return ans
    }
    return [start(arr,x), end(arr,x)]
            
    
};
