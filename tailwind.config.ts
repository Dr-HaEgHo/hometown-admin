import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#103B1D",
        primary10: "rgba(0, 105, 43, 0.1)",
        primary1: "#00692B",
        primary5: "rgba(25, 245, 111, 0.05)",
        primaryTrans10: "rgba(82, 255, 134, 0.1)",
        head: "#333",
        
        chartBlue: "#596AFF",
        chartGreen:"#36BB2A",


        farmerbox: "rgba(253, 240, 176, 0.6)",
        buyerbox: "#D7FFE9",
        inputdealerbox: "#FFD0E5",
        incubateesbox: "#C6E7F9",

        secondary: "#8ABB2A",
        accent: "#8ABB2A",
        accent2: "#E9C200",
        accent3: "#FDF0B0",
        accent4: "#F2FFF7",
        accent10: "rgba(138, 187, 42, 0.1)",



         // GRAYS

        filterGray: "#787676",
        someGray: "#73777F",
        someDarkGray: "#201919",
        sidebarEdge: "#697586",
        sidebarDiv: "#E3E8EF",
        dashboardBg: "#F5F7F9",
        noteIconBtn: "#FAFAFA",
        smallHeadTxt: "#667085",
        bigHeadTxt: "#101828",
        sidebarTxt:"#E3E8EF",
        sidebarTxtHover:"rgba(227, 232, 239, 0.8)",
        sidebarTxtActive: "rgba(227, 232, 239, 1)",
        linkTxt: "#364152",
        incuTxt: "#F6FFF6",
        tableTopGray: "#ECECEC",
        tableStroke: "rgba(227, 232, 239, 0.5)",
        tableGray: "rgba(227, 232, 239, 1)",
        someBorderGray: "#EAEAEA",
        someOtherGrayBorder: "#F8F8F8",
        

        "80%": "#5c5c5c",
        blackTrans80: "rgba(0, 0, 0, 0.8)",
        blackTrans10: "rgba(0, 0, 0, 0.1)",
        shadow: "rgba(0, 0, 0, 0.15)",
        icons: "#A3ACB9",
        border: "#D9DCE1",
        border2: "#DBDBDB",

        label: "#3D4A5C",
        input: "#787676",
        input10: "rgba(51, 51, 51, 0.1)",
        input20: "rgba(51, 51, 51, 0.2)",
        input60: "rgba(51, 51, 51, 0.6)",
        input80: "rgba(51, 51, 51, 0.8)",
        inputEdit: "#F9FAFB",
        infoTxt: "#8F8F8F",
        line: "#D7DFE9",
        hiPill: "#FDF0B0",
        error: "#D92C20",


        error2: "#DE1238",
        error2Trans10:"rgba(222, 18, 56, 0.1)",
        success: "#019938",
        successTrans10:"rgba(8, 151, 99, 0.1)",


      },
    },
  },
  plugins: [],
}
export default config;
