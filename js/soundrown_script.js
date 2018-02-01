$(document).ready(function() {

//SOUNDBAR GENERAL
  //SPLASH
    setTimeout(function() { $('#splash').hide(); }, 5000);

    $('#splash').click(function() {
      $(this).hide();
    });

  //ON READY HIDES
    $('.sound-volume').hide();
    $('#mute').hide();

  //SOUNDS OBJECT
    function Sounds(sound) {
        this.sound = sound;
      this.soundID = "#" + sound;
      this.soundBG = "./bg/" + sound + "bg.jpg";

      this.soundTrigger = function () {
        if (!$(this.soundID).hasClass('iconactive')) {
          $('#bg').css('background-image', 'url("' + this.soundBG + '")');
          _gaq.push(['_trackEvent', 'Sounds', 'Play', this.sound]);
          $(this.soundID).find('.pauseicon').css('z-index', '1');
          $(this.soundID).next('.sound-volume').show();
        }
        else {
          _gaq.push(['_trackEvent', 'Sounds', 'Pause', this.sound]);
          $(this.soundID).find('.pauseicon').css('z-index', '-1');
          $(this.soundID).next('.sound-volume').hide();
        }
        return false;
      }
    };

  //COFFEE
    var coffee = new Sounds("coffee");
    $(coffee.soundID).click(function() {
      coffee.soundTrigger();
    });

  //RAIN
    var rain = new Sounds("rain");
    $(rain.soundID).click(function() {
      rain.soundTrigger();
    });

  //WAVES
    var waves = new Sounds("waves");
    $(waves.soundID).click(function() {
      waves.soundTrigger();
    });

  //FIRE
    var fire = new Sounds("fire");
    $(fire.soundID).click(function() {
      fire.soundTrigger();
    });

  //BIRDS
    var bird = new Sounds("bird");
    $(bird.soundID).click(function() {
      bird.soundTrigger();
    });

  //NIGHT
    var night = new Sounds("night");
    $(night.soundID).click(function() {
      night.soundTrigger();
    });

  //TRAIN
    var train = new Sounds("train");
    $(train.soundID).click(function() {
      train.soundTrigger();
    });

  //FOUNTAIN
    var fountain = new Sounds("fountain");
    $(fountain.soundID).click(function() {
      fountain.soundTrigger();
    });

  //WHITENOISE
    var whitenoise = new Sounds("whitenoise");
    $(whitenoise.soundID).click(function() {
      whitenoise.soundTrigger();
    });

  //PLAYGROUND
    var playground = new Sounds("playground");
    $(playground.soundID).click(function() {
      playground.soundTrigger();
    });


//NAV
  /*$('nav ul ul').hide();*/

  $('#menu div').hide();

  //MENU DROP
    $('#menu > a').click(function() {
      $('#menu div').stop().slideToggle('fast');
      return false;
    });

    //MENU BUTTONS
      $('#aboutbut').click(function () {
        $('#aboutdesc').css({'opacity': '1', 'z-index': '1'});
        $('#knowledgedesc, #creditsdesc').css({'opacity': '0', 'z-index': '-1'});
      });

      $('#knowledgebut').click(function () {
        $('#knowledgedesc').css({'opacity': '1', 'z-index': '1'});
        $('#aboutdesc, #creditsdesc').css({'opacity': '0', 'z-index': '-1'});
      });

      $('#creditsbut').click(function () {
        $('#creditsdesc').css({'opacity': '1', 'z-index': '1'});
        $('#aboutdesc, #knowledgedesc').css({'opacity': '0', 'z-index': '-1'});
      });

  //NAV SUBMENU DROP
    /*$('nav ul li').hover(function() {
      $('ul', this).stop().slideToggle('fast');
    });*/

  //MUSIC DROP
    /*$('#music').hover(function() {
      $('#music div').stop().slideToggle('fast');
    });*/

//IDLE FADE OUT
  idleTimer = null;
  idleState = false;
  idleWait = 5000;

  $('*').bind('mousemove keydown scroll', function () {

    clearTimeout(idleTimer);

    if (idleState == true) {

      // Reactivated event
      $('.ocarousel, #navcontainer, #mute, #soundcloud-player').removeClass('idle');
    }

    if ($('.ocarousel_window_slides .wrapper > div').hasClass('iconactive') && $('.ocarousel').is(':hover') == false && $('#navcontainer').is(':hover') == false && $('#mute').is(':hover') == false && $('#soundcloud-player').is(':hover') == false ) {

      idleState = false;

      idleTimer = setTimeout(function () {

        // Idle Event
        $('.ocarousel, #navcontainer, #mute, #soundcloud-player').addClass('idle');

        idleState = true; }, idleWait);
    }
  });

  $("body").trigger("mousemove");

//TIMER
  var Example1 = new (function() {
    var $stopwatch, // Stopwatch element on the page
      incrementTime = 1000, // Timer speed in milliseconds
      currentTime = 0, // Current time in hundredths of a second
      updateTimer = function() {
        $stopwatch.html(formatTime(currentTime));
        currentTime += incrementTime / 1000;
      },
      init = function() {
        $stopwatch = $('#stopwatch');
        Example1.Timer = $.timer(updateTimer, incrementTime, true);
      };

    $(init);

  });

  // Common functions
    function pad(number, length) {
      var str = '' + number;
      while (str.length < length) {str = '0' + str;}
      return str;
    }
    function formatTime(time) {
      var hoursDiv = time / 3600, hours = Math.floor( hoursDiv ), minutesDiv = time % 3600 / 60, minutes = Math.floor( minutesDiv ), seconds = Math.ceil( time % 3600 % 60 );
      if( seconds > 59 ) { seconds = 0; minutes = Math.ceil( minutesDiv ); }
      if( minutes > 59 ) { minutes = 0; hours = Math.ceil( hoursDiv ); }
      return ( hours.toString().length < 2 ? '0'+hours+'h ' : hours+'h ' ) + ( minutes.toString().length < 2 ? '0'+minutes : minutes ) + 'm ' + ( seconds.toString().length < 2 ? '0'+seconds : seconds ) + 's';
    }

//MUTE ALL
  $('#mute').click(function () {
    if ($('.audioplayer').hasClass('audioplayer-mute')) {
      $('.audioplayer').removeClass('audioplayer-mute');
    }
    else {
      $('.audioplayer').addClass('audioplayer-mute');
    }
    return false;
  });

//RANDOM BUTTON
  $('#random').click(function() {
    var links = $('.ocarousel_window_slides > div');
    var randomNum = Math.floor(Math.random()*links.length);
    if ( randomNum > 4 ) {
      $('#soundscroll-right').click();
      links.get(randomNum).click();
    }
    else {
      $('#soundscroll-left').click();
      links.get(randomNum).click();
    }
     return false;
  });
});

// END MAIN JQEURY

// Generated by CoffeeScript 1.3.3

/*
jQuery Open Carousel

Copyright (c) 2013 Justin McCandless (justinmccandless.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {

  window.Ocarousel = (function() {
    /* Initialize
    */

    var arrayShuffle;

    Ocarousel.prototype.ocarousel = null;

    Ocarousel.prototype.ocarousel_window = null;

    Ocarousel.prototype.ocarousel_container = null;

    Ocarousel.prototype.indicators_container = null;

    Ocarousel.prototype.frames = null;

    Ocarousel.prototype.indicators = null;

    Ocarousel.prototype.timer = null;

    Ocarousel.prototype.active = 0;

    /* Default Settings
    */


    Ocarousel.settings = {
      speed: .5 * 1000,
      period: 4 * 1000,
      transition: "scroll",
      perscroll: 1,
      wrapearly: 0,
      shuffle: false,
      indicator_fill: "#ffffff",
      indicator_r: 6,
      indicator_spacing: 6,
      indicator_cy: 20,
      indicator_stroke: "#afafaf",
      indicator_strokewidth: "2",
      fullscreen: false
    };

    function Ocarousel(ocarousel) {
      var me, _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      me = this;
      this.ocarousel = $(ocarousel);
      this.ocarousel_window = $(this.ocarousel).find(".ocarousel_window");
      this.frames = $(this.ocarousel_window).children();
      this.indicators_container = $(this.ocarousel).find(".ocarousel_indicators");
      this.pagination_current = $(this.ocarousel).find(".ocarousel_pagination_current");
      this.pagination_total = $(this.ocarousel).find(".ocarousel_pagination_total");
      if (this.frames.length > 1) {
        this.settings = {};
        this.settings.speed = (_ref = $(this.ocarousel).data('ocarousel-speed')) != null ? _ref : Ocarousel.settings.speed;
        this.settings.period = (_ref1 = $(this.ocarousel).data('ocarousel-period')) != null ? _ref1 : Ocarousel.settings.period;
        this.settings.transition = (_ref2 = $(this.ocarousel).data('ocarousel-transition')) != null ? _ref2 : Ocarousel.settings.transition;
        this.settings.perscroll = (_ref3 = $(this.ocarousel).data('ocarousel-perscroll')) != null ? _ref3 : Ocarousel.settings.perscroll;
        this.settings.wrapearly = (_ref4 = $(this.ocarousel).data('ocarousel-wrapearly')) != null ? _ref4 : Ocarousel.settings.wrapearly;
        this.settings.shuffle = (_ref5 = $(this.ocarousel).data('ocarousel-shuffle')) != null ? _ref5 : Ocarousel.settings.shuffle;
        this.settings.indicator_fill = (_ref6 = $(this.ocarousel).data('ocarousel-indicator-fill')) != null ? _ref6 : Ocarousel.settings.indicator_fill;
        this.settings.indicator_r = (_ref7 = $(this.ocarousel).data('ocarousel-indicator-r')) != null ? _ref7 : Ocarousel.settings.indicator_r;
        this.settings.indicator_spacing = (_ref8 = $(this.ocarousel).data('ocarousel-indicator-spacing')) != null ? _ref8 : Ocarousel.settings.indicator_spacing;
        this.settings.indicator_cy = (_ref9 = $(this.ocarousel).data('ocarousel-indicator-cy')) != null ? _ref9 : Ocarousel.settings.indicator_cy;
        this.settings.indicator_stroke = (_ref10 = $(this.ocarousel).data('ocarousel-indicator-stroke')) != null ? _ref10 : Ocarousel.settings.indicator_stroke;
        this.settings.indicator_strokewidth = (_ref11 = $(this.ocarousel).data('ocarousel-indicator-strokewidth')) != null ? _ref11 : Ocarousel.settings.indicator_strokewidth;
        this.settings.fullscreen = (_ref12 = $(this.ocarousel).data('ocarousel-fullscreen')) != null ? _ref12 : Ocarousel.settings.fullscreen;
        this.ocarousel_container = document.createElement("div");
        this.ocarousel_container.className = "ocarousel_window_slides";
        $(this.ocarousel).show();
        this.timerStop();
        this.render();
        this.ocarousel_window.html("");
        $(this.ocarousel_window).get(0).appendChild(this.ocarousel_container);
        this.timerStart();
      }
    }

    /* Remove and reset everything in the DOM
    */


    Ocarousel.prototype.render = function() {
      var cx, i, indicator, indicators_svg, me, _i, _ref;
      if (this.settings.shuffle && this.settings.shuffle !== "false") {
        this.frames = arrayShuffle(this.frames);
      }
      $(this.ocarousel_container).html("");
      me = this;
      $(this.frames).each(function(i) {
        if (me.settings.fullscreen && me.settings.fullscreen !== "false") {
          $(this).css("width", $(window).width());
        }
        return me.ocarousel_container.appendChild(this);
      });
      $(me.ocarousel_container).animate({
        right: me.getPos(me.active) + "px"
      }, 0);
      if (this.indicators_container.length && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
        $(this.indicators_container).html("");
        indicators_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        indicators_svg.setAttribute("version", "1.1");
        $(this.indicators_container).get(0).appendChild(indicators_svg);
        this.indicators = [];
        cx = $(this.indicators_container).width() / 2 - this.settings.indicator_r * this.frames.length - this.settings.indicator_spacing * this.frames.length / 2;
        for (i = _i = 0, _ref = this.frames.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          indicator = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          indicator.className = "ocarousel_link";
          indicator.setAttribute("data-ocarousel-link", i);
          indicator.setAttribute("cx", cx);
          indicator.setAttribute("cy", this.settings.indicator_cy);
          indicator.setAttribute("r", this.settings.indicator_r);
          indicator.setAttribute("stroke", this.settings.indicator_stroke);
          indicator.setAttribute("stroke-width", this.settings.indicator_strokewidth);
          indicator.setAttribute("fill", i === this.active ? this.settings.indicator_stroke : this.settings.indicator_fill);
          indicators_svg.appendChild(indicator);
          this.indicators.push(indicator);
          $(indicator).data("ocarousel_index", i);
          cx = cx + this.settings.indicator_r * 2 + this.settings.indicator_spacing;
        }
      }
      if (this.pagination_current.length) {
        $(this.pagination_current).html(this.active + 1);
      }
      if (this.pagination_total.length) {
        $(this.pagination_total).html(this.frames.length);
      }
      $(this.ocarousel).find("[data-ocarousel-link]").off("click");
      $(this.ocarousel).find("[data-ocarousel-link]").on("click", function(event) {
        var goHere;
        event.preventDefault();
        goHere = $(this).data("ocarousel-link");
        if (goHere != null) {
          if (goHere === "left" || goHere === "Left" || goHere === "l" || goHere === "L") {
            goHere = me.getPrev();
          } else if (goHere === "right" || goHere === "Right" || goHere === "r" || goHere === "R") {
            goHere = me.getNext();
          } else if (goHere === "first" || goHere === "First" || goHere === "beginning" || goHere === "Beginning") {
            goHere = 0;
          } else if (goHere === "last" || goHere === "Last" || goHere === "end" || goHere === "End") {
            goHere = me.frames.length - 1;
          }
          return me.scrollTo(goHere);
        }
      });
    };

    /* Animate a transition to the given position
    */


    Ocarousel.prototype.scrollTo = function(index, instant) {
      var me, nextPos, perEnd, wrapEnd;
      if (instant == null) {
        instant = false;
      }
      me = this;
      if (index != null) {
        this.timerStop();
        if (index >= (this.frames.length - this.settings.wrapearly)) {
          index = 0;
        } else if (index >= (this.frames.length - this.settings.perscroll)) {
          index = this.frames.length - this.settings.perscroll;
        } else if (index < 0) {
          perEnd = this.frames.length - this.settings.perscroll;
          wrapEnd = this.frames.length - 1 - this.settings.wrapearly;
          index = Math.min(perEnd, wrapEnd);
        }
        $(this.ocarousel_container).stop();
        nextPos = this.getPos(index);
        if (instant) {
          $(this.ocarousel_container).animate({
            right: nextPos + "px"
          }, 0);
        } else if (this.settings.transition === "fade") {
          $(this.ocarousel_container).fadeOut(this.settings.speed, null).animate({
            right: nextPos + "px"
          }, 0).fadeIn(me.settings.speed);
        } else {
          $(this.ocarousel_container).animate({
            right: nextPos + "px"
          }, this.settings.speed);
        }
        if (this.indicators != null) {
          $(this.indicators[this.active]).attr("fill", this.settings.indicator_fill);
          $(this.indicators[index]).attr("fill", this.settings.indicator_stroke);
        }
        this.active = index;
        if (this.pagination_current.length) {
          $(this.pagination_current).html(this.active + 1);
        }
        return this.timerStart();
      }
    };

    /* Returns the distance of a frame from the left edge of its container
    */


    Ocarousel.prototype.getPos = function(index) {
      return $(this.frames[index]).position().left;
    };

    /* Returns the index of the next slide that should be shown
    */


    Ocarousel.prototype.getNext = function() {
      var count, next;
      next = this.active + this.settings.perscroll;
      if (next > (this.frames.length - this.settings.perscroll) && next < this.frames.length) {
        next = this.frames.length - this.settings.perscroll;
      }
      count = this.frames.length;
      while (count && !$(this.frames[next]).is(":visible")) {
        next++;
        if (next > this.frames.length - 1) {
          next = 0;
        }
        count--;
      }
      return next;
    };

    /* Returns the index of the next slide that should be shown before the current position
    */


    Ocarousel.prototype.getPrev = function() {
      var count, prev;
      prev = this.active - this.settings.perscroll;
      if (prev < 0 && this.active !== 0) {
        prev = 0;
      }
      count = this.frames.length;
      while (count && !$(this.frames[prev]).is(":visible")) {
        prev--;
        if (prev < 0) {
          prev = this.frames.length - 1;
        }
        count--;
      }
      return prev;
    };

    /* Starts or resumes the scroll timer
    */


    Ocarousel.prototype.timerStart = function() {
      var me;
      me = this;
      if (this.settings.period !== Infinity) {
        return this.timer = setInterval((function() {
          return me.scrollTo(me.getNext());
        }), this.settings.period);
      }
    };

    /* Stops the scroll timer
    */


    Ocarousel.prototype.timerStop = function() {
      if (this.timer != null) {
        clearInterval(this.timer);
        return this.timer = null;
      }
    };

    /* Starts the timer if it is stopped, stops the timer if it is running
    */


    Ocarousel.prototype.timerToggle = function() {
      if (this.timer != null) {
        return this.timerStop();
      } else {
        return this.timerStart();
      }
    };

    /* Removes a frame, keeping the carousel in an intuitive position afterwards
    */


    Ocarousel.prototype.remove = function(index) {
      if (index > 0 && index < (this.frames.length - 1)) {
        this.frames.splice(index, 1);
        this.render();
        if (this.active > index) {
          return this.scrollTo(this.active - 1, true);
        }
      }
    };

    /* Adds a frame, keeping the carousel in an intuitive position afterwards
    */


    Ocarousel.prototype.add = function(elt, index) {
      if (index > 0 && index < (this.frames.length - 1)) {
        this.frames.splice(index, 0, elt);
        this.render();
        if (this.active >= index) {
          return this.scrollTo(this.active + 1, true);
        }
      }
    };

    arrayShuffle = function(arr) {
      var i, j, tempi, tempj;
      i = arr.length;
      if (i === 0) {
        return false;
      }
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        tempi = arr[i];
        tempj = arr[j];
        arr[i] = tempj;
        arr[j] = tempi;
      }
      return arr;
    };

    return Ocarousel;

  })();

  $(document).ready(function() {
    return $(".ocarousel").each(function() {
      return new Ocarousel(this);
    });
  });

}).call(this);

// SOUNDCLOUD
  // SOUNDCLOUD INITIALIZE
    SC.initialize({
      client_id: '3c1222aaa64b9dc73bc257260a5497cb'
    });

  $(document).ready(function() {
    // SOUNDCLOUD PLAYER UI
    var iframeElement   = document.querySelector('iframe');
    var iframeElementID = iframeElement.id;
    var widget1         = SC.Widget(iframeElement);
    var widget2         = SC.Widget(iframeElementID);
    // widget1 === widget2

      // PLAY/PAUSE BUTTON
      $('#scPause').hide();
      $('#sc-playpause img').click(function() {
        widget1.toggle();
      });
      widget1.bind(SC.Widget.Events.PLAY, function() {
        $('#scPlay').hide();
        $('#scPause').show();
      });
      widget1.bind(SC.Widget.Events.PAUSE, function() {
        $('#scPause').hide();
        $('#scPlay').show();
      });

      // TRACK INFO ON READY
      widget1.bind(SC.Widget.Events.READY, function() {
        // TRACK TITLE
        widget1.getCurrentSound(function(currentSound) {
          $('#sc-title').html(currentSound.title);
        });
        // TRACK DURATION
        widget1.getDuration(function(timeTotal) {
            $('#sc-time_total').html(formatTime(timeTotal/1000));
        });
        // TRACK PROGRESS
        widget1.bind(SC.Widget.Events.PLAY_PROGRESS, function(e) {
          var scProgress = e.currentPosition;
          $('#sc-time_elapsed').html(formatTime(scProgress/1000));
          // TRACK DURATION
          widget1.getDuration(function(timeTotal) {
            var scTotal = timeTotal;
            // TRACK PROGRESS BAR
            $("#sc-progress_bar").slider({
              min: 0,
              max: scTotal,
              value: scProgress,
                range: "min",
              slide: function(event, ui) {
                widget1.seekTo(ui.value);
              }
            });
          });
        });
      });
      // VOLUME CONTROLS
      $("#sc-volume_slider").slider({
        min: 0,
        max: 100,
        value: 100,
          range: "min",
        slide: function(event, ui) {
          widget1.setVolume(ui.value);
          var scVol = ui.value;
        }
      });

      // MUTE BUTTON
      /*$('#sc-volume img').click(function() {
        if ($('#sc-volume img').hasClass('sc-mute')) {
          $(this).removeClass('sc-mute');
          widget1.setVolume(100);
        }
        else {
          $(this).addClass('sc-mute');
          widget1.setVolume(0);
        }
      });
      */

      // TIME CONVERSION METHOD
        function formatTime(time) {
        var hoursDiv = time / 3600, hours = Math.floor( hoursDiv ), minutesDiv = time % 3600 / 60, minutes = Math.floor( minutesDiv ), seconds = Math.ceil( time % 3600 % 60 );
        if( seconds > 59 ) { seconds = 0; minutes = Math.ceil( minutesDiv ); }
        if( minutes > 59 ) { minutes = 0; hours = Math.ceil( hoursDiv ); }
        return ( hours == 0 ? '' : + hours + ':' ) + ( minutes.toString().length < 2  && hours != 0 ? '0'+minutes : minutes ) + ':' + ( seconds.toString().length < 2 ? '0'+seconds : seconds );
        }

    // SEARCH
      $('#search-button').click(function() {
        var searchInput = document.getElementById("search").value;
      // GET API AND SEARCH INPUT AND APPEND TO TRACK LIST
        SC.get('http://api.soundcloud.com/tracks', { q: searchInput }, function(tracks) {
        // REMOVES RESULTS LIST ITEMS
          $('#results li').remove();
        // ITERATES ON EACH TRACK OBJECT
          $(tracks).each(function(index, track) {
          // IF STATEMENT TO USE MUSIC ICON FOR EMPTY ARTWORK -> CREATES RESULTS LIST ITEMS FROM NEW SEARCH VALUE
            if ( track.artwork_url === null ) {
              $('#results').append($('<li class=' + index + '></li>').html('<a href="#"><img src="icon/icon_music.svg" />' + track.title + '</a>' + '<p>' + formatTime(track.duration/1000) + '</p>' ));
            }
            else {
              $('#results').append($('<li class=' + index + '></li>').html('<a href="#"><img src="' + track.artwork_url + '" />' + track.title + '</a>' + '<p>' + formatTime(track.duration/1000) + '</p>' ));
            }
          // ADDS ALL SEARCH RESULTS INTO ARRAY
            var scTracks = new Array();
            scTracks[index] = track;

          // ON CLICK PUSHES NEW TRACK LINK TO SOUNDCLOUD PLAYER
            $('#results li').click(function() {
              var trackClass = $(this).attr('class');
              widget1.load(scTracks[trackClass].uri, {
                auto_play: true
              });
            // UPDATE PLAYER READ OUT
              $('#sc-title').html(scTracks[trackClass].title);
              $('#sc-time_total').html(formatTime(scTracks[trackClass].duration/1000));
            });
          });
        });
      });

    // FORM SUBMIT ON KEYUP
      function searchSubmit() {
        $("#search-button").click();
      }
      // LIVE SEARCH DELAY WHILE TYPING
      var timer = null;
      $('#search').keyup(function() {
        clearTimeout(timer);
        timer = setTimeout(searchSubmit, 200);
      });

    // SOUNDCLOUD STREAM
      soundManager.setup({
        url: '/swf/soundmanager2.swf',
        onready: function() {
          // COFFEE SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634507", function(sound) {
            $('#coffee').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#coffee-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // RAIN SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634506", function(sound) {
            $('#rain').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#rain-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // WAVES SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634513", function(sound) {
            $('#waves').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#waves-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // FIRE SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634510", function(sound) {
            $('#fire').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#fire-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // BIRDS SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634508", function(sound) {
            $('#bird').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#bird-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // NIGHT SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634511", function(sound) {
            $('#night').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#night-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // TRAIN SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634506", function(sound) {
            $('#train').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#train-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // FOUNTAIN SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634506", function(sound) {
            $('#fountain').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#fountain-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // WHITENOISE SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634509", function(sound) {
            $('#whitenoise').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#whitenoise-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });

          // PLAYGROUND SOUNDCLOUD STREAM
          SC.stream("http://api.soundcloud.com/tracks/133634506", function(sound) {
            $('#playground').click(function() {
              sound.togglePause();
              $(this).toggleClass('iconactive');
              $('.icon', this).toggleClass('iconactive');
            });

            $("#playground-volume").slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              value: 100,
              range: "min",
              slide: function(event, ui) {
                sound.setVolume(ui.value);
              }
            });
          });
        },

        ontimeout: function() {
          console.log("ERROR ERROR ERROR");
        }
      });
});
