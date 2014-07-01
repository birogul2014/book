var app=angular.module('apps', []);

function MyCtrl($scope) {
    $scope.currentPage = 0;
    $scope.pageSize = 5;
  $scope.items = [

        {   
           
            bookid:"چوڭ گۇناھلار",
            url: 'http://ketablar.weebly.com/uploads/5/0/8/3/5083859/ug_chong_gunahlar.pdf',
title:'چوڭ گۇناھلار ناملىق بۇ ئەسەردە، مۇئەللىپ رەھىمەھۇللاھ قۇرئان ۋە سۈننەتتە بايان قىلىنغان چوڭ گۇناھلارنى دەلىل ئىسپاتلار بىلەن تەپسىلى بايان قىلىپ بېرىدۇ.'
        },
     
       
        {    
         
            bookid:"قۇرئان كەرىمدىكى تۆت ئاساسى تېرمىن",
            url: 'http://www.weebly.com/uploads/5/0/8/3/5083859/ug_qoran_kerimdiki_tot_asasi_tirmin.pdf',
            title:'«قۇرئان كەرىمدىكى تۆت ئاساسى تېرمىن» ناملىق بۇ ئەسەردە، قۇرئان كەرىمنىڭ تېرمىنولوگىيىلىك ئاتالغۇلىرى ئىچىدىن مۇسۇلماننىڭ بىلىۋېلىشى ئەڭ مۇھىم بولغان، ئىلاھ، رەب، دىن، ئىبادەتدىن ئىبارەت ئىسلامىي دەۋەتنىڭ ئاساسى بولغان مەزكۇر ئاتالغۇلارغا تەپسىلى چۈشەنچە بېرىدۇ ۋە ئىنسانلارنىڭ بۇ تېرمىنلارنى چۈشۈنىشتىكى بەزى خاتالىقلىرىنى ئوقۇرمەنلەرگە ئۆچۈق يورۇتۇپ بېرىدۇ.'

        }
        ,
        {    
          
            bookid:"ئايال ساھابىلار ھاياتىدىن تاللانمىلار",
            url: 'http://www.weebly.com/uploads/5/0/8/3/5083859/ug_ayal_sahabilar_hayatidin_tallanmilar.pdf',
           title:'ئايال ساھابىلار ھاياتىدىن تاللانمىلار» ناملىق بۇ ئەسەر، ئايال ساھابىلاردىن (ئاللاھ ئۇلاردىن رازى بولسۇن) 117 كىشىنىڭ شانلىق تەرجىمىھالىنىڭ قىسقىچى مەزمۇنىنى ئۆز ئىچىگە ئالغان بولۇپ، ئۇلارنىڭ ئۆلگىلىك ئىش-ئىزلىرى، ئىمانى ۋە ئىنسانى ئالاھىدىلىكلىرى، دىننى قوغداش ۋە تارىتىش يولىدا كورسەتكەن پىداكارلىقلىرى، ھىجرەت ۋە جىھاد مەزگىللىرىدىكى ئەزىيەتلەرگە سەبرى قىلىشى...قاتارلىق كۆپلىگەن گۈزەل خىسلەتلەرنى ئوقۇرمەنلەرگە ئەينەن تەسۋىرلەپ بىرىدۇ.'

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
