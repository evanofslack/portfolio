import { createMuiTheme } from '@material-ui/core'

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#02014d"
        }
    },
    typography: {
        fontFamily:
        'Barlow',
        fontWeightRegular: 300,

    },
    overrides: {
        MUIDataTable: {
          responsiveScroll: {
          maxHeight: '980px'
          }
      }}
})

export default myTheme;