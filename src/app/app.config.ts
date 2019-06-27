import {environment }  from '../environments/environment'

export const urls = {
    BASE_URL : environment.BASE_URL,
    // BASE_URL : 'http://43.231.124.147/ginger/',
    allUsers : 'user/allusers',
    user : 'user',
    viewUser : 'view',
    login : 'login',
    password : 'password',
    category : 'category',
    content : 'content',
    upload : 'upload',
    portal : 'portal',
    country : 'country',
    viewcontentmapping : 'contentmapping',
    savecontentmapping : 'categorymapping',
    contentmappingstatus : 'contentmappingstatus',
    approve : '/approve',
    reject : '/reject',
    contentprovider : 'contentprovider',
    
}

export const genders = [
  {id: "Male" , name: "Male"},
  {id: "Female" , name: "Female"},
  {id: "Other" , name: "Other"}
]

export const userrole = [
  {id: "ADMIN" , name: "ADMIN"},
  {id: "CP" , name: "CP"},
  {id: "REVIEWER" , name: "REVIEWER"},
  {id: "PUBLISHER" , name: "PUBLISHER"},
]


  export const contentType = [
    {id: 1001, name: 'ANIMATION'},
    {id: 1002, name: 'WALLPAPER'},
    {id: 1003, name: 'ANDROID GAMES'},
    {id: 1004, name: 'VIDEOS'},
    {id: 1005, name: 'TEXTS'},
    {id: 1006, name: 'BANNER'},
    {id: 1007, name: 'AUDIO'},
    {id: 1008, name: 'HTML GAMES'},

  ]
  

  export const status = [
    {id: 'APPROVED', name: 'Approve'},
    {id: 'UPLOADED', name: 'Pending'},
    {id: 'REJECTED', name: 'Delete'}
  ]

  export const content_url = "http://43.231.124.147/repository/content";
 

