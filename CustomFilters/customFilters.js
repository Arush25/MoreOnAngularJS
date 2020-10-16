var app=angular.module('myApp',[])
.filter('base',function(){
    var somthing=function(input,base){
        var pasrsed=parseInt(input,10)
        var based=parseInt(base,10)
        if(isNaN(pasrsed) || isNaN(based)) return input
        if(based<2 || based>36) alert('Invalid Input')

        return pasrsed.toString(based)
        
    }
    return somthing
})
.controller('myCtrl',function(){

});