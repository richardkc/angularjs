angular.module('myApp',[])
.filter('reverse',function(){
    return function(input,uppercase){
        input = input || '';
        var out = '';
        out = input.split('').reverse().join('')
        if(uppercase){
            out = out.toUpperCase();
        }
        return out;
    }
})
.filter('sayhello',function(){
    return function(input){
        var out = 'hello,' + input
        return out
    }
})
.controller('MyController',['$scope','reverseFilter',function($scope,reverseFilter){
    $scope.greeting = 'jack';
    $scope.chen = {
        name: 'chen',
        address: 'xxxxx'
    };
    $scope.xu = {
        name: 'xu',
        address: 'lllllll'
    };
}])
.directive('myCustomer',function(){
    return {
        scope: {
            customerInfo: "=info"
        },
        template: '姓名：{{customerInfo.name}} 地址：{{customerInfo.address}} '
    }
})









// angular.module('myApp',[])
// .factory('greeter',function($window){
//     return {
//         greet: function(text){
//             window.alert(text)
//         }
//     }
// })
// .controller('GreetingCtrl',['$scope','greeter',function($scope,greeter){
//     $scope.username = 'chen';
//     $scope.sayHello = function(){
//         greeter.greet('Hello!' + $scope.username)
//     };
//     $scope.friends = [
//         {
//             name: 'jake',
//             age: '18'
//         },
//         {
//             name: 'rose',
//             age: '18'
//         }
//     ];
//     $scope.count = 7;
//     $scope.$on('myEvent',function(){
//         console.log($scope.count)
//         $scope.count++
//     })

// }])