module.exports = {
    find : function(arr, val){
        var i;
        if(typeof arr != "object") throw new TypeError("Argument one is not an array")
        for(i = 0; i < arr.length; i++){
            if(arr[i] == val){
                return "Found at index " + i;
            }
        }
        return "Not Found"
    },
    connect : function(arr,arr2){
        if(typeof arr != "object") throw new TypeError("Argument one is not an array")
        if(typeof arr2 != "object") throw new TypeError("Argument two is not an array")
        var i;
        var j;
        var a = [];
        for(i = 0; i < arr.length; i++){
            a.length++;
            a[i] = arr[i];
        }
        var z = a.length;
        for(j = 0; j < arr2.length; j++){
            a.length++;
            a[z] = arr2[j];
            z++;
        }
        return a;
    },
    merge : function(arr, arr2){
        if(typeof arr != "object") throw new TypeError("Argument one is not an array")
        if(typeof arr2 != "object") throw new TypeError("Argument two is not an array")
        if(arr.length > arr2.length){
            for(var i = 0; i < arr2.length; i++){
                arr[i] = arr[i] + arr2[i];
            }
            return arr;
        }
        else if(arr.length == arr2.length){
            for(var i = 0; i < arr2.length; i++){
                arr[i] = arr[i] + arr2[i];
            }
            return arr;
        }
        else if(arr.length < arr2.length){
            for(var i = 0; i < arr.length; i++){
                arr2[i] = arr2[i] + arr[i];
            }
            return arr2;
        }
    },
    findMany : function(arr){
        var ans = "";
        var count = 0;
        for(var i = 1; i < arguments.length; i++){
            for(var j = 0; j < arr.length; j++){
                if(arr[j] == arguments[i]){
                    ans = ans + arguments[i] + " found at index " + j + ", ";
                    count++;
                }
            }
            if(count == 0){
                ans = ans + arguments[i] + " Not found, "
            }
            count = 0;
        }
        return ans;
        
    },
    destroyBefore : function(arr, index){
        var a = [];
        var j = 0;
        if(typeof arr != "object") throw new TypeError("Argument one is not an array")
        if(typeof index != "number") throw new TypeError("Argument two is not a number")
        for(var i = index; i < arr.length; i++){
            a[j] = arr[i];
            j++;
        }
        return a;
    },
    destroyAfter : function(arr, index){
        if(typeof arr != "object") throw new TypeError("Argument one is not an array")
        if(typeof index != "number") throw new TypeError("Argument two is not a number")
        if(index == arr.length - 1){
            return arr;
        }
        var a = [];
        var j = 0;
        for(var i = 0; i <= index; i++){
            a[j] = arr[i];
            j++;
        }
        return a;
    },
    reverse : function(arr){
        if(typeof arr != "object") throw new TypeError("Argument one is not an array")
        var a = [];
        var  j = 0;
        for(var i = arr.length - 1; i >= 0; i--){
            a[j] = arr[i];
            j++;
        }
        return a;
    },
    min : function(arr){
        var min = arr[0];
        for(var i = 1; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i]
            }
        }
        return min;
    },
    max : function(arr){
        var max = arr[0];
        for(var i = 1; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i]
            }
        }
        return max;
    },
    add : function(arr,val){
        arr.length++;
        arr[arr.length - 1] = val;
        return arr;
    },
    addMany : function(arr){
        for(var i = 1; i < arguments.length; i++){
            arr.length++;
            arr[arr.length - 1] = arguments[i];
        }
        return arr;
    },
    sortAscending : function(arr){
        arr.sort();
        return arr;

    },
    sortDescending : function(arr){
        arr.sort().reverse();
        return arr;
    },
    remove : function(arr, index){
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    },
    removeMany : function(arr){
        for(var i = 1; i < arguments.length; i++){
            if (arguments[i] > -1) {
                arr.splice(arguments[i], 1);
            }
        }
        return arr;
    },
    bombArray : function(arr){
        a = [];
        return a;
    },
    sum : function(arr){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        return sum;
    },
    sumArrays : function(arr,arr2){
        var sum = 0;
        var sum2 = 0
        for(var i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        for(var i = 0; i < arr2.length; i++){
            sum = sum + arr2[i];
        }
        return sum + sum2;
    },
    countOfOdd : function(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i]%2 != 0){
                count++;
            }
        }
        return count;
    },
    countOfEven : function(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i]%2 == 0){
                count++;
            }
        }
        return count;
    },
    countOfPositive : function(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > 0){
                count++;
            }
        }
        return count;
    },
    countOfNegative : function(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                count++;
            }
        }
        return count;
    },
    countOfZero : function(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == 0){
                count++;
            }
        }
        return count;
    },
    countOfPrime : function(arr){
        for(let i = 2; i*i < arr.length; i++){
            if(arr[i] !== "nope"){
                for(let j = i*i; j < n; j += i){
                    arr[j] = "nope"
                }
            }        
        }
        var primes = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > 1){
                primes.push(arr[i])
            }
        }

        return primes.length;
    }
}