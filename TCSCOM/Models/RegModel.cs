using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TCSCOM.Data;


namespace TCSCOM.Models
{
    public class RegModel
    {
        public int ID { get; set; }
        public string Business_Name { get; set; }
        public string Business_Link { get; set; }
        public string Contact_No { get; set; }
        public string GST_No { get; set; }
        public string Upload_GST_Certificate { get; set; }
        public string IDA_Registration { get; set; }
        public string Address_Line_1 { get; set; }
        public string Address_Line_2 { get; set; }
        public string Street { get; set; }
        public string Landmark { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Area { get; set; }
        public string Pincode { get; set; }
        public string Savebuisness(RegModel model)
        {
            TCSEntities db = new TCSEntities();
            string message = "";
            var savebuisness = new tblReg()
            {
                ID = model.ID,
                Business_Name = model.Business_Name,
                Business_Link = model.Business_Link,
                Contact_No = model.Contact_No,
                GST_No = model.GST_No,
                Upload_GST_Certificate = model.Upload_GST_Certificate,
                IDA_Registration = model.IDA_Registration,
                Address_Line_1 = model.Address_Line_1,
                Address_Line_2 = model.Address_Line_2,
                Street = model.Street,
                Landmark = model.Landmark,
                Country = model.Country,
                State = model.State,
                City = model.City,
                Area = model.Area,
                Pincode = model.Pincode
            };
            db.tblRegs.Add(savebuisness);
            db.SaveChanges();
            return message;
        }
        public List<RegModel> GetReglist()
        {
            TCSEntities db = new TCSEntities();
            List<RegModel> lstReg = new List<RegModel>();
            var Reglist = db.tblRegs.ToList();
            if (Reglist != null)
            {
                foreach (var Reg in Reglist)
                {
                    lstReg.Add( new RegModel()
                    {
                        ID = Reg.ID,
                        Business_Name = Reg.Business_Name,
                        Business_Link = Reg.Business_Link,
                        Contact_No = Reg.Contact_No,
                        GST_No = Reg.GST_No,
                        Upload_GST_Certificate = Reg.Upload_GST_Certificate,
                        IDA_Registration = Reg.IDA_Registration,
                        Address_Line_1 = Reg.Address_Line_1,
                        Address_Line_2 = Reg.Address_Line_2,
                        Street = Reg.Street,
                        Landmark = Reg.Landmark,
                        Country = Reg.Country,
                        State = Reg.State,
                        City = Reg.City,
                        Area = Reg.Area,
                        Pincode = Reg.Pincode
                    });
                }
            }
            return lstReg;
        }
    }
}