import config from '../../config'
import { IAcademicSemester } from '../academicSemester/academicSemester.interface'
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model'
import { Student } from '../student/student.interface'
import { StudentModel } from '../student/student.model'
import { TUser } from './user.interface'
// import { NewUser, TUser } from "./user.interface";
import { UserModel } from './user.model'
import { generatedStudentId } from './user.utils'

const createStudentIntoDB = async (password: string, payLoad: Student) => {
  // create a user object
  //  const user: NewUser = {}
  const userData: Partial<TUser> = {}

  // if password given, use default password
  userData.password = password || (config.default_pass as string)

  //set student role
  userData.role = 'student'

  ////set generated manually userData id
  //userData.id = '2030100001'

  // find academic semester info
  const admissionSemester = await AcademicSemesterModel.findById(
    payLoad.admissionSemester,
  )
  //auto generate userData id
  userData.id = await generatedStudentId(admissionSemester)

  //create a user
  const result = await UserModel.create(userData)

  //  create a student
  if (Object.keys(result).length) {
    // set id, _id as user
    payLoad.id = result.id //embedding id
    payLoad.user = result._id //reference _id
    const newStudent = await StudentModel.create(payLoad)
    return newStudent
  }

  //  return result
}

export const UserServices = {
  createStudentIntoDB,
}
