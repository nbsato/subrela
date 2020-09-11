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
    
      
      
    
      var element = document.getElementById("f34df8fb-83e3-4645-a63d-02fc4a167fec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f34df8fb-83e3-4645-a63d-02fc4a167fec' but no matching script tag was found.")
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
                    
                  var docs_json = '{"63f60c0f-34e8-4318-916d-f000d7517684":{"roots":{"references":[{"attributes":{"data_source":{"id":"1814"},"glyph":{"id":"1819"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1820"},"selection_glyph":null,"view":{"id":"1822"}},"id":"1821","type":"GlyphRenderer"},{"attributes":{},"id":"1920","type":"PanTool"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2059"},"selection_policy":{"id":"2060"}},"id":"1994","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1875"},"glyph":{"id":"1884"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1885"},"selection_glyph":null,"view":{"id":"1887"}},"id":"1886","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1986","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"2037"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1996"}},"id":"1972","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1885","type":"MultiLine"},{"attributes":{},"id":"1977","type":"BasicTicker"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2052"},"selection_policy":{"id":"2053"}},"id":"1934","type":"ColumnDataSource"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1936","type":"FixedTicker"},{"attributes":{"data_source":{"id":"1934"},"glyph":{"id":"1939"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1940"},"selection_glyph":null,"view":{"id":"1942"}},"id":"1941","type":"GlyphRenderer"},{"attributes":{},"id":"1800","type":"PanTool"},{"attributes":{"source":{"id":"1814"}},"id":"1822","type":"CDSView"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"2054"},"selection_policy":{"id":"2055"}},"id":"1935","type":"ColumnDataSource"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAAQAAAAAAAAADAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"2056"},"selection_policy":{"id":"2057"}},"id":"1948","type":"ColumnDataSource"},{"attributes":{"filters":[{"id":"1829"}],"source":{"id":"1828"}},"id":"1830","type":"CDSView"},{"attributes":{},"id":"1803","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1880","type":"MultiLine"},{"attributes":{},"id":"2052","type":"Selection"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1879","type":"MultiLine"},{"attributes":{},"id":"2053","type":"UnionRenderers"},{"attributes":{"source":{"id":"1934"}},"id":"1942","type":"CDSView"},{"attributes":{},"id":"1925","type":"HelpTool"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2004","type":"MultiLine"},{"attributes":{},"id":"1910","type":"LinearScale"},{"attributes":{"data_source":{"id":"1815"},"glyph":{"id":"1824"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1825"},"selection_glyph":null,"view":{"id":"1827"}},"id":"1826","type":"GlyphRenderer"},{"attributes":{"filters":[{"id":"1949"}],"source":{"id":"1948"}},"id":"1950","type":"CDSView"},{"attributes":{},"id":"1984","type":"ResetTool"},{"attributes":{},"id":"1964","type":"DataRange1d"},{"attributes":{},"id":"1981","type":"WheelZoomTool"},{"attributes":{},"id":"2054","type":"Selection"},{"attributes":{},"id":"2055","type":"UnionRenderers"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1999","type":"MultiLine"},{"attributes":{"overlay":{"id":"1986"}},"id":"1982","type":"BoxZoomTool"},{"attributes":{},"id":"1801","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1995"}},"id":"2007","type":"CDSView"},{"attributes":{"overlay":{"id":"1806"}},"id":"1802","type":"BoxZoomTool"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1953","type":"Text"},{"attributes":{"column_name":"side","group":"first"},"id":"1829","type":"GroupFilter"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2005","type":"MultiLine"},{"attributes":{"below":[{"id":"1912"}],"center":[{"id":"1915"},{"id":"1919"}],"left":[{"id":"1916"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1941"},{"id":"1946"},{"id":"1954"},{"id":"1960"}],"title":{"id":"1902"},"toolbar":{"id":"1927"},"x_range":{"id":"1904"},"x_scale":{"id":"1908"},"y_range":{"id":"1906"},"y_scale":{"id":"1910"}},"id":"1901","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1970","type":"LinearScale"},{"attributes":{},"id":"2056","type":"Selection"},{"attributes":{"text":"location = \\"outer\\""},"id":"1962","type":"Title"},{"attributes":{},"id":"2057","type":"UnionRenderers"},{"attributes":{"text":"location = \\"last\\""},"id":"1842","type":"Title"},{"attributes":{"column_name":"side","group":"first"},"id":"1949","type":"GroupFilter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1920"},{"id":"1921"},{"id":"1922"},{"id":"1923"},{"id":"1924"},{"id":"1925"}]},"id":"1927","type":"Toolbar"},{"attributes":{"filters":[{"id":"1955"}],"source":{"id":"1948"}},"id":"1956","type":"CDSView"},{"attributes":{},"id":"1985","type":"HelpTool"},{"attributes":{"data_source":{"id":"1948"},"glyph":{"id":"1958"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1959"},"selection_glyph":null,"view":{"id":"1956"}},"id":"1960","type":"GlyphRenderer"},{"attributes":{},"id":"1917","type":"BasicTicker"},{"attributes":{},"id":"1980","type":"PanTool"},{"attributes":{"data_source":{"id":"1874"},"glyph":{"id":"1879"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1880"},"selection_glyph":null,"view":{"id":"1882"}},"id":"1881","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1976"},"dimension":1,"ticker":null},"id":"1979","type":"Grid"},{"attributes":{},"id":"1983","type":"SaveTool"},{"attributes":{},"id":"1805","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1945","type":"MultiLine"},{"attributes":{},"id":"1921","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1820","type":"MultiLine"},{"attributes":{"axis":{"id":"1916"},"dimension":1,"ticker":null},"id":"1919","type":"Grid"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"2047"},"selection_policy":{"id":"2048"}},"id":"1875","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1875"}},"id":"1887","type":"CDSView"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"2049"},"selection_policy":{"id":"2050"}},"id":"1888","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1995"},"glyph":{"id":"2004"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2005"},"selection_glyph":null,"view":{"id":"2007"}},"id":"2006","type":"GlyphRenderer"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1832","type":"Text"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1959","type":"Text"},{"attributes":{},"id":"2059","type":"Selection"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1898","type":"Text"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"2061"},"selection_policy":{"id":"2062"}},"id":"1995","type":"ColumnDataSource"},{"attributes":{},"id":"2060","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1980"},{"id":"1981"},{"id":"1982"},{"id":"1983"},{"id":"1984"},{"id":"1985"}]},"id":"1987","type":"Toolbar"},{"attributes":{"data_source":{"id":"1935"},"glyph":{"id":"1944"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1945"},"selection_glyph":null,"view":{"id":"1947"}},"id":"1946","type":"GlyphRenderer"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1876","type":"FixedTicker"},{"attributes":{},"id":"1844","type":"DataRange1d"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1819","type":"MultiLine"},{"attributes":{"source":{"id":"1935"}},"id":"1947","type":"CDSView"},{"attributes":{"formatter":{"id":"2033"},"ticker":{"id":"1917"}},"id":"1916","type":"LinearAxis"},{"attributes":{"axis":{"id":"1972"},"ticker":null,"visible":false},"id":"1975","type":"Grid"},{"attributes":{"source":{"id":"1874"}},"id":"1882","type":"CDSView"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1884","type":"MultiLine"},{"attributes":{},"id":"1966","type":"DataRange1d"},{"attributes":{"column_name":"side","group":"last"},"id":"1955","type":"GroupFilter"},{"attributes":{"formatter":{"id":"2034"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1936"}},"id":"1912","type":"LinearAxis"},{"attributes":{},"id":"1804","type":"ResetTool"},{"attributes":{},"id":"1923","type":"SaveTool"},{"attributes":{"data_source":{"id":"1994"},"glyph":{"id":"1999"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2000"},"selection_glyph":null,"view":{"id":"2002"}},"id":"2001","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1944","type":"MultiLine"},{"attributes":{},"id":"2061","type":"Selection"},{"attributes":{"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1939","type":"MultiLine"},{"attributes":{},"id":"2062","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1866","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1800"},{"id":"1801"},{"id":"1802"},{"id":"1803"},{"id":"1804"},{"id":"1805"}]},"id":"1807","type":"Toolbar"},{"attributes":{"formatter":{"id":"2036"},"ticker":{"id":"1977"}},"id":"1976","type":"LinearAxis"},{"attributes":{},"id":"1968","type":"LinearScale"},{"attributes":{},"id":"2037","type":"BasicTickFormatter"},{"attributes":{"column_name":"side","group":"first"},"id":"2009","type":"GroupFilter"},{"attributes":{"data_source":{"id":"1948"},"glyph":{"id":"1952"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1953"},"selection_glyph":null,"view":{"id":"1950"}},"id":"1954","type":"GlyphRenderer"},{"attributes":{},"id":"1924","type":"ResetTool"},{"attributes":{"axis":{"id":"1912"},"ticker":null,"visible":false},"id":"1915","type":"Grid"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1958","type":"Text"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"2042"},"selection_policy":{"id":"2043"}},"id":"1828","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1940","type":"MultiLine"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1996","type":"FixedTicker"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1952","type":"Text"},{"attributes":{"overlay":{"id":"1926"}},"id":"1922","type":"BoxZoomTool"},{"attributes":{},"id":"2063","type":"Selection"},{"attributes":{"source":{"id":"1994"}},"id":"2002","type":"CDSView"},{"attributes":{},"id":"2064","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"color"},"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"2000","type":"MultiLine"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2012","type":"Text"},{"attributes":{"data_source":{"id":"2008"},"glyph":{"id":"2012"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2013"},"selection_glyph":null,"view":{"id":"2010"}},"id":"2014","type":"GlyphRenderer"},{"attributes":{},"id":"2038","type":"Selection"},{"attributes":{"children":[[{"id":"1781"},0,0,1,1],[{"id":"1841"},0,1,1,1],[{"id":"1901"},1,0,1,1],[{"id":"1961"},1,1,1,1]]},"id":"2021","type":"GridBox"},{"attributes":{"filters":[{"id":"2009"}],"source":{"id":"2008"}},"id":"2010","type":"CDSView"},{"attributes":{},"id":"2039","type":"UnionRenderers"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2013","type":"Text"},{"attributes":{"column_name":"side","group":"last"},"id":"2015","type":"GroupFilter"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2018","type":"Text"},{"attributes":{"formatter":{"id":"2031"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1876"}},"id":"1852","type":"LinearAxis"},{"attributes":{},"id":"1904","type":"DataRange1d"},{"attributes":{},"id":"1863","type":"SaveTool"},{"attributes":{},"id":"2036","type":"BasicTickFormatter"},{"attributes":{},"id":"2040","type":"Selection"},{"attributes":{"axis":{"id":"1852"},"ticker":null,"visible":false},"id":"1855","type":"Grid"},{"attributes":{},"id":"2041","type":"UnionRenderers"},{"attributes":{"filters":[{"id":"2015"}],"source":{"id":"2008"}},"id":"2016","type":"CDSView"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"2019","type":"Text"},{"attributes":{},"id":"1848","type":"LinearScale"},{"attributes":{"data_source":{"id":"2008"},"glyph":{"id":"2018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2019"},"selection_glyph":null,"view":{"id":"2016"}},"id":"2020","type":"GlyphRenderer"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1838","type":"Text"},{"attributes":{"data_source":{"id":"1888"},"glyph":{"id":"1898"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1899"},"selection_glyph":null,"view":{"id":"1896"}},"id":"1900","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1860"},{"id":"1861"},{"id":"1862"},{"id":"1863"},{"id":"1864"},{"id":"1865"}]},"id":"1867","type":"Toolbar"},{"attributes":{},"id":"2042","type":"Selection"},{"attributes":{"ticks":[2,3,4,0,1]},"id":"1816","type":"FixedTicker"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2045"},"selection_policy":{"id":"2046"}},"id":"1874","type":"ColumnDataSource"},{"attributes":{},"id":"2043","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1824","type":"MultiLine"},{"attributes":{"below":[{"id":"1852"}],"center":[{"id":"1855"},{"id":"1859"}],"left":[{"id":"1856"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1881"},{"id":"1886"},{"id":"1894"},{"id":"1900"}],"title":{"id":"1842"},"toolbar":{"id":"1867"},"x_range":{"id":"1844"},"x_scale":{"id":"1848"},"y_range":{"id":"1846"},"y_scale":{"id":"1850"}},"id":"1841","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"breadths":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]},"group":[],"heights":{"__ndarray__":"","dtype":"float64","order":"little","shape":[0]}},"selected":{"id":"2040"},"selection_policy":{"id":"2041"}},"id":"1815","type":"ColumnDataSource"},{"attributes":{"filters":[{"id":"1895"}],"source":{"id":"1888"}},"id":"1896","type":"CDSView"},{"attributes":{},"id":"1790","type":"LinearScale"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1833","type":"Text"},{"attributes":{},"id":"2027","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1926","type":"BoxAnnotation"},{"attributes":{},"id":"1797","type":"BasicTicker"},{"attributes":{},"id":"1857","type":"BasicTicker"},{"attributes":{"axis":{"id":"1796"},"dimension":1,"ticker":null},"id":"1799","type":"Grid"},{"attributes":{},"id":"1906","type":"DataRange1d"},{"attributes":{"column_name":"side","group":"last"},"id":"1895","type":"GroupFilter"},{"attributes":{},"id":"1908","type":"LinearScale"},{"attributes":{"text":"location = \\"first\\""},"id":"1782","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_dash":[6],"xs":{"field":"breadths"},"ys":{"field":"heights"}},"id":"1825","type":"MultiLine"},{"attributes":{"source":{"id":"1815"}},"id":"1827","type":"CDSView"},{"attributes":{"filters":[{"id":"1835"}],"source":{"id":"1828"}},"id":"1836","type":"CDSView"},{"attributes":{},"id":"2034","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2028"},"major_label_overrides":{"0":"3","1":"4","2":"0","3":"1","4":"2"},"ticker":{"id":"1816"}},"id":"1792","type":"LinearAxis"},{"attributes":{},"id":"1861","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1828"},"glyph":{"id":"1838"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1839"},"selection_glyph":null,"view":{"id":"1836"}},"id":"1840","type":"GlyphRenderer"},{"attributes":{},"id":"1784","type":"DataRange1d"},{"attributes":{},"id":"1788","type":"LinearScale"},{"attributes":{"data_source":{"id":"1828"},"glyph":{"id":"1832"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1833"},"selection_glyph":null,"view":{"id":"1830"}},"id":"1834","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2030"},"ticker":{"id":"1857"}},"id":"1856","type":"LinearAxis"},{"attributes":{},"id":"2033","type":"BasicTickFormatter"},{"attributes":{"column_name":"side","group":"first"},"id":"1889","type":"GroupFilter"},{"attributes":{},"id":"2028","type":"BasicTickFormatter"},{"attributes":{"filters":[{"id":"1889"}],"source":{"id":"1888"}},"id":"1890","type":"CDSView"},{"attributes":{},"id":"1846","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2027"},"ticker":{"id":"1797"}},"id":"1796","type":"LinearAxis"},{"attributes":{"text":"location = \\"inner\\""},"id":"1902","type":"Title"},{"attributes":{},"id":"2045","type":"Selection"},{"attributes":{},"id":"2046","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1792"},"ticker":null,"visible":false},"id":"1795","type":"Grid"},{"attributes":{},"id":"1850","type":"LinearScale"},{"attributes":{},"id":"1786","type":"DataRange1d"},{"attributes":{"text":{"field":"info_text"},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1892","type":"Text"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1899","type":"Text"},{"attributes":{},"id":"2047","type":"Selection"},{"attributes":{"overlay":{"id":"1866"}},"id":"1862","type":"BoxZoomTool"},{"attributes":{},"id":"2048","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1792"}],"center":[{"id":"1795"},{"id":"1799"}],"left":[{"id":"1796"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1821"},{"id":"1826"},{"id":"1834"},{"id":"1840"}],"title":{"id":"1782"},"toolbar":{"id":"1807"},"x_range":{"id":"1784"},"x_scale":{"id":"1788"},"y_range":{"id":"1786"},"y_scale":{"id":"1790"}},"id":"1781","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"1856"},"dimension":1,"ticker":null},"id":"1859","type":"Grid"},{"attributes":{},"id":"2030","type":"BasicTickFormatter"},{"attributes":{},"id":"1864","type":"ResetTool"},{"attributes":{"data":{"breadth":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAAAAAAAAAAADwPwAAAAAAAAxAAAAAAAAA4D8AAAAAAAAGQAAAAAAAAPo/","dtype":"float64","order":"little","shape":[9]},"children":[[],[],[],[],[],[1,2],[3,4],[0,5],[6,7]],"cluster":[0,1,2,3,4,5,6,7,8],"height":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEED2LxJfZWUUQFNb2jpYTBlA","dtype":"float64","order":"little","shape":[9]},"info_text":["0.0","0.0","0.0","0.0","0.0","2.0","4.0","5.1","6.3"],"is_group":[false,false,false,false,false,false,false,false,false],"side":["first","first","last","first","last","last","first","last","last"],"x_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAABA","dtype":"float64","order":"little","shape":[9]},"y_offset":{"__ndarray__":"AAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADA","dtype":"float64","order":"little","shape":[9]}},"selected":{"id":"2063"},"selection_policy":{"id":"2064"}},"id":"2008","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1806","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1888"},"glyph":{"id":"1892"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1893"},"selection_glyph":null,"view":{"id":"1890"}},"id":"1894","type":"GlyphRenderer"},{"attributes":{},"id":"2049","type":"Selection"},{"attributes":{},"id":"1865","type":"HelpTool"},{"attributes":{},"id":"2050","type":"UnionRenderers"},{"attributes":{"text":{"field":"info_text"},"text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1893","type":"Text"},{"attributes":{"below":[{"id":"1972"}],"center":[{"id":"1975"},{"id":"1979"}],"left":[{"id":"1976"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2001"},{"id":"2006"},{"id":"2014"},{"id":"2020"}],"title":{"id":"1962"},"toolbar":{"id":"1987"},"x_range":{"id":"1964"},"x_scale":{"id":"1968"},"y_range":{"id":"1966"},"y_scale":{"id":"1970"}},"id":"1961","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2031","type":"BasicTickFormatter"},{"attributes":{"column_name":"side","group":"last"},"id":"1835","type":"GroupFilter"},{"attributes":{},"id":"1860","type":"PanTool"},{"attributes":{"text":{"field":"info_text"},"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"alphabetic","text_color":{"value":"black"},"x":{"field":"breadth"},"x_offset":{"field":"x_offset"},"y":{"field":"height"},"y_offset":{"field":"y_offset"}},"id":"1839","type":"Text"},{"attributes":{"data":{"breadths":[[1.625,0.5,0.5],[1.625,2.75,2.75],[2.75,2,2],[2.75,3.5,3.5],[0.5,0,0],[0.5,1,1],[3.5,3,3],[3.5,4,4]],"cluster":[8,8,7,7,6,6,5,5],"color":["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"],"group":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"heights":[[6.324555320336759,6.324555320336759,4.0],[6.324555320336759,6.324555320336759,5.0990195135927845],[5.0990195135927845,5.0990195135927845,0.0],[5.0990195135927845,5.0990195135927845,2.0],[4.0,4.0,0.0],[4.0,4.0,0.0],[2.0,2.0,0.0],[2.0,2.0,0.0]],"side":["first","last","first","last","first","last","first","last"]},"selected":{"id":"2038"},"selection_policy":{"id":"2039"}},"id":"1814","type":"ColumnDataSource"}],"root_ids":["2021"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"63f60c0f-34e8-4318-916d-f000d7517684","root_ids":["2021"],"roots":{"2021":"f34df8fb-83e3-4645-a63d-02fc4a167fec"}}];
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