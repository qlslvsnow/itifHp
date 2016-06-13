      /*menu handler*/
      $(function(){
        function stripTrailingSlash(str) {
          if(str.indexOf("/") >= 0) {
            return str.substr(1, str.length - 6);
          }
          return str.substr(0, str.length - 5);
        }

        var url = window.location.pathname;  
        var activePage = stripTrailingSlash(url);

        // var menuEnForjp = new Map();
        // // setting the values
        // menuEnForjp.set("company", "会社情報");
        // menuEnForjp.set("business", "事業内容");
        // menuEnForjp.set("recruit", "採用情報");
        // menuEnForjp.set("contact", "お問い合せ");

        $('.nav li a').each(function(){  
          var currentPage = stripTrailingSlash($(this).attr('href'));

          if (activePage == currentPage) {
            $(this).parent().addClass('active'); 
          } 
        });
      });

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});