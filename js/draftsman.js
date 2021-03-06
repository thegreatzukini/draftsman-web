$(document).ready(function(){
    var poolMemberNext = 0;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addToPoolMemberFqdn = "#pool_member_fqdn_" + poolMemberNext;
        var addToPoolMemberIp = "#pool_member_ip_" + poolMemberNext;
        var addToPoolMemberPort = "#pool_member_port_" + poolMemberNext;
        poolMemberNext = poolMemberNext + 1;
        var newFqdnIn = '<input autocompvare="off" type="text" class="form-control" id="pool_member_fqdn_' + poolMemberNext + '" value="">';
        var newFqdnInput = $(newFqdnIn);
        $(addToPoolMemberFqdn).after(newFqdnInput);
        var newIpIn = '<input autocompvare="off" type="text" class="form-control" id="pool_member_ip_' + poolMemberNext + '" value="">';
        var newIpInput = $(newIpIn);
        $(addToPoolMemberIp).after(newIpInput);
        var newPortIn = '<input autocompvare="off" type="text" class="form-control" id="pool_member_port_' + poolMemberNext + '" value="">';
        var newPortInput = $(newPortIn);
        $(addToPoolMemberPort).after(newPortInput);
        $('.form-control').on('blur', function(e){
          code_generator();
        });
    });

    $('.form-control').on('blur', function(e){
      code_generator();
    });

    $("form input:checkbox").change(function() {
      code_generator();
    });

    $("form select").change(function() {
      code_generator();
    });

    $("#generateCode").click(function(e){
      e.preventDefault();
      code_generator();
    });

    $("#generateCyberSecurityIngress").click(function(e){
      e.preventDefault();
      code_generator();
      var url = "https://itservicedesk.msu.edu/CAisd/pdmweb.exe?OP=CREATE_NEW+FACTORY=cr+PRESET=category:pcat:408216@@group:DAFF5B05f069794DB03A9141D12CCAA0@@affected_resource:479C27B63AB30841BB9A3AB42E17ABE1@@z_source:400011@@urgency:7@@impact:9@@z_owned_hd:016CF040906DFE4AB4CBE93EF5619F14@@rootcause:400014@@z_country_origin:254@@summary:$SUMMARY@@description:$DESCRIPTION";
      var summary = "Service: Managed Firewall Services | Service Option: Managed Firewall Services | Onboard $VANITY_URL";
      var description = "";
      var _vanity_url = $("#vanity_url").val().trim();
      var _vs_ip = $("#vs_ip").val().trim();
      var _traffic_source = $("#traffice_source").val().trim();
      summary = summary.replace(/\$VANITY_URL/gi, _vanity_url);
      description = description + "Description = Onboard $VANITY_URL web application to F5 platform \r\n";
      description = description + "Source IP address and Name = $TRAFFIC_SOURCE \r\n";
      description = description + "Destination IP address and Name = $VS_IP \r\n";
      description = description + "Protocol = TCP \r\n";
      description = description + "Port Numbers = 80,443 \r\n";
      description = description.replace(/\$VANITY_URL/gi, _vanity_url);
      description = description.replace(/\$TRAFFIC_SOURCE/gi, _traffic_source);
      description = description.replace(/\$VS_IP/gi, _vs_ip);
      url = url.replace(/\$summary/gi, encodeURI(summary));
      url = url.replace(/\$DESCRIPTION/gi, encodeURI(description));
      $("#generateCyberSecurityIngress").removeClass('btn-success').addClass('btn-default');
      window.open(url);
    });

    $("#generateCertificateRequest").click(function(e){
      e.preventDefault();
      code_generator();
      var url = "https://itservicedesk.msu.edu/CAisd/pdmweb.exe?OP=CREATE_NEW+FACTORY=cr+PRESET=category:pcat:408218@@group:777364749C1249469A7CE1D3F45F7B57@@affected_resource:05AF1DFCFCD9154F979A527823AC0F85@@z_source:400011@@urgency:7@@impact:9@@z_owned_hd:016CF040906DFE4AB4CBE93EF5619F14@@rootcause:400014@@z_country_origin:254@@summary:$SUMMARY@@description:$DESCRIPTION";
      var summary = "Service: SSL Certificates | Service Option: SSL Certificates | Onboard $VANITY_URL";
      var description = "";
      var _vanity_url = $("#vanity_url").val().trim();
      var _vs_ip = $("#vs_ip").val().trim();
      var _traffic_source = $("#traffice_source").val().trim();
      summary = summary.replace(/\$VANITY_URL/gi, _vanity_url);
      description = description + "Service: SSL Certificates , Service Option: SSL Certificates, End User Name: F5 Draftsman Application \r\n";
      description = description + "\r\n";
      description = description + "Form Fields from the original CA Service Catalog request: \r\n";
      description = description + "\r\n";
      description = description + "Service Option details \r\n";
      description = description + "\r\n";
      description = description + "Service Group = Request an Individual SSL Certificate \r\n";
      description = description + "Requestor = F5 Draftsman Application \r\n";
      description = description + "Phone Number = 15174320088 \r\n";
      description = description + "Notification Email Address = ITS.DL.F5ADC@campusad.msu.edu \r\n";
      description = description + "Title = Network Engineer \r\n";
      description = description + "Department Name = IT SERVICES INFRASTRUCTURE SUPPORT \r\n";
      description = description + "Department Address = 195 Crescent Rd \r\n";
      description = description + "Server Type = Other \r\n";
      description = description + "Certificate Common Name = $VANITY_URL \r\n";
      description = description + "Certificate Type = SSL Certificate \r\n";
      description = description + "Certificate Requested = 3 Year Certificate \r\n";
      description = description + "Certificate Signing Request = \r\n";
      description = description + "\r\n";
      description = description + "More Info =  \r\n";
      description = description + "\r\n";
      description = description + "When you HTTParty, you must party hard!";
      description = description.replace(/\$VANITY_URL/gi, _vanity_url);
      url = url.replace(/\$summary/gi, encodeURI(summary));
      url = url.replace(/\$DESCRIPTION/gi, encodeURI(description));
      $("#generateCertificateRequest").removeClass('btn-success').addClass('btn-default');
      window.open(url);
    });

    $("#generateCyberSecurityEgress").click(function(e){
      e.preventDefault();
      // var f5_ip_source = $("#vs_snat_pool").val();
      // console.log(f5_ip_source);
      // var env = $("#environment").val();
      // var snat = $("#vs_snat_pool").val();
      // var tmp;
      // env = eval(env);
      // snat = eval(snat);
      // if ( env[0].display == snat ) {
      //   console.log('yes');
      // }
      // code_generator();
      // var url = "https://itservicedesk.msu.edu/CAisd/pdmweb.exe?OP=CREATE_NEW+FACTORY=cr+PRESET=category:pcat:408216@@group:DAFF5B05f069794DB03A9141D12CCAA0@@affected_resource:479C27B63AB30841BB9A3AB42E17ABE1@@z_source:400011@@urgency:7@@impact:9@@z_owned_hd:016CF040906DFE4AB4CBE93EF5619F14@@rootcause:400014@@z_country_origin:254@@summary:$SUMMARY@@description:$DESCRIPTION";
      // var summary = "Service: Managed Firewall Services | Service Option: Managed Firewall Services";
      // var description = "";
      // var _vanity_url = $("#vanity_url").val().trim();
      // var _vs_ip = $("#vs_ip").val().trim();
      // var _traffic_source = $("#traffice_source").val().trim();
      // description = description + "Description = Onboard web application $VANITY_URL to F5 platform \r\n";
      // description = description + "Source IP address and Name = $TRAFFIC_SOURCE \r\n";
      // description = description + "Destination IP address and Name = $VS_IP \r\n";
      // description = description + "Protocol = TCP \r\n";
      // description = description + "Port Numbers = 80,443 \r\n";
      // description = description.replace(/\$VANITY_URL/gi, _vanity_url);
      // description = description.replace(/\$TRAFFIC_SOURCE/gi, _traffic_source);
      // description = description.replace(/\$VS_IP/gi, _vs_ip);
      // url = url.replace(/\$summary/gi, encodeURI(summary));
      // url = url.replace(/\$DESCRIPTION/gi, encodeURI(description));
      // $("#generateCyberSecurity").removeClass('btn-success').addClass('btn-default');
      // window.open(url);
    });

    $("#generateChangeOrder").click(function(e){
      e.preventDefault();
      code_generator();
      var url = "https://itservicedesk.msu.edu/CAisd/pdmweb.exe?OP=CREATE_NEW+FACTORY=chg+PRESET=summary:$SUMMARY@@description:$DESCRIPTION@@external_system_ticket:$EXTERNAL_SYSTEM_TICKET@@organization:AB0F29529166F143BC0A7ACC93C76BC8@@category:400036@@group:ECBFDA4F58AE9247850BAD933C5C1786@@chgtype:400005@@impact:2@@affected_contact:2FB0115E8D00C94C852F61493BA9E93B@@requestor:2FB266AABC05874CB240831DFB773C20@@business_case:$BUSINESS_CASE@@effort:$IMPLEMENTATION_PLAN@@backout_plan:$BACKOUT_PLAN";
      var summary = "F5 - Onboard $VANITY_URL website / web application";
      var description = "";
      var business_case = "Strengthen stewardship\r\nSecurity";
      var external_system_ticket = "F5ADC003, F5ADC005, F5ADC007, F5ADC009, F5ADC012, F5ADC014, F5ADC016, F5ADC019, F5ADC022";
      var implementation_plan = "";
      var backout_plan = "";
      var _vanity_url = $("#vanity_url").val().trim();
      var _vs_ip = $("#vs_ip").val().trim();
      var _app_name = $("#vs_description").val().trim();
      description = description + "Change:\r\n";
      description = description + "Add configuration to onboard $APPNAME website / web application to F5 platform \r\n";
      description = description + "No client traffic or service interruption occurs when this change is completed \r\n";
      description = description + "Configuration will become active for user traffic once the customer schedules a standard DNS change to point $VANITY_URL at $VS_IP  \r\n";
      description = description + "\r\n";
      description = description + "Testing: \r\n";
      description = description + "Once completed this configuration change will be tested using curl by technicians and the customer using a modified local hosts file. \r\n";
      description = description + "\r\n";
      description = description + "Risk: \r\n";
      description = description + "Inaccurate configuration command \r\n";
      description = description + "\r\n";
      description = description + "Mitigation: \r\n";
      description = description + "Configuration is built from standardized code generator to minimize invalid configuration and ensure consistency across applications. Invalid configuration statements would fail to execute and nothing would be created. \r\n";
      implementation_plan = implementation_plan + "Configuration script created using Draftsman code generator \r\n";
      implementation_plan = implementation_plan + "Log into the active device \r\n";
      implementation_plan = implementation_plan + "Save existing configuration \r\n";
      implementation_plan = implementation_plan + "Create pre-change archive of F5 configuration \r\n";
      implementation_plan = implementation_plan + "Create new nodes \r\n";
      implementation_plan = implementation_plan + "Create new pool monitor \r\n";
      implementation_plan = implementation_plan + "Create new pool \r\n";
      implementation_plan = implementation_plan + "Create new iRule \r\n";
      implementation_plan = implementation_plan + "Create new SSL Client Profile \r\n";
      implementation_plan = implementation_plan + "Create new SSL Server Profile \r\n";
      implementation_plan = implementation_plan + "Create new virtual servers \r\n";
      implementation_plan = implementation_plan + "Synchronize the configuration between the HA peers \r\n";
      implementation_plan = implementation_plan + "Create post-change archive of F5 configuration \r\n";
      backout_plan = backout_plan + "Remove configuration objects \r\n";
      summary = summary.replace(/\$VANITY_URL/gi, _vanity_url);
      description = description.replace(/\$VANITY_URL/gi, _vanity_url);
      description = description.replace(/\$VS_IP/gi, _vs_ip);
      description = description.replace(/\$APPNAME/gi, _app_name);
      description = description.replace(/\&/gi, "and");
      url = url.replace(/\$SUMMARY/gi, encodeURI(summary));
      url = url.replace(/\$DESCRIPTION/gi, encodeURI(description));
      url = url.replace(/\$EXTERNAL_SYSTEM_TICKET/gi, encodeURI(external_system_ticket));
      url = url.replace(/\$BUSINESS_CASE/gi, encodeURI(business_case));
      url = url.replace(/\$IMPLEMENTATION_PLAN/gi, encodeURI(implementation_plan));
      url = url.replace(/\$BACKOUT_PLAN/gi, encodeURI(backout_plan));
      $("#generateChangeOrder").removeClass('btn-success').addClass('btn-default');
      window.open(url);
    });

    var production = [
      { display: "local", value: "local", addresses: "35.9.244.20, 35.9.244.21, 35.9.244.22, 35.9.244.23, 35.9.244.24" },
      { display: "iam_snat_pool", value: "iam_snat_pool", addresses: "35.9.244.20, 35.9.244.21, 35.9.245.140, 35.9.245.141"  },
      { display: "Automap", value: "automap", addresses: "" }
    ];
    var qa = [
      { display: "local", value: "local", addresses: "35.9.242.32, 35.9.242.120, 35.9.242.252, 35.9.242.33, 35.9.242.34, 35.9.242.35" },
      { display: "iam_snat_pool", value: "iam_snat_pool", addresses: "35.9.242.32, 35.9.242.120, 35.9.242.252, 35.9.242.151, 35.9.242.152" },
      { display: "Automap", value: "automap", addresses: "" }
    ];
    var test = [
      { display: "local_test", value: "local_test", addresses: "35.9.240.151, 35.9.240.162, 35.9.240.205, 35.9.240.152, 35.9.240.153, 35.9.240.154" },
      { display: "iam_snat_pool", value: "iam_snat_pool", addresses: "35.9.240.151, 35.9.240.162, 35.9.240.205, 35.9.240.221" },
      { display: "Automap", value: "automap", addresses: "" }
    ];
    var dev = [
      { display: "local", value: "local", addresses: "35.9.240.151, 35.9.240.162, 35.9.240.205, 35.9.240.33, 35.9.240.34, 35.9.240.35" },
      { display: "iam_dev_snat_pool", value: "iam_dev_snat_pool", addresses: "35.9.240.151, 35.9.240.162, 35.9.240.205, 35.9.240.33, 35.9.240.34, 35.9.240.47" },
      { display: "Automap", value: "automap", addresses: "" }
    ];

    $("#environment").change(function() {
      var parent = $(this).val();
      switch(parent){
        case 'production':
          list(production);
          break;
        case 'qa':
          list(qa);
          break;
        case 'test':
          list(test);
          break;
        case 'dev':
          list(dev);
          break;
      }
    });

    function list(array_list) {
      $("#vs_snat_pool").html("");
      $(array_list).each(function (i) {
        $("#vs_snat_pool").append("<option value="+array_list[i].value+">"+array_list[i].display+"</option>");
      });

    }

});

function code_generator() {
  var output;
  var _vanity_url = $("#vanity_url").val().trim();
  var _vs_ip = $("#vs_ip").val().trim();
  var _vs_description = $("#vs_description").val().trim();
  var _vs_snat_pool = $("#vs_snat_pool").val();
  var _monitor_protocol = $("#monitor_protocol").val();
  var _monitor_uri = $("#monitor_uri").val().trim();
  var _traffic_source = $("#traffice_source").val().trim();
  var _itsd = $("#itsd").val().trim();
  var _createComment = document.getElementById("createComment").checked;
  var _profile_oneconnect_create = 'create /ltm profile one-connect $VANITY_URL_$ITSD_oneconnect';
  var _profile_oneconnect_assign = 'modify /ltm virtual $VANITY_URL_443_$ITSD_vs profiles add { $VANITY_URL_$ITSD_oneconnect { } } ';
  var _profile_http_compression_create = "create /ltm profile http-compression $VANITY_URL_$ITSD_httpcompression defaults-from httpcompression";
  var _profile_http_compression_assign = 'modify /ltm virtual $VANITY_URL_443_$ITSD_vs profiles add { $VANITY_URL_$ITSD_httpcompression { } } ';
  var _profile_http2_create = "create /ltm profile http2 $VANITY_URL_$ITSD_http2 defaults-from http2";
  var _profile_http2_assign = 'modify /ltm virtual $VANITY_URL_443_$ITSD_vs profiles add { $VANITY_URL_$ITSD_http2 { } } ';
  var _ssl_client = 'create /ltm profile client-ssl $VANITY_URL_$ITSD_clientssl defaults-from _msu_clientssl_2017_03_09 renegotiation disabled';
  var _ssl_server_create = 'create /ltm profile server-ssl $VANITY_URL_$ITSD_serverssl defaults-from serverssl-insecure-compatible';
  var _ssl_server_assign = 'modify /ltm virtual $VANITY_URL_443_$ITSD_vs profiles add { $VANITY_URL_$ITSD_serverssl { context serverside } } ';
  var _node = 'create /ltm node $NODE_FQDN address $NODE_IP';
  var _monitor = '';
  var _monitor_http = 'create /ltm monitor $MONITOR_PROTOCOL $VANITY_URL_$MONITOR_PROTOCOL_$ITSD_monitor send "GET /$MONITOR_URI HTTP/1.1\\r\\nHost: $VANITY_URL\\r\\nConnection: Close\\r\\n\\r\\n" recv "HTTP\/1\.(0|1) (1|2|3|4)"';
  var _monitor_tcp = 'create /ltm monitor $MONITOR_PROTOCOL $VANITY_URL_$MONITOR_PROTOCOL_$ITSD_monitor';
  var _pool = 'create /ltm pool $VANITY_URL_$PORT_$ITSD_pool monitor $VANITY_URL_$MONITOR_PROTOCOL_$ITSD_monitor description "$VS_DESCRIPTION"';
  var _pool_member = 'modify /ltm pool $VANITY_URL_$PORT_$ITSD_pool members add {$NODE_FQDN:$NODE_PORT} ';
  var _pool_member_port = $("#pool_member_port_0").val();
  var _base_irule = 'tmsh create /ltm rule $VANITY_URL_$ITSD_irule ""';
  var _default_persistence = 'default-persistence'; // _msu_encrypted_cookie
  var _virtual_server_80 = 'create /ltm virtual $VANITY_URL_80_$ITSD_vs destination $VS_IP:80 description "$TRAFFIC_SOURCE - $VS_DESCRIPTION" profiles add { mptcp-mobile-optimized { context clientside } tcp-lan-optimized { context serverside } default-http { } } persist replace-all-with { $DEFAULTPERSISTENCE { default yes } } fallback-persistence source_addr rules { /Common/_msu_http_to_https_301_redirect }';
  var _virtual_server_443 = 'create /ltm virtual $VANITY_URL_443_$ITSD_vs destination $VS_IP:443 description "$TRAFFIC_SOURCE - $VS_DESCRIPTION" profiles add { mptcp-mobile-optimized { context clientside } tcp-lan-optimized { context serverside } default-https { } $VANITY_URL_$ITSD_clientssl { context clientside } } persist replace-all-with { $DEFAULTPERSISTENCE { default yes } } fallback-persistence source_addr pool $VANITY_URL_$PORT_$ITSD_pool rules { /Common/_msu_enable_strict_transport_security /Common/_msu_jboss_admin_discard /Common/_msu_remove_server_and_powered_by /Common/_msu_insert-x-forwarded-headers /Common/$VANITY_URL_$ITSD_irule }';
  var _sys_save = 'save /sys config';
  var poolMemberCount = 0;
  var ip = "";
  var count = 0;
  var fqdn = "";
  var snat = "";

  $("#generatedCode").val(output);

  if ( checkFormRequired() == false ) {
    return;
  }

  // Check to see if Automap was set
  if ( _vs_snat_pool == "automap" ) {
    snat = " source-address-translation { type $VS_SNAT_POOL }";
  } else {
    snat = " source-address-translation { type snat pool $VS_SNAT_POOL }";
  }
  _virtual_server_80 = _virtual_server_80 + snat;
  _virtual_server_443 = _virtual_server_443 + snat;

  // Remove leading www. from vanity URL
  _vanity_url = _vanity_url.replace(/www./gi, "");

  // Determine count of pool members
  poolMemberCount = $(":input[id^=pool_member_ip_]").length;

  // Remove a any leading forward slash
  if ( _monitor_uri.length > 0 && _monitor_uri.charAt(0) == "/") {
    _monitor_uri = _monitor_uri.slice(1);
  }

  output = "tmsh" + "\r\n";
  output = output + _sys_save + "\r\n";

  if ( $("#createNode").is(":checked") ) {
    if ( poolMemberCount > 0 ) {
      output = _createComment ? output + "\r\n" + "# Create Nodes" + "\r\n" : output ;
      count = 0;
      fqdn = "";
      ip = "";
      var node = "";
      while (count < poolMemberCount) {
        fqdn = $("#pool_member_fqdn_" + count).val().trim();
        fqdn_length = fqdn.trim().length;
        ip = $("#pool_member_ip_" + count).val().trim();
        if ( fqdn_length > 0 ) {
          node = _node;
          node = node.replace(/\$NODE_FQDN/gi, fqdn);
          node = node.replace(/\$NODE_IP/gi, ip);
          output = output + node + "\r\n";
        }
        count++;
      }
    }
  }

  if ( $("#createPoolMonitor").is(":checked") ) {
      if ( _monitor_protocol.toLowerCase() == "tcp" ) {
        _monitor = _monitor_tcp;
      } else if ( _monitor_protocol.toLowerCase() == "http" ) {
        _monitor = _monitor_http;
      } else if ( _monitor_protocol.toLowerCase() == "https" ) {
        _monitor = _monitor_http;
      } else {
        _monitor = _monitor_http;
      }
      output = _createComment ? output + "\r\n" + "# Create Pool Monitor" + "\r\n" : output ;
      output = output + _monitor + "\r\n";
  }

  if ( $("#createPool").is(":checked") ) {
      // output = output + "\r\n" + "# Create Pool" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create Pool" + "\r\n" : output ;
      output = output + _pool + "\r\n";
      if ( poolMemberCount > 0 ) {
        // output = output + "\r\n" + "# Create Pool Members" + "\r\n";
        output = _createComment ? output + "\r\n" + "# Create Pool Members" + "\r\n" : output ;
        count = 0;
        fqdn = "";
        ip = "";
        var pool_member = "";
        while (count < poolMemberCount) {
          fqdn = $("#pool_member_fqdn_" + count).val();
          fqdn_length = fqdn.trim().length;
          port = $("#pool_member_port_" + count).val();
          if ( fqdn_length > 0 ) {
            pool_member = _pool_member;
            pool_member = pool_member.replace(/\$NODE_FQDN/gi, fqdn);
            pool_member = pool_member.replace(/\$NODE_PORT/gi, port);
            output = output + pool_member + "\r\n";
          }
          count++;
        }
      }
  }

  if ( $("#createClientSSL").is(":checked") ) {
      // output = output + "\r\n" + "# Create Client SSL" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create Client SSL" + "\r\n" : output ;
      output = output + _ssl_client + "\r\n";
  }

  if ( $("#createiRule").is(":checked") ) {
      // output = output + "\r\n" + "# Create iRule" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create iRule" + "\r\n" : output ;
      output = output + "run util bash" + "\r\n";
      output = output + _base_irule + "\r\n";
      output = output + "exit" + "\r\n";
  }

  if ( $("#createVirtualServer").is(":checked") ) {
      // output = output + "\r\n" + "# Create Virtual Server" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create HTTP Virtual Server" + "\r\n" : output ;
      output = output + _virtual_server_80 + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create HTTPS Virtual Server" + "\r\n" : output ;
      output = output + _virtual_server_443 + "\r\n";
  }

  if ( $("#createServerSSL").is(":checked") ) {
    if ( _monitor_protocol == "https" ) {
      // output = output + "\r\n" + "# Create and Assign Server SSL" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create and Assign Server SSL" + "\r\n" : output ;
      output = output + _ssl_server_create + "\r\n";
      output = output + _ssl_server_assign + "\r\n";
    }
  }


  if ( $("#createHttpCompression").is(":checked") ) {
      // output = output + "\r\n" + "# Create and Assign HTTP Compression Profile" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create and Assign HTTP Compression Profile" + "\r\n" : output ;
      output = output + _profile_http_compression_create + "\r\n";
      output = output + _profile_http_compression_assign + "\r\n";
  }

  if ( $("#createHttp2Profile").is(":checked") ) {
      // output = output + "\r\n" + "# Create and Assign HTTP/2 Profile" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create and Assign HTTP/2 Profile" + "\r\n" : output ;
      output = output + _profile_http2_create + "\r\n";
      output = output + _profile_http2_assign + "\r\n";
  }

  if ( $("#createOneConnect").is(":checked") ) {
      // output = output + "\r\n" + "# Create and Assign OneConnect Profile" + "\r\n";
      output = _createComment ? output + "\r\n" + "# Create and Assign OneConnect Profile" + "\r\n" : output ;
      output = output + _profile_oneconnect_create + "\r\n";
      output = output + _profile_oneconnect_assign + "\r\n";
  }


  // output = output + "\r\n" + "# Save Changes" + "\r\n";
  output = _createComment ? output + "\r\n" + "# Save Changes" + "\r\n" : output ;
  output = output + _sys_save + "\r\n";


  // Final replacement of global variables
  output = output.replace(/\$VANITY_URL/gi, _vanity_url);
  output = output.replace(/\$MONITOR_PROTOCOL/gi, _monitor_protocol);
  output = output.replace(/\$MONITOR_URI/gi, _monitor_uri);
  output = output.replace(/\$VS_IP/gi, _vs_ip);
  output = output.replace(/\$VS_DESCRIPTION/gi, _vs_description);
  output = output.replace(/\$VS_SNAT_POOL/gi, _vs_snat_pool);
  output = output.replace(/\$TRAFFIC_SOURCE/gi, _traffic_source );
  output = output.replace(/\$PORT/gi, _pool_member_port);
  output = output.replace(/\$DEFAULTPERSISTENCE/gi, _default_persistence);
  output = output.replace(/\$ITSD/gi, _itsd);


  // Output the generated commands
  $("#generatedCode").val(output);

  function checkFormRequired() {
    var valid = true;
    if ( $("#itsd").val().length < 1 ) {
      $("#itsd").parent().addClass("has-error").addClass("has-feedback");
      $("#itsd-required").remove();
      $("#itsd").after('<span id="itsd-required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
      valid = false;
    } else {
      $("#itsd").parent().removeClass("has-error").removeClass("has-feedback");
      $("#itsd-required").remove();
    }

    if ( $("#vs_description").val().length < 1 ) {
      $("#vs_description").parent().addClass("has-error").addClass("has-feedback");
      $("#vs_description-required").remove();
      $("#vs_description").after('<span id="vs_description-required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
      valid = false;
    } else {
      $("#vs_description").parent().removeClass("has-error").removeClass("has-feedback");
      $("#vs_description-required").remove();
    }

    if ( $("#environment").val().length < 1 ) {
      $("#environment").parent().addClass("has-error").addClass("has-feedback");
      $("#environment-required").remove();
      $("#environment").after('<span id="environment-required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
      valid = false;
    } else {
      $("#environment").parent().removeClass("has-error").removeClass("has-feedback");
      $("#environment-required").remove();
    }

    return valid;

  }

}
