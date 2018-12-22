 // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChartRegion);
      google.charts.setOnLoadCallback(drawChartSubRegion);
      

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChartRegion() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Region');
        data.addColumn('number', 'clients');
        data.addRows([
          ['Sigi', 176],
          ['Palu', 173],
          ['Donggala', 76],
          ['Parigi', 0]
        ]);

        // Set chart options
        var options = {'title':'Client Distribution based on Region',
                       'width':750,
                       'height':500};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie_region'));
        chart.draw(data, options);
      }

        function drawChartSubRegion() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Region');
        data.addColumn('number', 'clients');
        data.addRows([
          ['Palu Barat', 159],
          ['Sigi Biromaru', 82],
          ['Dolo Selatan', 74],
          ['Labuan', 49],
          ['Banawa', 24],
          ['Dolo Barat', 9],
          ['Dolo', 7],
          ['Tatanga', 5],
          ['Palu Timur', 4],
          ['Palu Selatan', 4],
          ['Banawa Tengah', 3],
          ['Marawola', 2],
          ['Gumbasa', 1],
          ['Palu Utara', 1],
          ['Tanambulava', 1]
        ]);

        // Set chart options
        var options = {'title':'Client Distribution based on Region',
                       'width':750,
                       'height':500,
                       'legend': 'none'
                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('bar_subregion'));
        chart.draw(data, options);
      }