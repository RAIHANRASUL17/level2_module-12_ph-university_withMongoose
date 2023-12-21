import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'

// get all students
const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentIntoDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all student is retrieved  successfully!',
    data: result,
  })
})

// get single Student
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const result = await StudentServices.getSingleStudentIntoDB(studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single student is retrieved  successfully!',
    data: result,
  })
})

// delete student
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const result = await StudentServices.deleteStudentIntoDB(studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student is deleted successfully!',
    data: result,
  })
})

export const StudentControllers = {
  // createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
}
