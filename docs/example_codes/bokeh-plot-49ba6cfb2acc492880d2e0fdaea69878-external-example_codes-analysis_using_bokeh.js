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
    
      
      
    
      var element = document.getElementById("c6e25dae-a0e4-488b-a5f6-e5bcbacf11ce");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c6e25dae-a0e4-488b-a5f6-e5bcbacf11ce' but no matching script tag was found.")
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
                    
                  var docs_json = '{"bd4ed97f-bdff-4efd-be5d-709f6cc8914c":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2541","type":"MultiLine"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"top","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2559","type":"Text"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2553","type":"Text"},{"attributes":{},"id":"2574","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2595"},"glyph":{"id":"2600"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2601"},"selection_glyph":null,"view":{"id":"2603"}},"id":"2602","type":"GlyphRenderer"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#2ca02c","#2ca02c","#ff7f0e","#ff7f0e"],"group":["NaN","NaN","NaN","NaN",6,6,5,5],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2644"},"selection_policy":{"id":"2645"}},"id":"2595","type":"ColumnDataSource"},{"attributes":{},"id":"2648","type":"Selection"},{"attributes":{"data_source":{"id":"2535"},"glyph":{"id":"2540"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2541"},"selection_glyph":null,"view":{"id":"2543"}},"id":"2542","type":"GlyphRenderer"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2613","type":"Text"},{"attributes":{},"id":"2638","type":"UnionRenderers"},{"attributes":{"column_name":"side","group":"last"},"id":"2616","type":"GroupFilter"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.1","0.2","0.3","0.1","0.5","",""],"is_group":[true,false,false,false,false,true,true,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"2641"},"selection_policy":{"id":"2642"}},"id":"2549","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2549"},"glyph":{"id":"2553"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2554"},"selection_glyph":null,"view":{"id":"2551"}},"id":"2555","type":"GlyphRenderer"},{"attributes":{},"id":"2585","type":"ResetTool"},{"attributes":{"source":{"id":"2596"}},"id":"2608","type":"CDSView"},{"attributes":{},"id":"2649","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2601","type":"MultiLine"},{"attributes":{"filters":[{"id":"2616"}],"source":{"id":"2609"}},"id":"2617","type":"CDSView"},{"attributes":{"source":{"id":"2536"}},"id":"2548","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2581"},{"id":"2582"},{"id":"2583"},{"id":"2584"},{"id":"2585"},{"id":"2586"}]},"id":"2588","type":"Toolbar"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2614","type":"Text"},{"attributes":{"start":0},"id":"2505","type":"DataRange1d"},{"attributes":{"text":"weak relevance"},"id":"2563","type":"Title"},{"attributes":{},"id":"2635","type":"BasicTickFormatter"},{"attributes":{},"id":"2646","type":"Selection"},{"attributes":{},"id":"2584","type":"SaveTool"},{"attributes":{"filters":[{"id":"2550"}],"source":{"id":"2549"}},"id":"2551","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2587","type":"BoxAnnotation"},{"attributes":{"filters":[{"id":"2610"}],"source":{"id":"2609"}},"id":"2611","type":"CDSView"},{"attributes":{},"id":"2569","type":"LinearScale"},{"attributes":{},"id":"2644","type":"Selection"},{"attributes":{"data":{"breadths":[[1.5,2.5],[2.5,4.5],[-0.5,1.5]],"group":[0,5,6],"heights":[[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392]]},"selected":{"id":"2639"},"selection_policy":{"id":"2640"}},"id":"2536","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2606","type":"MultiLine"},{"attributes":{"formatter":{"id":"2634"},"major_label_overrides":{"0":"feature_D","1":"feature_E","2":"feature_A","3":"feature_B","4":"feature_C"},"ticker":{"id":"2597"}},"id":"2577","type":"LinearAxis"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"top","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2560","type":"Text"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"top","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2619","type":"Text"},{"attributes":{},"id":"2647","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"2635"},"ticker":{"id":"2574"}},"id":"2573","type":"LinearAxis"},{"attributes":{"text":"strong relevance"},"id":"2503","type":"Title"},{"attributes":{},"id":"2640","type":"UnionRenderers"},{"attributes":{"source":{"id":"2595"}},"id":"2603","type":"CDSView"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"2537","type":"FixedTicker"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"top","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2620","type":"Text"},{"attributes":{"overlay":{"id":"2587"}},"id":"2583","type":"BoxZoomTool"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#2ca02c","#2ca02c","#ff7f0e","#ff7f0e"],"group":["NaN","NaN","NaN","NaN",6,6,5,5],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2637"},"selection_policy":{"id":"2638"}},"id":"2535","type":"ColumnDataSource"},{"attributes":{},"id":"2645","type":"UnionRenderers"},{"attributes":{"column_name":"side","group":"last"},"id":"2556","type":"GroupFilter"},{"attributes":{},"id":"2511","type":"LinearScale"},{"attributes":{"children":[{"id":"2502"},{"id":"2562"}]},"id":"2628","type":"Row"},{"attributes":{"formatter":{"id":"2631"},"major_label_overrides":{"0":"feature_D","1":"feature_E","2":"feature_A","3":"feature_B","4":"feature_C"},"ticker":{"id":"2537"}},"id":"2517","type":"LinearAxis"},{"attributes":{},"id":"2642","type":"UnionRenderers"},{"attributes":{"source":{"id":"2622"}},"id":"2627","type":"CDSView"},{"attributes":{"axis":{"id":"2517"},"dimension":1,"ticker":null,"visible":false},"id":"2520","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2546","type":"MultiLine"},{"attributes":{},"id":"2632","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2609"},"glyph":{"id":"2613"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2614"},"selection_glyph":null,"view":{"id":"2611"}},"id":"2615","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_width":{"value":2},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2625","type":"MultiLine"},{"attributes":{},"id":"2641","type":"Selection"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"2597","type":"FixedTicker"},{"attributes":{"data_source":{"id":"2536"},"glyph":{"id":"2545"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2546"},"selection_glyph":null,"view":{"id":"2548"}},"id":"2547","type":"GlyphRenderer"},{"attributes":{},"id":"2514","type":"BasicTicker"},{"attributes":{"column_name":"side","group":"first"},"id":"2610","type":"GroupFilter"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2600","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2527","type":"BoxAnnotation"},{"attributes":{"data":{"breadths":[[1.5,2.5],[2.5,4.5],[-0.5,1.5]],"group":[0,5,6],"heights":[[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392],[4.549509756796392,4.549509756796392]]},"selected":{"id":"2646"},"selection_policy":{"id":"2647"}},"id":"2596","type":"ColumnDataSource"},{"attributes":{},"id":"2651","type":"UnionRenderers"},{"attributes":{"below":[{"id":"2573"}],"center":[{"id":"2576"},{"id":"2580"}],"left":[{"id":"2577"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2602"},{"id":"2607"},{"id":"2615"},{"id":"2621"},{"id":"2626"}],"title":{"id":"2563"},"toolbar":{"id":"2588"},"x_range":{"id":"2565"},"x_scale":{"id":"2569"},"y_range":{"id":"2567"},"y_scale":{"id":"2571"}},"id":"2562","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"2513"},"ticker":null},"id":"2516","type":"Grid"},{"attributes":{},"id":"2581","type":"PanTool"},{"attributes":{"formatter":{"id":"2632"},"ticker":{"id":"2514"}},"id":"2513","type":"LinearAxis"},{"attributes":{},"id":"2637","type":"Selection"},{"attributes":{"flipped":true},"id":"2567","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2622"},"glyph":{"id":"2624"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2625"},"selection_glyph":null,"view":{"id":"2627"}},"id":"2626","type":"GlyphRenderer"},{"attributes":{},"id":"2582","type":"WheelZoomTool"},{"attributes":{},"id":"2509","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2521"},{"id":"2522"},{"id":"2523"},{"id":"2524"},{"id":"2525"},{"id":"2526"}]},"id":"2528","type":"Toolbar"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2540","type":"MultiLine"},{"attributes":{"filters":[{"id":"2556"}],"source":{"id":"2549"}},"id":"2557","type":"CDSView"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"height"},"x_offset":{"field":"x_offset"},"y":{"field":"breadth"},"y_offset":{"field":"y_offset"}},"id":"2554","type":"Text"},{"attributes":{},"id":"2525","type":"ResetTool"},{"attributes":{},"id":"2650","type":"Selection"},{"attributes":{},"id":"2522","type":"WheelZoomTool"},{"attributes":{"line_dash":[6],"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2605","type":"MultiLine"},{"attributes":{"data_source":{"id":"2549"},"glyph":{"id":"2559"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2560"},"selection_glyph":null,"view":{"id":"2557"}},"id":"2561","type":"GlyphRenderer"},{"attributes":{"data":{"breadths":[[3.5,3.5],[3.5,4.0,4.0],[0.5,0.5],[0.5,0.0,0.0],[0.5,1.0,1.0]],"group":[5,5,6,6,6],"heights":[[4.549509756796392,2.0],[2.0,2.0,0.0],[4.549509756796392,4.0],[4.0,4.0,0.0],[4.0,4.0,0.0]]},"selected":{"id":"2650"},"selection_policy":{"id":"2651"}},"id":"2622","type":"ColumnDataSource"},{"attributes":{},"id":"2526","type":"HelpTool"},{"attributes":{},"id":"2639","type":"Selection"},{"attributes":{},"id":"2524","type":"SaveTool"},{"attributes":{},"id":"2571","type":"LinearScale"},{"attributes":{"data_source":{"id":"2596"},"glyph":{"id":"2605"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2606"},"selection_glyph":null,"view":{"id":"2608"}},"id":"2607","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2609"},"glyph":{"id":"2619"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2620"},"selection_glyph":null,"view":{"id":"2617"}},"id":"2621","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2513"}],"center":[{"id":"2516"},{"id":"2520"}],"left":[{"id":"2517"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2542"},{"id":"2547"},{"id":"2555"},{"id":"2561"}],"title":{"id":"2503"},"toolbar":{"id":"2528"},"x_range":{"id":"2505"},"x_scale":{"id":"2509"},"y_range":{"id":"2507"},"y_scale":{"id":"2511"}},"id":"2502","subtype":"Figure","type":"Plot"},{"attributes":{"line_dash":[6],"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2545","type":"MultiLine"},{"attributes":{"column_name":"side","group":"first"},"id":"2550","type":"GroupFilter"},{"attributes":{},"id":"2521","type":"PanTool"},{"attributes":{},"id":"2586","type":"HelpTool"},{"attributes":{},"id":"2631","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"2573"},"ticker":null},"id":"2576","type":"Grid"},{"attributes":{"overlay":{"id":"2527"}},"id":"2523","type":"BoxZoomTool"},{"attributes":{"start":0},"id":"2565","type":"DataRange1d"},{"attributes":{"line_width":{"value":2},"xs":{"field":"heights"},"ys":{"field":"breadths"}},"id":"2624","type":"MultiLine"},{"attributes":{},"id":"2634","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2535"}},"id":"2543","type":"CDSView"},{"attributes":{"flipped":true},"id":"2507","type":"DataRange1d"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["-0.1","0.0","0.1","0.2","0.3","0.1","0.5","",""],"is_group":[true,false,false,false,false,true,true,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"2648"},"selection_policy":{"id":"2649"}},"id":"2609","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"2577"},"dimension":1,"ticker":null,"visible":false},"id":"2580","type":"Grid"}],"root_ids":["2628"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"bd4ed97f-bdff-4efd-be5d-709f6cc8914c","root_ids":["2628"],"roots":{"2628":"c6e25dae-a0e4-488b-a5f6-e5bcbacf11ce"}}];
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