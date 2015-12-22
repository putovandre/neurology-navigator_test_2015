

    $(document).ready(function(){
        var $trigger = 0;
        $(".menu_item-first").click(function(){

        	if($trigger === 0){
            $(this).find(".menu_item-second").fadeIn();
            $(this).find(".menu_btn").toggleClass('menu_btn-toggle-on menu_btn-toggle-off');
            $trigger = 1;}
            else
            {
            $(this).find(".menu_item-second").fadeOut();
            $(this).find(".menu_btn").toggleClass('menu_btn-toggle-on menu_btn-toggle-off');
			$trigger = 0;
            }
        });
        });



    $(document).ready(function(){
        var $trigger_search = 0;
        $(".search_advanced-btn").click(function(){

        	if($trigger_search === 0){
            $(".search_advanced-search").fadeIn();
            $trigger_search = 1;}
            else
            {
            $(".search_advanced-search").fadeOut();
			$trigger_search = 0;
            }
        });
        });
