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
    
      
      
    
      var element = document.getElementById("52e97844-b45b-4ff6-be54-aeb41c26dbf4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '52e97844-b45b-4ff6-be54-aeb41c26dbf4' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
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
                    
                  var docs_json = '{&quot;b1ec2f27-22b4-448e-ba77-61ca6559f9b2&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;text&quot;:{&quot;field&quot;:&quot;info_text&quot;},&quot;text_align&quot;:&quot;right&quot;,&quot;text_alpha&quot;:{&quot;value&quot;:0.1},&quot;text_baseline&quot;:&quot;alphabetic&quot;,&quot;text_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;breadth&quot;},&quot;x_offset&quot;:{&quot;field&quot;:&quot;x_offset&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;height&quot;},&quot;y_offset&quot;:{&quot;field&quot;:&quot;y_offset&quot;}},&quot;id&quot;:&quot;1454&quot;,&quot;type&quot;:&quot;Text&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1421&quot;},{&quot;id&quot;:&quot;1422&quot;},{&quot;id&quot;:&quot;1423&quot;},{&quot;id&quot;:&quot;1424&quot;},{&quot;id&quot;:&quot;1425&quot;},{&quot;id&quot;:&quot;1426&quot;}]},&quot;id&quot;:&quot;1428&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1436&quot;}},&quot;id&quot;:&quot;1448&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1449&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1459&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1460&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1457&quot;}},&quot;id&quot;:&quot;1461&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1422&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1427&quot;}},&quot;id&quot;:&quot;1423&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1435&quot;}},&quot;id&quot;:&quot;1443&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;text&quot;:{&quot;field&quot;:&quot;info_text&quot;},&quot;text_baseline&quot;:&quot;alphabetic&quot;,&quot;text_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;breadth&quot;},&quot;x_offset&quot;:{&quot;field&quot;:&quot;x_offset&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;height&quot;},&quot;y_offset&quot;:{&quot;field&quot;:&quot;y_offset&quot;}},&quot;id&quot;:&quot;1459&quot;,&quot;type&quot;:&quot;Text&quot;},{&quot;attributes&quot;:{&quot;line_dash&quot;:[6],&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;1445&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1468&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1424&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1405&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:{&quot;field&quot;:&quot;info_text&quot;},&quot;text_alpha&quot;:{&quot;value&quot;:0.1},&quot;text_baseline&quot;:&quot;alphabetic&quot;,&quot;text_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;breadth&quot;},&quot;x_offset&quot;:{&quot;field&quot;:&quot;x_offset&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;height&quot;},&quot;y_offset&quot;:{&quot;field&quot;:&quot;y_offset&quot;}},&quot;id&quot;:&quot;1460&quot;,&quot;type&quot;:&quot;Text&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1427&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1449&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1453&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1454&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1451&quot;}},&quot;id&quot;:&quot;1455&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;column_name&quot;:&quot;side&quot;,&quot;group&quot;:&quot;last&quot;},&quot;id&quot;:&quot;1456&quot;,&quot;type&quot;:&quot;GroupFilter&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1464&quot;},&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;3&quot;,&quot;1&quot;:&quot;4&quot;,&quot;2&quot;:&quot;0&quot;,&quot;3&quot;:&quot;1&quot;,&quot;4&quot;:&quot;2&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1437&quot;}},&quot;id&quot;:&quot;1413&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1436&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1445&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1446&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1448&quot;}},&quot;id&quot;:&quot;1447&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1425&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1418&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1470&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1413&quot;},&quot;ticker&quot;:null,&quot;visible&quot;:false},&quot;id&quot;:&quot;1416&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1469&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1435&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1440&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1441&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1443&quot;}},&quot;id&quot;:&quot;1442&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1413&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1416&quot;},{&quot;id&quot;:&quot;1420&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1417&quot;}],&quot;plot_height&quot;:300,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1442&quot;},{&quot;id&quot;:&quot;1447&quot;},{&quot;id&quot;:&quot;1455&quot;},{&quot;id&quot;:&quot;1461&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1463&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1428&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1405&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1409&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1407&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1411&quot;}},&quot;id&quot;:&quot;1404&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1417&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1420&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;field&quot;:&quot;color&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;1440&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1466&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadths&quot;:{&quot;__ndarray__&quot;:&quot;&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[0]},&quot;group&quot;:[],&quot;heights&quot;:{&quot;__ndarray__&quot;:&quot;&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[0]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1470&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1471&quot;}},&quot;id&quot;:&quot;1436&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;filters&quot;:[{&quot;id&quot;:&quot;1456&quot;}],&quot;source&quot;:{&quot;id&quot;:&quot;1449&quot;}},&quot;id&quot;:&quot;1457&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1471&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1464&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1466&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1418&quot;}},&quot;id&quot;:&quot;1417&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[2,3,4,0,1]},&quot;id&quot;:&quot;1437&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1472&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1473&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1407&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;field&quot;:&quot;color&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;1441&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;filters&quot;:[{&quot;id&quot;:&quot;1450&quot;}],&quot;source&quot;:{&quot;id&quot;:&quot;1449&quot;}},&quot;id&quot;:&quot;1451&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;1463&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadth&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[9]},&quot;children&quot;:[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],&quot;cluster&quot;:[0,1,2,3,4,5,6,7,8],&quot;height&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[9]},&quot;info_text&quot;:[&quot;0.0&quot;,&quot;0.0&quot;,&quot;0.0&quot;,&quot;0.0&quot;,&quot;0.0&quot;,&quot;2.0&quot;,&quot;4.0&quot;,&quot;5.1&quot;,&quot;6.3&quot;],&quot;is_group&quot;:[false,false,false,false,false,false,false,false,false],&quot;side&quot;:[&quot;first&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;last&quot;],&quot;x_offset&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[9]},&quot;y_offset&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[9]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1472&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1473&quot;}},&quot;id&quot;:&quot;1449&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1426&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_dash&quot;:[6],&quot;xs&quot;:{&quot;field&quot;:&quot;breadths&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;heights&quot;}},&quot;id&quot;:&quot;1446&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1411&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;breadths&quot;:[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],&quot;cluster&quot;:[8,8,7,7,6,6,5,5],&quot;color&quot;:[&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;,&quot;#1f77b4&quot;],&quot;group&quot;:[&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;,&quot;NaN&quot;],&quot;heights&quot;:[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],&quot;side&quot;:[&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;,&quot;first&quot;,&quot;last&quot;]},&quot;selected&quot;:{&quot;id&quot;:&quot;1468&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1469&quot;}},&quot;id&quot;:&quot;1435&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1421&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1409&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;column_name&quot;:&quot;side&quot;,&quot;group&quot;:&quot;first&quot;},&quot;id&quot;:&quot;1450&quot;,&quot;type&quot;:&quot;GroupFilter&quot;},{&quot;attributes&quot;:{&quot;text&quot;:{&quot;field&quot;:&quot;info_text&quot;},&quot;text_align&quot;:&quot;right&quot;,&quot;text_baseline&quot;:&quot;alphabetic&quot;,&quot;text_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;breadth&quot;},&quot;x_offset&quot;:{&quot;field&quot;:&quot;x_offset&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;height&quot;},&quot;y_offset&quot;:{&quot;field&quot;:&quot;y_offset&quot;}},&quot;id&quot;:&quot;1453&quot;,&quot;type&quot;:&quot;Text&quot;}],&quot;root_ids&quot;:[&quot;1404&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"b1ec2f27-22b4-448e-ba77-61ca6559f9b2","root_ids":["1404"],"roots":{"1404":"52e97844-b45b-4ff6-be54-aeb41c26dbf4"}}];
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