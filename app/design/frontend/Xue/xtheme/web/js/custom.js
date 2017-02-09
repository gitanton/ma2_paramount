jQuery(document).ready(function(){
	jQuery(document).on("click","#search_id", function(event) {
		event.preventDefault();
       jQuery('.search_bar').toggle();
    });
   
});