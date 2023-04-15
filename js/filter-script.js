jQuery(document).ready(function($){
	
	$('.filter-resullts-area .filter-section li').click(function(){
        $('.filter-resullts-area .filter-section li,.filter-resullts-area .filtered-content-section .region-vendor').removeClass('active');
        $(this).addClass('active');
        $('.filter-resullts-area .filtered-content-section .region-vendor[data-region="'+$(this).attr('data-type')+'"]').addClass('active');
			
			if( $('.filter-resullts-area .filtered-content-section .region-vendor[data-region="'+$(this).attr('data-type')+'"]').length == 0){
				//alert('yes it is not hmm');

				$.ajax({
					type: 'POST',
					url: $('.filter-resullts-area').attr('data-admin')+'admin-ajax.php',
					data: {
							//'qr_index': $(this).index(),
							'term_id':$(this).attr('data-id'),
							'data_type':$(this).attr('data-type'),
							'action': 'post_detail' //this is the name of the AJAX method called in WordPress
							}, success: function (result) {
								//alert(result);
									$('.filtered-content-section .region-vendors').append(result);
							},
								error: function () {
											// alert("error");
							}
				});

			}            

        return false;
    });
	
});