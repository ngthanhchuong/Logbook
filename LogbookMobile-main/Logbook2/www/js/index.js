/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};
// $(document).on("ready", function(){
//     $("#datetimepicker").datetimepicker();
// });
function onValidation() {
    var resName = $("#txtName").val();
    var avgPrice = $("#txtPrice").val();
    var reporterName = $("#txtNameReporter").val();
    var letters = /^[A-Za-z]+$/;

    if (resName =="") {
        $('#resname_err').html("Your Restaurant name is empty "+"   "+ '<i class="fas fa-exclamation-circle"></i>');
    }
    else if  (!resName.match(letters)) {
        $('#resname_err').html("Restaurant name requires text only!"+"   "+ '<i class="fas fa-exclamation-circle"></i>');
    }
    else if (resName){
        $('#resname_err').html(" ");
        if(reporterName && avgPrice && resName) {
            insertData();
            alert("Submit successful!");
        }
    }
    if(avgPrice ==""){
        $('.Average_err').html("Average meal price per person is required!"+"   "+ '<i class="fas fa-exclamation-circle"></i>');
    }
    else if (isNaN(avgPrice) || avgPrice < 0) {$('#Average_err').html("Invalid average price value!");}
    else if (reporterName=""){
        $('.Average_err').html("Reporter name is required!"+"   "+ '<i class="fas fa-exclamation-circle"></i>');
    }
    else if (avgPrice){
        $('.Average_err').html("");
        if(reporterName && avgPrice&& resName) {
            insertData();
            alert("Submit successful!");
        }
    }
     
    else if (!reporterName.match(letters)) {
        $('.reporter_err').html("Reporter name requires text only!"+"   "+ '<i class="fas fa-exclamation-circle"></i>');
    }
    else if (reporterName){
        $('.reporter_err').html("");
        if(reporterName && avgPrice&& resName) {
            insertData();
            alert("Submit successful!");
        }
    }

  
}
