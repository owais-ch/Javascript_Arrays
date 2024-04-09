/*
Count the pairs with maximum difference

Given an array a[ ] of N elements, the task is to find the number of ways to choose pairs {a[i], a[j]} such that their absolute difference is maximum.

Example:

Input:
N = 5
a[] = {3, 2, 1, 1, 3}
Output:
4
Explanation:
The maximum difference you can find is 2
which is from 3 - 1 = 2.
Number of ways of choosing it:
1) Choosing the first and third element
2) Choosing the first and fourth element
3) Choosing the third and fifth element
4) Choosing the fourth and fifth element
Hence, the answer is 4.
*/
class Solution {
    //Function to count the number of pairs such that value of one is 
    //less than equal to value of other element.
    countPairs(a, n) {
        let maximum=a.reduce((a,b)=>Math.max(a,b),-Infinity)
        let minimum=a.reduce((a,b)=>Math.min(a,b),Infinity)
        
        let count_max=0;
        let count_min=0;
        
        for(let i=0;i<n;i++){
            if(a[i]===maximum){
                count_max++;
            }else if(a[i]==minimum){
                count_min++;
            }
        }
        
        if(maximum===minimum){
            return (count_max*(count_max-1))/2;
        }
        //console.log(count_max,count_min)
        return count_max*count_min;
    }
}
