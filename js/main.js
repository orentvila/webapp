$(document).ready(function() {
	$(".tabs-icon-1").css({"color": "black", "background-color": "#EBEBEB"});
	$(".notifications").hide();
	sites = [];
	names = [];	

	$(".settings").click(function(){
		$(".quick-reports-settings").toggle();
	});

	$("#cancel").click(function(){
		$(".quick-reports-settings").hide();
	});
	$(".expand").click(function(e){
		var class_name = jQuery('iframe').attr('src');
		if (class_name!=null) {
			var win = window.open(class_name);
			win.focus();
			e.preventDefault();
		}
	})
	$("#expand2").click(function(e){
		var temp =jQuery(this).attr('href');
		if (temp =="expand1"){
		var class_name = jQuery('#exp').attr('src');
		if (class_name!=null) {
			var win = window.open(class_name);
			win.focus();
			e.preventDefault();
		}}
	})
	$("#expand3").click(function(e){
		var temp =jQuery(this).attr('href');
		var class_name = jQuery('#exp2').attr('src');
		if (class_name!=null) {
			var win = window.open(class_name);
			win.focus();
			e.preventDefault();
		}
	})


	//////////////////notificatin/////////////////
	$.fn.notification = function() {
			$.getJSON("http://itzikberrebi.github.io/webapp/data/config.json", function(data) {
			if (data.notification != ""){ 
				$(".notifications").show();
				$(".notifications p").text(data.notification);
			}
		});
	}

	$.fn.jsonLoad = function(){
		$.getJSON("http://itzikberrebi.github.io/webapp/data/config.json", function(data) {
			////////////quickActions///////////////////
			var quickActions = data.quickActions;
			for (i=0;i<quickActions.length;i++){
				var selector = '.nav-section:nth-child('+(i+1)+')';
				var divElement = quickActions[i];

				//////////////////////Icons////////////////////
	    		if(divElement.icon != null){
	    			$(selector).css('background-image', 'url(img/icons/'+divElement.icon+'.png)');
	    		}

	    		//////////////////////ActionLabels///////////////
	    		if(divElement.actionsLabel != null){
	    			$(selector+' .menu-caption p').empty();
	    			$(selector+' .menu-caption p').append(divElement.actionsLabel);
	    		}

	    		//////////////////////Labels//////////////////////
	    		if(divElement.label != null){
	    			$(selector+' > p').empty();
	    			$(selector+' > p').append(divElement.label);
	    		}

	    		////////////////////////Links/////////////////////
	    		if(divElement.actions != null){
		    		$(selector+' .action-list li').remove();
		    		for(var j=0; j< divElement.actions.length; j++){
		    			$(selector+' .action-list').append('<li><a href="'+divElement.actions[j].url+'">'+divElement.actions[j].label+'</a></li>');
		    		}
		    	}
			}
			////////////My Folder & Public Reports tabs//////////////
			var tabsList = data.tabsList;
			$("#my-folders iframe").attr("src",tabsList[1].options.url);
			$("#public-folders iframe").attr("src",tabsList[3].options.url);
		})	
	}

	$.fn.validateInput = function(){
		if ($('input[name="firstsitename"]').val() && $('input[name="firstsiteurl"]').val()){
			$.fn.httpAdd($('input[name="firstsiteurl"]'));
				if(!$.fn.validateUrl($('input[name="firstsiteurl"]').val())){
					$('input[name="firstsiteurl"]').css("background-color","red");
				}
				else {
					//add to array - site1
					names[0]=$('input[name="firstsitename"]').val(); 
					sites[0]=$('input[name="firstsiteurl"]').val();
					if ($('input[name="secondsitename"]').val() && $('input[name="secondsiteurl"]').val()){
						$.fn.httpAdd($('input[name="secondsiteurl"]'));	
							if(!$.fn.validateUrl($('input[name="secondsiteurl"]').val())){
								$('input[name="secondsiteurl"]').css("background-color","red");
							}
							else {
								//add to array - site2
								names[1]=$('input[name="secondsitename"]').val(); 
								sites[1]=$('input[name="secondsiteurl"]').val();
								if ($('input[name="thirdsitename"]').val() && $('input[name="thirdsiteurl"]').val()){
									$.fn.httpAdd($('input[name="thirdsiteurl"]'));
										if(!$.fn.validateUrl($('input[name="thirdsiteurl"]').val())){
											$('input[name="thirdsiteurl"]').css("background-color","red");			
										}
										else{
											names[2]=$('input[name="thirdsitename"]').val(); 
											sites[2]=$('input[name="thirdsiteurl"]').val();
											var items ={};
											$.fn.saveLocalStorage();
										}
								}
								else {
									sites[2] = "";
									names[2] = "";
									$.fn.saveLocalStorage();
								}
							}
					}
					else {
						sites[1] = "";
						names[1] = "";
						sites[2] = "";
						names[2] = "";
						$.fn.saveLocalStorage();
					}
				}
		}
	}	

	$.fn.validateInput2 = function(){
		if ($('input[name="forthsitename"]').val() && $('input[name="forthsiteurl"]').val()){
			$.fn.httpAdd($('input[name="forthsiteurl"]'));
				if(!$.fn.validateUrl($('input[name="forthsiteurl"]').val())){
					$('input[name="forthsiteurl"]').css("background-color","red");
				}
				else {
					//add to array - site1
					names[3]=$('input[name="forthsitename"]').val(); 
					sites[3]=$('input[name="forthsiteurl"]').val();
					if ($('input[name="fifthsitename"]').val() && $('input[name="fifthsiteurl"]').val()){
						$.fn.httpAdd($('input[name="fifthsiteurl"]'));	
							if(!$.fn.validateUrl($('input[name="fifthsiteurl"]').val())){
								$('input[name="fifthsiteurl"]').css("background-color","red");
							}
							else {
								//add to array - site2
								names[4]=$('input[name="fifthsitename"]').val(); 
								sites[4]=$('input[name="fifthsiteurl"]').val();
								if ($('input[name="sixthsitename"]').val() && $('input[name="sixthsiteurl"]').val()){
									$.fn.httpAdd($('input[name="sixthsiteurl"]'));
										if(!$.fn.validateUrl($('input[name="sixthsiteurl"]').val())){
											$('input[name="sixthsiteurl"]').css("background-color","red");			
										}
										else{
											names[5]=$('input[name="sixthsitename"]').val(); 
											sites[5]=$('input[name="sixthsiteurl"]').val();
											$.fn.saveLocalStorage();
										}
								}
								else {
									names[5] = "";
									sites[5] = "";
									$.fn.saveLocalStorage();
								}
							}
					}
					else {
						names[4] = "";
						names[5] = "";
						sites[4] = "";
						sites[5] = "";
						$.fn.saveLocalStorage();
					}
				}
		}
	}

	$.fn.validateUrl = function(url){
		if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(url)){
			return true;
		} else {
			return false;			
		}
	}

	$.fn.httpAdd = function(url){
		var ini = url.val().substring(0,4);
		if (ini != "http"){
			url.val('http://' + url.val());
		}	
	}

	$.fn.saveLocalStorage = function(){
	    if(typeof(Storage) !== "undefined") {
	    		var items ={};
	    		items["sites1"] = sites[0];
	    		items["sites2"] = sites[1];
	    		items["sites3"] = sites[2];
	    		items["sites4"] = sites[3];
	    		items["sites5"] = sites[4];
	    		items["sites6"] = sites[5];
	    		items["names1"] = names[0];
	    		items["names2"] = names[1];
	    		items["names3"] = names[2];
	    		items["names4"] = names[3];
	    		items["names5"] = names[4];
	    		items["names6"] = names[5];
	    		$(".menu-links p").text(names[0]);
	    		$('.site1name').text(names[0]);
	    		$('.site2name').text(names[1]);
	    		$('.site3name').text(names[2]);
	    		$('.site4name').text(names[3]);
	    		$('.site5name').text(names[4]);
	    		$('.site6name').text(names[5]);
	    		var webPages = JSON.stringify(items);
	           	localStorage.pages = webPages;
	           	$(".quick-reports-settings").hide();
	           alert(String(localStorage.pages));
	    } 
	    else {
	    	alert("not supported!");
	    }		
	}
	//var obj = jQuery.parseJSON( '{ "name": "John" }' );

	$.fn.checkForLocalVariable = function(){
		var holder = jQuery.parseJSON(String(localStorage.pages));
		if(holder != null){
			sites[0] = holder["sites1"];
    		sites[1] = holder["sites2"];
    		sites[2] = holder["sites3"];
    		sites[3] = holder["sites4"];
    		sites[4] = holder["sites5"];
    		sites[5] = holder["sites6"];
    		names[0] = holder["names1"];
    		names[1] = holder["names2"];
    		names[2] = holder["names3"];
    		names[3] = holder["names4"];
    		names[4] = holder["names5"];
    		names[5] = holder["names6"];

		}
		else{
			sites[0] = "http://gadieid.blogspot.co.il/2011/12/pluto.html";
    		sites[1] = "https://he.wikipedia.org/wiki/%D7%A4%D7%A8%D7%93%D7%99%D7%A0%D7%A0%D7%93_%D7%9C%D7%A1%D7%9C";
    		sites[2] = "http://www.hayadan.org.il/";
    		sites[3] = "http://alaxon.co.il/";
    		sites[4] = "http://www.morfix.co.il/";
    		sites[5] = "http://translate.google.co.il/?hl=iw&tab=TT";
    		names[0] = "Pluto";
    		names[1] = "Wiki";
    		names[2] = "Hyadaan";
    		names[3] = "Alaxon";
    		names[4] = "Morfix";
    		names[5] = "Translate";
		}
		    $('input[name="firstsitename"]').val(names[0]); 
    		$('input[name="firstsiteurl"]').val(sites[0]);
    		$('input[name="secondsitename"]').val(names[1]); 
    		$('input[name="secondsiteurl"]').val(sites[1]);
    		$('input[name="thirdsitename"]').val(names[2]); 
    		$('input[name="thirdsiteurl"]').val(sites[2]);
    		$('input[name="forthsitename"]').val(names[3]); 
    		$('input[name="forthsiteurl"]').val(sites[3]);
    		$('input[name="fifthsitename"]').val(names[4]); 
    		$('input[name="fifthsiteurl"]').val(sites[4]);
    		$('input[name="sixthsitename"]').val(names[5]); 
    		$('input[name="sixthsiteurl"]').val(sites[5]);	
    		$("#firstsite").text(names[0]);
    		$("#secsites").text(names[3]);
    		$(".iframe1").attr("src",sites[0]);
    		$(".iframe2").attr("src",sites[3]);
    		$('.site1name').text(names[0]);
    		$('.site2name').text(names[1]);
    		$('.site3name').text(names[2]);
    		$('.site4name').text(names[3]);
    		$('.site5name').text(names[4]);
    		$('.site6name').text(names[5]);
	}
	//////////////////////Links for navigate ////////////////////////////
	$('.site1name').on('click', function(e){
		$(".iframe1").attr("src",sites[0]);
		e.preventDefault();
	});
	$('.site2name').on('click', function(e){
		$(".iframe1").attr("src",sites[1]);
		e.preventDefault();
	});
	$('.site3name').on('click', function(e){
		$(".iframe1").attr("src",sites[2]);
		e.preventDefault();
	});
	$('.site4name').on('click', function(e){
		$(".iframe2").attr("src",sites[3]);
		e.preventDefault();
	});
	$('.site5name').on('click', function(e){
		$(".iframe2").attr("src",sites[4]);
		e.preventDefault();
	});
	$('.site6name').on('click', function(e){
		$(".iframe2").attr("src",sites[5]);
		e.preventDefault();
	});
	////////////////////////////////////////////////////////////////////

	$("article > form").submit(function(e){
		$.fn.validateInput();
		e.preventDefault();
	});
	$("section > form").submit(function(e){
		$.fn.validateInput2();
		e.preventDefault();
	});


	///////////tabs ////////////
	$('.tabs>ul>li>a').on('click', function(e){
		var href = jQuery(this).attr('href');
		$(href).show().removeClass('tab_off').addClass('tab_on');
		$(href).siblings('div').hide().removeClass('tab_on').addClass('tab_off');
		$(".tabs-icon-1").css({"background-color":"#515151","color":"white"});
		$(".tabs-icon-2").css({"background-color":"#515151","color":"white"});
		$(".tabs-icon-3").css({"background-color":"#515151","color":"white"});
		$(".tabs-icon-4").css({"background-color":"#515151","color":"white"});
		$(this).css({"color": "black", "background-color": "#EBEBEB"});
		if ((jQuery(this).attr('href')) != "#quick-reports"){
			$(".tabs>article").hide();
		}
		else{
			$(".tabs>article").show();	
		}
		e.preventDefault();
	});
	$.fn.checkForLocalVariable();
	$.fn.notification();
	$.fn.jsonLoad();
});
