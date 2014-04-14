/**
 * @author Rishi Iyengar
 */

//Add video using embed code from Youtube's share function
var video='<iframe width="560" height="315" src="http://www.youtube.com/embed/SjUU-3535hQ" frameborder="0" allowfullscreen></iframe>'


$(document).ready(function() {
	setNav();
});


function setNav() {

	//Add video to modal when the button is clicked
	$(".trailer").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
	});	

	//Stop video playing when close button is clicked. 
	$('#myModal').on('hidden.bs.modal', function () {
		$('#myModal iframe').removeAttr('src');
	});

}
