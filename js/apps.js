var app=angular.module('apps', []);

function MyCtrl($scope) {
    $scope.currentPage = 0;
    $scope.pageSize = 5;
  $scope.items = [

        {   
           
            bookid:" ئۈنچىلەر",
            url: 'http://www.weebly.com/uploads/5/0/8/3/5083859/unqilar.apk',

title:'ئىسلامىيەتكە ئالاقىدار نورغۇنلىغان ئىسل مەزمۇنلار ۋە ئاياللارغا ئالاقىدار قىين مەسىلىلەر شۇنداقلا روزا ناماز ئەقىل ،ئەقىدە،ئىمان،ئىخلاس ،ئىسلامىيەتكە زوردەرىجىدە تۆھپە قوشقان ئۆلىملار،قۇرئاننىڭ مۆجىزاتلىرىى ،تەۋبە  شۇنداقلا  بۇيەرگە يىزىپ ئىزاھات بېرىلمىگەن نورۇنغلىغان ئادەمنىڭ ئەقلىنى ئاچىدىغان مەزمۇنلار كىرگۈزۈلگەن'        },
     
       
        {    
         
            bookid:"پەتىۋا2.0",
            url: 'http://www.weebly.com/uploads/5/0/8/3/5083859/patiwa2.0.apk',

title:'،بۇئەپكە دوكتۇر ئابدۇلئەزىزرەھىمەھۇللاھنىڭ ئىسلامدىكى ھۆكۈم مەسلىلىرىگە بەرگەن پەتىۋالىرى بولۇپ جەمئى 70 دىن ئارتۇقراق مەزمۇن كىرگۈزۈلگەن بولۇپ،ئالدىنقى قىتىمقى نەشىرىگە قارىتا بۇقىتىمقى يڭى نەشىرىدە بىرقىسىم خاتالىقلار ۋە تەكلىپ پىكىرلەر ئەمىنلىشىپ ۋە بىرقىسىم يىىڭى ئىىقتىدارلار قوشۇلغان يانفۇنىڭىز تورغا ئۇلانغان '
        }
        ,
        {    
          
            bookid:"غەزىنە ",
            url: 'http://www.weebly.com/uploads/5/0/8/3/5083859/gazina.apk',
title:'بۇئەپكە ئىسلامغا مۇناسىۋەتلىك نادىر ماقالە ۋە ئەسەرلەردىن 50 پارچە ئەسەر كىرگۈزۈلگەن بولۇپ،ئەپتىكى بارچە مەزمۇن 400 بەتلىك كىتابقا يىقىن كىلىشى مومكىن،قىرىنداشلارنىڭ بۇئەپتىكى مەزمۇنلارنى تولۇق ئوقۇپ چىقىشى ۋە شۇنىڭ بىلەن بىرگە ئەسەردىكى مەزمۇنلارغا ئەمەل قىلىشىنى ئۈمىد قىلىمىز،يەنە بىرسىگە بۇئەپنى چۈشۈرۈپ قاچىلاپ قويغاندىن كىينلا ھىچقانداق تورغا ئىھتيجالىق بولمايدۇ'
        }
      

    ];
   
}

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
