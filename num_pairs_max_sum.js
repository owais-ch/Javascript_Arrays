/*Number of pairs with maximum sum

Given an array arr[], count number of pairs arr[i], arr[j] such that arr[i] + arr[j] is maximum and i < j.

Example 1:

Input : Arr[] = {1, 1, 1, 2, 2, 2}
Output : 3
Explanation:
We have an array [1, 1, 1, 2, 2, 2]
The maximum possible pair
sum where i is less than j is  4, which 
is given by 3 pairs, so the answer is 3
the pairs are (2, 2), (2, 2) and (2, 2).
*/

class Solution
{
    // Function to find the number 
    // of maximum pair sums 
    MaximumSum(arr, n)
    {
        let maximum=-Infinity;let second_maximum=-Infinity;
        let count_max=0;let second_count_max=0;
        
        for(let i=0;i<n;i++){
            if(arr[i]>maximum){
                second_maximum=maximum;
                maximum=arr[i];
            }else if(arr[i]>second_maximum){
                second_maximum=arr[i];
            }
        }
        
        for(let i=0;i<n;i++){
            if(arr[i]==maximum){
                count_max++;
            }else if(arr[i]==second_maximum){
                second_count_max++;
            }
        }
        
        if(count_max>1){
            return (count_max*(count_max-1))/2
        }else{
            return count_max*second_count_max;
        }
    }
}
