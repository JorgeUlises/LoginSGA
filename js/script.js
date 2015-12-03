/* Author: 

*/
$( document ).ready(init);

function init(){
	cargarEventosPanel();
}

function cargarEventosPanel(){
	$(".lateral-icon").click(function (e){
		$(".panel-lateral").css("display","none");
		var id = $(this).attr("data-open-id");
		$("#"+id).css("display","block");
	});
}






















