/**
 * Created by lenovo on 2017/6/2.
 */
angular.module("app")
    .directive("myTab",function(){
           return {
               templateUrl : "page/home.html",
               controller:function($scope){
                   $scope.arr=["color","width/height"];
                   $scope.txt=true;
                   $scope.tab=function(txt){
                       $s   cope.txt=!$scope.txt;
                   };
                   $scope.toggle=function(){
                       $scope.visible=!$scope.visible;
                   };
                   $scope.show=tru3`  8e;
                   $scope.remove=function(show){
                       $scope.show=false;
                   }
               },
               link:function(scope,ele,attr){
                   $(ele).on("click",".pp",function(){
                       $(this).addClass("bg").siblings().removeClass("bg");
                   });
               }
           }
        });