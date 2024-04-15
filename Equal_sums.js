/*
Equal sums(GFG)
  Given an array A of positive integers, find the smallest non-negative integer (i.e. greater than or equal to zero) that can be placed between any two elements of the array such that the sum of elements in the subarray occurring before it,
    is equal to the sum of elements occurring in the subarray after it, with the newly placed integer included in either of the two subarrays.

Example 1:

Input : Arr[] = {3, 2, 1, 5, 7, 8}
Output : 4 5 1
Explanation:
The smallest possible number that we can 
insert is 4, at position 5 (i.e. between 
5 and 7) as part of first subarray so that 
the sum of the two subarrays becomes 
equal as, 3+2+1+5+4=15 and 7+8=15.
*/

class Solution
{
    //Function to find two numbers such that they add up to a specific target.
    EqualSum(a, n)
    {
        let right_sum=0;
        for(let i=0;i<n;i++){
            right_sum+=a[i];
        }
        
        let left_sum=0;
        let minimum=Infinity
        let indexz=0
        let which_side=0
        
        for(let i=0;i<n;i++){
            left_sum+=a[i];
            right_sum-=a[i];
            
            if(left_sum>right_sum){
                let diff=left_sum-right_sum;
                if(diff<minimum){
                    minimum=diff;
                    indexz=i+2;
                    which_side=2;
                }
            }else if(left_sum<right_sum){
                let diff=right_sum-left_sum;
                
                if(diff<minimum){
                    minimum=diff;
                    indexz=i+2;
                    which_side=1;
                }
            }else{
                
                minimum=0;
                indexz=i+2
                which_side=1
            }
            
        }
        return [minimum,indexz,which_side];
    }
}
