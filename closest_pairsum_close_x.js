/*
Find the closest pair from two arrays

Given two sorted arrays arr and brr and a number x, find the pair whose sum is closest to x and the pair has an element from each array. In the case of multiple closest pairs return any one of them.
Note: Can return the two numbers in any manner. The driver code takes care of the printing of the closest difference.

Example 1:

Input : N = 4, M = 4
arr[ ] = {1, 4, 5, 7}
brr[ ] = {10, 20, 30, 40} 
X = 32
Output : 
1, 30
Explanation:
The closest pair whose sum is closest
to 32 is {1, 30} = 31.
*/
class Solution
{
    //Function to print the element whose sum with x is closest to x.
    printClosest(arr, brr, n, m, x)
    {
        let i=0;
        let j=m-1
        
        let minimum=Infinity
        let list1;
        
        while(i<n && j>=0){
            if(arr[i]+brr[j]==x){
                minimum=0;
                list1=[arr[i],brr[j]];
                i+=1
                j-=1
                
            }else if(arr[i]+brr[j]>x){
                if(Math.abs(arr[i]+brr[j]-x)<minimum){
                    minimum=Math.abs(arr[i]+brr[j]-x)
                    list1=[arr[i],brr[j]]
                    
                }
                j-=1;
            }else{
                if(Math.abs(arr[i]+brr[j]-x)<minimum){
                    minimum=Math.abs(arr[i]+brr[j]-x)
                    list1=[arr[i],brr[j]]
                    
                }
                i+=1;
            }
            
            //console.log()
        }
        
        return list1
    }
}
