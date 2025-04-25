const { DataTypes } = require( "sequelize" );
const { element } = require( '../config/db' );

const Employee = element.define( "Employee", {
    EmpId1: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    EmpID: { 
        type: DataTypes.STRING( 50 ), 
        primaryKey: true, 
        allowNull: false,
        unique: true
    },
    Name: { 
        type: DataTypes.STRING( 100 ), 
        allowNull: false 
    },
    Department: {   
        type: DataTypes.STRING( 100 ), 
        allowNull: false 
    },
    Designation: { 
        type: DataTypes.STRING( 100 ) 
    },
    Grade: { 
        type: DataTypes.STRING( 50 ) 
    },
    CompanyCode: { 
        type: DataTypes.STRING( 50 ), 
        allowNull: false 
    },
    BranchCode: { 
        type: DataTypes.STRING( 25 ), 
        allowNull: false 
    },
    WorkLocation: { 
        type: DataTypes.STRING( 50 ) 
    },
    Position: { 
        type: DataTypes.STRING( 50 ) 
    },
    HierarchyCode: { 
        type: DataTypes.STRING( 50 ) 
    },
    Address: { 
        type: DataTypes.STRING(500) 
    },
    City: { 
        type: DataTypes.STRING( 50 ) 
    },
    PhoneNo: { 
        type: DataTypes.BIGINT, 
        allowNull: false 
    },
    PinCode: { 
        type: DataTypes.STRING( 10 ) 
    },
    Email: { 
        type: DataTypes.STRING( 100 ), 
        allowNull: false 
    },
    Fax: { 
        type: DataTypes.STRING( 100 ) 
    },
    OwnConv: { 
        type: DataTypes.BOOLEAN 
    },
    DistFromHouse: { 
        type: DataTypes.INTEGER 
    },
    PFNo: { 
        type: DataTypes.STRING( 25 ) 
    },
    ESICNo: { 
        type: DataTypes.STRING( 25 ) 
    },
    PanNo: { 
        type: DataTypes.STRING( 25 ),
    },
    Married: { 
        type: DataTypes.BOOLEAN 
    },
    DoB: { 
        type: DataTypes.DATEONLY
    },
    JoiningDt: { 
        type: DataTypes.DATEONLY
    },
    EduQualification: { 
        type: DataTypes.STRING( 50 ) 
    },
    ProfQualification: { 
        type: DataTypes.STRING( 50 ) 
    },
    OwnHouse: { 
        type: DataTypes.BOOLEAN
    },
    GrossSalary: { 
        type: DataTypes.INTEGER 
    },
    InActive: { 
        type: DataTypes.BOOLEAN 
    },
    InActiveDate: { 
        type: DataTypes.DATEONLY 
    },
    Sex: { 
        type: DataTypes.STRING( 25 ) 
    },
    CardNo: { 
        type: DataTypes.STRING( 25 ) 
    },
    Comm: { 
        type: DataTypes.DECIMAL( 18, 3 ) 
    },
    PresentAddress: { 
        type: DataTypes.STRING( 300 ) 
    },
    FatherName: { 
        type: DataTypes.STRING( 150 ) 
    },
    MotherName: { 
        type: DataTypes.STRING( 150 ) 
    },
    ShiftCode: { 
        type: DataTypes.STRING( 25 ) 
    },
    isOverTimeAllowed: { 
        type: DataTypes.BOOLEAN 
    },
    hasLeft: { 
        type: DataTypes.BOOLEAN 
    },
    LeftDate: { 
        type: DataTypes.DATEONLY 
    },
    isAdvAcc: { 
        type: DataTypes.BOOLEAN 
    },
    isTourAcc: { 
        type: DataTypes.BOOLEAN 
    },
    RegdNo: { 
        type: DataTypes.STRING( 50 ) 
    },
    LevelCode: { 
        type: DataTypes.STRING( 50 ) 
    },
    Band: { 
        type: DataTypes.STRING( 50 ) 
    },
    oldCode: { 
        type: DataTypes.STRING( 50 )
    },
    Sepration: { 
        type: DataTypes.STRING( 50 )
    },
    State: { 
        type: DataTypes.STRING( 100 )
    },
    Country: { 
        type: DataTypes.STRING( 100 )
    },
    AdvAcc: { 
        type: DataTypes.STRING( 50 )
    },
    TourAcc: { 
        type: DataTypes.STRING( 50 )
    },
    TxtApplCode: { 
        type: DataTypes.STRING( 25 )
    },
    MobileNo: { 
        type: DataTypes.STRING( 25 )
    },
    IsESICApplicable: { 
        type: DataTypes.BOOLEAN
    },
    PFCalculationType: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    EmpType: { 
        type: DataTypes.STRING( 25 )
    },
    UnitESIC: { 
        type: DataTypes.STRING( 50 )
    },
    UnitESICNo: { 
        type: DataTypes.STRING( 50 )
    },
    BankName: { 
        type: DataTypes.STRING( 50 )
    },
    AccountNo: { 
        type: DataTypes.STRING( 50 )
    },
    CustCode: { 
        type: DataTypes.STRING( 50 )
    },
    CustName: { 
        type: DataTypes.STRING( 150 )
    },
    IsBilled: { 
        type: DataTypes.BOOLEAN
    },
    IsLWFApplicable: { 
        type: DataTypes.BOOLEAN
    },
    RMEmpId: { 
        type: DataTypes.STRING( 25 )
    },
    RMEmpName: { 
        type: DataTypes.STRING( 100 )
    },
    RMEmailId: { 
        type: DataTypes.STRING( 100 )
    },
    IsRM: { 
        type: DataTypes.BOOLEAN
        },
    IsBranchHead: { 
        type: DataTypes.BOOLEAN
    },
    ProductName: { 
        type: DataTypes.STRING( 100 )
    },
    Branchheadid: { 
        type: DataTypes.STRING( 25 )
    },
    BranchHeadName: {   
        type: DataTypes.STRING( 100 )
    },
    BranchheademailId: { 
        type: DataTypes.STRING( 100 )
    },
    Draftjoiningdt: { 
        type: DataTypes.DATEONLY
    },
    HeadId: { 
        type: DataTypes.STRING( 25 )
    },
    HeadName: { 
        type: DataTypes.STRING( 100 )
    },
    HeadEmailId: { 
        type: DataTypes.STRING( 100 )
    },
    IsHead: { 
        type: DataTypes.BOOLEAN
    },
    UANNo: { 
        type: DataTypes.STRING( 50 )
    },
    HasRegin: { 
        type: DataTypes.BOOLEAN
    },
    ResignationDate: { 
        type: DataTypes.DATEONLY
    },
    AdharNo: { 
        type: DataTypes.STRING( 50 )
    },
    AccountId: { 
        type: DataTypes.STRING( 50 )
    },
    AccountName: { 
        type: DataTypes.STRING( 100 )
    },
    AccountEmailId: { 
        type: DataTypes.STRING( 100 )
    },
    IsAccount: { 
        type: DataTypes.BOOLEAN
    },
    PTaxapplicable: { 
        type: DataTypes.BOOLEAN
    },
    NameInBank: { 
        type: DataTypes.STRING( 200 )
    },
    BloodGroup: {
        type: DataTypes.STRING( 50 )
    },
    EduQualificationYear: { 
        type: DataTypes.STRING( 50 )
    },
    ProfQualificationYear: { 
        type: DataTypes.STRING( 50 )
        },
    FirstCompanyName: { 
        type: DataTypes.STRING( 200 )
    },
    FirstCompanyFromDate: { 
        type: DataTypes.DATEONLY
    },
    FirstCompanyTodate: { 
        type: DataTypes.DATEONLY
    },
    FirstCompanyDesignation: { 
        type: DataTypes.STRING( 100 )
    },
    SecondCompanyName: { 
        type: DataTypes.STRING( 200 )
    },
    SecondCompanyFromDate: { 
        type: DataTypes.DATEONLY
    },
    SecondCompanyTodate: { 
        type: DataTypes.DATEONLY
    },
    SecondCompanyDesignation: { 
        type: DataTypes.STRING( 100 )
    },
    FatherDOB: { 
        type: DataTypes.DATEONLY 
    },
    FatherAadharno: { 
        type: DataTypes.STRING( 50 )
    },
    MotherDOB: { 
        type: DataTypes.DATEONLY
    },
    MotherAadharno: {
        type: DataTypes.STRING( 50 )
    },
    StoreName: { 
        type: DataTypes.STRING( 200 )
    },
    Channel: { 
        type: DataTypes.STRING( 50 )
    },
    ProductHeadName: { 
        type: DataTypes.STRING( 100 )
    },
    NationalProductHead: { 
        type: DataTypes.STRING( 200 )
    },
    MaritalStatus: { 
        type: DataTypes.STRING( 50 )
    },
    SpouseName: { 
        type: DataTypes.STRING( 200 )
        },
    SpouseDOb: { 
        type: DataTypes.DATEONLY
    },
    SpouseAadharno: { 
        type: DataTypes.STRING( 50 )
    },
    Child1Name: { 
        type: DataTypes.STRING( 200 )
    },
    Child1DOB: { 
        type: DataTypes.DATEONLY
    },
    Child1Gender: { 
        type: DataTypes.STRING( 50 )
    },
    Child1Aadharno: { 
        type: DataTypes.STRING( 50 )
    },
    Chile2Name: { 
        type: DataTypes.STRING( 200 )
    },
    Child2DOB: { 
        type: DataTypes.DATEONLY
    },
    Child2Aadharno: { 
        type: DataTypes.STRING( 50 )
    },
    Child2Gender: { 
        type: DataTypes.STRING( 50 )
    },
    NomeneeName: { 
        type: DataTypes.STRING( 200 )
    },
    ReleationwithNomnee: { 
        type: DataTypes.STRING( 50 )
    },
    NEsic: { 
        type: DataTypes.STRING( 200 )
    },
    Child3Name: { 
        type: DataTypes.STRING( 200 )
    },
    Child3DOB: { 
        type: DataTypes.DATEONLY
    },
    Child3Gender: { 
        type: DataTypes.STRING( 50 )
    },
    Child3Aadharno: { 
        type: DataTypes.STRING( 50 )
    },
    Child4Name: { 
        type: DataTypes.STRING( 200 )
    },
    Child4DOB: { 
        type: DataTypes.DATEONLY
    },
    Child4Gender: { 
        type: DataTypes.STRING( 50 )
    },
    Child4Aadharno: { 
        type: DataTypes.STRING( 50 )
    },
    Division: { 
        type: DataTypes.STRING( 50 )
    },
    Joined: { 
        type: DataTypes.BOOLEAN
    },
    Org_Unit_Code: { 
        type: DataTypes.STRING( 50 )
    },
    Profile_Code: { 
        type: DataTypes.STRING( 50 )
    },
    Div_Code: { 
        type: DataTypes.STRING( 1000 )
    },
    Dept_Code: { 
        type: DataTypes.STRING( 50 )
    },
    Sale_Office_Code: { 
        type: DataTypes.STRING( 50 )
    },
    Designation_Code: { 
        type: DataTypes.STRING( 50 )
    },
    ReportingTo: { 
        type: DataTypes.STRING( 50 )
    },
    UserType: { 
        type: DataTypes.STRING( 50 )
    },
    T_EndDate: { 
        type: DataTypes.DATEONLY
    },
    CTC: { 
        type: DataTypes.INTEGER
    },
    WeekOff: { 
        type: DataTypes.STRING( 50 )
    },
    TL_Emp_Code: { 
        type: DataTypes.STRING( 50 )
    },
    TL_Emp_Name: { 
        type: DataTypes.STRING( 100 )
    },
    TL_Email: { 
        type: DataTypes.STRING( 100 )
    },
    isTL: { 
        type: DataTypes.BOOLEAN
    },
    FaxOtp: { 
        type: DataTypes.STRING( 50 )
    },
    Abscond: { 
        type: DataTypes.BOOLEAN
    },
    Office_Email: { 
        type: DataTypes.STRING( 100 )
    },
    Store_Code: {
        type: DataTypes.STRING( 50 )
    },
    StoreLocation: { 
        type: DataTypes.STRING( 1000 )
    },
    SalesOffice: { 
        type: DataTypes.STRING( 50 )
    },
    Region: { 
        type: DataTypes.STRING( 50 )
    },
    ActualChannel: { 
        type: DataTypes.STRING( 200 )
    }
}, {
    tableName: "EmployeeMaster",
    timestamps: false
} );

module.exports = Employee;