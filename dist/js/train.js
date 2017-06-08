$(document).ready(function() {

	// <!-- 		2 (Обертка для манипуляции с DOM ( выборка, фильтрация через eq(), first(), last() )) -->
	// $( "li" ).first().css( "background-color", "red" );
	// $( "li" ).eq( 2 ).css( "background-color", "#f3f3f3" );
	// $( "li" ).eq( -2 ).css( "background-color", "white" );
	// $( "li" ).last().css( "background-color", "blue" );


	// Обертка для манипуляции с DOM (attr, removeAttr)

	// $('#photo').attr('alt', 'firtst-altt');
	// $('#photo').attr('title', 'first-title');
	// $('#photo').attr({
	//  alt: 'second-alt',
	//  title: 'second-title',
	//  sub: 'bang',
	//  class: 'lobzuk'
	// });

	// $('#photo').attr('title', function(i, val) {
	//  return val + ' - Robert Paul1'
	// });

	// $('img').removeAttr('id');



	// Обертка для манипуляции с DOM (appendTo, prependTo, insertAfter, insertBefore)
		// $('.big-item').appendTo('.first-list');
		// $('.big-item').prependTo('.first-list');
		// $('.big-item').insertAfter('.first-list');
		// $('.big-item').insertBefore('.first-list');

	// Обертка для манипуляции с DOM (addClass, removeClass, toggleClass)
		// $('.red').click(function(e) {
		// 	$(this).siblings('.text').addClass('red');
		// 	$(this).siblings('.text').removeClass('toggle blue green');
		// });
		// $('.blue').click(function(e) {
		// 	$(this).siblings('.text').addClass('blue');
		// 	$(this).siblings('.text').removeClass('toggle red green');
		// });
		// $('.green').click(function(e) {
		// 	$(this).siblings('.text').addClass('green');
		// 	$(this).siblings('.text').removeClass('toggle blue red');
		// });
		// $('.black').click(function(e) {
		// 	$(this).siblings('.text').removeClass('blue red green');
		// 	$(this).siblings('.text').toggleClass('toggle');
		// });


	// Обертка для манипуляции с DOM ( реализовать метод closest() )

	// $('.black').click(function() {
	// 	$(this).closest('div').toggleClass('active');
	// });

	// Обертка для манипуляции с DOM ( on(событие), off(событие) )


		// function notify() {
		//   alert( "clicked" );
		// }
		// $( "button" ).on( "click", notify );

});