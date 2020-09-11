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
    
      
      
    
      var element = document.getElementById("401bff13-84de-49d2-87bf-28dfd2d4a8ff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '401bff13-84de-49d2-87bf-28dfd2d4a8ff' but no matching script tag was found.")
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
                    
                  var docs_json = '{"30e75059-4f15-4cf6-9212-dbbb0a01302a":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2321"},{"id":"2322"},{"id":"2323"},{"id":"2324"},{"id":"2325"},{"id":"2326"}]},"id":"2328","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2346","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2327","type":"BoxAnnotation"},{"attributes":{"source":{"id":"2335"}},"id":"2343","type":"CDSView"},{"attributes":{"source":{"id":"2336"}},"id":"2348","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"breadth"},"y":{"field":"height"}},"id":"2351","type":"Scatter"},{"attributes":{},"id":"2305","type":"DataRange1d"},{"attributes":{},"id":"2325","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"line_alpha":{"value":0.1},"line_color":{"value":"red"},"x":{"field":"breadth"},"y":{"field":"height"}},"id":"2352","type":"Scatter"},{"attributes":{},"id":"2309","type":"LinearScale"},{"attributes":{},"id":"2360","type":"UnionRenderers"},{"attributes":{},"id":"2322","type":"WheelZoomTool"},{"attributes":{},"id":"2324","type":"SaveTool"},{"attributes":{},"id":"2361","type":"Selection"},{"attributes":{"formatter":{"id":"2359"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"2337"}},"id":"2313","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2349"},"glyph":{"id":"2351"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2352"},"selection_glyph":null,"view":{"id":"2354"}},"id":"2353","type":"GlyphRenderer"},{"attributes":{},"id":"2359","type":"BasicTickFormatter"},{"attributes":{},"id":"2318","type":"BasicTicker"},{"attributes":{"text":""},"id":"2356","type":"Title"},{"attributes":{},"id":"2311","type":"LinearScale"},{"attributes":{},"id":"2326","type":"HelpTool"},{"attributes":{},"id":"2362","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"2358"},"ticker":{"id":"2318"}},"id":"2317","type":"LinearAxis"},{"attributes":{},"id":"2363","type":"Selection"},{"attributes":{},"id":"2307","type":"DataRange1d"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"2363"},"selection_policy":{"id":"2362"}},"id":"2336","type":"ColumnDataSource"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"]},"selected":{"id":"2365"},"selection_policy":{"id":"2364"}},"id":"2349","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2335"},"glyph":{"id":"2340"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2341"},"selection_glyph":null,"view":{"id":"2343"}},"id":"2342","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2313"},"ticker":null,"visible":false},"id":"2316","type":"Grid"},{"attributes":{"below":[{"id":"2313"}],"center":[{"id":"2316"},{"id":"2320"}],"left":[{"id":"2317"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2342"},{"id":"2347"},{"id":"2353"}],"title":{"id":"2356"},"toolbar":{"id":"2328"},"x_range":{"id":"2305"},"x_scale":{"id":"2309"},"y_range":{"id":"2307"},"y_scale":{"id":"2311"}},"id":"2304","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"2327"}},"id":"2323","type":"BoxZoomTool"},{"attributes":{},"id":"2358","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"2317"},"dimension":1,"ticker":null},"id":"2320","type":"Grid"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2361"},"selection_policy":{"id":"2360"}},"id":"2335","type":"ColumnDataSource"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2340","type":"MultiLine"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"2337","type":"FixedTicker"},{"attributes":{},"id":"2364","type":"UnionRenderers"},{"attributes":{},"id":"2365","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2341","type":"MultiLine"},{"attributes":{},"id":"2321","type":"PanTool"},{"attributes":{"source":{"id":"2349"}},"id":"2354","type":"CDSView"},{"attributes":{"data_source":{"id":"2336"},"glyph":{"id":"2345"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2346"},"selection_glyph":null,"view":{"id":"2348"}},"id":"2347","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2345","type":"MultiLine"}],"root_ids":["2304"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"30e75059-4f15-4cf6-9212-dbbb0a01302a","root_ids":["2304"],"roots":{"2304":"401bff13-84de-49d2-87bf-28dfd2d4a8ff"}}];
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