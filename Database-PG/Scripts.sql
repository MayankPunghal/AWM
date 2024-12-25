-- Full table schema with additional columns

-- LoginTracking Table
CREATE TABLE LoginTracking (
    LoginTrackingId BIGINT NOT NULL,
    UserMasterId INT NOT NULL,
    UserName VARCHAR(50) NOT NULL,
    LoginTriedIP VARCHAR(255),
    LoginTriedOn TIMESTAMP NOT NULL,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (LoginTrackingId),
    FOREIGN KEY (UserMasterId) REFERENCES UserMaster(UserMasterId)
);

-- UserMaster Table
CREATE TABLE UserMaster (
    UserMasterId INT NOT NULL,
    UserName VARCHAR(50) NOT NULL,
    UserEmail VARCHAR(100) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Role VARCHAR(50) NOT NULL,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (UserMasterId)
);

-- UserAccessGroupMaster Table
CREATE TABLE UserAccessGroupMaster (
    AccessGroupId INT NOT NULL,
    AccessGroupName VARCHAR(100) NOT NULL,
    Description TEXT,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (AccessGroupId)
);

-- RightMaster Table
CREATE TABLE RightMaster (
    RightId INT NOT NULL,
    RightName VARCHAR(100) NOT NULL,
    Description TEXT,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (RightId)
);

-- AccessGroupRight Table
CREATE TABLE AccessGroupRight (
    AccessGroupRightId INT NOT NULL,
    AccessGroupId INT NOT NULL,
    RightId INT NOT NULL,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (AccessGroupRightId),
    FOREIGN KEY (AccessGroupId) REFERENCES UserAccessGroupMaster(AccessGroupId),
    FOREIGN KEY (RightId) REFERENCES RightMaster(RightId)
);

-- SkillMaster Table
CREATE TABLE SkillMaster (
    SkillId INT NOT NULL,
    SkillName VARCHAR(100) NOT NULL,
    SkillDescription TEXT,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (SkillId)
);

-- UserSkill Table
CREATE TABLE UserSkill (
    UserSkillId INT NOT NULL,
    UserMasterId INT NOT NULL,
    SkillId INT NOT NULL,
    SkillLevel INT,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (UserSkillId),
    FOREIGN KEY (UserMasterId) REFERENCES UserMaster(UserMasterId),
    FOREIGN KEY (SkillId) REFERENCES SkillMaster(SkillId)
);

-- UserCompanySite Table
CREATE TABLE UserCompanySite (
    UserCompanySiteId INT NOT NULL,
    UserMasterId INT NOT NULL,
    CompanySiteId INT NOT NULL,
    Role VARCHAR(50),
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (UserCompanySiteId),
    FOREIGN KEY (UserMasterId) REFERENCES UserMaster(UserMasterId),
    FOREIGN KEY (CompanySiteId) REFERENCES CompanySiteMaster(CompanySiteId)
);

-- AWMTablePRelease Table
CREATE TABLE AWMTablePRelease (
    TablePReleaseId INT NOT NULL,
    TableName VARCHAR(100) NOT NULL,
    ReleaseDate TIMESTAMP,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (TablePReleaseId)
);

-- AWMTableReleased Table
CREATE TABLE AWMTableReleased (
    TableReleasedId INT NOT NULL,
    TableName VARCHAR(100) NOT NULL,
    ReleaseDate TIMESTAMP,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (TableReleasedId)
);

-- AWMColumnPRelease Table
CREATE TABLE AWMColumnPRelease (
    ColumnPReleaseId INT NOT NULL,
    ColumnName VARCHAR(100) NOT NULL,
    TablePReleaseId INT NOT NULL,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (ColumnPReleaseId),
    FOREIGN KEY (TablePReleaseId) REFERENCES AWMTablePRelease(TablePReleaseId)
);

-- AWMColumnReleased Table
CREATE TABLE AWMColumnReleased (
    ColumnReleasedId INT NOT NULL,
    ColumnName VARCHAR(100) NOT NULL,
    TableReleasedId INT NOT NULL,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (ColumnReleasedId),
    FOREIGN KEY (TableReleasedId) REFERENCES AWMTableReleased(TableReleasedId)
);

-- CompanySiteMaster Table
CREATE TABLE CompanySiteMaster (
    CompanySiteId INT NOT NULL,
    CompanySiteName VARCHAR(100) NOT NULL,
    Location VARCHAR(255),
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (CompanySiteId)
);

-- ConditionMaster Table
CREATE TABLE ConditionMaster (
    ConditionId INT NOT NULL,
    ConditionName VARCHAR(100) NOT NULL,
    Description TEXT,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (ConditionId)
);

-- ShiftMaster Table
CREATE TABLE ShiftMaster (
    ShiftId INT NOT NULL,
    ShiftName VARCHAR(100) NOT NULL,
    StartTime TIME NOT NULL,
    EndTime TIME NOT NULL,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (ShiftId)
);

-- SequenceMaster Table
CREATE TABLE SequenceMaster (
    SequenceId INT NOT NULL,
    SequenceName VARCHAR(100) NOT NULL,
    SequenceOrder INT NOT NULL,
    RowUpdate TIMESTAMP DEFAULT current_timestamp,
    RowCreate TIMESTAMP DEFAULT current_timestamp,
    RowEvent VARCHAR(255),
    PRIMARY KEY (SequenceId)
);