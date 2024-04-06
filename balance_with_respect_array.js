/*
Balance with respect to an array

As a programmer, it is very necessary to maintain balance in the life.
Here is task for you to maintain a balance. Your task is to find whether a given number x is balanced with respect to a given array a[ ] which is sorted in non-decreasing order.
Given a sorted array a[ ], the ceiling of x is the smallest element in the array greater than or equal to x, and the floor of x is the greatest element smaller than or equal to x. The number 'x' is said to be balanced if the absolute difference between floor of x and x is equal to the absolute difference between ceil of x and x i.e. if absolute(x - floor(x, a[])) = absolute(ceil(x, a[]) - x).
If one of floor or ceil does not exist assume 'x' to be balanced.

Example 1:

Input:
N = 7  
x = 5
a[] = {1, 2, 8, 10, 10, 12, 19} 
Output: 
Balanced
Explanation: Here 2 is the floor value and 
8 is the ceil value and (5 - 2) = (8 - 5). 
*/
class Solution {
    //Function to check if the array can be splitted into 2 parts having equal sum.
    isBalanced(arr, n, x)
    {
        let low=0;let high=n-1;
        
        if(x<=arr[0] || x>=arr[n-1]){
            return "Balanced";
        }
        
        let mid;
        let count=0;
        while(low<=high){
            mid=(low+high)//2;
            
            if(arr[mid]==x){
                return "Balanced";
            }else if(mid+1<n && arr[mid+1]==x){
                return "Balanced"
            } else if(mid-1>=0 && arr[mid-1]==x){
                return "Balanced"
            }else if(mid+1<n && (arr[mid]<x && x<arr[mid+1])){
                if(x-arr[mid]==arr[mid+1]-x){
                    return "Balanced";
                }else{
                    return "Not Balanced";
                }
            }else if(mid-1>=0 && arr[mid-1]<x && x<arr[mid]){
                if(x-arr[mid-1]==(arr[mid]-x)){
                    return "Balanced";
                }else{
                    return "Not Balanced"
                }
            }else if(x>arr[mid]){
                low=mid+1;
            }else if(x<arr[mid]){
                high=mid-1;
            }
            
        }
        
        return "Not Balanced";
        
    }
