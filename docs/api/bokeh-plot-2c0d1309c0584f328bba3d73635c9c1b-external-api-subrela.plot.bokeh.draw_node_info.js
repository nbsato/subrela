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
    
      
      
    
      var element = document.getElementById("f1b1dd8a-01df-449f-ba72-7533fecc6fb2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1b1dd8a-01df-449f-ba72-7533fecc6fb2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"aa5ba144-e48c-4350-bdc2-79a92043b2ae":{"roots":{"references":[{"attributes":{"formatter":{"id":"1422"},"ticker":{"id":"1376"}},"id":"1375","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1404","type":"MultiLine"},{"attributes":{"column_name":"side","group":"last"},"id":"1414","type":"GroupFilter"},{"attributes":{},"id":"1363","type":"DataRange1d"},{"attributes":{"filters":[{"id":"1408"}],"source":{"id":"1407"}},"id":"1409","type":"CDSView"},{"attributes":{},"id":"1376","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1385","type":"BoxAnnotation"},{"attributes":{},"id":"1422","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1393"}},"id":"1401","type":"CDSView"},{"attributes":{},"id":"1369","type":"LinearScale"},{"attributes":{},"id":"1384","type":"HelpTool"},{"attributes":{},"id":"1383","type":"ResetTool"},{"attributes":{"axis":{"id":"1375"},"dimension":1,"ticker":null},"id":"1378","type":"Grid"},{"attributes":{"text":""},"id":"1420","type":"Title"},{"attributes":{"data_source":{"id":"1393"},"glyph":{"id":"1398"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1399"},"selection_glyph":null,"view":{"id":"1401"}},"id":"1400","type":"GlyphRenderer"},{"attributes":{"filters":[{"id":"1414"}],"source":{"id":"1407"}},"id":"1415","type":"CDSView"},{"attributes":{},"id":"1428","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1407"},"glyph":{"id":"1411"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1412"},"selection_glyph":null,"view":{"id":"1409"}},"id":"1413","type":"GlyphRenderer"},{"attributes":{},"id":"1425","type":"Selection"},{"attributes":{"below":[{"id":"1371"}],"center":[{"id":"1374"},{"id":"1378"}],"left":[{"id":"1375"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1400"},{"id":"1405"},{"id":"1413"},{"id":"1419"}],"title":{"id":"1420"},"toolbar":{"id":"1386"},"x_range":{"id":"1363"},"x_scale":{"id":"1367"},"y_range":{"id":"1365"},"y_scale":{"id":"1369"}},"id":"1362","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1380","type":"WheelZoomTool"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1403","type":"MultiLine"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1411","type":"Text"},{"attributes":{"source":{"id":"1394"}},"id":"1406","type":"CDSView"},{"attributes":{},"id":"1382","type":"SaveTool"},{"attributes":{"overlay":{"id":"1385"}},"id":"1381","type":"BoxZoomTool"},{"attributes":{},"id":"1430","type":"UnionRenderers"},{"attributes":{"column_name":"side","group":"first"},"id":"1408","type":"GroupFilter"},{"attributes":{},"id":"1365","type":"DataRange1d"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"1429"},"selection_policy":{"id":"1430"}},"id":"1407","type":"ColumnDataSource"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1412","type":"Text"},{"attributes":{"data_source":{"id":"1394"},"glyph":{"id":"1403"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1404"},"selection_glyph":null,"view":{"id":"1406"}},"id":"1405","type":"GlyphRenderer"},{"attributes":{},"id":"1426","type":"UnionRenderers"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1395","type":"FixedTicker"},{"attributes":{},"id":"1429","type":"Selection"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"1427"},"selection_policy":{"id":"1428"}},"id":"1394","type":"ColumnDataSource"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"1425"},"selection_policy":{"id":"1426"}},"id":"1393","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1399","type":"MultiLine"},{"attributes":{},"id":"1427","type":"Selection"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1417","type":"Text"},{"attributes":{},"id":"1424","type":"BasicTickFormatter"},{"attributes":{},"id":"1379","type":"PanTool"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1418","type":"Text"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1398","type":"MultiLine"},{"attributes":{"data_source":{"id":"1407"},"glyph":{"id":"1417"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1418"},"selection_glyph":null,"view":{"id":"1415"}},"id":"1419","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1424"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1395"}},"id":"1371","type":"LinearAxis"},{"attributes":{"axis":{"id":"1371"},"ticker":null,"visible":false},"id":"1374","type":"Grid"},{"attributes":{},"id":"1367","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1379"},{"id":"1380"},{"id":"1381"},{"id":"1382"},{"id":"1383"},{"id":"1384"}]},"id":"1386","type":"Toolbar"}],"root_ids":["1362"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"aa5ba144-e48c-4350-bdc2-79a92043b2ae","root_ids":["1362"],"roots":{"1362":"f1b1dd8a-01df-449f-ba72-7533fecc6fb2"}}];
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