import { Absence, Person, ZeltDocument } from './data.interface'

export class ZeltAPI {
  static fetchPeopleData(): Person[] {
    return [
      {
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        userId: 1,
        firstName: 'Donald',
        lastName: 'Wheeler',
        email: 'donald.wheeler@example.com',
        site: 'London',
        department: 'Founders Office',
        startDate: '15/01/2021',
        jobTitle: 'CEO',
        reportsTo: null,
        directReports: [2],
        birthday: '1965-08-28',
        profileCompletion: 70,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
        userId: 2,
        firstName: 'Albert',
        lastName: 'Romero',
        email: 'albert.romero@example.com',
        site: 'Italy',
        department: 'Sales',
        startDate: '10/08/2021',
        jobTitle: 'Sales Manager',
        reportsTo: 1,
        directReports: null,
        birthday: '1987-09-17',
        profileCompletion: 95,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        userId: 3,
        firstName: 'Hannah',
        lastName: 'Williams',
        email: 'hannah.williams@example.com',
        site: 'London',
        department: 'Product',
        startDate: '20/02/2021',
        jobTitle: 'Product Manager',
        reportsTo: 1,
        directReports: null,
        birthday: '1980-10-23',
        profileCompletion: 100,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/41.jpg',
        userId: 4,
        firstName: 'Patricia',
        lastName: 'Hoffman',
        email: 'patricia.hoffman@example.com',
        site: 'London',
        department: 'Customer Success',
        startDate: '28/02/2021',
        jobTitle: 'Customer Success Manager',
        reportsTo: 3,
        directReports: null,
        birthday: '1962-06-06',
        profileCompletion: 80,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        userId: 5,
        firstName: 'Mateo',
        lastName: 'Garza',
        email: 'mateo.garza@example.com',
        site: 'London',
        department: 'Business Operations',
        startDate: '12/03/2021',
        jobTitle: 'Business Development Lead',
        reportsTo: 1,
        directReports: null,
        birthday: '1980-09-01',
        profileCompletion: 90,
      },
    ]
  }

  static fetchAbsenceData(): Absence[] {
    return [
      {
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        userId: 1,
        begin: '27/08/2022',
        end: '27/08/2022',
        status: 'approved',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
        userId: 2,
        begin: '22/08/2022',
        end: '23/08/2022',
        status: 'approved',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/41.jpg',
        userId: 4,
        begin: '12/09/2022',
        end: '15/09/2022',
        status: 'pending',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        userId: 5,
        begin: '15/08/2022',
        end: '16/08/2022',
        status: 'approved',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        userId: 1,
        begin: '19/09/2022',
        end: '20/09/2022',
        status: 'pending',
      },
    ]
  }

  static fetchDocumentData(): ZeltDocument[] {
    return [
      {
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        userId: 1,
        name: 'passport',
        attachment: 'https://dummyfile.pdf',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
        userId: 2,
        name: 'p45',
        attachment: null,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        userId: 3,
        name: 'passport',
        attachment: null,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        userId: 5,
        name: 'passport',
        attachment: null,
      },
    ]
  }
}
