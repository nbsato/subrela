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
    
      
      
    
      var element = document.getElementById("bca73208-0bb5-4b0d-9909-d64d880468cb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bca73208-0bb5-4b0d-9909-d64d880468cb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8acb19cd-4dba-4472-9205-98c93d9194c3":{"roots":{"references":[{"attributes":{"axis":{"id":"1180"},"ticker":null},"id":"1183","type":"Grid"},{"attributes":{},"id":"1193","type":"HelpTool"},{"attributes":{"data":{"breadths":[[1.5,2.5],[2.5,4.5],[-0.5,1.5]],"group":[0,5,6],"heights":[[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392]]},"selected":{"id":"1223"},"selection_policy":{"id":"1224"}},"id":"1203","type":"ColumnDataSource"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"1207","type":"MultiLine"},{"attributes":{},"id":"1178","type":"LinearScale"},{"attributes":{"formatter":{"id":"1218"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1204"}},"id":"1184","type":"LinearAxis"},{"attributes":{"line_dash":[6],"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"1212","type":"MultiLine"},{"attributes":{},"id":"1218","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"1217","type":"Title"},{"attributes":{"formatter":{"id":"1220"},"ticker":{"id":"1181"}},"id":"1180","type":"LinearAxis"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1204","type":"FixedTicker"},{"attributes":{},"id":"1181","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1202"},"glyph":{"id":"1207"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1208"},"selection_glyph":null,"view":{"id":"1210"}},"id":"1209","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"1208","type":"MultiLine"},{"attributes":{},"id":"1188","type":"PanTool"},{"attributes":{},"id":"1221","type":"Selection"},{"attributes":{"overlay":{"id":"1194"}},"id":"1190","type":"BoxZoomTool"},{"attributes":{},"id":"1222","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1180"}],"center":[{"id":"1183"},{"id":"1187"}],"left":[{"id":"1184"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1209"},{"id":"1214"}],"title":{"id":"1217"},"toolbar":{"id":"1195"},"x_range":{"id":"1172"},"x_scale":{"id":"1176"},"y_range":{"id":"1174"},"y_scale":{"id":"1178"}},"id":"1171","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1202"}},"id":"1210","type":"CDSView"},{"attributes":{"data_source":{"id":"1203"},"glyph":{"id":"1212"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1213"},"selection_glyph":null,"view":{"id":"1215"}},"id":"1214","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1184"},"dimension":1,"ticker":null,"visible":false},"id":"1187","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"1213","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1188"},{"id":"1189"},{"id":"1190"},{"id":"1191"},{"id":"1192"},{"id":"1193"}]},"id":"1195","type":"Toolbar"},{"attributes":{},"id":"1223","type":"Selection"},{"attributes":{"source":{"id":"1203"}},"id":"1215","type":"CDSView"},{"attributes":{},"id":"1224","type":"UnionRenderers"},{"attributes":{},"id":"1176","type":"LinearScale"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#2ca02c","#2ca02c","#ff7f0e","#ff7f0e"],"group":["NaN","NaN","NaN","NaN",6,6,5,5],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"1221"},"selection_policy":{"id":"1222"}},"id":"1202","type":"ColumnDataSource"},{"attributes":{},"id":"1172","type":"DataRange1d"},{"attributes":{},"id":"1189","type":"WheelZoomTool"},{"attributes":{},"id":"1220","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1194","type":"BoxAnnotation"},{"attributes":{},"id":"1192","type":"ResetTool"},{"attributes":{},"id":"1174","type":"DataRange1d"},{"attributes":{},"id":"1191","type":"SaveTool"}],"root_ids":["1171"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"8acb19cd-4dba-4472-9205-98c93d9194c3","root_ids":["1171"],"roots":{"1171":"bca73208-0bb5-4b0d-9909-d64d880468cb"}}];
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