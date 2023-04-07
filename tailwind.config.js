tailwind.config = {
    theme: {
      screens: {
        sm: '338px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      },
      extend: {
        colors: {
          background: "#06090F",
          dark: "#161B22",
          light:"#515152",
          green: "#2EA043"
        },
        fontFamily: {
          'sans': ['"Roboto"', 'sans-serif'],
          'rubik': ['Rubik', 'sans-serif'],
          'Montserrat': ['Montserrat', 'sans-serif'],
        }
      }
    },
    variants: {},
    plugins: []
  }