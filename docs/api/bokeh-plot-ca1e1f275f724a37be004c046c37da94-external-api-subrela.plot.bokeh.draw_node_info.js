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
    
      
      
    
      var element = document.getElementById("7519b613-b4df-4eae-bafc-72ac985dc36a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7519b613-b4df-4eae-bafc-72ac985dc36a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dc689791-a9fd-4533-8441-96a20053741a":{"roots":{"references":[{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2234","type":"MultiLine"},{"attributes":{},"id":"2265","type":"Selection"},{"attributes":{"filters":[{"id":"2244"}],"source":{"id":"2243"}},"id":"2245","type":"CDSView"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"2231","type":"FixedTicker"},{"attributes":{},"id":"2266","type":"UnionRenderers"},{"attributes":{},"id":"2260","type":"BasicTickFormatter"},{"attributes":{},"id":"2219","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2221","type":"BoxAnnotation"},{"attributes":{},"id":"2212","type":"BasicTicker"},{"attributes":{"below":[{"id":"2207"}],"center":[{"id":"2210"},{"id":"2214"}],"left":[{"id":"2211"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2236"},{"id":"2241"},{"id":"2249"},{"id":"2255"}],"title":{"id":"2256"},"toolbar":{"id":"2222"},"x_range":{"id":"2199"},"x_scale":{"id":"2203"},"y_range":{"id":"2201"},"y_scale":{"id":"2205"}},"id":"2198","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"2243"},"glyph":{"id":"2247"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2248"},"selection_glyph":null,"view":{"id":"2245"}},"id":"2249","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2221"}},"id":"2217","type":"BoxZoomTool"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"2263"},"selection_policy":{"id":"2264"}},"id":"2230","type":"ColumnDataSource"},{"attributes":{},"id":"2199","type":"DataRange1d"},{"attributes":{"column_name":"side","group":"first"},"id":"2244","type":"GroupFilter"},{"attributes":{"column_name":"side","group":"last"},"id":"2250","type":"GroupFilter"},{"attributes":{"axis":{"id":"2207"},"ticker":null,"visible":false},"id":"2210","type":"Grid"},{"attributes":{"data_source":{"id":"2229"},"glyph":{"id":"2234"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2235"},"selection_glyph":null,"view":{"id":"2237"}},"id":"2236","type":"GlyphRenderer"},{"attributes":{},"id":"2216","type":"WheelZoomTool"},{"attributes":{},"id":"2201","type":"DataRange1d"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2253","type":"Text"},{"attributes":{},"id":"2215","type":"PanTool"},{"attributes":{"filters":[{"id":"2250"}],"source":{"id":"2243"}},"id":"2251","type":"CDSView"},{"attributes":{},"id":"2205","type":"LinearScale"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAFMAAAAAAAAAUwAAAAAAAABRAAAAAAAAAFMAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAUQAAAAAAAABRA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAJMAAAAAAAAAkwAAAAAAAACTAAAAAAAAAJMAAAAAAAAAkwAAAAAAAACTAAAAAAAAAJMAAAAAAAAAkwAAAAAAAACTA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"2265"},"selection_policy":{"id":"2266"}},"id":"2243","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"2256","type":"Title"},{"attributes":{},"id":"2203","type":"LinearScale"},{"attributes":{},"id":"2261","type":"Selection"},{"attributes":{"formatter":{"id":"2258"},"ticker":{"id":"2212"}},"id":"2211","type":"LinearAxis"},{"attributes":{},"id":"2262","type":"UnionRenderers"},{"attributes":{},"id":"2220","type":"HelpTool"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2248","type":"Text"},{"attributes":{"axis":{"id":"2211"},"dimension":1,"ticker":null},"id":"2214","type":"Grid"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2254","type":"Text"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2239","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2240","type":"MultiLine"},{"attributes":{"formatter":{"id":"2260"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"2231"}},"id":"2207","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2235","type":"MultiLine"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2247","type":"Text"},{"attributes":{},"id":"2218","type":"SaveTool"},{"attributes":{"source":{"id":"2230"}},"id":"2242","type":"CDSView"},{"attributes":{},"id":"2263","type":"Selection"},{"attributes":{},"id":"2264","type":"UnionRenderers"},{"attributes":{},"id":"2258","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2229"}},"id":"2237","type":"CDSView"},{"attributes":{"data_source":{"id":"2243"},"glyph":{"id":"2253"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2254"},"selection_glyph":null,"view":{"id":"2251"}},"id":"2255","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2230"},"glyph":{"id":"2239"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2240"},"selection_glyph":null,"view":{"id":"2242"}},"id":"2241","type":"GlyphRenderer"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2261"},"selection_policy":{"id":"2262"}},"id":"2229","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2215"},{"id":"2216"},{"id":"2217"},{"id":"2218"},{"id":"2219"},{"id":"2220"}]},"id":"2222","type":"Toolbar"}],"root_ids":["2198"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"dc689791-a9fd-4533-8441-96a20053741a","root_ids":["2198"],"roots":{"2198":"7519b613-b4df-4eae-bafc-72ac985dc36a"}}];
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