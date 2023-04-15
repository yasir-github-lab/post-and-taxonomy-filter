jQuery(document).ready(function($){
	//alert('yes');
	
	$('.post_taxonomy_post_type option[value="'+$('input[name="post_taxonomy_post_type"]').val()+'"]').attr('selected',true);
	$('.post_taxonomy_post_taxonomy option[value="'+$('input[name="post_taxonomy_post_taxonomy"]').val()+'"]').attr('selected',true);
	$('.post_taxonomy_filter[value="'+$('input[name="post_taxonomy_filter"]').val()+'"]').attr('checked',true);
	$('.post_taxonomy_query[value="'+$('input[name="post_taxonomy_query"]').val()+'"]').attr('checked',true);
	
	$('select,input[type="radio"]').change(function(){
		//alert('input[name="'+$(this).attr('class')+'"]');
		$('input[name="'+$(this).attr('class')+'"]').val($(this).val());
	});
	
	
});