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
    upload : 'upload'
    
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



export const status = [
    {id: 1001, name: 'Yet To Start'},
    {id: 1002, name: 'Working'},
    {id: 1003, name: 'Reading Doc.'},
    {id: 1004, name: 'Integration'},
    {id: 1005, name: 'Testing'},
    {id: 1006, name: 'Hold'},
    {id: 1007, name: 'Closed'},
    {id: 1008, name: 'Pending From Biller'},
    {id: 1009, name: 'Re-Open'}
  
  ]

  export const contentType = [
    {id: 1001, name: 'ANIMATION'},
    {id: 1002, name: 'WALLPAPER'},
    {id: 1003, name: 'GAMES'},
    {id: 1004, name: 'VIDEOS'},
    {id: 1005, name: 'TEXTS'},
    {id: 1006, name: 'BANNER'},
    {id: 1007, name: 'AUDIO'},
  ]
  

  export const priorityLevel = [
    {id: 1001, name: 'High'},
    {id: 1002, name: 'Medium'},
    {id: 1003, name: 'Low'}
  ]

  export const problemType = [
    {id: 1001, name: 'Support'},
    {id: 1002, name: 'Integration'},
    {id: 1003, name: 'Internal'},
    {id: 1004, name: 'Other'}
  ]

  export const platform = [
    {id: 1001, name: 'Matrix'},
    {id: 1002, name: 'MGlobo Pay'},
    {id: 1003, name: 'GloboBill'},
    {id: 1004, name: 'Ginger'},
    {id: 1005, name: 'CMS'},
    {id: 1006, name: 'Other'}

  ]

  export const details = [
    {id: 1001, name: `We can make the text bold using the <b> tag. The tag uses both opening and closing tag. The text that needs to be made bold must be within <b> and </b> tag
    We can also use the <strong> tag to make the text strong, with added semantic importance. It also opens with <strong> and ends with </strong> tag.`},
    {id: 1002, name: `We can make the text bold using the <b> tag. The tag uses both opening and closing tag. The text that needs to be made bold must be within <b> and </b> tag.
    We can also use the <strong> tag to make the text strong, with added semantic importance. It also opens with <strong> and ends with </strong> tag. `},
    {id: 1003, name: `We can make the text bold using the <b> tag. The tag uses both opening and closing tag. The text that needs to be made bold must be within <b> and </b> tag.
    We can also use the <strong> tag to make the text strong, with added semantic importance. It also opens with <strong> and ends with </strong> tag.  `},
    {id: 1004, name: `We can make the text bold using the <b> tag. The tag uses both opening and closing tag. The text that needs to be made bold must be within <b> and </b> tag.
    We can also use the <strong> tag to make the text strong, with added semantic importance. It also opens with <strong> and ends with </strong> tag. `},
    // {id: 1005, name: `We can make the text bold using the <b> tag. The tag uses both opening and closing tag. The text that needs to be made bold must be within <b> and </b> tag.
    // We can also use the <strong> tag to make the text strong, with added semantic importance. It also opens with <strong> and ends with </strong> tag.`},
    // {id: 1006, name: `We can make the text bold using the <b> tag. The tag uses both opening and closing tag. The text that needs to be made bold must be within <b> and </b> tag.
    // We can also use the <strong> tag to make the text strong, with added semantic importance. It also opens with <strong> and ends with </strong> tag.`},

  ]

  export const pending_url = "/ticket/pending" ;
  export const personal_url = "/ticket/personal" ;
  export const closed_url = "/ticket/closed" ;
