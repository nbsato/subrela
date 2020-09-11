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
    
      
      
    
      var element = document.getElementById("a8672cf1-9f2b-43ee-8d24-667799bb8482");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a8672cf1-9f2b-43ee-8d24-667799bb8482' but no matching script tag was found.")
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
                    
                  var docs_json = '{"990bab68-67f8-448c-a6b4-5fe13b4b41a8":{"roots":{"references":[{"attributes":{"data_source":{"id":"1288"},"glyph":{"id":"1297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1298"},"selection_glyph":null,"view":{"id":"1300"}},"id":"1299","type":"GlyphRenderer"},{"attributes":{},"id":"1257","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1293","type":"MultiLine"},{"attributes":{},"id":"1324","type":"UnionRenderers"},{"attributes":{},"id":"1318","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1279"}},"id":"1275","type":"BoxZoomTool"},{"attributes":{"source":{"id":"1287"}},"id":"1295","type":"CDSView"},{"attributes":{},"id":"1261","type":"LinearScale"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"1319"},"selection_policy":{"id":"1320"}},"id":"1287","type":"ColumnDataSource"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.0990195135927845","6.324555320336759"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"1323"},"selection_policy":{"id":"1324"}},"id":"1301","type":"ColumnDataSource"},{"attributes":{},"id":"1270","type":"BasicTicker"},{"attributes":{},"id":"1276","type":"SaveTool"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1297","type":"MultiLine"},{"attributes":{},"id":"1273","type":"PanTool"},{"attributes":{},"id":"1259","type":"DataRange1d"},{"attributes":{},"id":"1274","type":"WheelZoomTool"},{"attributes":{},"id":"1278","type":"HelpTool"},{"attributes":{"data_source":{"id":"1287"},"glyph":{"id":"1292"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1293"},"selection_glyph":null,"view":{"id":"1295"}},"id":"1294","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1298","type":"MultiLine"},{"attributes":{"filters":[{"id":"1308"}],"source":{"id":"1301"}},"id":"1309","type":"CDSView"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1292","type":"MultiLine"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1289","type":"FixedTicker"},{"attributes":{},"id":"1319","type":"Selection"},{"attributes":{},"id":"1320","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1265"},"ticker":null,"visible":false},"id":"1268","type":"Grid"},{"attributes":{},"id":"1317","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1288"}},"id":"1300","type":"CDSView"},{"attributes":{},"id":"1277","type":"ResetTool"},{"attributes":{},"id":"1322","type":"UnionRenderers"},{"attributes":{},"id":"1263","type":"LinearScale"},{"attributes":{"formatter":{"id":"1318"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1289"}},"id":"1265","type":"LinearAxis"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1312","type":"Text"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1305","type":"Text"},{"attributes":{"formatter":{"id":"1317"},"ticker":{"id":"1270"}},"id":"1269","type":"LinearAxis"},{"attributes":{},"id":"1323","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1273"},{"id":"1274"},{"id":"1275"},{"id":"1276"},{"id":"1277"},{"id":"1278"}]},"id":"1280","type":"Toolbar"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1306","type":"Text"},{"attributes":{},"id":"1321","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1279","type":"BoxAnnotation"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1311","type":"Text"},{"attributes":{"axis":{"id":"1269"},"dimension":1,"ticker":null},"id":"1272","type":"Grid"},{"attributes":{"data_source":{"id":"1301"},"glyph":{"id":"1305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1306"},"selection_glyph":null,"view":{"id":"1303"}},"id":"1307","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1265"}],"center":[{"id":"1268"},{"id":"1272"}],"left":[{"id":"1269"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1294"},{"id":"1299"},{"id":"1307"},{"id":"1313"}],"title":{"id":"1315"},"toolbar":{"id":"1280"},"x_range":{"id":"1257"},"x_scale":{"id":"1261"},"y_range":{"id":"1259"},"y_scale":{"id":"1263"}},"id":"1256","subtype":"Figure","type":"Plot"},{"attributes":{"text":""},"id":"1315","type":"Title"},{"attributes":{"column_name":"side","group":"first"},"id":"1302","type":"GroupFilter"},{"attributes":{"column_name":"side","group":"last"},"id":"1308","type":"GroupFilter"},{"attributes":{"data_source":{"id":"1301"},"glyph":{"id":"1311"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1312"},"selection_glyph":null,"view":{"id":"1309"}},"id":"1313","type":"GlyphRenderer"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"1321"},"selection_policy":{"id":"1322"}},"id":"1288","type":"ColumnDataSource"},{"attributes":{"filters":[{"id":"1302"}],"source":{"id":"1301"}},"id":"1303","type":"CDSView"}],"root_ids":["1256"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"990bab68-67f8-448c-a6b4-5fe13b4b41a8","root_ids":["1256"],"roots":{"1256":"a8672cf1-9f2b-43ee-8d24-667799bb8482"}}];
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