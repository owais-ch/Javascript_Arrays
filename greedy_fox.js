/*
Greedy fox (GFG)
There are N coins placed on the road where arr[i] is the denomination of ith coin. A Fox is looking to collect some of these coins. The fox is very greedy and follows a weird pattern of collecting coins: the fox collects coins in only 
increasing order of their denomination since it always craves for more money and all the coins it collects are contiguous. The fox wants to maximize the amount of money it collects.
Unfortunately, the Fox is greedy but not intelligent enough to find the solution and asks you for help. Find the maximum amount of money the fox can collect. 

Example 1:

Input:
N=6
arr[] = {2, 1, 4, 7, 3, 6} 
Output: 12
Explanation: Contiguous Increasing subarray 
             {1, 4, 7} = 12.
*/

class Solution
{
    //Function to find the sum of contiguous subarray with maximum sum.
    largestSum(arr, N)
    {
        if(N===1){
            return arr[0];
        }
        let total=0;
        let maximum=-Infinity;
        
        for(let i=1;i<N;i++){
            if(arr[i]>arr[i-1]){
                total+=arr[i-1]
                if(i==N-1){
                    total+=arr[i];
                    maximum=Math.max(maximum,total);
                    return maximum;
                }
            }else{
                total+=arr[i-1];
                maximum=Math.max(maximum,total);
                
                if(i==N-1){
                    total=arr[i];
                    maximum=Math.max(maximum,total);
                    return maximum;
                }else{
                    total=0;
                }
            }
        }
        
        maximum=Math.max(maximum,total)
        
        return maximum;
    }
}
