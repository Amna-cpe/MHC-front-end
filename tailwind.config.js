module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate:{
      '133':"133deg",
   
    },
    extend: {
      fontFamily:{
        rubik:['Rubik' , 'san-serif'],
        heading:['Rubik' , 'sans-serif']
      },
      colors: {
        green: {
          500: '#3D8882',
          600:"#347570",
          900:"#022127"
         
        },
        gray:{
          300:"#d8d8d8",
          100:"#fffffe",
          900:"#191714"
        },
        yellow:{
          100:"#ffd803"
        },
        slate:{
          800:"#272343",
          900:"#2d334a"
        },
        blue:{
          100:"#e3f6f5",
          200:"#bae8e8"
        },
        red:{
          100:"#e16162"
        },
        white:{
          100:"#fffffe"
        },
        orange:{
          100:"#ff8906"
        }
        
      },
     
    },
    
    
  },
  plugins: [],

}