import { createMuiTheme } from '@material-ui/core'

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#faef5a"
        }
    },
    typography: {
        fontFamily:
        'Mada',
        fontWeightRegular: 700,

    },
    overrides: {
        MUIDataTable: {
          responsiveScroll: {
          maxHeight: '980px'
          }
      }}
})

export default myTheme;