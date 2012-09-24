
  //  $(document).bind('mobileinit',function(event){
    //  console.log( event.type + 'event triggered');
    //});

    var $pages = $("div[data-role='page']");

    $(window).bind('orientationchange orientationchange.htmlclass', function(event){
      if (window.console) {
        console.log(event.type + ' event triggered');
      }
    });

    $(window.document).bind('mobileinit', function(event){
      if (window.console) {
        console.log(event.type + ' event triggered');
      }  
    });
    
    $pages.live('pagebeforecreate pagecreate pagebeforehide pagebeforeshow pageshow pagehide',function(event){
      if (window.console) {
        console.log( event.type + ' event triggered for ' + $(this).attr('id'));
      }
    });
    

