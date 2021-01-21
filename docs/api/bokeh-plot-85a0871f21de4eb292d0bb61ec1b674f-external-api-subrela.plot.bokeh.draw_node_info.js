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
    
      
      
    
      var element = document.getElementById("6d2ec5fa-150e-44bb-a74e-03a2d851e3b5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6d2ec5fa-150e-44bb-a74e-03a2d851e3b5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6899c21c-45ad-49b1-ab0f-b4c9fa7cf87f":{"roots":{"references":[{"attributes":{},"id":"1488","type":"WheelZoomTool"},{"attributes":{},"id":"1665","type":"Selection"},{"attributes":{},"id":"1491","type":"ResetTool"},{"attributes":{"angle":{"units":"deg","value":90},"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1519","type":"Text"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"1679"},"selection_policy":{"id":"1680"}},"id":"1635","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1511","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1632","type":"MultiLine"},{"attributes":{},"id":"1663","type":"Selection"},{"attributes":{"angle":{"units":"deg","value":90},"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1520","type":"Text"},{"attributes":{},"id":"1671","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1515"},"glyph":{"id":"1519"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1520"},"selection_glyph":null,"view":{"id":"1517"}},"id":"1521","type":"GlyphRenderer"},{"attributes":{},"id":"1676","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1483"},"dimension":1,"ticker":null},"id":"1486","type":"Grid"},{"attributes":{"filters":[{"id":"1516"}],"source":{"id":"1515"}},"id":"1517","type":"CDSView"},{"attributes":{},"id":"1548","type":"WheelZoomTool"},{"attributes":{},"id":"1679","type":"Selection"},{"attributes":{"formatter":{"id":"1657"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1563"}},"id":"1539","type":"LinearAxis"},{"attributes":{},"id":"1677","type":"Selection"},{"attributes":{"children":[[{"id":"1468"},0,0,1,1],[{"id":"1528"},0,1,1,1],[{"id":"1588"},1,0,1,2]]},"id":"1648","type":"GridBox"},{"attributes":{},"id":"1669","type":"UnionRenderers"},{"attributes":{},"id":"1675","type":"Selection"},{"attributes":{},"id":"1654","type":"BasicTickFormatter"},{"attributes":{},"id":"1668","type":"Selection"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1626","type":"MultiLine"},{"attributes":{"filters":[{"id":"1522"}],"source":{"id":"1515"}},"id":"1523","type":"CDSView"},{"attributes":{},"id":"1490","type":"SaveTool"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1640","type":"Text"},{"attributes":{},"id":"1597","type":"LinearScale"},{"attributes":{"source":{"id":"1502"}},"id":"1514","type":"CDSView"},{"attributes":{"formatter":{"id":"1660"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1623"}},"id":"1599","type":"LinearAxis"},{"attributes":{"column_name":"side","group":"first"},"id":"1516","type":"GroupFilter"},{"attributes":{},"id":"1547","type":"PanTool"},{"attributes":{},"id":"1531","type":"DataRange1d"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1506","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1547"},{"id":"1548"},{"id":"1549"},{"id":"1550"},{"id":"1551"},{"id":"1552"}]},"id":"1554","type":"Toolbar"},{"attributes":{"data_source":{"id":"1635"},"glyph":{"id":"1639"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1640"},"selection_glyph":null,"view":{"id":"1637"}},"id":"1641","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1501"}},"id":"1509","type":"CDSView"},{"attributes":{"data_source":{"id":"1622"},"glyph":{"id":"1631"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1632"},"selection_glyph":null,"view":{"id":"1634"}},"id":"1633","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1553"}},"id":"1549","type":"BoxZoomTool"},{"attributes":{},"id":"1544","type":"BasicTicker"},{"attributes":{"axis":{"id":"1599"},"ticker":null,"visible":false},"id":"1602","type":"Grid"},{"attributes":{},"id":"1612","type":"HelpTool"},{"attributes":{},"id":"1611","type":"ResetTool"},{"attributes":{},"id":"1550","type":"SaveTool"},{"attributes":{"axis":{"id":"1543"},"dimension":1,"ticker":null},"id":"1546","type":"Grid"},{"attributes":{},"id":"1678","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1502"},"glyph":{"id":"1511"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1512"},"selection_glyph":null,"view":{"id":"1514"}},"id":"1513","type":"GlyphRenderer"},{"attributes":{},"id":"1666","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1658"},"ticker":{"id":"1604"}},"id":"1603","type":"LinearAxis"},{"attributes":{"below":[{"id":"1599"}],"center":[{"id":"1602"},{"id":"1606"}],"left":[{"id":"1603"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1628"},{"id":"1633"},{"id":"1641"},{"id":"1647"}],"title":{"id":"1589"},"toolbar":{"id":"1614"},"x_range":{"id":"1591"},"x_scale":{"id":"1595"},"y_range":{"id":"1593"},"y_scale":{"id":"1597"}},"id":"1588","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"1603"},"dimension":1,"ticker":null},"id":"1606","type":"Grid"},{"attributes":{"data_source":{"id":"1515"},"glyph":{"id":"1525"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1526"},"selection_glyph":null,"view":{"id":"1523"}},"id":"1527","type":"GlyphRenderer"},{"attributes":{},"id":"1658","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"deg","value":90},"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"top","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1526","type":"Text"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1645","type":"Text"},{"attributes":{"text":"angle = -90"},"id":"1529","type":"Title"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"1668"},"selection_policy":{"id":"1669"}},"id":"1561","type":"ColumnDataSource"},{"attributes":{},"id":"1608","type":"WheelZoomTool"},{"attributes":{"filters":[{"id":"1636"}],"source":{"id":"1635"}},"id":"1637","type":"CDSView"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"1672"},"selection_policy":{"id":"1673"}},"id":"1575","type":"ColumnDataSource"},{"attributes":{},"id":"1672","type":"Selection"},{"attributes":{},"id":"1492","type":"HelpTool"},{"attributes":{"below":[{"id":"1479"}],"center":[{"id":"1482"},{"id":"1486"}],"left":[{"id":"1483"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1508"},{"id":"1513"},{"id":"1521"},{"id":"1527"}],"title":{"id":"1469"},"toolbar":{"id":"1494"},"x_range":{"id":"1471"},"x_scale":{"id":"1475"},"y_range":{"id":"1473"},"y_scale":{"id":"1477"}},"id":"1468","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1512","type":"MultiLine"},{"attributes":{},"id":"1604","type":"BasicTicker"},{"attributes":{},"id":"1487","type":"PanTool"},{"attributes":{},"id":"1673","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1607"},{"id":"1608"},{"id":"1609"},{"id":"1610"},{"id":"1611"},{"id":"1612"}]},"id":"1614","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1507","type":"MultiLine"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1631","type":"MultiLine"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1639","type":"Text"},{"attributes":{},"id":"1662","type":"UnionRenderers"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"1665"},"selection_policy":{"id":"1666"}},"id":"1515","type":"ColumnDataSource"},{"attributes":{"filters":[{"id":"1642"}],"source":{"id":"1635"}},"id":"1643","type":"CDSView"},{"attributes":{"source":{"id":"1621"}},"id":"1629","type":"CDSView"},{"attributes":{},"id":"1610","type":"SaveTool"},{"attributes":{"angle":{"units":"deg","value":90},"text":{"field":"info_text"},"text_baseline":"top","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1525","type":"Text"},{"attributes":{},"id":"1607","type":"PanTool"},{"attributes":{"formatter":{"id":"1655"},"ticker":{"id":"1544"}},"id":"1543","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1613"}},"id":"1609","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"1539"},"ticker":null,"visible":false},"id":"1542","type":"Grid"},{"attributes":{},"id":"1660","type":"BasicTickFormatter"},{"attributes":{},"id":"1652","type":"BasicTickFormatter"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1646","type":"Text"},{"attributes":{"column_name":"side","group":"last"},"id":"1522","type":"GroupFilter"},{"attributes":{"data_source":{"id":"1635"},"glyph":{"id":"1645"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1646"},"selection_glyph":null,"view":{"id":"1643"}},"id":"1647","type":"GlyphRenderer"},{"attributes":{},"id":"1680","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1487"},{"id":"1488"},{"id":"1489"},{"id":"1490"},{"id":"1491"},{"id":"1492"}]},"id":"1494","type":"Toolbar"},{"attributes":{},"id":"1552","type":"HelpTool"},{"attributes":{"column_name":"side","group":"last"},"id":"1642","type":"GroupFilter"},{"attributes":{"overlay":{"id":"1493"}},"id":"1489","type":"BoxZoomTool"},{"attributes":{},"id":"1551","type":"ResetTool"},{"attributes":{"angle":{"units":"deg","value":-90},"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"top","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1580","type":"Text"},{"attributes":{"angle":{"units":"deg","value":-90},"text":{"field":"info_text"},"text_align":"right","text_baseline":"top","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1579","type":"Text"},{"attributes":{"data_source":{"id":"1562"},"glyph":{"id":"1571"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1572"},"selection_glyph":null,"view":{"id":"1574"}},"id":"1573","type":"GlyphRenderer"},{"attributes":{},"id":"1473","type":"DataRange1d"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"1670"},"selection_policy":{"id":"1671"}},"id":"1562","type":"ColumnDataSource"},{"attributes":{},"id":"1657","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1627","type":"MultiLine"},{"attributes":{},"id":"1533","type":"DataRange1d"},{"attributes":{},"id":"1484","type":"BasicTicker"},{"attributes":{"axis":{"id":"1479"},"ticker":null,"visible":false},"id":"1482","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1613","type":"BoxAnnotation"},{"attributes":{"column_name":"side","group":"first"},"id":"1576","type":"GroupFilter"},{"attributes":{"column_name":"side","group":"first"},"id":"1636","type":"GroupFilter"},{"attributes":{"data_source":{"id":"1561"},"glyph":{"id":"1566"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1567"},"selection_glyph":null,"view":{"id":"1569"}},"id":"1568","type":"GlyphRenderer"},{"attributes":{"filters":[{"id":"1576"}],"source":{"id":"1575"}},"id":"1577","type":"CDSView"},{"attributes":{"angle":{"units":"deg","value":-90},"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1585","type":"Text"},{"attributes":{},"id":"1595","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1572","type":"MultiLine"},{"attributes":{"data_source":{"id":"1575"},"glyph":{"id":"1585"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1586"},"selection_glyph":null,"view":{"id":"1583"}},"id":"1587","type":"GlyphRenderer"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"1677"},"selection_policy":{"id":"1678"}},"id":"1622","type":"ColumnDataSource"},{"attributes":{},"id":"1593","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1575"},"glyph":{"id":"1579"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1580"},"selection_glyph":null,"view":{"id":"1577"}},"id":"1581","type":"GlyphRenderer"},{"attributes":{},"id":"1655","type":"BasicTickFormatter"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1563","type":"FixedTicker"},{"attributes":{"data_source":{"id":"1501"},"glyph":{"id":"1506"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1507"},"selection_glyph":null,"view":{"id":"1509"}},"id":"1508","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1553","type":"BoxAnnotation"},{"attributes":{"text":"angle = 0"},"id":"1589","type":"Title"},{"attributes":{},"id":"1591","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1652"},"ticker":{"id":"1484"}},"id":"1483","type":"LinearAxis"},{"attributes":{"source":{"id":"1562"}},"id":"1574","type":"CDSView"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1503","type":"FixedTicker"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1566","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1493","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1621"},"glyph":{"id":"1626"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1627"},"selection_glyph":null,"view":{"id":"1629"}},"id":"1628","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1571","type":"MultiLine"},{"attributes":{"column_name":"side","group":"last"},"id":"1582","type":"GroupFilter"},{"attributes":{},"id":"1477","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1567","type":"MultiLine"},{"attributes":{"source":{"id":"1561"}},"id":"1569","type":"CDSView"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"1663"},"selection_policy":{"id":"1664"}},"id":"1502","type":"ColumnDataSource"},{"attributes":{},"id":"1670","type":"Selection"},{"attributes":{"filters":[{"id":"1582"}],"source":{"id":"1575"}},"id":"1583","type":"CDSView"},{"attributes":{},"id":"1661","type":"Selection"},{"attributes":{"angle":{"units":"deg","value":-90},"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1586","type":"Text"},{"attributes":{},"id":"1664","type":"UnionRenderers"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"1661"},"selection_policy":{"id":"1662"}},"id":"1501","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1622"}},"id":"1634","type":"CDSView"},{"attributes":{},"id":"1471","type":"DataRange1d"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1623","type":"FixedTicker"},{"attributes":{},"id":"1535","type":"LinearScale"},{"attributes":{},"id":"1475","type":"LinearScale"},{"attributes":{},"id":"1537","type":"LinearScale"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"1675"},"selection_policy":{"id":"1676"}},"id":"1621","type":"ColumnDataSource"},{"attributes":{"text":"angle = 90"},"id":"1469","type":"Title"},{"attributes":{"formatter":{"id":"1654"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1503"}},"id":"1479","type":"LinearAxis"},{"attributes":{"below":[{"id":"1539"}],"center":[{"id":"1542"},{"id":"1546"}],"left":[{"id":"1543"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1568"},{"id":"1573"},{"id":"1581"},{"id":"1587"}],"title":{"id":"1529"},"toolbar":{"id":"1554"},"x_range":{"id":"1531"},"x_scale":{"id":"1535"},"y_range":{"id":"1533"},"y_scale":{"id":"1537"}},"id":"1528","subtype":"Figure","type":"Plot"}],"root_ids":["1648"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"6899c21c-45ad-49b1-ab0f-b4c9fa7cf87f","root_ids":["1648"],"roots":{"1648":"6d2ec5fa-150e-44bb-a74e-03a2d851e3b5"}}];
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