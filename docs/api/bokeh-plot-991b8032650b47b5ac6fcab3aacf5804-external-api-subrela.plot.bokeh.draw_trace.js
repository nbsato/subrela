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
      };var element = document.getElementById("2672683e-8e32-4b18-bdfa-d00d084b4ffa");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2672683e-8e32-4b18-bdfa-d00d084b4ffa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;5647e2eb-9842-480b-95f3-f7ae43bf2fbf&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2612&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;field&quot;:&quot;color&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2595&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2617&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2618&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;2613&quot;},&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;3&quot;,&quot;1&quot;:&quot;4&quot;,&quot;2&quot;:&quot;0&quot;,&quot;3&quot;:&quot;1&quot;,&quot;4&quot;:&quot;2&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;2591&quot;}},&quot;id&quot;:&quot;2567&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;field&quot;:&quot;color&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2594&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;2589&quot;}},&quot;id&quot;:&quot;2597&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;2590&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;2599&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;2600&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;2602&quot;}},&quot;id&quot;:&quot;2601&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_dash&quot;:[6],&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2599&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;2581&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2563&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2613&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_dash&quot;:[6],&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2600&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadths&quot;:[[3.5,3.5],[3.5,4.0,4.0]],&quot;group&quot;:[5,5],&quot;heights&quot;:[[4.549509756796392,2.0],[2.0,2.0,0.0]]},&quot;selected&quot;:{&quot;id&quot;:&quot;2620&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;2619&quot;}},&quot;id&quot;:&quot;2603&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2619&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;2590&quot;}},&quot;id&quot;:&quot;2602&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2620&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;2612&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;2572&quot;}},&quot;id&quot;:&quot;2571&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;2567&quot;},&quot;ticker&quot;:null,&quot;visible&quot;:false},&quot;id&quot;:&quot;2570&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:{&quot;value&quot;:2},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2605&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;2606&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2559&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;2603&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;2605&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;2606&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;2608&quot;}},&quot;id&quot;:&quot;2607&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2572&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;2571&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;2574&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2575&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2565&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2561&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;2603&quot;}},&quot;id&quot;:&quot;2608&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;2589&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;2594&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;2595&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;2597&quot;}},&quot;id&quot;:&quot;2596&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;2567&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;2570&quot;},{&quot;id&quot;:&quot;2574&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;2571&quot;}],&quot;plot_height&quot;:300,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;2596&quot;},{&quot;id&quot;:&quot;2601&quot;},{&quot;id&quot;:&quot;2607&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;2610&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;2582&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;2559&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;2563&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;2561&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;2565&quot;}},&quot;id&quot;:&quot;2558&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;2610&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadths&quot;:[[3.5,3,3],[3.5,4,4],[0.5,0,0],[0.5,1,1],[2.75,2,2],[2.75,3.5,3.5],[1.625,0.5,0.5],[1.625,2.75,2.75]],&quot;cluster&quot;:[5,5,6,6,7,7,8,8],&quot;color&quot;:[&quot;#ff7f0e&quot;,&quot;#ff7f0e&quot;,&quot;#2ca02c&quot;,&quot;#2ca02c&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;],&quot;group&quot;:[5,5,6,6,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;],&quot;heights&quot;:[[2.0,2.0,0.0],[2.0,2.0,0.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845]],&quot;side&quot;:[&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;]},&quot;selected&quot;:{&quot;id&quot;:&quot;2616&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;2615&quot;}},&quot;id&quot;:&quot;2589&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2576&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;2575&quot;},{&quot;id&quot;:&quot;2576&quot;},{&quot;id&quot;:&quot;2577&quot;},{&quot;id&quot;:&quot;2578&quot;},{&quot;id&quot;:&quot;2579&quot;},{&quot;id&quot;:&quot;2580&quot;}]},&quot;id&quot;:&quot;2582&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2580&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2615&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;2581&quot;}},&quot;id&quot;:&quot;2577&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2616&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2578&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;2579&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[2,3,4,0,1]},&quot;id&quot;:&quot;2591&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadths&quot;:[[1.5,2.5],[2.5,4.5],[-0.5,1.5]],&quot;group&quot;:[0,5,6],&quot;heights&quot;:[[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392]]},&quot;selected&quot;:{&quot;id&quot;:&quot;2618&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;2617&quot;}},&quot;id&quot;:&quot;2590&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;}],&quot;root_ids&quot;:[&quot;2558&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"5647e2eb-9842-480b-95f3-f7ae43bf2fbf","root_ids":["2558"],"roots":{"2558":"2672683e-8e32-4b18-bdfa-d00d084b4ffa"}}];
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