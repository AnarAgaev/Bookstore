// bookstore-service отведчает за получение данных о книгоа. В настоящем приложении этот скрипт работал бы с сервером

export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler'
      },
      {
        id: 2,
        title: 'Release It',
        author: 'Micheal T. Nygard'
      }
    ];
  }
}