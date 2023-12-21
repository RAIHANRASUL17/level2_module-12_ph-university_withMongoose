import { z } from 'zod'

const contactNoSchema = z
  .string()
  .min(10, 'Contact number should have at least 10 digits')
  .max(15, 'Contact number should not exceed 15 digits')
  .regex(/^\d+$/, 'Contact number should only contain digits')

const emergencyContactNoSchema = z.string()
// main
export const createStudentZodValidationSchema = z.object({
  body: z.object({
    // id: z.string(),
    password: z.string().max(8),
    student: z.object({
      name: z.object({
        firstName: z.string().max(20, 'First name cannot exceed 20 characters'),
        middleName: z.string().optional(),
        lastName: z.string(),
      }),
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email('Invalid email format'),
      contactNo: contactNoSchema,
      emergencyContactNo: emergencyContactNoSchema,
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: z.object({
        fatherName: z.string(),
        fatherOccupation: z.string(),
        fatherContactNo: contactNoSchema,
        motherName: z.string(),
        motherOccupation: z.string(),
        motherContactNo: contactNoSchema,
      }),
      localGuardian: z.object({
        name: z.string(),
        occupation: z.string(),
        contactNo: contactNoSchema,
        address: z.string(),
      }),
      profileImg: z.string().optional(),
      admissionSemester: z.string(),
    }),
  }),
})

// // export default studentZodSchema(ai ta ki kaj a lagcee??)
// export const StudentZodValidations = {
//   studentZodSchema,
// }
