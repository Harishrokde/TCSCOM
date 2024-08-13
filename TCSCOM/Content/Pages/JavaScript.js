$(document).ready(function () {
    alert('hi');
    getMainCategoryList();
});
var savebuisness = function () {
    var ID = $("#txid").val();
    var Business_Name = $("#txbusiness_name").val();
    var Business_Link = $("#txtbusiness_link").val();
    var Contact_No = $("#txtcontact_no").val();
    var GST_No = $("#txtgst_no").val();
    var Upload_GST_Certificate = $("#txtupload_gst_certificate").val();
    var IDA_Registration = $("#txtida_registration").val();
    var Address_Line_1 = $("#txtaddress_line_1").val();
    var Address_Line_2 = $("#txtaddress_line_2").val();
    var Street = $("#txtstreet").val();
    var Landmark = $("#txtlandmark").val();
    var Country = $("#txtcountry").val();
    var State = $("#txtstate").val();
    var City = $("#txtcity").val();
    var Area = $("#txtarea").val();
    var Pincode = $("#txtpincode").val();
    var model = {
        ID: ID, Business_Name: Business_Name, Business_Link: Business_Link, Contact_No: Contact_No, GST_No: GST_No,
        Upload_GST_Certificate: Upload_GST_Certificate, IDA_Registration: IDA_Registration,
        Address_Line_1: Address_Line_1, Address_Line_2: Address_Line_2,
        Street: Street, Landmark: Landmark, Country: Country, State: State, City: City,
        Area: Area, Pincode: Pincode
    };

    $.ajax({
        url: "/Reg/Savebuisness",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        datatype: "json",
        success: function (response) {
            alert(response.Message);
            getMainCategoryList();
        }
    });
    

}

    var getMainCategoryList = function () {
        $.ajax({
            url: "/Reg/GetReglist",
            method: "post",
            //data: JSON.stringify(model),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (response) {

                alert('welcome'); var html = "";
                $("#tblReg tbody").empty();
                $.each(response.model, function (index, elementValue) {
                    html += "<tr><td>" + elementValue.ID +
                        "</td> <td>" + elementValue.Business_Name +
                        "</td><td>" + elementValue.Business_Link +
                        "</td><td>" + elementValue.Contact_No +
                        "</td><td>" + elementValue.GST_No +
                        "</td><td>" + elementValue.IDA_Registration +
                        "</td><td>" + elementValue.Address_Line_1 +
                        "</td><td>" + elementValue.Address_Line_2 +
                        "</td><td>" + elementValue.Street +
                        "</td><td>" + elementValue.Landmark +
                        "</td><td>" + elementValue.Country +
                        "</td><td>" + elementValue.State +
                        "</td><td>" + elementValue.City +
                        "</td><td>" + elementValue.Area +
                        "</td><td>" + elementValue.Pincode +
                        "</td></tr>";
                });
                $("#tblReg tbody").append(html);
                debugger;
                deleteRegistration()
            }
        });
    }
var deleteRegistration = function (id) {
    debugger
    var model = { ID: id };
    alert("hello");
    $.ajax({
        url: "/Reg/deletemvc/",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            alert("Record Deleted Successfully ....");
        }
    });
}
var Editdata = function (id) {
    debugger
    var model = { ID: id };
    alert("Record Edit Successfully ....");
    $.ajax({
        url: "Reg/GetEditData ",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            $("#txtid").val(response.model.ID);
            $("#txtBusiness_Name").val(response.model.Business_Name);
            $("#txtBusiness_Link").val(response.model.Business_Link);
            $("#txtCity").val(response.model.city);
            $("#txtMobile").val(response.model.mobile);
            $("#txtMobile").val(response.model.mobile);
            $("#txtMobile").val(response.model.mobile);
            $("#txtMobile").val(response.model.mobile);
            $("#txtMobile").val(response.model.mobile);
            $("#txtMobile").val(response.model.mobile);
        }
    });
}

