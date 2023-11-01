export const menubarItems = [
  {
    title: "Create Request",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
          fill="black"
        />
      </svg>
    ),
    link: "/create-requests",
  },
  {
    title: "Return Request",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M8 4V0L3 5L8 10V6C11.31 6 14 8.69 14 12C14 15.31 11.31 18 8 18C4.69 18 2 15.31 2 12H0C0 16.42 3.58 20 8 20C12.42 20 16 16.42 16 12C16 7.58 12.42 4 8 4Z"
          fill="black"
        />
      </svg>
    ),
    link: "/return",
  },
  // {
  //   title: "Wishlist",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="18"
  //       height="22"
  //       viewBox="0 0 18 22"
  //       fill="none"
  //     >
  //       <path
  //         d="M12 6V18.97L7.79 17.16L7 16.82L6.21 17.16L2 18.97V6H12ZM16 0H5.99C4.89 0 4 0.9 4 2H14C15.1 2 16 2.9 16 4V17L18 18V2C18 0.9 17.1 0 16 0ZM12 4H2C0.9 4 0 4.9 0 6V22L7 19L14 22V6C14 4.9 13.1 4 12 4Z"
  //         fill="black"
  //       />
  //     </svg>
  //   ),
  //   link: "#",
  // },
  // {
  //   title: "Transactions",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="18"
  //       height="20"
  //       viewBox="0 0 18 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0V14H0V17C0 18.66 1.34 20 3 20H15C16.66 20 18 18.66 18 17V0L16.5 1.5ZM12 18H3C2.45 18 2 17.55 2 17V16H12V18ZM16 17C16 17.55 15.55 18 15 18C14.45 18 14 17.55 14 17V14H5V3H16V17Z"
  //         fill="black"
  //       />
  //       <path d="M12 5H6V7H12V5Z" fill="black" />
  //       <path d="M15 5H13V7H15V5Z" fill="black" />
  //       <path d="M12 8H6V10H12V8Z" fill="black" />
  //       <path d="M15 8H13V10H15V8Z" fill="black" />
  //     </svg>
  //   ),
  //   link: "#",
  // },
  {
    title: "Account",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.35 16.5C6.66 15.56 8.26 15 10 15C11.74 15 13.34 15.56 14.65 16.5C13.34 17.44 11.74 18 10 18C8.26 18 6.66 17.44 5.35 16.5ZM16.14 15.12C14.45 13.8 12.32 13 10 13C7.68 13 5.55 13.8 3.86 15.12C2.7 13.73 2 11.95 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 11.95 17.3 13.73 16.14 15.12Z"
          fill="black"
        />
        <path
          d="M10 4C8.07 4 6.5 5.57 6.5 7.5C6.5 9.43 8.07 11 10 11C11.93 11 13.5 9.43 13.5 7.5C13.5 5.57 11.93 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z"
          fill="black"
        />
      </svg>
    ),
    link: "/account",
  },
];
export const menubarAdminItems = [
  {
    title: "Item transfer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
          fill="black"
        />
      </svg>
    ),
    link: "/item-transfer",
  },
  {
    title: "Approve Requests",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
      >
        <path
          d="M0 14V20H16.0618V14C16.0618 12.9 15.1583 12 14.0541 12H2.00772C0.903475 12 0 12.9 0 14ZM14.0541 16H2.00772V14H14.0541V16ZM8.03089 0C5.26023 0 3.01158 2.24 3.01158 5L8.03089 12L13.0502 5C13.0502 2.24 10.8015 0 8.03089 0ZM8.03089 9L5.0193 5C5.0193 3.34 6.36448 2 8.03089 2C9.6973 2 11.0425 3.34 11.0425 5L8.03089 9Z"
          fill="black"
        />
      </svg>
    ),
    link: "/approve",
  },
  {
    title: "Fulfil Request",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
      >
        <path
          d="M12 6V18.97L7.79 17.16L7 16.82L6.21 17.16L2 18.97V6H12ZM16 0H5.99C4.89 0 4 0.9 4 2H14C15.1 2 16 2.9 16 4V17L18 18V2C18 0.9 17.1 0 16 0ZM12 4H2C0.9 4 0 4.9 0 6V22L7 19L14 22V6C14 4.9 13.1 4 12 4Z"
          fill="black"
        />
      </svg>
    ),
    link: "/fulfill",
  },
  {
    title: "Manage Masters",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
      >
        <path
          d="M18 2.5H10L8 0.5H2C0.9 0.5 0.00999999 1.4 0.00999999 2.5L0 14.5C0 15.6 0.9 16.5 2 16.5H18C19.1 16.5 20 15.6 20 14.5V4.5C20 3.4 19.1 2.5 18 2.5ZM18 14.5H2V2.5H7.17L9.17 4.5H18V14.5ZM16 8.5H4V6.5H16V8.5ZM12 12.5H4V10.5H12V12.5Z"
          fill="black"
        />
      </svg>
    ),
    link: "/master",
  },

  // {
  //   title: "Inventory",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="20"
  //       height="20"
  //       viewBox="0 0 20 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M2.05128 4H4.10256V7H14.359V4H16.4103V9H18.4615V4C18.4615 2.9 17.5385 2 16.4103 2H12.1231C11.6923 0.84 10.5641 0 9.23077 0C7.89744 0 6.76923 0.84 6.33846 2H2.05128C0.923077 2 0 2.9 0 4V18C0 19.1 0.923077 20 2.05128 20H8.20513V18H2.05128V4ZM9.23077 2C9.79487 2 10.2564 2.45 10.2564 3C10.2564 3.55 9.79487 4 9.23077 4C8.66667 4 8.20513 3.55 8.20513 3C8.20513 2.45 8.66667 2 9.23077 2Z"
  //         fill="black"
  //       />
  //       <path
  //         d="M18.4615 10.5L12.8307 16L9.74354 13L8.20508 14.5L12.8307 19L20 12L18.4615 10.5Z"
  //         fill="black"
  //       />
  //     </svg>
  //   ),
  //   link: "#",
  // },

  // {
  //   title: "Transactions",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="18"
  //       height="20"
  //       viewBox="0 0 18 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0V14H0V17C0 18.66 1.34 20 3 20H15C16.66 20 18 18.66 18 17V0L16.5 1.5ZM12 18H3C2.45 18 2 17.55 2 17V16H12V18ZM16 17C16 17.55 15.55 18 15 18C14.45 18 14 17.55 14 17V14H5V3H16V17Z"
  //         fill="black"
  //       />
  //       <path d="M12 5H6V7H12V5Z" fill="black" />
  //       <path d="M15 5H13V7H15V5Z" fill="black" />
  //       <path d="M12 8H6V10H12V8Z" fill="black" />
  //       <path d="M15 8H13V10H15V8Z" fill="black" />
  //     </svg>
  //   ),
  //   link: "#",
  // },
  // {
  //   title: "Reports",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="19"
  //       height="19"
  //       viewBox="0 0 19 19"
  //       fill="none"
  //     >
  //       <path
  //         d="M16.0618 0.5H2.00772C0.903475 0.5 0 1.4 0 2.5V16.5C0 17.6 0.903475 18.5 2.00772 18.5H16.0618C17.166 18.5 18.0695 17.6 18.0695 16.5V2.5C18.0695 1.4 17.166 0.5 16.0618 0.5ZM16.0618 16.5H2.00772V2.5H16.0618V16.5ZM4.01544 7.5H6.02317V14.5H4.01544V7.5ZM8.03089 4.5H10.0386V14.5H8.03089V4.5ZM12.0463 10.5H14.0541V14.5H12.0463V10.5Z"
  //         fill="black"
  //       />
  //     </svg>
  //   ),
  //   link: "#",
  // },
  // {
  //   title: "Account",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="20"
  //       height="20"
  //       viewBox="0 0 20 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.35 16.5C6.66 15.56 8.26 15 10 15C11.74 15 13.34 15.56 14.65 16.5C13.34 17.44 11.74 18 10 18C8.26 18 6.66 17.44 5.35 16.5ZM16.14 15.12C14.45 13.8 12.32 13 10 13C7.68 13 5.55 13.8 3.86 15.12C2.7 13.73 2 11.95 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 11.95 17.3 13.73 16.14 15.12Z"
  //         fill="black"
  //       />
  //       <path
  //         d="M10 4C8.07 4 6.5 5.57 6.5 7.5C6.5 9.43 8.07 11 10 11C11.93 11 13.5 9.43 13.5 7.5C13.5 5.57 11.93 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z"
  //         fill="black"
  //       />
  //     </svg>
  //   ),
  //   link: "/account",
  // },
];

export const menubarBottomList = [
  // {
  //   title: "Settings",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="20"
  //       height="20"
  //       viewBox="0 0 20 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M17.1593 10.98C17.1993 10.66 17.2293 10.34 17.2293 10C17.2293 9.66 17.1993 9.34 17.1593 9.02L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2993 3.11 17.1293 3.02 16.9493 3.02C16.8893 3.02 16.8293 3.03 16.7793 3.05L14.2893 4.05C13.7693 3.65 13.2093 3.32 12.5993 3.07L12.2193 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.61933 3.03 2.55933 3.02 2.49933 3.02C2.32933 3.02 2.15933 3.11 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668302 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668302 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.73C2.15933 16.89 2.32933 16.98 2.50933 16.98C2.56933 16.98 2.62933 16.97 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2193 19.58L12.5993 16.93C13.2093 16.68 13.7693 16.34 14.2893 15.95L16.7793 16.95C16.8393 16.97 16.8993 16.98 16.9593 16.98C17.1293 16.98 17.2993 16.89 17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.98ZM15.1793 9.27C15.2193 9.58 15.2293 9.79 15.2293 10C15.2293 10.21 15.2093 10.43 15.1793 10.73L15.0393 11.86L15.9293 12.56L17.0093 13.4L16.3093 14.61L15.0393 14.1L13.9993 13.68L13.0993 14.36C12.6693 14.68 12.2593 14.92 11.8493 15.09L10.7893 15.52L10.6293 16.65L10.4293 18H9.02933L8.83933 16.65L8.67933 15.52L7.61933 15.09C7.18933 14.91 6.78933 14.68 6.38933 14.38L5.47933 13.68L4.41933 14.11L3.14933 14.62L2.44933 13.41L3.52933 12.57L4.41933 11.87L4.27933 10.74C4.24933 10.43 4.22933 10.2 4.22933 10C4.22933 9.8 4.24933 9.57 4.27933 9.27L4.41933 8.14L3.52933 7.44L2.44933 6.6L3.14933 5.39L4.41933 5.9L5.45933 6.32L6.35933 5.64C6.78933 5.32 7.19933 5.08 7.60933 4.91L8.66933 4.48L8.82933 3.35L9.02933 2H10.4193L10.6093 3.35L10.7693 4.48L11.8293 4.91C12.2593 5.09 12.6593 5.32 13.0593 5.62L13.9693 6.32L15.0293 5.89L16.2993 5.38L16.9993 6.59L15.9293 7.44L15.0393 8.14L15.1793 9.27ZM9.72933 6C7.51933 6 5.72933 7.79 5.72933 10C5.72933 12.21 7.51933 14 9.72933 14C11.9393 14 13.7293 12.21 13.7293 10C13.7293 7.79 11.9393 6 9.72933 6ZM9.72933 12C8.62933 12 7.72933 11.1 7.72933 10C7.72933 8.9 8.62933 8 9.72933 8C10.8293 8 11.7293 8.9 11.7293 10C11.7293 11.1 10.8293 12 9.72933 12Z"
  //         fill="black"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "About",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="20"
  //       height="20"
  //       viewBox="0 0 20 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
  //         fill="black"
  //       />
  //     </svg>
  //   ),
  // },
  {
    title: "Sign out",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
          fill="black"
        />
      </svg>
    ),
  },
];
