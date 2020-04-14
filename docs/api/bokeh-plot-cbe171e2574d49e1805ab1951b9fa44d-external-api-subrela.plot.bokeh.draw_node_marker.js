(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js": "JpP8FXbgAZLkfur7LiK3j9AGBhHNIvF742meBJrjO2ShJDhCG2I1uVvW+0DUtrmc", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js": "xZlADit0Q04ISQEdKg2k3L4W9AwQBAuDs9nJL9fM/WwzL1tEU9VPNezOFX0nLEAz", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js": "4BuPRZkdMKSnj3zoxiNrQ86XgNw0rYmBOxe7nshquXwwcauupgBF2DHLVG1WuZlV", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js": "Dv1SQ87hmDqK6S5OhBf0bCuwAEvL5QYL0PuR/F1SPVhCS/r/abjkbpKDYL2zeM19"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("fc9d324f-a5be-4654-afaf-7c43a2f34942");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fc9d324f-a5be-4654-afaf-7c43a2f34942' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;520d840b-2989-4959-b581-31dedce4c0e6&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2461&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadths&quot;:{&quot;__ndarray__&quot;:&quot;&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[0]},&quot;group&quot;:[],&quot;heights&quot;:{&quot;__ndarray__&quot;:&quot;&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[0]}},&quot;selected&quot;:{&quot;id&quot;:&quot;2507&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;2506&quot;}},&quot;id&quot;:&quot;2479&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2502&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;2470&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2508&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_dash&quot;:[6],&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2488&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;2501&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;2461&quot;}},&quot;id&quot;:&quot;2460&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2509&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;red&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;red&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;breadth&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;height&quot;}},&quot;id&quot;:&quot;2495&quot;,&quot;type&quot;:&quot;Scatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;2492&quot;}},&quot;id&quot;:&quot;2497&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2450&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;red&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;red&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;breadth&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;height&quot;}},&quot;id&quot;:&quot;2494&quot;,&quot;type&quot;:&quot;Scatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2465&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;2479&quot;}},&quot;id&quot;:&quot;2491&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;2502&quot;},&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;3&quot;,&quot;1&quot;:&quot;4&quot;,&quot;2&quot;:&quot;0&quot;,&quot;3&quot;:&quot;1&quot;,&quot;4&quot;:&quot;2&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;2480&quot;}},&quot;id&quot;:&quot;2456&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_dash&quot;:[6],&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2489&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;2478&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;2483&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;2484&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;2486&quot;}},&quot;id&quot;:&quot;2485&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;2478&quot;}},&quot;id&quot;:&quot;2486&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2454&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;2492&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;2494&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;2495&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;2497&quot;}},&quot;id&quot;:&quot;2496&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2469&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;2499&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2504&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2467&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2505&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;2479&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;2488&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;2489&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;2491&quot;}},&quot;id&quot;:&quot;2490&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;2460&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;2463&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[2,3,4,0,1]},&quot;id&quot;:&quot;2480&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;field&quot;:&quot;color&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2483&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadth&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[9]},&quot;children&quot;:[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],&quot;cluster&quot;:[0,1,2,3,4,5,6,7,8],&quot;height&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[9]},&quot;is_group&quot;:[false,false,false,false,false,false,false,false,false],&quot;side&quot;:[&quot;first&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;last&quot;]},&quot;selected&quot;:{&quot;id&quot;:&quot;2509&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;2508&quot;}},&quot;id&quot;:&quot;2492&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2452&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2468&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;field&quot;:&quot;color&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2484&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2464&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;2470&quot;}},&quot;id&quot;:&quot;2466&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;2456&quot;},&quot;ticker&quot;:null,&quot;visible&quot;:false},&quot;id&quot;:&quot;2459&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2501&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2506&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2448&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2507&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadths&quot;:[[3.5,3,3],[3.5,4,4],[0.5,0,0],[0.5,1,1],[2.75,2,2],[2.75,3.5,3.5],[1.625,0.5,0.5],[1.625,2.75,2.75]],&quot;cluster&quot;:[5,5,6,6,7,7,8,8],&quot;color&quot;:[&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;],&quot;group&quot;:[&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;],&quot;heights&quot;:[[2.0,2.0,0.0],[2.0,2.0,0.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845]],&quot;side&quot;:[&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;]},&quot;selected&quot;:{&quot;id&quot;:&quot;2505&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;2504&quot;}},&quot;id&quot;:&quot;2478&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;2456&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;2459&quot;},{&quot;id&quot;:&quot;2463&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;2460&quot;}],&quot;plot_height&quot;:300,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;2485&quot;},{&quot;id&quot;:&quot;2490&quot;},{&quot;id&quot;:&quot;2496&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;2499&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;2471&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;2448&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;2452&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;2450&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;2454&quot;}},&quot;id&quot;:&quot;2447&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;2464&quot;},{&quot;id&quot;:&quot;2465&quot;},{&quot;id&quot;:&quot;2466&quot;},{&quot;id&quot;:&quot;2467&quot;},{&quot;id&quot;:&quot;2468&quot;},{&quot;id&quot;:&quot;2469&quot;}]},&quot;id&quot;:&quot;2471&quot;,&quot;type&quot;:&quot;Toolbar&quot;}],&quot;root_ids&quot;:[&quot;2447&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"520d840b-2989-4959-b581-31dedce4c0e6","root_ids":["2447"],"roots":{"2447":"fc9d324f-a5be-4654-afaf-7c43a2f34942"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();