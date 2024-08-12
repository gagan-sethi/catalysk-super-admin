import { v4 as uuid } from 'uuid';
/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */

export const DashboardMenu = [

	// {
	// 	id: uuid(),
	// 	title: 'LAYOUTS & PAGES',
	// 	grouptitle: true
	// },

	// {
	// 	id: uuid(),
	// 	title: 'Menu Level',
	// 	icon: 'corner-left-down',
	// 	children: [
	// 		{ 
	// 			id: uuid(), 
	// 			link: '#', 
	// 			title: 'Two Level',
	// 			children: [
	// 				{ id: uuid(), link: '#', name: 'NavItem 1'},
	// 				{ id: uuid(), link: '#', name: 'NavItem 2' }
	// 			]
	// 		},
	// 		{ 
	// 			id: uuid(), 
	// 			link: '#', 
	// 			title: 'Three Level',
	// 			children: [
	// 				{ 
	// 					id: uuid(), 
	// 					link: '#', 
	// 					title: 'NavItem 1',
	// 					children: [
	// 						{ id: uuid(), link: '#', name: 'NavChildItem 1'},
	// 						{ id: uuid(), link: '#', name: 'NavChildItem 2'}
	// 					]
	// 				},
	// 				{ id: uuid(), link: '#', name: 'NavItem 2' }
	// 			]
	// 		}
	// 	]
	// },


	
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/pages/dashboard'
	},	
	{
		id: uuid(),
		title: 'Users Management',
		icon: 'users',
		link: '/pages/users-management'
	},	
	{
		id: uuid(),
		title: 'Corporates Management',
		icon: 'briefcase',
		link: '/pages/corporates-management'
	},
	{
		id: uuid(),
		title: 'Societies Management',
		icon: 'git-pull-request',
		link: '#'
	},
	{
		id: uuid(),
		title: 'Challenges Management',
		icon: 'pocket',
		link: '#'
	},
	{
		id: uuid(),
		title: 'General Management',
		icon: 'edit',
		children: [
			{ id: uuid(), link: '/pages/privacy-policy', name: 'Privacy Policy' },
			{ id: uuid(), link: '/pages/terms-conditions', name: 'Terms and Conditions' },
			{ id: uuid(), link: '/pages/feedbacks-management', name: 'Feedbacks'},
			{ id: uuid(), link: '/pages/faq-management', name: 'F.A.Q'}				
		]
	},

	{
		id: uuid(),
		title: 'Content Management',
		icon: 'file',
		link: '#'
	},

	{
		id: uuid(),
		title: 'Report Management',
		icon: 'download',
		link: '#'
	},

	
];

export default DashboardMenu;
