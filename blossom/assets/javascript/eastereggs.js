/*
 * Copyright (C) 2012-2016 Project Delphinium - All Rights Reserved
 *
 * This file is subject to the terms and conditions defined in
 * file 'https://github.com/ProjectDelphinium/delphinium/blob/master/EULA',
 * which is part of this source code package.
 *
 * NOTICE:  All information contained herein is, and remains the property of Project Delphinium. The intellectual and technical concepts contained
 * herein are proprietary to Project Delphinium and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained
 * from Project Delphinium.
 *
 * THE RECEIPT OR POSSESSION OF THIS SOURCE CODE AND/OR RELATED INFORMATION DOES NOT CONVEY OR IMPLY ANY RIGHTS
 * TO REPRODUCE, DISCLOSE OR DISTRIBUTE ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT IT  MAY DESCRIBE, IN WHOLE OR IN PART.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Non-commercial use only, you may not charge money for the software
 * You can modify personal copy of source-code but cannot distribute modifications
 * You may not distribute any version of this software, modified or otherwise
 */

var eggs = [{ name:'harlem_shake', icon:'bolt', comand:'Press "h" and "a" at the same time, make sure your sound is on', value:Number(config.harlem_shake)},
            { name:'ripples', icon:'bullseye', comand: 'Press "r" and "i" at the same time and move the mouse', value:Number(config.ripples)},
            { name:'asteroids', icon:'fa fa-space-shuttle', comand: 'Press "a" and "s" at the same time, space to shoot, arrow keys to move', value:Number(config.asteroids)},
            { name:'katamari', icon:'fa fa-soccer-ball-o', comand:'Press "k" and "a" at the same time, follow instructions', value:Number(config.katamari)}, 
            { name:'bombs', icon:'fa fa-bomb', comand:'Press "b" and "o" at the same time, click mouse in text to drop them', value:Number(config.bombs)},
            { name:'ponies', icon:'fa fa-heart-o', comand:'Press "p" and "o" at the same time, space to re-spawn, arrow keys to move', value:Number(config.ponies)},
            { name:'my_little_pony', icon:'fa fa-heartbeat', comand:'Press "m" and "y" at the same time, watch and enjoy', value:Number(config.my_little_pony)},
            { name:'snow', icon:'cloud', comand:'Press "s" and "n" at the same time, watch and enjoy, follows mouse, break lights', value:Number(config.snow)},
            { name:'raptor', icon:'fa fa-binoculars', comand:'Press "r" and "a" at the same time, make sure your sound is on', value:Number(config.raptor)},
            { name:'fireworks', icon:'fa fa-rocket', comand:'Press "f" and "i" at the same time, make sure your sound is on', value:Number(config.fireworks)}];
eggs.sort(function(a,b){
  return a.value - b.value;
});

var keys = {};
var count = 65;
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i=0; i<str.length; i++){
  var nextChar = str.charAt(i);
  keys[nextChar] = count;
  count++;
}

var harlemShake = {}, ripple = {}, asteroid = {}, katamari = {}, bomb = {}, pony = {}, myLittlePony = {}, snowPage = {}, raptor = {}, fireworks = {};
harlemShake[keys.H] = false;
harlemShake[keys.A] = false;
harlemShake['loaded'] = false;
ripple[keys.R] = false;
ripple[keys.I] = false;
ripple['loaded'] = false;
asteroid[keys.A] = false;
asteroid[keys.S] = false;
asteroid['loaded'] = false;
katamari[keys.K] = false;
katamari[keys.A] = false;
katamari['loaded'] = false;
bomb[keys.B] = false;
bomb[keys.O] = false;
bomb['loaded'] = false;
pony[keys.P] = false;
pony[keys.O] = false;
pony['loaded'] = false;
myLittlePony[keys.M] = false;
myLittlePony[keys.Y] = false;
myLittlePony['loaded'] = false;
snowPage[keys.S] = false;
snowPage[keys.N] = false;
snowPage['loaded'] = false;
raptor[keys.R] = false;
raptor[keys.A] = false;
raptor['loaded'] = false;
fireworks[keys.F] = false;
fireworks[keys.I] = false;
fireworks['loaded'] = false;
var loaded = false;

$(document).keydown(function(e) {
	//Harlem Shake
  if(role == 'Instructor' || current_grade >= Number(config.harlem_shake)){
    if (e.keyCode in harlemShake) {
      harlemShake[e.keyCode] = true;
      if (harlemShake[keys.H] && harlemShake[keys.A]) {
        if(!harlemShake["loaded"]){
          harlemShake["loaded"] = true;
          loaded = true;
          var harlemShakeScript = document.createElement('script');
          harlemShakeScript.setAttribute('src', path + 'plugins/delphinium/blossom/assets/javascript/harlem-shake.js');
          document.body.appendChild(harlemShakeScript);
        }else{
          for (var L = 0; L < C.length; L++) {
            var A = C[L];
            if (v(A)) {
              if (E(A)) {
                k = A;
                break
              }
            }
          }
          if (A === null) {
            console.warn("Could not find a node of the right size. Please try a different page.");
          }
          c();
          S();
          var O = [];
          for (var L = 0; L < C.length; L++) {
            var A = C[L];
            if (v(A)) {
              O.push(A)
            }
          }
        }
      }
    }
  }

  //Page Ripple
  if(role == 'Instructor' || current_grade >= Number(config.ripples)){
    if (e.keyCode in ripple) {
      ripple[e.keyCode] = true;
      if (ripple[keys.R] && ripple[keys.I]) {
        if(!ripple["loaded"]){
          ripple["loaded"] = true;
          loaded = true;
          var rippleScript = document.createElement('script');
          rippleScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/jquery.ripples.js");
          document.body.appendChild(rippleScript);
          $('body').css('backgroundImage', 'url(' + path + 'plugins/delphinium/blossom/assets/images/pebbles.png)');
          setInterval(function() {
            var $el = $('body');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;

            $el.ripples('drop', x, y, dropRadius, strength);
          }, 2000);
          /*$('#ripple-close-div').on('click', function() {
            $('body').ripples("hide");
            $('#ripple-close-div').hide();
          });*/
        } else {
          $('body').ripples("show");
          //$('#ripple-close-div').show();
        }        
      }
    }
  }

  //Asteroids 
  if(role == 'Instructor' || current_grade >= Number(config.asteroids)){
    if (e.keyCode in asteroid) {
      asteroid[e.keyCode] = true;
      if (asteroid[keys.A] && asteroid[keys.S]) {
        if(!asteroid["loaded"]){
          asteroid["loaded"] = true;
          loaded = true;
          var asteroidScript = document.createElement('script');
          asteroidScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/kickass.js");
          document.body.appendChild(asteroidScript);
        }
      }
    }
  }

  //Katamari 
  if(role == 'Instructor' || current_grade >= Number(config.katamari)){
    if (e.keyCode in katamari) {
      katamari[e.keyCode] = true;
      if (katamari[keys.K] && katamari[keys.A]) {
        if(!katamari["loaded"]){
          katamari["loaded"] = true;
          loaded = true;
        	var katamariScript = document.createElement('script');
    			katamariScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/kh.js");
    			document.body.appendChild(katamariScript);
        }
      }
    }
  }

  //Bombs 
  if(role == 'Instructor' || current_grade >= Number(config.bombs)){
    if (e.keyCode in bomb) {
      bomb[e.keyCode] = true;
      if (bomb[keys.B] && bomb[keys.O]) {
        if(!bomb["loaded"]){
          bomb["loaded"] = true;
          loaded = true;
        	window.FONTBOMB_HIDE_CONFIRMATION = true;
        	var bombScript = document.createElement('script');
    			bombScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/bomb.js");
    			document.body.appendChild(bombScript);
        }
      }
    }
  }

  //Ponies 
  if(role == 'Instructor' || current_grade >= Number(config.ponies)){
    if (e.keyCode in pony) {
      pony[e.keyCode] = true;
      if (pony[keys.P] && pony[keys.O]) {
        if(!pony["loaded"]){
          pony["loaded"] = true;
          loaded = true;
        	var ponyScript = document.createElement('script');
    			ponyScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/loader.js");
    			document.body.appendChild(ponyScript);
        }
      }
    }
  }

  //MyLittlePony
  if(role == 'Instructor' || current_grade >= Number(config.my_little_pony)){
    if (e.keyCode in myLittlePony) {
      myLittlePony[e.keyCode] = true;
      if (myLittlePony[keys.M] && myLittlePony[keys.Y]) {
        if(!myLittlePony["loaded"]){
          myLittlePony["loaded"] = true;
          loaded = true;
        	var myLittlePonyScript = document.createElement('script');
        	myLittlePonyScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/browserponies.js");
        	document.body.appendChild(myLittlePonyScript);
        }
      }
    }
  }

  //Snow
  if(role == 'Instructor' || current_grade >= Number(config.snow)){
    if (e.keyCode in snowPage) {
      snowPage[e.keyCode] = true;
      if (snowPage[keys.S] && snowPage[keys.N]) {
        if(snowPage["loaded"]){
          smashInit()
        }else{
          snowPage["loaded"] = true;
          loaded = true;
          $('body').prepend('<div id="lights" style="display:block;"></div>');
          var soundManagerScript = document.createElement('script');
          soundManagerScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/soundmanager2-nodebug-jsmin.js");
          document.body.appendChild(soundManagerScript);
          var animationScript = document.createElement('script');
          animationScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/animation-min.js");
          document.body.appendChild(animationScript);
          var snowCss =document.createElement("link");
          snowCss.setAttribute("rel", "stylesheet");
          snowCss.setAttribute("type", "text/css");
          snowCss.setAttribute("href", path + "/plugins/delphinium/blossom/assets/css/snow.css");
          document.body.appendChild(snowCss);
          var christmaslightsCss =document.createElement("link");
          christmaslightsCss.setAttribute("rel", "stylesheet");
          christmaslightsCss.setAttribute("type", "text/css");
          christmaslightsCss.setAttribute("href", path + "/plugins/delphinium/blossom/assets/css/christmaslights.css");
          document.body.appendChild(christmaslightsCss);
          setTimeout(function() {
            var snowScript = document.createElement('script');
            snowScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/snowstorm.js");
            document.body.appendChild(snowScript);
          },100);
          setTimeout(function() {
            var christmaslightsScript = document.createElement('script');
            christmaslightsScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/christmaslights.js");
            document.body.appendChild(christmaslightsScript);
          },200);
        }
      }
    }
  }

  //Raptor
  if(role == 'Instructor' || current_grade >= Number(config.raptor)){
    if (e.keyCode in raptor) {
      raptor[e.keyCode] = true;
      if (raptor[keys.R] && raptor[keys.A]) {
        if(!raptor["loaded"]) {
          raptor["loaded"] = true;
          loaded = true;
          var raptorScript = document.createElement('script');
          raptorScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/jquery.raptorize.1.0.js");
          document.body.appendChild(raptorScript);
          setTimeout(function() {
            $('body').raptorize({'enterOn': 'timer', 'delayTime': 0});
          },500);  
        }else{
          $('body').raptorize({'enterOn': 'timer', 'delayTime': 0});
        }
      }
    }
  }

  //Fireworks
  if(role == 'Instructor' || current_grade >= Number(config.fireworks)){
    if (e.keyCode in fireworks) {
      fireworks[e.keyCode] = true;
      if (fireworks[keys.F] && fireworks[keys.I]) {
        if(fireworks["loaded"]){
          $('#fireworks-content').show();
          FireworkDisplay.launchText();
        }else{
          fireworks["loaded"] = true;
          loaded = true;
          var fireworksScript = document.createElement('script');
          fireworksScript.setAttribute('src', path + "plugins/delphinium/blossom/assets/javascript/fireworks.js");
          document.body.appendChild(fireworksScript);
          var fireworksCss =document.createElement("link");
          fireworksCss.setAttribute("rel", "stylesheet");
          fireworksCss.setAttribute("type", "text/css");
          fireworksCss.setAttribute("href", path + "/plugins/delphinium/blossom/assets/css/fireworks.css");
          document.body.appendChild(fireworksCss);
          $('body').prepend('<div id="fireworks-content" style="position:absolute;"></div>');
          var canvas = '<canvas id="cv" width="'+$(window).width()+'" height="'+($(window).height()-100)+'" style="position:absolute;left:0;top:0;background-color:black;"></canvas>';
          var background = '<div id="bg" style="background:url(' + path + 'plugins/delphinium/blossom/assets/images/background.jpg) repeat-x;position:absolute;left:0;top:'+($(window).height()-193)+'px;width:100%;height:200px;"></div>';
          $('#fireworks-content').append(canvas);
          $('#fireworks-content').append(background);
        }
      }
    }
  }

  if(loaded){
    var closeDiv = document.getElementById('close-div');
    if (closeDiv === null) {
      $('body').prepend('<div id="close-div" onClick="window.location.reload();" title="Reset Easter Eggs" data-toggle="tooltip" data-placement="left"><i class="close-button fa fa-times"></i></div>');
    }
  }

}).keyup(function(e) {
  if (e.keyCode in harlemShake) {
    harlemShake[e.keyCode] = false;
  }
  if (e.keyCode in ripple) {
    ripple[e.keyCode] = false;
  }
  if (e.keyCode in asteroid) {
    asteroid[e.keyCode] = false;
  }
  if (e.keyCode in katamari) {
    katamari[e.keyCode] = false;
  }
  if (e.keyCode in bomb) {
    bomb[e.keyCode] = false;
  }
  if (e.keyCode in pony) {
    pony[e.keyCode] = false;
  }
  if (e.keyCode in myLittlePony) {
    myLittlePony[e.keyCode] = false;
  }
  if (e.keyCode in snowPage) {
    snowPage[e.keyCode] = false;
  }
  if (e.keyCode in raptor) {
    raptor[e.keyCode] = false;
  }
  if (e.keyCode in fireworks) {
    fireworks[e.keyCode] = false;
  }
});