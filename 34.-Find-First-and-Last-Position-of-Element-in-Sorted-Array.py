class Solution:
    def searchRange(self, arr: List[int], x: int) -> List[int]:
        # code here
        n=len(arr)
        def start(arr,x):
            l=0
            h=n-1
            ans=-1
            while (h>=l) :
                mid=(l+h)//2
                if arr[mid]==x:
                    ans=mid
                    h=mid-1
                elif arr[mid]<x :
                    l=mid+1
                else:
                    h=mid-1
            return ans
            
        def end(arr,x):
            l=0
            h=n-1
            ans=-1
            while h>=l :
                mid=(l+h)//2
                if arr[mid]==x:
                    ans=mid
                    l=mid+1
                elif arr[mid]<x:
                    l=mid+1
                else:
                    h=mid-1
            return ans
        return [start(arr,x), end(arr,x)]
            
        
