import { createMuiTheme } from '@material-ui/core/styles'
import { red, amber } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
		primary: {
			light: '#ffffff',
			main: '#fafafa',
			dark: '#c7c7c7',
			contrastText: '#000',
		},
		secondary: {
			light: '#b2fef7',
			main: '#80cbc4',
			dark: '#4f9a94',
			contrastText: '#fff',
		},
	},
  spacing: 10,
  props: {
    MuiWithWidth: {
      initialWidth: 'lg'
    }
  }
})
