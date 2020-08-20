import home from '../Pages/home'
import login from '../Pages/login'
import signup from '../Pages/signup'
import user from '../Pages/user'
// import recovery from './Pages/Recovery'
// import notFound from './Pages/NotFound'
// import account from './Pages/Account'
// import about from './Pages/About'
// import post from './components/post/Post'
// import tabsTestPage from './Pages/TabPageTest'

const routes = [
	{
		path: '/',
		exact: true,
		component: home,
	},
	{
		path: '/login',
		exact: true,
		component: login,
	},
	{
		path: '/signup',
		exact: true,
		component: signup,
	},
	{
		path: '/:handle',
		exact: true,
		component: user,
	},
]

export default routes
