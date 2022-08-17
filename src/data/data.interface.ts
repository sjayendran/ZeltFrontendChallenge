export interface Person {
  avatar: string
  userId: number
  firstName: string
  lastName: string
  email: string
  site: string
  department: string
  startDate: string
  jobTitle: string
  reportsTo: number | null
  directReports: number[] | null
  birthday: string
  profileCompletion: number
}

export interface Absence {
  avatar: string
  userId: number
  begin: string
  end: string
  status: string
}

export interface ZeltDocument {
  avatar: string
  userId: number
  name: string
  attachment: string | null
}
