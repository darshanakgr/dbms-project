DROP DATABASE IF EXISTS SchoolManagementSystem;

CREATE DATABASE SchoolManagementSystem;

USE SchoolManagementSystem;

CREATE TABLE Parent (
  parent_id  VARCHAR(10),
  name       VARCHAR(100) NOT NULL,
  contact_no INT(9),
  address    VARCHAR(200) NOT NULL,
  CONSTRAINT PRIMARY KEY (parent_id)
);

CREATE TABLE Teacher (
  teacher_id VARCHAR(10),
  name       VARCHAR(150) NOT NULL,
  contact_no INT(9),
  CONSTRAINT PRIMARY KEY (teacher_id)
);

CREATE TABLE ClassRoom (
  class_room_id VARCHAR(10),
  building      VARCHAR(50) NOT NULL,
  CONSTRAINT PRIMARY KEY (class_room_id)
);

CREATE TABLE Lesson (
  lesson_id   VARCHAR(10),
  lesson_name VARCHAR(50) NOT NULL,
  CONSTRAINT PRIMARY KEY (lesson_id)
);

CREATE TABLE Category (
  category_id     VARCHAR(10),
  instrument_type VARCHAR(50),
  CONSTRAINT PRIMARY KEY (category_id)
);

CREATE TABLE User (
  username     VARCHAR(20),
  password     VARCHAR(300) NOT NULL,
  id           VARCHAR(10),
  access_level INT(1)       NOT NULL,
  CONSTRAINT PRIMARY KEY (username)
);

CREATE TABLE token(
  username VARCHAR(50),
  access VARCHAR(10),
  token VARCHAR(250),
  CONSTRAINT FOREIGN KEY (username) REFERENCES user(username)
  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Student (
  student_id VARCHAR(10),
  name       VARCHAR(150) NOT NULL,
  gender     VARCHAR(10),
  register_date DATE,
  mobile_no  INT(9),
  parent_id VARCHAR(10),
  CONSTRAINT PRIMARY KEY (student_id),
  CONSTRAINT FOREIGN KEY (parent_id) REFERENCES Parent (parent_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Instrument (
  instrument_id   VARCHAR(10),
  instrument_name VARCHAR(50) NOT NULL,
  purchased_date  DATE,
  category_id     VARCHAR(100),
  CONSTRAINT PRIMARY KEY (instrument_id),
  CONSTRAINT FOREIGN KEY (category_id) REFERENCES Category (category_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Class (
  class_id      VARCHAR(10),
  class_year    YEAR   NOT NULL,
  class_time    TIME   NOT NULL,
  class_type    INT(1) NOT NULL,
  class_day     VARCHAR(9),
  class_room_id VARCHAR(10),
  lesson_id     VARCHAR(10),
  teacher_id    VARCHAR(10),
  CONSTRAINT PRIMARY KEY (class_id),
  CONSTRAINT FOREIGN KEY (class_room_id) REFERENCES ClassRoom (class_room_id)
    ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (lesson_id) REFERENCES Lesson (lesson_id)
    ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (teacher_id) REFERENCES Teacher (teacher_id)
    ON UPDATE CASCADE
);

CREATE TABLE Enrollment (
  student_id VARCHAR(10),
  class_id   VARCHAR(10),
  CONSTRAINT PRIMARY KEY (student_id, class_id),
  CONSTRAINT FOREIGN KEY (student_id) REFERENCES Student (student_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (class_id) REFERENCES Class (class_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Play (
  student_id    VARCHAR(10),
  instrument_id VARCHAR(10),
  CONSTRAINT PRIMARY KEY (student_id, instrument_id),
  CONSTRAINT FOREIGN KEY (student_id) REFERENCES Student (student_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (instrument_id) REFERENCES Instrument (instrument_id)
    ON UPDATE CASCADE
);

CREATE TABLE Attendance (
  student_id  VARCHAR(10),
  class_id    VARCHAR(10),
  attend_date DATE,
  is_present  BOOLEAN,
  CONSTRAINT PRIMARY KEY (student_id, class_id, attend_date),
  CONSTRAINT FOREIGN KEY (student_id) REFERENCES Student (student_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (class_id) REFERENCES Class (class_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE StudentPayment (
  payment_id VARCHAR(10),
  student_id VARCHAR(10),
  amount     DECIMAL(8, 2),
  paid_on    DATE,
  CONSTRAINT PRIMARY KEY (payment_id),
  CONSTRAINT FOREIGN KEY (student_id) REFERENCES Student (student_id)
    ON UPDATE CASCADE
);

CREATE TABLE TeacherPayment (
  payment_id VARCHAR(10),
  teacher_id VARCHAR(10),
  amount     DECIMAL(8, 2),
  paid_on    DATE,
  CONSTRAINT PRIMARY KEY (payment_id),
  CONSTRAINT FOREIGN KEY (teacher_id) REFERENCES Teacher (teacher_id)
    ON UPDATE CASCADE
);

CREATE TABLE Sibling (
  student_id VARCHAR(10),
  sibling_id VARCHAR(10),
  CONSTRAINT PRIMARY KEY (student_id, sibling_id),
  CONSTRAINT FOREIGN KEY (student_id) REFERENCES Student (student_id)
    ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (sibling_id) REFERENCES Student (student_id)
    ON UPDATE CASCADE
);


