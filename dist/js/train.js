$(document).ready(function() {

	// <!-- 		2 (Обертка для манипуляции с DOM ( выборка, фильтрация через eq(), first(), last() )) -->
	$( "li" ).first().css( "background-color", "red" );
	$( "li" ).eq( 2 ).css( "background-color", "#f3f3f3" );
	$( "li" ).eq( -2 ).css( "background-color", "white" );
	$( "li" ).last().css( "background-color", "blue" );

});