CREATE TABLE UserMaster (
    ProfileId INT NOT NULL PRIMARY KEY,  -- Primary key column
    UserName VARCHAR(50) NOT NULL,  -- Mandatory column
    FirstName VARCHAR(50) NOT NULL,  -- Mandatory column
    MiddleName VARCHAR(50) NULL,  -- Optional column
    LastName VARCHAR(50) NULL,  -- Optional column
    DisplayName VARCHAR(100) NOT NULL,  -- Mandatory column
    ContactNo VARCHAR(20) NOT NULL,  -- Mandatory column
    ContactNo1 VARCHAR(20) NULL,  -- Optional column
    AddressLine1 VARCHAR(20) NOT NULL,  -- Mandatory column
    AddressLine2 VARCHAR(20) NULL,  -- Optional column
    AddressLine3 VARCHAR(20) NULL,  -- Optional column
    City VARCHAR(20) NOT NULL,  -- Mandatory column
    State VARCHAR(20) NULL,  -- Optional column
    District VARCHAR(20) NULL,  -- Optional column
    Town VARCHAR(20) NULL,  -- Optional column
    Country VARCHAR(20) NOT NULL,  -- Mandatory column
    ZipCode VARCHAR(20) NOT NULL,  -- Mandatory column
    ManagerId INT NULL,  -- Optional column, could be a foreign key
    ManagerName VARCHAR(100) NULL,  -- Optional column
    Password VARCHAR(100) NOT NULL,  -- Mandatory column
    EmailId VARCHAR(100) NULL,  -- Optional column
    MFAToken VARCHAR(20) NULL,  -- Optional column
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    UpdateBy VARCHAR(128) NOT NULL,  -- Mandatory column
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255), -- to store any event corresponding to that row

    CONSTRAINT FK_Manager FOREIGN KEY (ManagerId) REFERENCES UserMaster(ProfileId)  -- Foreign Key for ManagerId
);

CREATE TABLE LoginTracking (
    LoginTrackingId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    ProfileId INT NOT NULL,  -- Mandatory column
    UserName VARCHAR(50) NOT NULL,  -- Mandatory column
    LoginTriedIP VARCHAR(50) NULL,  -- Optional column
    LoginTriedOn TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    LoginResult VARCHAR(512) NOT NULL,  -- Mandatory column
    SessionActive BOOLEAN NOT NULL,  -- Mandatory column (PostgreSQL BOOLEAN)
    SessionStartOn TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    SessionEndOn TIMESTAMPTZ NULL,  -- Optional column (PostgreSQL TIMESTAMPTZ)
    SessionId INT NOT NULL,  -- Mandatory column
    SessionDuration INT NULL,  -- Optional column (Session duration in ms)
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255),  -- to store any event corresponding to that row
    CONSTRAINT FK_Profile FOREIGN KEY (ProfileId) REFERENCES UserMaster(ProfileId)  -- Foreign key relation to UserMaster
);

CREATE TABLE UserAccessGroupMaster (
    UserAccessGroupId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    AccessGroupName VARCHAR(128) NOT NULL,  -- Mandatory column
    Description VARCHAR(100) NULL,  -- Optional column
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    CreatedBy VARCHAR(20) NOT NULL,  -- Mandatory column
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    UpdatedBy VARCHAR(20) NOT NULL  -- Mandatory column
);

CREATE TABLE RightMaster (
    RightMasterId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    RightName VARCHAR(255) NOT NULL,  -- Mandatory column
    Description VARCHAR(100) NULL,  -- Optional column
    Platform VARCHAR(255) NULL,  -- Optional column
    Active BOOLEAN NOT NULL,  -- Mandatory column (BOOLEAN type for active flag)
    CompanyCode VARCHAR(50) NULL,  -- Optional column
    SiteCode VARCHAR(50) NULL,  -- Optional column
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255)  -- to store any event corresponding to that row
);


CREATE TABLE ConditionMaster (
    ConditionMasterId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    ConditionName VARCHAR(255) NOT NULL,  -- Mandatory column
    Description TEXT NULL,  -- Optional column for detailed description
    AppliesToObject VARCHAR(255) NULL,  -- Optional column indicating object the condition applies to
    WhereClause TEXT NULL,  -- Optional column for SQL-like WHERE clause
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255)  -- to store any event corresponding to that row
);

CREATE TABLE ShiftMaster (
    ShiftMasterId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    ShiftName VARCHAR(100) NOT NULL,  -- Mandatory column for the shift name
    ShiftStart TIME NOT NULL,  -- Mandatory column for the shift start time
    CompanyCode VARCHAR(50) NULL,  -- Optional column for the company code
    SiteCode VARCHAR(50) NULL,  -- Optional column for the site code
    Status VARCHAR(20) NULL,  -- Optional column for the shift status (e.g., Active, Inactive)
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who created the record
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who last updated the record
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255)  -- to store any event corresponding to that row
);

CREATE TABLE CompanySiteMaster (
    CompanySiteMasterId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    Description TEXT NULL,  -- Optional column for a description of the site
    CompanySite VARCHAR(255) NULL,  -- Optional column for the name of the company site
    CompanyCode VARCHAR(50) NULL,  -- Optional column for the company code
    CompanyName VARCHAR(255) NULL,  -- Optional column for the company name
    SiteCode VARCHAR(50) NULL,  -- Optional column for the site code
    SiteName VARCHAR(255) NULL,  -- Optional column for the site name
    Active BOOLEAN DEFAULT TRUE,  -- Optional column for the status, defaults to TRUE (Active)
    SequenceNo INT NULL,  -- Optional column for the sequence number of the site
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who created the record
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column (PostgreSQL TIMESTAMPTZ)
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who last updated the record
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255)  -- to store any event corresponding to that row
);

CREATE TABLE SkillMaster (
    SkillMasterId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    SkillName VARCHAR(255) NOT NULL,  -- Mandatory column for skill name
    Description VARCHAR(100) NULL,  -- Optional column for skill description
    CompanyCode VARCHAR(50) NULL,  -- Optional column for company code
    SiteCode VARCHAR(50) NULL,  -- Optional column for site code
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column for creation date
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who created the record
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column for last updated date
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who last updated the record
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255) -- to store any event corresponding to that row
);

CREATE TABLE AccessGroupRight (
    AccessGroupRightId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    UserAccessGroupId BIGINT NOT NULL,  -- Foreign key to UserAccessGroupMaster table
    RightMasterId BIGINT NOT NULL,  -- Foreign key to RightMaster table
    ConditionMasterId BIGINT NOT NULL,  -- Foreign key to ConditionMaster table
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column for creation date
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who created the record
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column for last updated date
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who last updated the record
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255),  -- to store any event corresponding to that row
    CONSTRAINT fk_user_access_group FOREIGN KEY (UserAccessGroupId) REFERENCES UserAccessGroupMaster(UserAccessGroupId),  -- Foreign key constraint
    CONSTRAINT fk_right_master FOREIGN KEY (RightMasterId) REFERENCES RightMaster(RightMasterId),  -- Foreign key constraint
    CONSTRAINT fk_condition_master FOREIGN KEY (ConditionMasterId) REFERENCES ConditionMaster(ConditionMasterId)  -- Foreign key constraint
);

CREATE TABLE UserSkill (
    UserSkillId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    UserId INT NOT NULL,  -- Foreign key to UserMaster table
    SkillMasterId BIGINT NOT NULL,  -- Foreign key to SkillMaster table
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column for creation date
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who created the record
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column for last updated date
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who last updated the record
    rcreate TIMESTAMPTZTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255),  -- to store any event corresponding to that row
    CONSTRAINT fk_user FOREIGN KEY (UserId) REFERENCES UserMaster(ProfileId),  -- Foreign key constraint to UserMaster table
    CONSTRAINT fk_skill_master FOREIGN KEY (SkillMasterId) REFERENCES SkillMaster(SkillMasterId)  -- Foreign key constraint to SkillMaster table
);

CREATE TABLE UserCompanySite (
    UserCompanySiteId BIGINT NOT NULL PRIMARY KEY,  -- Primary key column
    UserId INT NOT NULL,  -- Foreign key to UserMaster table
    CompanyCode VARCHAR(50) NOT NULL,  -- Mandatory column for company code
    SiteCode VARCHAR(50) NOT NULL,  -- Mandatory column for site code
    CreatedDate TIMESTAMPTZ NOT NULL,  -- Mandatory column for creation date
    CreatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who created the record
    LastUpdated TIMESTAMPTZ NOT NULL,  -- Mandatory column for last updated date
    UpdatedBy VARCHAR(128) NOT NULL,  -- Mandatory column for the user who last updated the record
    rcreate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was created
    rupdate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,  -- to store when row was updated
    revent VARCHAR(255),  -- to store any event corresponding to that row
    CONSTRAINT fk_user FOREIGN KEY (UserId) REFERENCES UserMaster(ProfileId)  -- Foreign key constraint to UserMaster table
);

