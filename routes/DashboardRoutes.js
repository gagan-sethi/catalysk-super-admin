import { v4 as uuid } from 'uuid';


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
		children: [
			{ id: uuid(), link: '/pages/users-management', name: 'User Profile Dashboard' },
			{ id: uuid(), link: '/pages/users-home-profile', name: 'User Home Profile' }
		]
	},
	{
		id: uuid(),
		title: 'Subscription Info',
		icon: 'edit',
		children: [
			{ id: uuid(), link: '/pages/payment-plans', name: 'Payment Plans' },
			{ id: uuid(), link: '/pages/qr-codes', name: 'QR Codes' },
			{ id: uuid(), link: '/pages/payments', name: 'Payments' },
		]
	},
	{
		id: uuid(),
		title: 'Corporate Customers Management',
		icon: 'users',
		link: '/pages/corporate-customer-management'
	},

	{
		id: uuid(),
		title: 'Corporates Management',
		icon: 'briefcase',
		link: '/pages/corporates-management'
	},

	{
		id: uuid(),
		title: 'Proof Verification',
		icon: 'briefcase',
		link: '/pages/proof-verification'
	},
	{
		id: uuid(),
		title: 'Bills Management',
		icon: 'file',
		link: '/pages/bills-management'
	},

	// {
	// 	id: uuid(),
	// 	title: 'Societies Management',
	// 	icon: 'git-pull-request',
	// 	link: '#'
	// },

	{
		id: uuid(),
		title: 'Catalogue',
		icon: 'edit',
		children: [
			{ id: uuid(), link: '/pages/electricity-catalogue', name: 'Electricity' },
			{ id: uuid(), link: '/pages/water-catalogue', name: 'Water' },
		]
	},

	{
		id: uuid(),
		title: 'Assumptions',
		icon: 'git-pull-request',
		children: [
			{ id: uuid(), link: '/pages/electricity-assumptions', name: 'Electricity' },
			{ id: uuid(), link: '/pages/water-assumptions', name: 'Water' },
			{ id: uuid(), link: '/pages/commute-assumptions', name: 'Commute' },
		]
	},

	// {
	// 	id: uuid(),
	// 	title: 'Challenges Management',
	// 	icon: 'pocket',
	// 	link: '#'
	// },

	{
		id: uuid(),
		title: 'General Management',
		icon: 'edit',
		children: [
			{ id: uuid(), link: '/pages/privacy-policy', name: 'Privacy Policy' },
			{ id: uuid(), link: '/pages/terms-conditions', name: 'Terms and Conditions' },
			{ id: uuid(), link: '/pages/feedbacks-management', name: 'Feedbacks' },
			{ id: uuid(), link: '/pages/faq-management', name: 'F.A.Q' }
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
		link: '/pages/reports-management',
		children: [
			{ id: uuid(), link: '/pages/users-report', name: 'Users Report' },
			{ id: uuid(), link: '/pages/corporates-report', name: 'Corporates Report' },
			// { id: uuid(), link: '/pages/socities-report', name: 'Socities Report' },
			// { id: uuid(), link: '/pages/challenges-report', name: 'Challenges Report' }
		]
	},


];

export default DashboardMenu;
