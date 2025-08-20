#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int secondlargest(vector<int> &arr){
    int n = arr.size();
    sort(arr.begin() , arr.end());
    for(int i=n-2 ; i>=0 ; i--){
        if(arr[i] != arr[n-1]){
            retun arr[i];
        }
    }
    return -1;
}

int main(){
    vector<int> arr = {5,7,3,8,1};
    cout<<secondlargest(arr);
    return 0;
}