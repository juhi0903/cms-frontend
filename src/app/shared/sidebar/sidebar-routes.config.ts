import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/dashboard', title: 'DashBoard', icon: 'ft-layout', access: '1001',class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    // {
    //     path: '/ticket', title: 'Tickets', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '/createticket', title: 'Create Ticket', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    {
        path: '/', title: 'Category Management', icon: 'ft-align-left',  access: '1001', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/createcategory', title: 'Category', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/createmapping', title: 'Create Mapping', icon: '', access: '1001',  class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/viewmapping', title: 'View Mapping', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    },
    {
        path: '', title: 'Content Management', icon: 'ft-align-left',  access: '1001', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/content/contentprovider', title: 'Content Provider', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/content/upload', title: 'Upload Content', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/content/approve', title: 'Approve Content', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    },
    {
        path: '', title: 'Portal Management', icon: 'ft-align-left',  access: '1001', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/portal/new', title: 'Create Portal', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/portal/view', title: 'View Portal', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    },
    {
        path: '', title: 'User Management', icon: 'ft-align-left', access: '1001',  class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/user/create', title: 'Create User', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/user/view', title: 'View User', icon: '',  access: '1001', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    }
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    // { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];
