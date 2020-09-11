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
    
      
      
    
      var element = document.getElementById("af365503-33cb-4014-bd4f-c914efcafce5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'af365503-33cb-4014-bd4f-c914efcafce5' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
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
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
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
                    
                  var docs_json = '{"060ac7f7-0ddd-424b-94e2-746727b53985":{"roots":{"references":[{"attributes":{},"id":"2420","type":"PanTool"},{"attributes":{"axis":{"id":"2416"},"dimension":1,"ticker":null},"id":"2419","type":"Grid"},{"attributes":{"overlay":{"id":"2426"}},"id":"2422","type":"BoxZoomTool"},{"attributes":{},"id":"2423","type":"SaveTool"},{"attributes":{},"id":"2457","type":"BasicTickFormatter"},{"attributes":{},"id":"2424","type":"ResetTool"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#2ca02c","#2ca02c","#ff7f0e","#ff7f0e"],"group":["NaN","NaN","NaN","NaN",6,6,5,5],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2460"},"selection_policy":{"id":"2459"}},"id":"2434","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2420"},{"id":"2421"},{"id":"2422"},{"id":"2423"},{"id":"2424"},{"id":"2425"}]},"id":"2427","type":"Toolbar"},{"attributes":{"formatter":{"id":"2458"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"2436"}},"id":"2412","type":"LinearAxis"},{"attributes":{"source":{"id":"2448"}},"id":"2453","type":"CDSView"},{"attributes":{"formatter":{"id":"2457"},"ticker":{"id":"2417"}},"id":"2416","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2445","type":"MultiLine"},{"attributes":{"data":{"breadths":[[3.5,3.5],[3.5,4.0,4.0]],"group":[5,5],"heights":[[4.549509756796392,2.0],[2.0,2.0,0.0]]},"selected":{"id":"2464"},"selection_policy":{"id":"2463"}},"id":"2448","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2435"},"glyph":{"id":"2444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2445"},"selection_glyph":null,"view":{"id":"2447"}},"id":"2446","type":"GlyphRenderer"},{"attributes":{},"id":"2459","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2444","type":"MultiLine"},{"attributes":{},"id":"2458","type":"BasicTickFormatter"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"2436","type":"FixedTicker"},{"attributes":{"text":""},"id":"2455","type":"Title"},{"attributes":{},"id":"2460","type":"Selection"},{"attributes":{"line_width":{"value":2},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2450","type":"MultiLine"},{"attributes":{"source":{"id":"2435"}},"id":"2447","type":"CDSView"},{"attributes":{},"id":"2408","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2426","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_width":{"value":2},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2451","type":"MultiLine"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2439","type":"MultiLine"},{"attributes":{"data_source":{"id":"2448"},"glyph":{"id":"2450"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2451"},"selection_glyph":null,"view":{"id":"2453"}},"id":"2452","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2440","type":"MultiLine"},{"attributes":{},"id":"2410","type":"LinearScale"},{"attributes":{},"id":"2464","type":"Selection"},{"attributes":{},"id":"2406","type":"DataRange1d"},{"attributes":{},"id":"2463","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2412"},"ticker":null,"visible":false},"id":"2415","type":"Grid"},{"attributes":{"data_source":{"id":"2434"},"glyph":{"id":"2439"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2440"},"selection_glyph":null,"view":{"id":"2442"}},"id":"2441","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2412"}],"center":[{"id":"2415"},{"id":"2419"}],"left":[{"id":"2416"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2441"},{"id":"2446"},{"id":"2452"}],"title":{"id":"2455"},"toolbar":{"id":"2427"},"x_range":{"id":"2404"},"x_scale":{"id":"2408"},"y_range":{"id":"2406"},"y_scale":{"id":"2410"}},"id":"2403","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2404","type":"DataRange1d"},{"attributes":{"data":{"breadths":[[1.5,2.5],[2.5,4.5],[-0.5,1.5]],"group":[0,5,6],"heights":[[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392]]},"selected":{"id":"2462"},"selection_policy":{"id":"2461"}},"id":"2435","type":"ColumnDataSource"},{"attributes":{},"id":"2425","type":"HelpTool"},{"attributes":{},"id":"2461","type":"UnionRenderers"},{"attributes":{},"id":"2417","type":"BasicTicker"},{"attributes":{},"id":"2462","type":"Selection"},{"attributes":{"source":{"id":"2434"}},"id":"2442","type":"CDSView"},{"attributes":{},"id":"2421","type":"WheelZoomTool"}],"root_ids":["2403"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"060ac7f7-0ddd-424b-94e2-746727b53985","root_ids":["2403"],"roots":{"2403":"af365503-33cb-4014-bd4f-c914efcafce5"}}];
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