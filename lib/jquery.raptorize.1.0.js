/*
 * jQuery Raptorize Plugin 1.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

export function raptorize($) {
  $.fn.raptorize = function(options) {
    //Yo' defaults
    var defaults = {
      enterOn: "timer", //timer, konami-code, click
      delayTime: 0, //time before raptor attacks on timer mode
      image: "./images/puppy-4.jpg",
      sound: null, //"./lib/dogbark.mp3",
      id: "dog-final-1"
    };

    //Extend those options
    var options = $.extend(defaults, options);

    return this.each(function() {
      var _this = $(this);
      var audioSupported = !!options.sound;

      //Raptor Vars
      var raptorImageMarkup = `<img id="${
        options.id
      }" style="display: none" src="${options.image}" />`;
      var raptorAudioMarkup = `<audio id="${
        options.id
      }-audio" preload="auto"><source  src="${options.sound}" /></audio>`;
      var locked = false;

      //Append Raptor and Style
      $("body").append(raptorImageMarkup);
      if (audioSupported) {
        $("body").append(raptorAudioMarkup);
      }
      var raptor = $(`#${options.id}`).css({
        position: "fixed",
        bottom: "-700px",
        right: "0",
        display: "block",
        height: 400,
        width: 400
      });

      // Animating Code
      function init() {
        locked = true;

        //Sound Hilarity
        if (audioSupported) {
          function playSound() {
            var el = document.getElementById(`${options.id}-audio`);
            el && el.play();
          }
          playSound();
        }

        // Movement Hilarity
        raptor.animate(
          {
            bottom: "0"
          },
          function() {
            $(this).animate(
              {
                bottom: "-50px"
              },
              100,
              function() {
                var offset = $(this).position().left + 400;
                $(this)
                  .delay(300)
                  .animate(
                    {
                      right: offset
                    },
                    2200,
                    function() {
                      raptor = $(`#${options.id}`).css({
                        bottom: "-700px",
                        right: "0"
                      });
                      locked = false;
                    }
                  );
              }
            );
          }
        );
      }

      //Determine Entrance
      if (options.enterOn == "timer") {
        setTimeout(init, options.delayTime);
      } else if (options.enterOn == "click") {
        _this.bind("click", function(e) {
          e.preventDefault();
          if (!locked) {
            init();
          }
        });
      } else if (options.enterOn == "konami-code") {
        var kkeys = [],
          konami = "38,38,40,40,37,39,37,39,66,65";
        $(window).bind(
          "keydown.raptorz",
          function(e) {
            kkeys.push(e.keyCode);
            if (kkeys.toString().indexOf(konami) >= 0) {
              init();
              $(window).unbind("keydown.raptorz");
            }
          },
          true
        );
      }
    }); //each call
  }; //orbit plugin call
}
