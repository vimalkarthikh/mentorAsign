# Assign Mentor

# Rendered Information

This document provides essential information about the Assign Mentor API project, including relevant URLs and the last committed hash ID.

## Render URL

- **URL:** (https://mentorassign.onrender.com)

## API Endpoints

### Create a Mentor

This API endpoint allows you to create a new mentor with student details.

**URL:** https://mentorassign.onrender.com/mentor

**Method:** POST

### Create a Student

This API endpoint allows you to create a new student with mentor details.

**URL:** https://mentorassign.onrender.com/student

**Method:** POST

### Assign a student to Mentor

This API endpoint allows you to assign a new students to mentor.

**URL:** https://mentorassign.onrender.com/mentor/:mentorId/assign

**Method:** POST

### Assign or Change Mentor for particular Student

This API endpoint allows you to assign or change a new mentor to student.

**URL:** https://mentorassign.onrender.com/student/:studentId/assignMentor/:mentorId

**Method:** PUT

### List all students for a particular mentor

This API endpoint retrieves a list of all students for a particular mentor.

**URL:** https://mentorassign.onrender.com/mentor/:mentorId/students

**Method:** GET

### Show the previously assigned mentor for a particular student

This API endpoint retrieves a list of all previously assigned mentor for a particular student.

**URL:** https://mentorassign.onrender.com/students/:studentsId/pMentor

**Method:** GET

## API Documentation

- **URL:** https://documenter.getpostman.com/view/29751307/2s9YCBupKb
----------------------------------------------------------------------------------------------------------------------------------
