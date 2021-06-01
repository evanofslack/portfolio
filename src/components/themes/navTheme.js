import { createMuiTheme } from '@material-ui/core'

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#0d064a"
        }
    },
    typography: {
        fontFamily:
        'karla',
        fontWeightRegular: 500,

    },
    overrides: {
        MUIDataTable: {
          responsiveScroll: {
          maxHeight: '980px'
          }
      }}
})

export default myTheme;