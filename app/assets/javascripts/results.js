// Load the Visualization API and the piechart package.

$(window).load(function(){
/************* CHART ONE RESULTS *************/
  //var results_test = parseInt($('#results_test').text());
  var results_q1_1 = parseInt($('#results_q1_1').text());
  var results_q1_2 = parseInt($('#results_q1_2').text());
  var results_q1_3 = parseInt($('#results_q1_3').text());
  var results_q1_4 = parseInt($('#results_q1_4').text());
  var results_q1_5 = parseInt($('#results_q1_5').text());
  var results_q1_6 = parseInt($('#results_q1_6').text());
  var results_q1_7 = parseInt($('#results_q1_7').text());
  var results_q1_8 = parseInt($('#results_q1_8').text());

/************* CHART TWO RESULTS *************/
  var results_q2_1 = parseInt($('#results_q2_1').text());
  var results_q2_2 = parseInt($('#results_q2_2').text());
  var results_q2_3 = parseInt($('#results_q2_3').text());
  var results_q2_4 = parseInt($('#results_q2_4').text());
  var results_q2_5 = parseInt($('#results_q2_5').text());
  var results_q2_6 = parseInt($('#results_q2_6').text());
  var results_q2_7 = parseInt($('#results_q2_7').text());
  var results_q2_8 = parseInt($('#results_q2_8').text());
  var results_q2_9 = parseInt($('#results_q2_9').text());
  var results_q2_10 = parseInt($('#results_q2_10').text());

/************* CHART THREE RESULTS *************/
  var results_q3_1_1 = parseInt($('#results_q3_1_1').text());
  var results_q3_1_2 = parseInt($('#results_q3_1_2').text());
  var results_q3_1_3 = parseInt($('#results_q3_1_3').text());
  var results_q3_1_4 = parseInt($('#results_q3_1_4').text());
  var results_q3_1_5 = parseInt($('#results_q3_1_5').text());
  var results_q3_1_6 = parseInt($('#results_q3_1_6').text());
  var results_q3_1_7 = parseInt($('#results_q3_1_7').text());
  //var results_q3_1_8 = parseInt($('#results_q3_1_8').text());

  var results_q3_2_1 = parseInt($('#results_q3_2_1').text());
  var results_q3_2_2 = parseInt($('#results_q3_2_2').text());
  var results_q3_2_3 = parseInt($('#results_q3_2_3').text());
  var results_q3_2_4 = parseInt($('#results_q3_2_4').text());
  var results_q3_2_5 = parseInt($('#results_q3_2_5').text());
  var results_q3_2_6 = parseInt($('#results_q3_2_6').text());
  var results_q3_2_7 = parseInt($('#results_q3_2_7').text());
  //var results_q3_2_8 = parseInt($('#results_q3_2_8').text());

  var results_q3_3_1 = parseInt($('#results_q3_3_1').text());
  var results_q3_3_2 = parseInt($('#results_q3_3_2').text());
  var results_q3_3_3 = parseInt($('#results_q3_3_3').text());
  var results_q3_3_4 = parseInt($('#results_q3_3_4').text());
  var results_q3_3_5 = parseInt($('#results_q3_3_5').text());
  var results_q3_3_6 = parseInt($('#results_q3_3_6').text());
  var results_q3_3_7 = parseInt($('#results_q3_3_7').text());
//  var results_q3_3_8 = parseInt($('#results_q3_3_8').text());

/************* CHART FOUR RESULTS *************/
  var results_q4_1self_1 = parseInt($('#results_q4_1self_1').text());
  var results_q4_1self_2 = parseInt($('#results_q4_1self_2').text());
  var results_q4_1self_3 = parseInt($('#results_q4_1self_3').text());
  var results_q4_1self_4 = parseInt($('#results_q4_1self_4').text());
  var results_q4_1self_5 = parseInt($('#results_q4_1self_5').text());
  var results_q4_1self_6 = parseInt($('#results_q4_1self_6').text());
  var results_q4_1self_7 = parseInt($('#results_q4_1self_7').text());

  var results_q4_2self_1 = parseInt($('#results_q4_2self_1').text());
  var results_q4_2self_2 = parseInt($('#results_q4_2self_2').text());
  var results_q4_2self_3 = parseInt($('#results_q4_2self_3').text());
  var results_q4_2self_4 = parseInt($('#results_q4_2self_4').text());
  var results_q4_2self_5 = parseInt($('#results_q4_2self_5').text());
  var results_q4_2self_6 = parseInt($('#results_q4_2self_6').text());
  var results_q4_2self_7 = parseInt($('#results_q4_2self_7').text());

  var results_q4_3self_1 = parseInt($('#results_q4_3self_1').text());
  var results_q4_3self_2 = parseInt($('#results_q4_3self_2').text());
  var results_q4_3self_3 = parseInt($('#results_q4_3self_3').text());
  var results_q4_3self_4 = parseInt($('#results_q4_3self_4').text());
  var results_q4_3self_5 = parseInt($('#results_q4_3self_5').text());
  var results_q4_3self_6 = parseInt($('#results_q4_3self_6').text());
  var results_q4_3self_7 = parseInt($('#results_q4_3self_7').text());

  var results_incraesesCosts4_1_1 = parseInt($('#results_incraesesCosts4_1_1').text());
  var results_decreasesAvailability4_1_2 = parseInt($('#results_decreasesAvailability4_1_2').text());
  var results_decreasesQuality4_1_3 = parseInt($('#results_decreasesQuality4_1_3').text());
  var results_decreasesUse4_1_4 = parseInt($('#results_decreasesUse4_1_4').text());
  var results_decreasesCollaboration4_1_5 = parseInt($('#results_decreasesCollaboration4_1_5').text());
  var results_decreasesTrust4_1_6 = parseInt($('#results_decreasesTrust4_1_6').text());
  var results_decreasesEfficiency4_1_7 = parseInt($('#results_decreasesEfficiency4_1_7').text());

  var results_incraesesCosts4_2_1 = parseInt($('#results_incraesesCosts4_2_1').text());
  var results_decreasesAvailability4_2_2 = parseInt($('#results_decreasesAvailability4_2_2').text());
  var results_decreasesQuality4_2_3 = parseInt($('#results_decreasesQuality4_2_3').text());
  var results_decreasesUse4_2_4 = parseInt($('#results_decreasesUse4_2_4').text());
  var results_decreasesCollaboration4_2_5 = parseInt($('#results_decreasesCollaboration4_2_5').text());
  var results_decreasesTrust4_2_6 = parseInt($('#results_decreasesTrust4_2_6').text());
  var results_decreasesEfficiency4_2_7 = parseInt($('#results_decreasesEfficiency4_2_7').text());

  var results_incraesesCosts4_3_1 = parseInt($('#results_incraesesCosts4_3_1').text());
  var results_decreasesAvailability4_3_2 = parseInt($('#results_decreasesAvailability4_3_2').text());
  var results_decreasesQuality4_3_3 = parseInt($('#results_decreasesQuality4_3_3').text());
  var results_decreasesUse4_3_4 = parseInt($('#results_decreasesUse4_3_4').text());
  var results_decreasesCollaboration4_3_5 = parseInt($('#results_decreasesCollaboration4_3_5').text());
  var results_decreasesTrust4_3_6 = parseInt($('#results_decreasesTrust4_3_6').text());
  var results_decreasesEfficiency4_3_7 = parseInt($('#results_decreasesEfficiency4_3_7').text());


/************* CHART FIVE RESULTS *************/
  var results_q5_1 = parseInt($('#results_q5_1').text());
  var results_q5_2 = parseInt($('#results_q5_2').text());
  var results_q5_3 = parseInt($('#results_q5_3').text());
  var results_q5_4 = parseInt($('#results_q5_4').text());
  var results_q5_5 = parseInt($('#results_q5_5').text());
  var results_q5_6 = parseInt($('#results_q5_6').text());
  var results_q5_7 = parseInt($('#results_q5_7').text());
  var results_q5_8 = parseInt($('#results_q5_8').text());
  var results_q5_9 = parseInt($('#results_q5_9').text());

/************* CHART SIX RESULTS *************/
  var results_q6_1_1 = parseInt($('#results_q6_1_1').text());
  var results_q6_1_2 = parseInt($('#results_q6_1_2').text());
  var results_q6_1_3 = parseInt($('#results_q6_1_3').text());
  var results_q6_1_4 = parseInt($('#results_q6_1_4').text());

  var results_q6_2_1 = parseInt($('#results_q6_2_1').text());
  var results_q6_2_2 = parseInt($('#results_q6_2_2').text());
  var results_q6_2_3 = parseInt($('#results_q6_2_3').text());
  var results_q6_2_4 = parseInt($('#results_q6_2_4').text());

  var results_q6_3_1 = parseInt($('#results_q6_3_1').text());
  var results_q6_3_2 = parseInt($('#results_q6_3_2').text());
  var results_q6_3_3 = parseInt($('#results_q6_3_3').text());
  var results_q6_3_4 = parseInt($('#results_q6_3_4').text());

/************* CHART SEVEN RESULTS *************/
  var results_q7_1_1 = parseInt($('#results_q7_1_1').text());
  var results_q7_1_2 = parseInt($('#results_q7_1_2').text());
  var results_q7_1_3 = parseInt($('#results_q7_1_3').text());
  var results_q7_1_4 = parseInt($('#results_q7_1_4').text());
  var results_q7_1_5 = parseInt($('#results_q7_1_5').text());
  var results_q7_1_6 = parseInt($('#results_q7_1_6').text());
  var results_q7_1_7 = parseInt($('#results_q7_1_7').text());
  //var results_q7_1_8 = parseInt($('#results_q7_1_8').text());

  var results_q7_2_1 = parseInt($('#results_q7_2_1').text());
  var results_q7_2_2 = parseInt($('#results_q7_2_2').text());
  var results_q7_2_3 = parseInt($('#results_q7_2_3').text());
  var results_q7_2_4 = parseInt($('#results_q7_2_4').text());
  var results_q7_2_5 = parseInt($('#results_q7_2_5').text());
  var results_q7_2_6 = parseInt($('#results_q7_2_6').text());
  var results_q7_2_7 = parseInt($('#results_q7_2_7').text());
  //var results_q7_2_8 = parseInt($('#results_q7_2_8').text());

  var results_q7_3_1 = parseInt($('#results_q7_3_1').text());
  var results_q7_3_2 = parseInt($('#results_q7_3_2').text());
  var results_q7_3_3 = parseInt($('#results_q7_3_3').text());
  var results_q7_3_4 = parseInt($('#results_q7_3_4').text());
  var results_q7_3_5 = parseInt($('#results_q7_3_5').text());
  var results_q7_3_6 = parseInt($('#results_q7_3_6').text());
  var results_q7_3_7 = parseInt($('#results_q7_3_7').text());
  //var results_q7_3_8 = parseInt($('#results_q7_3_8').text());



  //console.log(results_test + " It's working!");
  console.log(results_q1_1 + " is the first result in question one!");

/************* CHART ONE CREATION *************/
  function drawChart_one() {

   var data = google.visualization.arrayToDataTable([
      ['Stakeholder', 'Total Participants', {role:'style'}],
      ['Patient', results_q1_1, 'red'],
      ['Insurance Provider', results_q1_2, 'red'],
      ['Hospital Administrator', results_q1_3, 'red'],
      ['Clinician', results_q1_4, 'red'],
      ['Physician', results_q1_5, 'red'],
      ['Policymaker', results_q1_6, 'red'],
      ['Community Member', results_q1_7, 'red'],
      ['Other', results_q1_8, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '80%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_one'));

    chart.draw(view, options);
  }

/************* CHART TWO CREATION *************/
    function drawChart_two() {

      var data = google.visualization.arrayToDataTable([
        ['Issue', 'Total Participants', {role:'style'}],
        ['Competition between existing healthcare providers', results_q2_1, 'red'],
        ['Lack of Education', results_q2_2, 'red'],
        ['Incongruenet systems and loss of tracking', results_q2_3, 'red'],
        ['Poor communication and access between physicians and patients', results_q2_4, 'red'],
        ['Diagnostic errors and recurring malpractice', results_q2_5, 'red'],
        ['Inefficient health tracking and lack of consistency', results_q2_6, 'red'],
        ['Privacy and access to health records', results_q2_7, 'red'],
        ['Emerging value-based payment systems', results_q2_8, 'red'],
        ['Disconnected between the public and health systems', results_q2_9, 'red'],
        ['Other', results_q2_10, 'red']
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        //title: 'Population of Largest U.S. Cities',
        chartArea: {
          //left: '50%',
          width: '40%',
          height: '80%',
          backgroundColor: '#eee'
        },
        bar: {
          groupWidth: '85%'
        },
        hAxis: {
          title: 'Participants Vote',
          minValue: 0
        },
        vAxis: {
          title: 'Stakeholder Roles'
        },
        legend: 'none'
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div_two'));

      chart.draw(view, options);
    }

/************* CHART THREE A *************/
  function drawChart_three_a() {

    var data = google.visualization.arrayToDataTable([
      ['Stakeholder', 'Number of Participants', {role:'style'}],
      ['Patient', results_q3_1_1, 'red'],
      ['Insurance Provider', results_q3_1_2, 'red'],
      ['Hospital Administrator', results_q3_1_3, 'red'],
      ['Clinician', results_q3_1_4, 'red'],
      ['Physician', results_q3_1_5, 'red'],
      ['Policymaker', results_q3_1_6, 'red'],
      ['Community Member', results_q3_1_7, 'red']
      //['Other', results_q3_1_8, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_three_a'));

    chart.draw(view, options);
  }

/************* CHART THREE B *************/
  function drawChart_three_b() {

    var data = google.visualization.arrayToDataTable([
      ['Stakeholder', 'Number of Participants', {role:'style'}],
      ['Patient', results_q3_2_1, 'red'],
      ['Insurance Provider', results_q3_2_2, 'red'],
      ['Hospital Administrator', results_q3_2_3, 'red'],
      ['Clinician', results_q3_2_4, 'red'],
      ['Physician', results_q3_2_5, 'red'],
      ['Policymaker', results_q3_2_6, 'red'],
      ['Community Member', results_q3_2_7, 'red']
      //['Other', results_q3_2_8, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_three_b'));

    chart.draw(view, options);
  }

/************* CHART THREE C *************/
  function drawChart_three_c() {

    var data = google.visualization.arrayToDataTable([
      ['Stakeholder', 'Number of Participants', {role:'style'}],
      ['Patient', results_q3_3_1, 'red'],
      ['Insurance Provider', results_q3_3_2, 'red'],
      ['Hospital Administrator', results_q3_3_3, 'red'],
      ['Clinician', results_q3_3_4, 'red'],
      ['Physician', results_q3_3_5, 'red'],
      ['Policymaker', results_q3_3_6, 'red'],
      ['Community Member', results_q3_3_7, 'red']
      //['Other', results_q3_3_8, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_three_c'));

    chart.draw(view, options);
  }


/************* CHART FOUR A *************/
  function drawChart_four_a() {

    var data = google.visualization.arrayToDataTable([
      ['Measurement', 'Participants Vote', 'Your Vote'],
      ['Increases Costs', results_incraesesCosts4_1_1, results_q4_1self_1],
      ['Decreases service availability', results_decreasesAvailability4_1_2, results_q4_1self_2],
      ['Decreases service quality', results_decreasesQuality4_1_3, results_q4_1self_3],
      ['Decreases use of services', results_decreasesUse4_1_4, results_q4_1self_4],
      ['Decreases collaboration', results_decreasesCollaboration4_1_5, results_q4_1self_5],
      ['Decreases trust in the system', results_decreasesTrust4_1_6, results_q4_1self_6],
      ['Decreases efficiency', results_decreasesEfficiency4_1_7, results_q4_1self_7]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2,
                     { calc: "stringify",
                       sourceColumn: 2,
                       type: "string",
                       role: "annotation" },
                    ]);

    var options = {
      title: 'Answer A',
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      hAxis: {
        title: 'Participants Vote',
        minValue: 0,
        maxValue: 5
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      colors: ['red', 'blue']
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_four_a'));

    chart.draw(view, options);
  }



/************* CHART FOUR B *************/
  function drawChart_four_b() {

    var data = google.visualization.arrayToDataTable([
      ['Measurement', 'Participants Vote', 'Your Vote'],
      ['Increases Costs', results_incraesesCosts4_2_1, results_q4_2self_1],
      ['Decreases service availability', results_decreasesAvailability4_2_2, results_q4_2self_2],
      ['Decreases service quality', results_decreasesQuality4_2_3, results_q4_2self_3],
      ['Decreases use of services', results_decreasesUse4_2_4, results_q4_2self_4],
      ['Decreases collaboration', results_decreasesCollaboration4_2_5, results_q4_2self_5],
      ['Decreases trust in the system', results_decreasesTrust4_2_6, results_q4_2self_6],
      ['Decreases efficiency', results_decreasesEfficiency4_2_7, results_q4_2self_7]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2,
                     { calc: "stringify",
                       sourceColumn: 2,
                       type: "string",
                       role: "annotation" },
                    ]);

    var options = {
      title: 'Answer B',
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      colors: ['red', 'blue']
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_four_b'));

    chart.draw(view, options);
  }


/************* CHART FOUR C *************/
  function drawChart_four_c() {

    var data = google.visualization.arrayToDataTable([
      ['Measurement', 'Participants Vote', 'Your Vote'],
      ['Increases Costs', results_incraesesCosts4_3_1, results_q4_3self_1],
      ['Decreases service availability', results_decreasesAvailability4_3_2, results_q4_3self_2],
      ['Decreases service quality', results_decreasesQuality4_3_3, results_q4_3self_3],
      ['Decreases use of services', results_decreasesUse4_3_4, results_q4_3self_4],
      ['Decreases collaboration', results_decreasesCollaboration4_3_5, results_q4_3self_5],
      ['Decreases trust in the system', results_decreasesTrust4_3_6, results_q4_3self_6],
      ['Decreases efficiency', results_decreasesEfficiency4_3_7, results_q4_3self_7]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2,
                     { calc: "stringify",
                       sourceColumn: 2,
                       type: "string",
                       role: "annotation" },
                    ]);

    var options = {
      title: 'Answer C',
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      colors: ['red', 'blue']
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_four_c'));

    chart.draw(view, options);
  }

 /************* CHART FIVE *************/
  function drawChart_five() {

    var data = google.visualization.arrayToDataTable([
      ['Solutions', 'Total Participants', {role:'style'}],
      ['Comparative tools for existing healthcare quality and costs / Payment estimation tools', results_q5_1, 'red'],
      ['Education/Training Tools', results_q5_2, 'red'],
      ['Standardizing and tracking systems', results_q5_3, 'red'],
      ['Digital access - EHS (electronic health records) / Doctor communication / Mobile health monitoring', results_q5_4, 'red'],
      ['Learning from diagnostic errors/malpractice', results_q5_5, 'red'],
      ['Wearable tech/sensors', results_q5_6, 'red'],
      ['Blockchain / Distributed ledger for privacy and access issues - EHS (electronic health records)', results_q5_7, 'red'],
      ['Value-based payment - back end payment sharing tools', results_q5_8, 'red'],
      ['Expert collaboration, crowd sourced decision support', results_q5_9, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      //title: 'Population of Largest U.S. Cities',
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '85%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_five'));

    chart.draw(view, options);
  }

  /************* CHART SIX A *************/
  function drawChart_six_a() {

    var data = google.visualization.arrayToDataTable([
      ['Developers', 'Total Participants', {role:'style'}],
      ['Existing Companies', results_q6_1_1, 'red'],
      ['Consultancies', results_q6_1_2, 'red'],
      ['New Startups / Incubators', results_q6_1_3, 'red'],
      ['Hackathons', results_q6_1_4, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '80%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_six_a'));

    chart.draw(view, options);
  }

/************* CHART SIX B *************/
  function drawChart_six_b() {

    var data = google.visualization.arrayToDataTable([
      ['Developers', 'Total Participants', {role:'style'}],
      ['Existing Companies', results_q6_2_1, 'red'],
      ['Consultancies', results_q6_2_2, 'red'],
      ['New Startups / Incubators', results_q6_2_3, 'red'],
      ['Hackathons', results_q6_2_4, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '80%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_six_b'));

    chart.draw(view, options);
  }

  /************* CHART SIX C *************/
  function drawChart_six_c() {

    var data = google.visualization.arrayToDataTable([
      ['Developers', 'Total Participants', {role:'style'}],
      ['Existing Companies', results_q6_3_1, 'red'],
      ['Consultancies', results_q6_3_2, 'red'],
      ['New Startups / Incubators', results_q6_3_3, 'red'],
      ['Hackathons', results_q6_3_4, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '80%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_six_c'));

    chart.draw(view, options);
  }

  /************* CHART SEVEN A *************/
  function drawChart_seven_a() {

    var data = google.visualization.arrayToDataTable([
      ['Stakeholder', 'Number of Participants', {role:'style'}],
      ['Patient', results_q7_1_1, 'red'],
      ['Insurance Provider', results_q7_1_2, 'red'],
      ['Hospital Administrator', results_q7_1_3, 'red'],
      ['Clinician', results_q7_1_4, 'red'],
      ['Physician', results_q7_1_5, 'red'],
      ['Policymaker', results_q7_1_6, 'red'],
      ['Community Member', results_q7_1_7, 'red']
      //['Other', results_q7_1_8, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '80%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_seven_a'));

    chart.draw(view, options);
  }

/************* CHART SEVEN B *************/
  function drawChart_seven_b() {

    var data = google.visualization.arrayToDataTable([
      ['Stakeholder', 'Number of Participants', {role:'style'}],
      ['Patient', results_q7_2_1, 'red'],
      ['Insurance Provider', results_q7_2_2, 'red'],
      ['Hospital Administrator', results_q7_2_3, 'red'],
      ['Clinician', results_q7_2_4, 'red'],
      ['Physician', results_q7_2_5, 'red'],
      ['Policymaker', results_q7_2_6, 'red'],
      ['Community Member', results_q7_2_7, 'red']
      //['Other', results_q7_2_8, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '80%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_seven_b'));

    chart.draw(view, options);
  }

  /************* CHART SEVEN C *************/
  function drawChart_seven_c() {

    var data = google.visualization.arrayToDataTable([
      ['Stakeholder', 'Number of Participants', {role:'style'}],
      ['Patient', results_q7_3_1, 'red'],
      ['Insurance Provider', results_q7_3_2, 'red'],
      ['Hospital Administrator', results_q7_3_3, 'red'],
      ['Clinician', results_q7_3_4, 'red'],
      ['Physician', results_q7_3_5, 'red'],
      ['Policymaker', results_q7_3_6, 'red'],
      ['Community Member', results_q7_3_7, 'red']
      //['Other', results_q7_3_8, 'red']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      /*title: 'Population of Largest U.S. Cities',*/
      chartArea: {
        //left: '50%',
        width: '40%',
        height: '80%',
        backgroundColor: '#eee'
      },
      bar: {groupWidth: '80%'},
      hAxis: {
        title: 'Participants Vote',
        minValue: 0
      },
      vAxis: {
        title: 'Stakeholder Roles'
      },
      legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_seven_c'));

    chart.draw(view, options);
  }


drawChart_one();
drawChart_two();
drawChart_three_a();
drawChart_three_b();
drawChart_three_c();
drawChart_four_a();
drawChart_four_b();
drawChart_four_c();
drawChart_five();
drawChart_six_a();
drawChart_six_b();
drawChart_six_c();
drawChart_seven_a();
drawChart_seven_b();
drawChart_seven_c();

  /************* ACCORDION *************/
      console.log('results.js');

      var windowHeight = $(window).height();
      var questionHeight = $("#accordion > li").height();
      $("#accordion > li > ul > li").css('min-height', windowHeight - questionHeight);

      $('#accordion ul').slideUp(300);

      $("#accordion > li > div").click(function(){

          if(false == $(this).next().is(':visible')) {
              $('#accordion ul').slideUp(300);
          }

          $(this).next().slideToggle(300);
          //drawChart_one();
      });

      $('#accordion ul:eq(0)').show();




});
